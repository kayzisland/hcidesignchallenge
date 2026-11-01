import type { Figure, Level, Option, Question } from '../engine/types';
import { createRng, int, pick, sample, shuffle, type Rng } from './rng';

export const SHAPE_NAMES = ['circle', 'square', 'triangle'] as const;
export const FILL_NAMES = ['empty', 'striped', 'solid'] as const;
export const SIZE_NAMES = ['small', 'medium', 'large'] as const;
export const TICK_NAMES = ['up', 'right', 'down'] as const;
const CORNER_NAMES = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

type Attr = 'shape' | 'fill' | 'size' | 'tick';
const ATTRS: Attr[] = ['shape', 'fill', 'size', 'tick'];
const NAMES: Record<Attr, readonly string[]> = { shape: SHAPE_NAMES, fill: FILL_NAMES, size: SIZE_NAMES, tick: TICK_NAMES };
const LABEL: Record<Attr, string> = { shape: 'Shape', fill: 'Shading', size: 'Size', tick: 'Pointer direction' };

/** value(r, c) = (a·r + b·c + off) mod 3 */
interface AttrRule { a: number; b: number; off: number }
interface MatrixRules {
  attrs: Record<Attr, AttrRule>;
  xor: boolean;
  constMask: number;
  rowMasks: [number, number][]; // first two cells of each row when xor is on
}

export const figureKey = (f: Figure) => `${f.shape}${f.fill}${f.size}${f.tick}-${f.marks}`;

export function describeFigure(f: Figure): string {
  const marks = [0, 1, 2, 3].filter((i) => f.marks & (1 << i)).map((i) => CORNER_NAMES[i]);
  const markText = marks.length ? `, with corner marks at ${marks.join(' and ')}` : ', with no corner marks';
  return `${SIZE_NAMES[f.size]} ${FILL_NAMES[f.fill]} ${SHAPE_NAMES[f.shape]} with its pointer facing ${TICK_NAMES[f.tick]}${markText}`;
}

const mod3 = (n: number) => ((n % 3) + 3) % 3;

export function figureAt(rules: MatrixRules, r: number, c: number): Figure {
  const v = (attr: Attr) => mod3(rules.attrs[attr].a * r + rules.attrs[attr].b * c + rules.attrs[attr].off) as 0 | 1 | 2;
  let marks = rules.constMask;
  if (rules.xor) {
    const [m0, m1] = rules.rowMasks[r];
    marks = c === 0 ? m0 : c === 1 ? m1 : m0 ^ m1;
  }
  return { shape: v('shape'), fill: v('fill'), size: v('size'), tick: v('tick'), marks };
}

/* ---- rule sampling by level ---- */
const ROW_ONLY: [number, number][] = [[0, 1], [0, 2]];
const COL_ONLY: [number, number][] = [[1, 0], [2, 0]];
const BOTH: [number, number][] = [[1, 1], [1, 2], [2, 1], [2, 2]];
const ANY = [...ROW_ONLY, ...COL_ONLY, ...BOTH];

function makeRules(rng: Rng, level: Level): MatrixRules {
  const attrs = {} as Record<Attr, AttrRule>;
  const order = shuffle(rng, ATTRS);
  const setRule = (attr: Attr, ab: [number, number]) => {
    attrs[attr] = { a: ab[0], b: ab[1], off: int(rng, 0, 2) };
  };
  const constant = (attr: Attr) => {
    attrs[attr] = { a: 0, b: 0, off: int(rng, 0, 2) };
  };
  let xor = false;
  switch (level) {
    case 1:
      setRule(pick(rng, ['shape', 'fill'] as Attr[]), pick(rng, [[0, 1], [1, 0]] as [number, number][]));
      ATTRS.forEach((a) => (attrs[a] ? null : constant(a)));
      break;
    case 2:
      setRule(order[0], pick(rng, ANY.slice(0, 4)));
      order.slice(1).forEach(constant);
      break;
    case 3:
      setRule(order[0], pick(rng, ROW_ONLY));
      setRule(order[1], pick(rng, COL_ONLY));
      order.slice(2).forEach(constant);
      break;
    case 4:
      setRule(order[0], pick(rng, ROW_ONLY));
      setRule(order[1], pick(rng, COL_ONLY));
      setRule(order[2], pick(rng, BOTH));
      constant(order[3]);
      break;
    case 5:
      setRule(order[0], pick(rng, BOTH));
      setRule(order[1], pick(rng, BOTH));
      setRule(order[2], pick(rng, ANY));
      constant(order[3]);
      break;
    case 6:
      order.forEach((a, i) => setRule(a, i < 3 ? pick(rng, BOTH) : pick(rng, ANY)));
      break;
    case 7:
      order.forEach((a, i) => setRule(a, i < 2 ? pick(rng, BOTH) : pick(rng, ANY)));
      xor = true;
      break;
    default:
      order.forEach((a, i) => setRule(a, i < 3 ? pick(rng, BOTH) : pick(rng, ANY)));
      xor = true;
  }

  const rowMasks: [number, number][] = [];
  if (xor) {
    for (let r = 0; r < 3; r++) {
      let m0 = int(rng, 1, 15), m1 = int(rng, 1, 15);
      // make sure at least some marks are shared in rows so XOR can't be mistaken for OR
      if (level === 8 || r === 2) while ((m0 & m1) === 0 || m0 === m1) { m0 = int(rng, 1, 15); m1 = int(rng, 1, 15); }
      else if (m0 === m1) m1 = (m1 % 15) + 1;
      rowMasks.push([m0, m1]);
    }
  }
  return { attrs, xor, constMask: xor ? 0 : int(rng, 0, 3) === 0 ? int(rng, 1, 15) : 0, rowMasks };
}

function describeRule(attr: Attr, rule: AttrRule, cellValue: number): string {
  const names = NAMES[attr];
  const cycle = `${names.join(' → ')} → ${names[0]}`;
  if (rule.a === 0 && rule.b === 0) return `${LABEL[attr]} never changes (always ${names[cellValue]}).`;
  const parts: string[] = [];
  if (rule.b) parts.push(`moves ${rule.b === 1 ? 'one step' : 'two steps'} along ${cycle} for each cell to the right`);
  if (rule.a) parts.push(`moves ${rule.a === 1 ? 'one step' : 'two steps'} along the same cycle for each row down`);
  return `${LABEL[attr]} ${parts.join(' and ')}. In the missing cell it is ${names[cellValue]}.`;
}

function explain(rules: MatrixRules, answer: Figure): string {
  const lines = ATTRS.map((a) => describeRule(a, rules.attrs[a], answer[a]));
  lines.push(
    rules.xor
      ? 'Corner marks: in each row, the third cell shows the marks that appear in exactly one of the first two cells (shared marks cancel out).'
      : 'Corner marks stay the same in every cell.',
  );
  return lines.join(' ');
}

function hintsFor(rules: MatrixRules): [string, string] {
  const varying = ATTRS.filter((a) => rules.attrs[a].a || rules.attrs[a].b);
  const first = varying[0];
  const r = rules.attrs[first];
  const dir = r.a && r.b ? 'across the rows and down the columns' : r.b ? 'across each row' : 'down each column';
  return [
    'Look at one feature at a time — shape, shading, size, pointer direction and corner marks — instead of the whole picture.',
    `${LABEL[first]} changes ${dir}. Start with that, then remove options that don't match.${rules.xor ? ' For corner marks, compare the first two cells in each row.' : ''}`,
  ];
}

function mutate(rng: Rng, f: Figure, attr: Attr | 'marks'): Figure {
  if (attr === 'marks') return { ...f, marks: f.marks ^ (1 << int(rng, 0, 3)) };
  return { ...f, [attr]: (f[attr] + int(rng, 1, 2)) % 3 } as Figure;
}

export function generateNonverbal(level: Level, seed: number): Question {
  const rng = createRng(seed);
  for (let attempt = 0; attempt < 200; attempt++) {
    const rules = makeRules(rng, level);
    const grid: Figure[] = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) grid.push(figureAt(rules, r, c));
    const answer = grid[8];

    // Plausible distractors: single-feature changes plus neighbouring cells reused by mistake
    const active = ATTRS.filter((a) => rules.attrs[a].a || rules.attrs[a].b);
    const pool: Figure[] = [];
    const add = (f: Figure) => {
      if (figureKey(f) !== figureKey(answer) && !pool.some((p) => figureKey(p) === figureKey(f))) pool.push(f);
    };
    if (level >= 4) [grid[7], grid[5], grid[4], grid[6], grid[2]].forEach(add);
    for (let i = 0; i < 40; i++) {
      const attr = pick(rng, [...active, ...(rules.xor ? (['marks'] as const) : []), ...(level >= 6 ? active : [])]);
      add(mutate(rng, answer, attr));
      if (level >= 6 && i % 3 === 0) add(mutate(rng, mutate(rng, answer, attr), pick(rng, active)));
    }
    const want = level >= 6 ? 5 : 3;
    // At the easiest levels few features vary, so fall back to changing any feature
    for (let i = 0; i < 40 && pool.length < want + 2; i++) add(mutate(rng, answer, pick(rng, [...ATTRS, 'marks'] as const)));
    // prefer neighbours at harder levels, otherwise single mutations
    const distractors = (level >= 4 ? pool.slice(0, 2).concat(sample(rng, pool.slice(2), want - 2)) : sample(rng, pool, want)).slice(0, want);
    if (distractors.length < want) continue;

    const all = shuffle(rng, [answer, ...distractors]);
    const options: Option[] = all.map((figure, i) => ({ id: 'abcdef'[i], label: describeFigure(figure), figure }));
    const correctId = options.find((o) => figureKey(o.figure!) === figureKey(answer))!.id;
    // Uniqueness check (descriptions must be distinct too)
    if (new Set(options.map((o) => o.label)).size !== options.length) continue;

    const params: number[] = [];
    ATTRS.forEach((a) => params.push(rules.attrs[a].a, rules.attrs[a].b, rules.attrs[a].off));
    params.push(rules.xor ? 1 : 0, rules.constMask);
    for (let r = 0; r < 3; r++) params.push(rules.rowMasks[r]?.[0] ?? 0, rules.rowMasks[r]?.[1] ?? 0);

    const visible = grid.slice(0, 8);
    return {
      id: `non-g${level}-${seed}`,
      category: 'nonverbal',
      level,
      kind: 'matrix',
      stem: 'Which piece completes the pattern? Rules work across rows and down columns.',
      matrix: {
        cells: [...visible, null],
        description: visible.map((f, i) => `Row ${Math.floor(i / 3) + 1}, column ${(i % 3) + 1}: ${describeFigure(f)}`),
      },
      options,
      correctId,
      hints: [...hintsFor(rules)],
      explanation: explain(rules, answer),
      altText: 'A 3 by 3 grid of shapes with the bottom-right piece missing. Use the cell descriptions to reason about it.',
      meta: { kind: 'matrix', params },
    };
  }
  throw new Error(`Could not build a non-verbal puzzle for level ${level}, seed ${seed}`);
}

export const generateNonverbalFromId = (id: string): Question | undefined => {
  const m = /^non-g([1-8])-(\d+)$/.exec(id);
  return m ? generateNonverbal(Number(m[1]) as Level, Number(m[2])) : undefined;
};

/** Rebuild rules from the stored params (used in tests for independent verification). */
export function rulesFromParams(p: number[]): MatrixRules {
  const attrs = {} as Record<Attr, AttrRule>;
  ATTRS.forEach((a, i) => (attrs[a] = { a: p[i * 3], b: p[i * 3 + 1], off: p[i * 3 + 2] }));
  return {
    attrs,
    xor: p[12] === 1,
    constMask: p[13],
    rowMasks: [[p[14], p[15]], [p[16], p[17]], [p[18], p[19]]],
  };
}
