import { describe, expect, it } from 'vitest';
import {
  DEFAULT_CONFIG,
  classifyOutcome,
  confirmFinish,
  createEngineState,
  describeBoundary,
  endEarly,
  evaluateStop,
  keepChallenging,
  mergeConfig,
  recordResponse as recordResponseWith,
  skipCategory,
  summarise,
} from './adaptive';
import type { EngineState, Level, Outcome, Response } from './types';

const BASE = mergeConfig({ carryStreakUpToLevel: 0 }); // plain "two in a row per level" behaviour
const recordResponse = (s: EngineState, r: Response, cfg = BASE) => recordResponseWith(s, r, cfg);
let qn = 0;
const resp = (level: Level, outcome: Outcome, extra: Partial<Response> = {}): Response => ({
  category: 'numerical',
  questionId: `q${qn++}`,
  level,
  correct: outcome === 'independent' || outcome === 'assisted',
  outcome,
  attempts: outcome === 'independent' ? 1 : 2,
  hintsUsed: outcome === 'assisted' ? 1 : 0,
  ...extra,
});

const run = (outcomes: Outcome[], cfg = BASE): EngineState => {
  let s = createEngineState('numerical', 1, cfg);
  for (const o of outcomes) {
    if (s.status !== 'active') break;
    s = recordResponse(s, resp(s.level, o), cfg);
  }
  return s;
};

describe('classifyOutcome', () => {
  it('treats first-try, hint-free correct answers as independent', () => {
    expect(classifyOutcome({ correctFirstTry: true, correctEventually: true, hintsUsed: 0 })).toBe('independent');
  });
  it('treats hint-assisted or retried success as assisted', () => {
    expect(classifyOutcome({ correctFirstTry: true, correctEventually: true, hintsUsed: 1 })).toBe('assisted');
    expect(classifyOutcome({ correctFirstTry: false, correctEventually: true, hintsUsed: 0 })).toBe('assisted');
  });
  it('treats never-correct as incorrect and handles skip', () => {
    expect(classifyOutcome({ correctFirstTry: false, correctEventually: false, hintsUsed: 2 })).toBe('incorrect');
    expect(classifyOutcome({ correctFirstTry: false, correctEventually: false, hintsUsed: 0, skipped: true })).toBe('skipped');
  });
});

describe('difficulty changes', () => {
  it('starts at level 1', () => {
    expect(createEngineState('verbal', 3).level).toBe(1);
  });
  it('rises only after two consecutive unaided correct answers', () => {
    let s = createEngineState('numerical', 1);
    s = recordResponse(s, resp(1, 'independent'));
    expect(s.level).toBe(1);
    s = recordResponse(s, resp(1, 'independent'));
    expect(s.level).toBe(2);
    expect(s.lastEvent).toEqual({ type: 'level_up', from: 1, to: 2 });
  });
  it('does not rise when an answer needed hints in between', () => {
    let s = createEngineState('numerical', 1);
    s = recordResponse(s, resp(1, 'independent'));
    s = recordResponse(s, resp(1, 'assisted'));
    s = recordResponse(s, resp(1, 'independent'));
    expect(s.level).toBe(1);
  });
  it('does not drop after one incorrect answer — offers another at a similar level', () => {
    let s = run(['independent', 'independent', 'independent', 'independent']); // level 3
    expect(s.level).toBe(3);
    s = recordResponse(s, resp(3, 'incorrect'));
    expect(s.level).toBe(3);
    expect(s.status).toBe('active');
  });
  it('drops one level after two consecutive incorrect answers', () => {
    let s = run(['independent', 'independent', 'independent', 'independent']);
    s = recordResponse(s, resp(3, 'incorrect'));
    s = recordResponse(s, resp(3, 'incorrect'));
    expect(s.level).toBe(2);
    expect(s.lastEvent.type).toBe('level_down');
  });
  it('never drops below level 1 or rises above the max level', () => {
    let s = createEngineState('numerical', 1);
    s = recordResponse(s, resp(1, 'incorrect'));
    s = recordResponse(s, resp(1, 'incorrect'));
    expect(s.level).toBe(1);
    const strong = run(Array(14).fill('independent'), mergeConfig({ topLevelCorrectToFinish: 99, maxQuestions: 99 }));
    expect(strong.level).toBe(8);
  });
  it('lets strong performers pass the easy levels quickly (one carried-over correct answer)', () => {
    const cfg = mergeConfig({});
    expect(run(Array(5).fill('independent'), cfg).level).toBe(5); // one question per level from level 2 to 5
    expect(run(Array(8).fill('independent'), cfg).level).toBe(7);
    expect(run(Array(12).fill('independent'), cfg).stopReason).toBe('top_reached'); // all 8 levels within 12 questions
  });
  it('treats skipped questions as neutral', () => {
    let s = createEngineState('numerical', 1);
    s = recordResponse(s, resp(1, 'independent'));
    s = recordResponse(s, resp(1, 'skipped'));
    s = recordResponse(s, resp(1, 'independent'));
    expect(s.level).toBe(2);
    expect(summarise(s).answered).toBe(2);
    expect(summarise(s).skippedQuestions).toBe(1);
  });
  it('respects configurable rise threshold', () => {
    const cfg = mergeConfig({ riseAfterConsecutive: 3 });
    const s = run(['independent', 'independent'], cfg);
    expect(s.level).toBe(1);
    expect(run(['independent', 'independent', 'independent'], cfg).level).toBe(2);
  });
});

describe('hint handling', () => {
  it('gives only partial credit for hint-assisted answers in level statistics', () => {
    const s = run(['assisted', 'assisted']);
    const stat = summarise(s).levelStats[0];
    expect(stat.score).toBe(DEFAULT_CONFIG.assistedWeight);
    expect(summarise(s).consistentLevel).toBe(0);
    expect(summarise(s).highestSuccessful).toBe(0);
    expect(summarise(s).hintRate).toBe(1);
  });
  it('distinguishes independent from assisted success at the same level', () => {
    const independent = run(['independent', 'independent', 'independent', 'independent']);
    const assisted = run(['assisted', 'assisted', 'assisted', 'assisted']);
    expect(summarise(independent).highestSuccessful).toBeGreaterThan(summarise(assisted).highestSuccessful);
  });
});

describe('stopping rules', () => {
  it('suggests stopping at the top level after repeated unaided success', () => {
    let s = createEngineState('numerical', 1);
    const cfg = mergeConfig({});
    while (s.level < 8) s = recordResponse(s, resp(s.level, 'independent'), cfg);
    expect(s.status).toBe('active');
    s = recordResponse(s, resp(8, 'independent'), cfg);
    s = recordResponse(s, resp(8, 'independent'), cfg);
    expect(s.status).toBe('suggest_stop');
    expect(s.stopReason).toBe('top_reached');
  });
  it('suggests stopping after repeated incorrect answers at similar levels', () => {
    const s = run(['independent', 'independent', 'incorrect', 'incorrect', 'incorrect']);
    expect(s.status).toBe('suggest_stop');
    expect(s.stopReason).toBe('repeated_difficulty');
  });
  it('stops when there is enough evidence of the performance range', () => {
    const outcomes: Outcome[] = ['independent', 'independent', 'independent', 'independent', 'assisted', 'incorrect', 'independent', 'incorrect'];
    let s = createEngineState('numerical', 1);
    const cfg = mergeConfig({ stopAfterIncorrectNearby: 99, carryStreakUpToLevel: 0 });
    for (const o of outcomes) s = recordResponse(s, resp(s.level, o), cfg);
    expect(s.status).toBe('suggest_stop');
    expect(s.stopReason).toBe('enough_evidence');
  });
  it('stops at the maximum number of questions', () => {
    const cfg = mergeConfig({ maxQuestions: 5, minQuestionsForEvidenceStop: 99, stopAfterIncorrectNearby: 99, topLevelCorrectToFinish: 99 });
    const s = run(['assisted', 'assisted', 'assisted', 'assisted', 'assisted'], cfg);
    expect(s.stopReason).toBe('max_questions');
    expect(s.status).toBe('suggest_stop');
  });
  it('typically finishes within 6–12 questions', () => {
    const strong = run(Array(30).fill('independent'));
    expect(summarise(strong).answered).toBeLessThanOrEqual(12);
    const mixed = run(['independent', 'independent', 'incorrect', 'assisted', 'incorrect', 'incorrect', 'independent', 'incorrect']);
    expect(summarise(mixed).answered).toBeLessThanOrEqual(12);
  });
  it('lets the student end early, skip, or confirm a suggested stop', () => {
    const s = createEngineState('numerical', 1);
    expect(endEarly(s).status).toBe('finished');
    expect(endEarly(s).stopReason).toBe('student_ended');
    expect(summarise(endEarly(s)).endedEarly).toBe(true);
    expect(skipCategory(s).status).toBe('skipped');
    expect(summarise(skipCategory(s)).skippedCategory).toBe(true);
    const suggested = run(['independent', 'independent', 'incorrect', 'incorrect', 'incorrect']);
    expect(confirmFinish(suggested).status).toBe('finished');
    expect(confirmFinish(suggested).stopReason).toBe('repeated_difficulty');
  });
  it('"Keep challenging me" resumes play and suppresses suggested stops up to a hard cap', () => {
    const suggested = run(['independent', 'independent', 'incorrect', 'incorrect', 'incorrect']);
    let s = keepChallenging(suggested);
    expect(s.status).toBe('active');
    expect(evaluateStop(s)).toBeNull();
    s = recordResponse(s, resp(s.level, 'incorrect'));
    s = recordResponse(s, resp(s.level, 'incorrect'));
    expect(s.status).toBe('active');
    expect(s.level).toBeGreaterThanOrEqual(suggested.level); // never lowered while keeping the challenge on
    for (let i = 0; i < 20 && s.status === 'active'; i++) s = recordResponse(s, resp(s.level, 'incorrect'));
    expect(s.status).toBe('finished');
    expect(s.stopReason).toBe('max_questions');
  });
});

describe('challenge boundary summary', () => {
  it('records consistent level, highest success and boundary like the spec example', () => {
    // consistent through 5, one unaided success at 6, struggling at 6/7
    const s0 = createEngineState('numerical', 1);
    const seq: [Level, Outcome][] = [
      [1, 'independent'], [1, 'independent'], [2, 'independent'], [2, 'independent'], [3, 'independent'], [3, 'independent'],
      [4, 'independent'], [4, 'independent'], [5, 'independent'], [5, 'independent'], [6, 'independent'], [6, 'incorrect'], [7, 'incorrect'],
    ];
    let s: EngineState = s0;
    for (const [l, o] of seq) s = recordResponse(s, resp(l, o), mergeConfig({ maxQuestions: 99, minQuestionsForEvidenceStop: 99, stopAfterIncorrectNearby: 99 }));
    const sum = summarise(s);
    expect(sum.consistentLevel).toBe(5);
    expect(sum.highestSuccessful).toBe(6);
    expect(sum.boundary).toEqual({ low: 6, high: 7 });
    expect(describeBoundary(sum)).toBe('Around Levels 6–7');
  });
  it('reports no boundary when the hardest level is completed consistently', () => {
    const cfg = mergeConfig({ topLevelCorrectToFinish: 99, maxQuestions: 99 });
    const s = run(Array(16).fill('independent'), cfg);
    const sum = summarise(s, cfg);
    expect(sum.consistentLevel).toBe(8);
    expect(sum.boundary).toBeNull();
  });
  it('handles an empty or skipped assessment', () => {
    const sum = summarise(createEngineState('memory', 1));
    expect(sum.consistentLevel).toBe(0);
    expect(sum.boundary).toBeNull();
    expect(describeBoundary(sum)).toMatch(/Not enough/);
  });
});
