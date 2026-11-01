import type { AppState, Settings } from './types';

export const DEFAULT_SETTINGS: Settings = {
  theme: 'light',
  accent: 'lavender',
  textSize: 'normal',
  lineSpacing: false,
  reduceMotion: false,
  fewerElements: false,
  captions: false,
  audioSpeed: 1,
  cbCues: false,
  keyboardHints: false,
  infoMode: 'step',
  recordResponseTime: false,
};

export function createInitialState(seed = Math.floor(Math.random() * 1e9), prefersReducedMotion = false): AppState {
  return {
    version: 1,
    screen: 'welcome',
    qIndex: 0,
    answers: {},
    otherText: {},
    settings: { ...DEFAULT_SETTINGS, reduceMotion: prefersReducedMotion },
    engines: {},
    gameFeedback: {},
    formatSeed: seed,
    formatResults: [],
    formatsSkipped: false,
    dimensionOverrides: {},
    engineConfig: {},
    onboardingComplete: false,
  };
}
