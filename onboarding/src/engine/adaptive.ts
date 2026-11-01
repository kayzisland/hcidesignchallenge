import type {
  Category,
  CategorySummary,
  EngineConfig,
  EngineState,
  Level,
  LevelStat,
  Outcome,
  Response,
  StopReason,
} from './types';
import { LEVELS } from './types';

/** All thresholds live here so they can be tuned during usability testing. */
export const DEFAULT_CONFIG: EngineConfig = {
  startLevel: 1,
  maxLevel: 8,
  riseAfterConsecutive: 2,
  carryStreakUpToLevel: 5,
  dropAfterConsecutiveIncorrect: 2,
  stopAfterIncorrectNearby: 3,
  nearbyLevelSpan: 1,
  minQuestionsForEvidenceStop: 6,
  maxQuestions: 12,
  extendedExtraQuestions: 6,
  topLevelCorrectToFinish: 2,
  consistencyThreshold: 0.75,
  minResponsesPerLevelForConsistency: 2,
  assistedWeight: 0.5,
  minQuestionsBeforeStruggleStop: 4,
};

export function mergeConfig(overrides: Partial<EngineConfig> = {}): EngineConfig {
  return { ...DEFAULT_CONFIG, ...overrides };
}

const clampLevel = (n: number, cfg: EngineConfig): Level =>
  Math.max(1, Math.min(cfg.maxLevel, Math.round(n))) as Level;

export function createEngineState(
  category: Category,
  seed: number,
  config: EngineConfig = DEFAULT_CONFIG,
): EngineState {
  return {
    category,
    level: config.startLevel,
    status: 'active',
    responses: [],
    independentStreak: 0,
    incorrectStreak: 0,
    keepChallenging: false,
    seed,
    lastEvent: { type: 'none', from: config.startLevel, to: config.startLevel },
    maxLevelReached: config.startLevel,
  };
}

/** Independent = correct first time without hints. Assisted = correct after hints/retry. */
export function classifyOutcome(args: {
  correctFirstTry: boolean;
  correctEventually: boolean;
  hintsUsed: number;
  skipped?: boolean;
}): Outcome {
  if (args.skipped) return 'skipped';
  if (args.correctFirstTry && args.hintsUsed === 0) return 'independent';
  if (args.correctEventually) return 'assisted';
  return 'incorrect';
}

export function answeredResponses(state: EngineState): Response[] {
  return state.responses.filter((r) => r.outcome !== 'skipped');
}

export function levelStats(responses: Response[], cfg: EngineConfig = DEFAULT_CONFIG): LevelStat[] {
  const stats: LevelStat[] = [];
  for (const level of LEVELS) {
    const rs = responses.filter((r) => r.level === level && r.outcome !== 'skipped');
    if (!rs.length) continue;
    const independent = rs.filter((r) => r.outcome === 'independent').length;
    const assisted = rs.filter((r) => r.outcome === 'assisted').length;
    const incorrect = rs.filter((r) => r.outcome === 'incorrect').length;
    stats.push({
      level,
      n: rs.length,
      independent,
      assisted,
      incorrect,
      score: (independent + assisted * cfg.assistedWeight) / rs.length,
    });
  }
  return stats;
}

export function consistentLevel(stats: LevelStat[], cfg: EngineConfig = DEFAULT_CONFIG): number {
  let best = 0;
  for (const s of stats) {
    if (s.n >= cfg.minResponsesPerLevelForConsistency && s.score >= cfg.consistencyThreshold) {
      best = Math.max(best, s.level);
    }
  }
  return best;
}

export function highestSuccessful(responses: Response[]): number {
  return responses
    .filter((r) => r.outcome === 'independent')
    .reduce((m, r) => Math.max(m, r.level), 0);
}

function nearbyIncorrect(responses: Response[], cfg: EngineConfig): boolean {
  const incorrect = responses.filter((r) => r.outcome === 'incorrect');
  for (const base of LEVELS) {
    const count = incorrect.filter((r) => r.level >= base && r.level <= base + cfg.nearbyLevelSpan).length;
    if (count >= cfg.stopAfterIncorrectNearby) return true;
  }
  return false;
}

function enoughEvidence(responses: Response[], cfg: EngineConfig): boolean {
  const stats = levelStats(responses, cfg);
  const c = consistentLevel(stats, cfg);
  if (c >= cfg.maxLevel) return false;
  const above = stats.find((s) => s.level === c + 1);
  return !!above && above.n >= cfg.minResponsesPerLevelForConsistency && above.score < cfg.consistencyThreshold;
}

export function evaluateStop(state: EngineState, cfg: EngineConfig = DEFAULT_CONFIG): StopReason | null {
  const answered = answeredResponses(state);
  const n = answered.length;
  const hardCap = cfg.maxQuestions + cfg.extendedExtraQuestions;
  if (state.keepChallenging) return n >= hardCap ? 'max_questions' : null;

  const topCorrect = answered.filter((r) => r.level === cfg.maxLevel && r.outcome === 'independent').length;
  if (topCorrect >= cfg.topLevelCorrectToFinish) return 'top_reached';
  if (n >= cfg.minQuestionsBeforeStruggleStop && nearbyIncorrect(answered, cfg)) return 'repeated_difficulty';
  if (n >= cfg.minQuestionsForEvidenceStop && enoughEvidence(answered, cfg)) return 'enough_evidence';
  if (n >= cfg.maxQuestions) return 'max_questions';
  return null;
}

/** Pure reducer: record a response, adjust level, and check stopping rules. */
export function recordResponse(
  state: EngineState,
  response: Response,
  cfg: EngineConfig = DEFAULT_CONFIG,
): EngineState {
  const next: EngineState = {
    ...state,
    responses: [...state.responses, response],
    currentQuestionId: undefined,
    lastEvent: { type: 'none', from: state.level, to: state.level },
  };

  if (response.outcome === 'independent') {
    next.independentStreak += 1;
    next.incorrectStreak = 0;
  } else if (response.outcome === 'assisted') {
    next.independentStreak = 0;
    next.incorrectStreak = 0;
  } else if (response.outcome === 'incorrect') {
    next.independentStreak = 0;
    next.incorrectStreak += 1;
  }

  if (next.independentStreak >= cfg.riseAfterConsecutive && next.level < cfg.maxLevel) {
    const to = clampLevel(next.level + 1, cfg);
    next.lastEvent = { type: 'level_up', from: next.level, to };
    next.level = to;
    next.independentStreak = to <= cfg.carryStreakUpToLevel ? Math.max(0, cfg.riseAfterConsecutive - 1) : 0;
    next.maxLevelReached = Math.max(next.maxLevelReached, to) as Level;
  } else if (
    next.incorrectStreak >= cfg.dropAfterConsecutiveIncorrect &&
    next.level > 1 &&
    !next.keepChallenging
  ) {
    const to = clampLevel(next.level - 1, cfg);
    next.lastEvent = { type: 'level_down', from: next.level, to };
    next.level = to;
    next.incorrectStreak = 0;
  }

  const reason = evaluateStop(next, cfg);
  if (reason === 'max_questions' && next.keepChallenging) {
    next.status = 'finished';
    next.stopReason = reason;
  } else if (reason) {
    next.status = 'suggest_stop';
    next.stopReason = reason;
  }
  return next;
}

/** Student accepts the suggested stop. */
export function confirmFinish(state: EngineState): EngineState {
  return { ...state, status: 'finished', currentQuestionId: undefined };
}

/** "Keep challenging me": disables suggested stops (apart from a hard cap) and never lowers the level. */
export function keepChallenging(state: EngineState): EngineState {
  return {
    ...state,
    status: 'active',
    keepChallenging: true,
    stopReason: undefined,
    incorrectStreak: 0,
    currentQuestionId: undefined,
  };
}

export function endEarly(state: EngineState): EngineState {
  if (state.status === 'finished' || state.status === 'skipped') return state;
  return { ...state, status: 'finished', stopReason: 'student_ended', currentQuestionId: undefined };
}

export function skipCategory(state: EngineState): EngineState {
  return { ...state, status: 'skipped', stopReason: 'student_skipped', currentQuestionId: undefined };
}

export function setCurrentQuestion(state: EngineState, id: string): EngineState {
  return { ...state, currentQuestionId: id };
}

/** Seed used to generate the next question; deterministic given the history. */
export function nextQuestionSeed(state: EngineState): number {
  return (state.seed + state.responses.length * 7919 + state.level * 104729) >>> 0;
}

export function summarise(state: EngineState, cfg: EngineConfig = DEFAULT_CONFIG): CategorySummary {
  const answered = answeredResponses(state);
  const stats = levelStats(state.responses, cfg);
  const consistent = consistentLevel(stats, cfg);
  const highest = highestSuccessful(answered);
  let boundary: CategorySummary['boundary'] = null;
  if (answered.length > 0 && consistent < cfg.maxLevel) {
    const low = clampLevel(Math.max(highest, 1), cfg);
    boundary = { low, high: clampLevel(low + 1, cfg) };
    if (highest === 0) boundary = { low: 1, high: 1 };
  }
  return {
    category: state.category,
    status: state.status,
    stopReason: state.stopReason,
    answered: answered.length,
    skippedQuestions: state.responses.length - answered.length,
    consistentLevel: consistent,
    highestSuccessful: highest,
    boundary,
    hintRate: answered.length ? answered.filter((r) => r.hintsUsed > 0).length / answered.length : 0,
    endedEarly: state.stopReason === 'student_ended',
    skippedCategory: state.status === 'skipped',
    levelStats: stats,
  };
}

export function describeBoundary(s: CategorySummary): string {
  if (s.skippedCategory) return 'Skipped';
  if (s.answered === 0) return 'Not enough information yet';
  if (!s.boundary) return 'No boundary found — you completed the hardest level';
  return s.boundary.low === s.boundary.high
    ? `Around Level ${s.boundary.low}`
    : `Around Levels ${s.boundary.low}–${s.boundary.high}`;
}
