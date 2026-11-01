import { describe, expect, it } from 'vitest';
import { STORAGE_KEY, clearState, loadState, saveState, type StorageLike } from './persistence';
import { createInitialState } from './defaults';
import { createEngineState, recordResponse } from '../engine/adaptive';

const fake = (): StorageLike & { data: Record<string, string> } => {
  const data: Record<string, string> = {};
  return { data, getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; }, removeItem: (k) => { delete data[k]; } };
};

describe('persistence', () => {
  it('round-trips state including engine state', () => {
    const s = fake();
    const st = createInitialState(5);
    st.answers = { q4: ['walk'] };
    let e = createEngineState('numerical', 1);
    e = recordResponse(e, { category: 'numerical', questionId: 'x', level: 1, correct: true, outcome: 'independent', attempts: 1, hintsUsed: 0 });
    st.engines = { numerical: e };
    expect(saveState(s, st)).toBe(true);
    expect(loadState(s)).toEqual(st);
  });
  it('returns null for missing, corrupt or wrong-version data', () => {
    const s = fake();
    expect(loadState(s)).toBeNull();
    s.data[STORAGE_KEY] = '{not json';
    expect(loadState(s)).toBeNull();
    s.data[STORAGE_KEY] = JSON.stringify({ version: 99 });
    expect(loadState(s)).toBeNull();
  });
  it('fills missing fields with defaults', () => {
    const s = fake();
    s.data[STORAGE_KEY] = JSON.stringify({ version: 1, settings: { theme: 'dark' } });
    const st = loadState(s)!;
    expect(st.settings.theme).toBe('dark');
    expect(st.settings.accent).toBe('lavender');
    expect(st.answers).toEqual({});
  });
  it('clears and tolerates missing storage', () => {
    const s = fake();
    saveState(s, createInitialState(1));
    clearState(s);
    expect(loadState(s)).toBeNull();
    expect(loadState(undefined)).toBeNull();
    expect(saveState(undefined, createInitialState(1))).toBe(false);
  });
});
