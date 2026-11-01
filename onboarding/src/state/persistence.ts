import type { AppState } from './types';
import { DEFAULT_SETTINGS, createInitialState } from './defaults';

export const STORAGE_KEY = 'adaptive-learning-prototype-v1';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/** Load saved progress. Returns null when nothing valid is stored. Never throws. */
export function loadState(storage: StorageLike | undefined): AppState | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AppState> | null;
    if (!parsed || typeof parsed !== 'object' || parsed.version !== 1) return null;
    const base = createInitialState(typeof parsed.formatSeed === 'number' ? parsed.formatSeed : 1);
    return {
      ...base,
      ...parsed,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
      answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
      otherText: parsed.otherText ?? {},
      engines: parsed.engines ?? {},
      gameFeedback: parsed.gameFeedback ?? {},
      formatResults: Array.isArray(parsed.formatResults) ? parsed.formatResults : [],
      dimensionOverrides: parsed.dimensionOverrides ?? {},
      engineConfig: parsed.engineConfig ?? {},
      version: 1,
    };
  } catch {
    return null;
  }
}

export function saveState(storage: StorageLike | undefined, state: AppState): boolean {
  if (!storage) return false;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

/** Delete everything the prototype has stored. */
export function clearState(storage: StorageLike | undefined): void {
  try {
    storage?.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
