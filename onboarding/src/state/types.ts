import type { Category, CategorySummary, EngineConfig, EngineState } from '../engine/types';

export type ThemeId = 'light' | 'muted' | 'dark' | 'contrast' | 'system';
export type AccentId = 'lavender' | 'mint' | 'coral' | 'blue';
export type InfoMode = 'step' | 'scroll' | 'outline' | 'switch';

export interface Settings {
  theme: ThemeId;
  accent: AccentId;
  textSize: 'normal' | 'large' | 'xlarge';
  lineSpacing: boolean;
  reduceMotion: boolean;
  fewerElements: boolean;
  captions: boolean;
  audioSpeed: number;
  cbCues: boolean; // extra non-colour cues (patterns, icons)
  keyboardHints: boolean;
  infoMode: InfoMode;
  recordResponseTime: boolean; // informed consent; never used for scoring
}

/** Selected option ids per question id (q1 stores free text). */
export type Answers = Record<string, string[]>;

export type HelpedId = 'hints' | 'steps' | 'visual' | 'retry' | 'reread' | 'strategy' | 'nothing';
export interface GameFeedback {
  helped: HelpedId[];
  comfort?: 1 | 2 | 3 | 4 | 5;
}

export type FormatId = 'written' | 'visual' | 'audio';
export interface FormatResult {
  format: FormatId;
  topicId: string;
  correct: number;
  total: number;
  comfort: 1 | 2 | 3 | 4 | 5;
  effort: 'low' | 'medium' | 'high';
  again: 'yes' | 'maybe' | 'no';
}

export type ArchetypeId = 'navigator' | 'pathfinder' | 'explorer' | 'reflector' | 'flexible';
export type DimensionId = 'visual' | 'guidance' | 'interactive' | 'independence' | 'proactive';

export type Screen = 'welcome' | 'onboarding' | 'hub' | 'game' | 'format' | 'reveal' | 'dashboard';

export interface VerbalExplainResult {
  text: string;
  keyPointsHit: number;
  depth: 'short' | 'detailed' | 'both';
}

export interface AppState {
  version: 1;
  screen: Screen;
  qIndex: number;
  answers: Answers;
  otherText: Record<string, string>;
  settings: Settings;
  engines: Partial<Record<Category, EngineState>>;
  gameFeedback: Partial<Record<Category, GameFeedback>>;
  explain?: VerbalExplainResult;
  formatSeed: number;
  formatResults: FormatResult[];
  formatsSkipped: boolean;
  manualArchetype?: ArchetypeId;
  dimensionOverrides: Partial<Record<DimensionId, number>>;
  engineConfig: Partial<EngineConfig>;
  activeGame?: Category;
  onboardingComplete: boolean;
}

export interface ProfileInput {
  answers: Answers;
  settings: Settings;
  summaries: Partial<Record<Category, CategorySummary>>;
  gameFeedback: Partial<Record<Category, GameFeedback>>;
  formatResults: FormatResult[];
}
