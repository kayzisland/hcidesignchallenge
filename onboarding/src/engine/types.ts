export type Category = 'numerical' | 'verbal' | 'nonverbal' | 'memory';
export const CATEGORIES: Category[] = ['numerical', 'verbal', 'nonverbal', 'memory'];
export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export const LEVELS: Level[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const LEVEL_NAMES: Record<Level, string> = {
  1: 'Introductory',
  2: 'Basic',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Challenging',
  6: 'Very challenging',
  7: 'Expert',
  8: 'Exceptional',
};

/* ---------- Visual figures (non-verbal puzzles) ---------- */
export interface Figure {
  shape: 0 | 1 | 2; // circle, square, triangle
  fill: 0 | 1 | 2; // empty, striped, solid
  size: 0 | 1 | 2;
  tick: 0 | 1 | 2; // orientation of the pointer: up, right, down
  marks: number; // 4-bit mask: corner marks
}

export interface MatrixSpec {
  /** 3x3 grid, last cell (index 8) is null = the missing piece */
  cells: (Figure | null)[];
  description: string[]; // accessible text description of each visible cell
}

export interface DataSpec {
  kind: 'bars' | 'table';
  title: string;
  labels: string[];
  series: { name: string; values: number[] }[];
  unit?: string;
}

export interface StudyItem {
  label: string;
  icon?: string;
}

export interface MemoryTask {
  /** What is shown in the study phase */
  study: { title: string; items?: StudyItem[]; lines?: string[]; layout: 'row' | 'grid' | 'list' | 'story' };
  /** Unrelated mini-tasks done between study and recall (interference) */
  interference: { prompt: string; options: Option[]; correctId: string }[];
  /** Optional scene shown again during recall (change detection) */
  recallScene?: StudyItem[];
  strategyTip: string;
}

export interface Option {
  id: string;
  label: string;
  figure?: Figure;
}

export interface Question {
  id: string;
  category: Category;
  level: Level;
  kind: string;
  stem: string;
  passage?: string[]; // sentences
  data?: DataSpec;
  matrix?: MatrixSpec;
  memory?: MemoryTask;
  options: Option[];
  correctId: string;
  hints: string[];
  explanation: string;
  /** Plain-text alternative for visual-only content */
  altText?: string;
  /** Generator parameters, used by tests to independently re-verify the solution */
  meta?: { kind: string; params: number[] };
}

/* ---------- Responses & engine state ---------- */
export type Outcome = 'independent' | 'assisted' | 'incorrect' | 'skipped';

export interface Response {
  category: Category;
  questionId: string;
  level: Level;
  correct: boolean; // eventually answered correctly
  outcome: Outcome;
  attempts: number;
  hintsUsed: number;
  confidence?: 1 | 2 | 3;
  explanationHelped?: boolean;
  rereadUsed?: boolean;
  /** Only stored when the student consents; never used for scoring */
  responseMs?: number;
}

export type StopReason =
  | 'repeated_difficulty'
  | 'enough_evidence'
  | 'top_reached'
  | 'max_questions'
  | 'student_ended'
  | 'student_skipped';

export type EngineStatus = 'active' | 'suggest_stop' | 'finished' | 'skipped';

export interface EngineConfig {
  startLevel: Level;
  maxLevel: Level;
  riseAfterConsecutive: number; // consecutive unaided correct answers needed to rise
  /** Rising into a level up to this one carries over one correct answer, so strong performers pass easy levels quickly */
  carryStreakUpToLevel: number;
  dropAfterConsecutiveIncorrect: number;
  stopAfterIncorrectNearby: number; // incorrect answers within `nearbyLevelSpan` levels
  nearbyLevelSpan: number;
  minQuestionsForEvidenceStop: number;
  maxQuestions: number;
  extendedExtraQuestions: number; // extra questions allowed after "Keep challenging me"
  topLevelCorrectToFinish: number;
  consistencyThreshold: number; // weighted success rate for a level to count as consistent
  minResponsesPerLevelForConsistency: number;
  assistedWeight: number; // credit for a correct answer that needed hints/retries
  minQuestionsBeforeStruggleStop: number;
}

export interface EngineEvent {
  type: 'level_up' | 'level_down' | 'none';
  from: Level;
  to: Level;
}

export interface EngineState {
  category: Category;
  level: Level;
  status: EngineStatus;
  stopReason?: StopReason;
  responses: Response[];
  independentStreak: number;
  incorrectStreak: number;
  keepChallenging: boolean;
  seed: number;
  currentQuestionId?: string;
  lastEvent: EngineEvent;
  maxLevelReached: Level;
}

export interface LevelStat {
  level: Level;
  n: number;
  independent: number;
  assisted: number;
  incorrect: number;
  score: number; // weighted success 0..1
}

export interface CategorySummary {
  category: Category;
  status: EngineStatus;
  stopReason?: StopReason;
  answered: number;
  skippedQuestions: number;
  /** highest level with consistent unaided performance (0 = none yet) */
  consistentLevel: number;
  /** highest level with at least one unaided correct answer (0 = none) */
  highestSuccessful: number;
  boundary: { low: Level; high: Level } | null;
  hintRate: number; // share of answered questions that needed hints/retries
  endedEarly: boolean;
  skippedCategory: boolean;
  levelStats: LevelStat[];
}
