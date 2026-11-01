import { describe, expect, it } from 'vitest';
import { LEVELS, type Level, type Question } from '../engine/types';
import { AUTHORED, generateQuestion, getQuestionById, practiceQuestion } from './index';
import { NUMERICAL_KINDS_BY_LEVEL, generateNumerical, recomputeNumerical } from './numerical';
import { figureAt, figureKey, generateNonverbal, rulesFromParams } from './nonverbal';
import { generateMemory, MEMORY_KINDS_BY_LEVEL } from './memory';
import { selectQuestion } from './index';
import { createEngineState } from '../engine/adaptive';

const SEEDS = Array.from({ length: 150 }, (_, i) => i * 7 + 1);

function structurallyValid(q: Question) {
  expect(q.options.length).toBeGreaterThanOrEqual(3);
  expect(new Set(q.options.map((o) => o.id)).size).toBe(q.options.length);
  expect(new Set(q.options.map((o) => o.label)).size).toBe(q.options.length);
  expect(q.options.filter((o) => o.id === q.correctId)).toHaveLength(1);
  expect(q.hints.length).toBeGreaterThanOrEqual(2);
  expect(q.explanation.length).toBeGreaterThan(10);
}

describe('authored questions', () => {
  it('are structurally valid with unique ids', () => {
    const all = Object.values(AUTHORED).flat();
    expect(new Set(all.map((q) => q.id)).size).toBe(all.length);
    all.forEach(structurallyValid);
  });
  it('cover every level for numerical and have two items per level for verbal', () => {
    for (const l of LEVELS) {
      expect(AUTHORED.numerical.some((q) => q.level === l)).toBe(true);
      expect(AUTHORED.verbal.filter((q) => q.level === l).length).toBeGreaterThanOrEqual(2);
    }
  });
  it('have the documented correct answers for known items', () => {
    const label = (id: string) => {
      const q = getQuestionById(id)!;
      return q.options.find((o) => o.id === q.correctId)!.label;
    };
    expect(label('num-a1-portal')).toBe('48');
    expect(label('num-a5-discount')).toBe('£54');
    expect(label('num-a6-prob')).toBe('8/15');
    expect(label('num-a7-ratio')).toBe('24');
    expect(label('num-a8-digits')).toBe('47');
    expect(label('ver-a3-1')).toMatch(/associated with better results after one week/);
  });
  it('numerical authored answers satisfy their own constraints', () => {
    // L8: digits sum to 11, reversal is 27 greater — exactly one option satisfies both
    const q = getQuestionById('num-a8-digits')!;
    const ok = q.options.filter((o) => {
      const n = Number(o.label);
      const rev = Number(String(n).split('').reverse().join(''));
      return String(n).split('').reduce((s, c) => s + Number(c), 0) === 11 && rev - n === 27;
    });
    expect(ok.map((o) => o.id)).toEqual([q.correctId]);
  });
});

describe('numerical generator (verified solutions)', () => {
  for (const level of LEVELS) {
    it(`level ${level}: answers match independent recomputation and options are valid`, () => {
      for (const seed of SEEDS) {
        const q = generateNumerical(level, seed);
        structurallyValid(q);
        const expected = recomputeNumerical(q.meta!.kind, q.meta!.params);
        expect(expected, `${q.meta!.kind} seed ${seed}`).not.toBeNull();
        const correct = q.options.find((o) => o.id === q.correctId)!.label;
        expect(correct, `${q.meta!.kind} seed ${seed}: ${q.stem}`).toBe(expected);
        expect(NUMERICAL_KINDS_BY_LEVEL[level]).toContain(q.meta!.kind);
      }
    });
  }
  it('is reproducible from its id', () => {
    const q = generateNumerical(5, 1234);
    expect(getQuestionById(q.id)).toEqual(q);
  });
  it('uses genuinely different problem types at higher levels, not just bigger numbers', () => {
    const kinds = (l: Level) => new Set(NUMERICAL_KINDS_BY_LEVEL[l]);
    for (let l = 2; l <= 8; l++) {
      const overlap = [...kinds(l as Level)].filter((k) => kinds((l - 1) as Level).has(k));
      expect(overlap).toHaveLength(0);
    }
  });
});

describe('non-verbal puzzles (rule-based)', () => {
  for (const level of LEVELS) {
    it(`level ${level}: every puzzle has one unambiguous, rule-consistent answer`, () => {
      for (const seed of SEEDS) {
        const q = generateNonverbal(level, seed);
        structurallyValid(q);
        const rules = rulesFromParams(q.meta!.params);
        // visible cells follow the rules
        for (let i = 0; i < 8; i++) {
          expect(figureKey(q.matrix!.cells[i]!)).toBe(figureKey(figureAt(rules, Math.floor(i / 3), i % 3)));
        }
        const expected = figureKey(figureAt(rules, 2, 2));
        const matching = q.options.filter((o) => figureKey(o.figure!) === expected);
        expect(matching).toHaveLength(1);
        expect(matching[0].id).toBe(q.correctId);
        expect(new Set(q.options.map((o) => figureKey(o.figure!))).size).toBe(q.options.length);
        expect(q.matrix!.description).toHaveLength(8);
      }
    });
  }
  it('increases the number of simultaneously varying rules with level', () => {
    const varying = (l: Level) => {
      const r = rulesFromParams(generateNonverbal(l, 99).meta!.params);
      return Object.values(r.attrs).filter((a) => a.a || a.b).length + (r.xor ? 1 : 0);
    };
    expect(varying(1)).toBe(1);
    expect(varying(3)).toBeGreaterThan(varying(1));
    expect(varying(5)).toBeGreaterThan(varying(3));
    expect(varying(8)).toBeGreaterThan(varying(5));
  });
  it('XOR marks rule in level 7–8 is determined by the visible cells', () => {
    for (const seed of SEEDS.slice(0, 40)) {
      const q = generateNonverbal(8, seed);
      const c = q.matrix!.cells;
      expect(c[2]!.marks).toBe(c[0]!.marks ^ c[1]!.marks);
      expect(c[5]!.marks).toBe(c[3]!.marks ^ c[4]!.marks);
      const ans = q.options.find((o) => o.id === q.correctId)!.figure!;
      expect(ans.marks).toBe(c[6]!.marks ^ c[7]!.marks);
    }
  });
});

describe('memory tasks', () => {
  const labelsOf = (q: Question) => q.memory!.study.items?.map((i) => i.label) ?? [];
  const correctLabel = (q: Question) => q.options.find((o) => o.id === q.correctId)!.label;
  for (const level of LEVELS) {
    it(`level ${level}: solution is consistent with what was shown`, () => {
      for (const seed of SEEDS) {
        const q = generateMemory(level, seed);
        structurallyValid(q);
        expect(MEMORY_KINDS_BY_LEVEL[level]).toContain(q.meta!.kind);
        const items = labelsOf(q);
        const lines = q.memory!.study.lines ?? [];
        const correct = correctLabel(q);
        switch (q.meta!.kind) {
          case 'recog-new':
            expect(items).not.toContain(correct);
            q.options.filter((o) => o.id !== q.correctId).forEach((o) => expect(items).toContain(o.label));
            break;
          case 'second': expect(correct).toBe(items[1]); break;
          case 'after': {
            const x = /after the (.+)\?/.exec(q.stem)![1];
            expect(correct).toBe(items[items.indexOf(x) + 1]);
            break;
          }
          case 'order': expect(correct).toBe(items.join(' → ')); break;
          case 'story': expect(lines[0]).toContain(correct.replace(/^(a|the) /, '')); break;
          case 'pairs-where': {
            const item = /Where was the (.+)\?/.exec(q.stem)![1];
            expect(lines.some((l) => l.toLowerCase().includes(`${item}: ${correct}`.toLowerCase()))).toBe(true);
            break;
          }
          case 'pairs-same-room': {
            const [a, b] = correct.split(' and ');
            const room = (n: string) => lines.find((l) => l.includes(n))!.split(': ')[1];
            expect(room(a)).toBe(room(b));
            q.options.filter((o) => o.id !== q.correctId).forEach((o) => {
              const [x, y] = o.label.split(' and ');
              expect(room(x)).not.toBe(room(y));
            });
            break;
          }
          case 'scene-change':
            expect(items).not.toContain(correct);
            expect(q.memory!.recallScene!.map((i) => i.label)).toContain(correct);
            expect(q.memory!.interference.length).toBeGreaterThan(0);
            break;
          case 'update': {
            const item = /Where did the (.+) end up\?/.exec(q.stem)![1];
            const moves = lines.filter((l) => l.includes(`The ${item} is moved to the`));
            expect(moves.at(-1)).toContain(`the ${correct}.`);
            break;
          }
          default: throw new Error('unknown kind');
        }
        q.memory!.interference.forEach((t) => expect(t.options.filter((o) => o.id === t.correctId)).toHaveLength(1));
      }
    });
  }
  it('adds delay/interference from level 5', () => {
    expect(generateMemory(2, 3).memory!.interference).toHaveLength(0);
    expect(generateMemory(5, 3).memory!.interference.length).toBeGreaterThan(0);
    expect(generateMemory(8, 3).memory!.interference.length).toBeGreaterThan(1);
  });
});

describe('question selection', () => {
  it('serves questions at the current level and never repeats', () => {
    for (const cat of ['numerical', 'verbal', 'nonverbal', 'memory'] as const) {
      let s = createEngineState(cat, 42);
      const seen = new Set<string>();
      for (let i = 0; i < 10; i++) {
        const q = selectQuestion(s);
        expect(seen.has(q.id)).toBe(false);
        seen.add(q.id);
        if (cat !== 'verbal') expect(q.level).toBe(s.level);
        s = { ...s, responses: [...s.responses, { category: cat, questionId: q.id, level: q.level, correct: true, outcome: 'assisted', attempts: 1, hintsUsed: 1 }] };
      }
    }
  });
  it('generateQuestion works for all generated categories and practice items are valid', () => {
    for (const cat of ['numerical', 'nonverbal', 'memory'] as const) structurallyValid(generateQuestion(cat, 4, 5));
    for (const cat of ['numerical', 'verbal', 'nonverbal', 'memory'] as const) structurallyValid(practiceQuestion(cat));
  });
});
