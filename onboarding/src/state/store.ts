import { useCallback, useEffect, useState } from 'react';
import type { AppState } from './types';
import { createInitialState } from './defaults';
import { clearState, loadState, saveState } from './persistence';

const storage = (): Storage | undefined => {
  try {
    return typeof localStorage === 'undefined' ? undefined : localStorage;
  } catch {
    return undefined;
  }
};

const prefersReduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export type Update = (fn: (s: AppState) => AppState) => void;

export function useAppState() {
  const [state, setState] = useState<AppState>(
    () => loadState(storage()) ?? createInitialState(Math.floor(Math.random() * 1e9), prefersReduced()),
  );
  useEffect(() => {
    saveState(storage(), state);
  }, [state]);
  const update: Update = useCallback((fn) => setState(fn), []);
  const reset = useCallback((keepSettings: boolean) => {
    setState((s) => {
      const fresh = createInitialState(Math.floor(Math.random() * 1e9), prefersReduced());
      return keepSettings ? { ...fresh, settings: s.settings } : fresh;
    });
  }, []);
  const deleteAll = useCallback(() => {
    clearState(storage());
    setState(createInitialState(Math.floor(Math.random() * 1e9), prefersReduced()));
  }, []);
  return { state, update, reset, deleteAll };
}
