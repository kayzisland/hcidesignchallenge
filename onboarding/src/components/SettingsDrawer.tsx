import { useEffect, useRef } from 'react';
import type { AppState, AccentId, Settings, ThemeId } from '../state/types';
import type { Update } from '../state/store';
import { DEFAULT_CONFIG } from '../engine/adaptive';
import type { EngineConfig } from '../engine/types';

interface Props {
  state: AppState;
  update: Update;
  onClose: () => void;
  onReset: (keepSettings: boolean) => void;
  onDelete: () => void;
}

const THEMES: [ThemeId, string][] = [['light', 'Soft light'], ['muted', 'Neutral'], ['dark', 'Dark'], ['contrast', 'High contrast'], ['system', 'Match device']];
const ACCENTS: [AccentId, string][] = [['lavender', 'Lavender'], ['mint', 'Mint'], ['coral', 'Coral'], ['blue', 'Blue']];

export function SettingsDrawer({ state, update, onClose, onReset, onDelete }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const s = state.settings;
  const set = (patch: Partial<Settings>) => update((st) => ({ ...st, settings: { ...st.settings, ...patch } }));
  const setCfg = (patch: Partial<EngineConfig>) => update((st) => ({ ...st, engineConfig: { ...st.engineConfig, ...patch } }));
  const cfg = { ...DEFAULT_CONFIG, ...state.engineConfig };

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('button, input, select, [tabindex="0"]');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('keydown', key); prev?.focus(); };
  }, [onClose]);

  const toggle = (label: string, key: keyof Settings, hint?: string) => (
    <label className="switch">
      <input type="checkbox" checked={Boolean(s[key])} onChange={(e) => set({ [key]: e.target.checked } as Partial<Settings>)} />
      <span>{label}{hint && <small>{hint}</small>}</span>
    </label>
  );

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="settings-title" tabIndex={-1} ref={ref}>
        <div className="drawer-head">
          <h2 id="settings-title">Settings</h2>
          <button className="btn small" onClick={onClose}>✕ Close</button>
        </div>

        <fieldset>
          <legend>Theme</legend>
          <div className="chips">
            {THEMES.map(([id, label]) => (
              <button key={id} className={`chip ${s.theme === id ? 'on' : ''}`} aria-pressed={s.theme === id} onClick={() => set({ theme: id })}>
                {s.theme === id && '✓ '}{label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Accent colour</legend>
          <div className="chips">
            {ACCENTS.map(([id, label]) => (
              <button key={id} className={`chip ${s.accent === id ? 'on' : ''}`} aria-pressed={s.accent === id} onClick={() => set({ accent: id })}>
                {s.accent === id && '✓ '}{label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Reading comfort</legend>
          <label className="field">Text size
            <select value={s.textSize} onChange={(e) => set({ textSize: e.target.value as Settings['textSize'] })}>
              <option value="normal">Normal</option><option value="large">Large</option><option value="xlarge">Extra large</option>
            </select>
          </label>
          {toggle('Increased line spacing', 'lineSpacing')}
          {toggle('Reduce animations', 'reduceMotion', 'Stops movement, particles and transitions')}
          {toggle('Fewer elements on screen', 'fewerElements', 'Hides decoration and the mascot')}
          {toggle('Captions for audio', 'captions', 'Spoken explanations always come with a transcript')}
          {toggle('Colour-blind-friendly indicators', 'cbCues', 'Adds patterns and symbols to status')}
          {toggle('Show keyboard hints', 'keyboardHints')}
          <label className="field">Audio speed ({s.audioSpeed.toFixed(2)}×)
            <input type="range" min={0.6} max={1.6} step={0.1} value={s.audioSpeed} onChange={(e) => set({ audioSpeed: Number(e.target.value) })} />
          </label>
          <label className="field">How information appears
            <select value={s.infoMode} onChange={(e) => set({ infoMode: e.target.value as Settings['infoMode'] })}>
              <option value="step">One small section at a time</option><option value="scroll">Scrollable page</option>
              <option value="outline">Expandable outline</option><option value="switch">Let me switch</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Privacy</legend>
          {toggle('Record how long I take to answer', 'recordResponseTime', 'Optional. Stored only in this browser and never used for scoring.')}
        </fieldset>
        <details>
          <summary>Adaptive difficulty tuning (for researchers)</summary>
          <p className="muted">These thresholds drive every game. Changes apply to games not yet started.</p>
          <label className="field">Correct answers in a row to rise ({cfg.riseAfterConsecutive})
            <input type="range" min={1} max={4} value={cfg.riseAfterConsecutive} onChange={(e) => setCfg({ riseAfterConsecutive: Number(e.target.value) })} />
          </label>
          <label className="field">Maximum questions before suggesting a stop ({cfg.maxQuestions})
            <input type="range" min={6} max={16} value={cfg.maxQuestions} onChange={(e) => setCfg({ maxQuestions: Number(e.target.value) })} />
          </label>
          <label className="field">Wrong answers nearby before suggesting a stop ({cfg.stopAfterIncorrectNearby})
            <input type="range" min={2} max={5} value={cfg.stopAfterIncorrectNearby} onChange={(e) => setCfg({ stopAfterIncorrectNearby: Number(e.target.value) })} />
          </label>
          <button className="btn small" onClick={() => update((st) => ({ ...st, engineConfig: {} }))}>Restore defaults</button>
        </details>
        <fieldset>
          <legend>Your data</legend>
          <div className="chips">
            <button className="btn small" onClick={() => { if (confirm('Start again? Your answers and game results will be cleared, but your settings are kept.')) { onReset(true); onClose(); } }}>Start again (keep settings)</button>
            <button className="btn small danger" onClick={() => { if (confirm('Delete all data stored by this prototype in this browser?')) onDelete(); }}>🗑 Delete all my data</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
