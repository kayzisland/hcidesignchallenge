import { describe, expect, it } from 'vitest';
import { computeProfile, rankArchetypes, scoreArchetypes, PROFILE_CONFIG } from './profile';
import type { ProfileInput } from '../state/types';
import { DEFAULT_SETTINGS } from '../state/defaults';
import type { CategorySummary } from '../engine/types';

const input = (answers: ProfileInput['answers'] = {}, extra: Partial<ProfileInput> = {}): ProfileInput => ({
  answers, settings: DEFAULT_SETTINGS, summaries: {}, gameFeedback: {}, formatResults: [], ...extra,
});

const summary = (over: Partial<CategorySummary>): CategorySummary => ({
  category: 'numerical', status: 'finished', answered: 8, skippedQuestions: 0, consistentLevel: 4, highestSuccessful: 5,
  boundary: { low: 5, high: 6 }, hintRate: 0, endedEarly: false, skippedCategory: false, levelStats: [], ...over,
});

describe('profile algorithm', () => {
  it('is deterministic', () => {
    const a = input({ q4: ['walk'], q5: ['worked'], q11: ['step'] });
    expect(computeProfile(a)).toEqual(computeProfile(a));
  });

  it('empty answers give a low-data Flexible Learner', () => {
    const p = computeProfile(input());
    expect(p.primary).toBe('flexible');
    expect(p.confidence).toBe('low-data');
  });

  it('skipped questions contribute nothing', () => {
    const p = computeProfile(input({ q4: [], q5: [] }));
    expect(p.signals).toHaveLength(0);
    expect(p.setup).toHaveLength(0);
  });

  it('clear guided preferences give Guided Pathfinder', () => {
    const p = computeProfile(input({ q4: ['walk'], q8: ['steps'], q11: ['step'] }));
    expect(p.primary).toBe('pathfinder');
    expect(p.confidence).toBe('clear');
    expect(p.signals.every((s) => s.source.length > 0)).toBe(true);
  });

  it('visual choices give Visual Navigator', () => {
    const p = computeProfile(input({ q5: ['diagram'], q6: ['mindmaps'] }));
    expect(p.primary).toBe('navigator');
  });

  it('active choices give Active Explorer', () => {
    expect(computeProfile(input({ q5: ['interactive', 'practice'], q6: ['quizzes'] })).primary).toBe('explorer');
  });

  it('reflective choices give Reflective Thinker', () => {
    expect(computeProfile(input({ q5: ['written'], q8: ['later'], q7: ['25'] })).primary).toBe('reflector');
  });

  it('ties resolve to the Flexible Learner', () => {
    const scores = { navigator: 3, pathfinder: 3, explorer: 3, reflector: 3, flexible: 3 };
    expect(rankArchetypes(scores)[0]).toBe('flexible');
  });

  it('ties among non-flexible use the fixed order', () => {
    const scores = { navigator: 3, pathfinder: 3, explorer: 0, reflector: 0, flexible: 0 };
    expect(rankArchetypes(scores)[0]).toBe('pathfinder');
  });

  it('close scores are flagged as close', () => {
    const p = computeProfile(input({ q4: ['plan'], q5: ['diagram'] }));
    expect(p.confidence).toBe('close');
    expect(p.runnerUp).toBeDefined();
  });

  it('breadth across archetypes adds a Flexible bonus', () => {
    const signals = (['navigator', 'pathfinder', 'explorer', 'reflector'] as const).map((a) => ({ id: a, archetype: a, points: 3, source: a }));
    expect(scoreArchetypes(signals).flexible).toBe(PROFILE_CONFIG.breadthBonus);
  });

  it('game feedback adds evidence and games skipped add none', () => {
    const base = computeProfile(input({ q4: ['unsure'] }));
    const withGames = computeProfile(input({ q4: ['unsure'] }, { gameFeedback: { numerical: { helped: ['steps'] } } }));
    expect(withGames.scores.pathfinder).toBeGreaterThan(base.scores.pathfinder);
    const skipped = computeProfile(input({}, { summaries: { numerical: summary({ skippedCategory: true, answered: 0 }) } }));
    expect(skipped.support.map((s) => s.id)).toEqual(['skipped']);
  });

  it('format comparison favours the clearly preferred format', () => {
    const fr = (format: 'written' | 'visual' | 'audio', comfort: 1 | 5, again: 'yes' | 'no', effort: 'low' | 'high') =>
      ({ format, topicId: 't', correct: 1, total: 2, comfort, effort, again });
    const p = computeProfile(input({ q4: ['unsure'] }, { formatResults: [fr('visual', 5, 'yes', 'low'), fr('written', 1, 'no', 'high'), fr('audio', 1, 'no', 'high')] }));
    expect(p.scores.navigator).toBe(3);
  });

  it('task support recommendations adapt to results', () => {
    const p = computeProfile(input({}, {
      summaries: {
        numerical: summary({ consistentLevel: 7, highestSuccessful: 8, hintRate: 0.6 }),
        verbal: summary({ category: 'verbal', consistentLevel: 3, highestSuccessful: 4, hintRate: 0.6 }),
        memory: summary({ category: 'memory', consistentLevel: 2, highestSuccessful: 3, hintRate: 0.6 }),
      },
    }));
    const ids = p.support.map((s) => s.id);
    expect(ids).toContain('demanding');
    expect(ids).toContain('worked');
    expect(ids).toContain('hints-early');
    expect(ids).toContain('retrieval');
  });

  it('dimensions are within 0..100', () => {
    const p = computeProfile(input({ q4: ['walk'], q12: ['suggest'], q13: ['weekly'], q14: ['connect'] }));
    for (const d of p.dimensions) expect(d.value >= 0 && d.value <= 100).toBe(true);
    expect(p.dimensions.find((d) => d.id === 'proactive')!.value).toBeGreaterThan(50);
  });
});
