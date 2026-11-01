import { useEffect, useState } from 'react';
import { useAppState } from './state/store';
import { SettingsDrawer } from './components/SettingsDrawer';
import { Welcome } from './screens/Welcome';
import { Onboarding } from './screens/Onboarding';
import { Hub } from './screens/Hub';
import { GameRunner } from './screens/GameRunner';
import { FormatComparison } from './screens/FormatComparison';
import { Reveal } from './screens/Reveal';

export function App() {
  const { state, update, reset, deleteAll } = useAppState();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const s = state.settings;

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const dark = typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = s.theme === 'system' ? (dark ? 'dark' : 'light') : s.theme;
      root.dataset.accent = s.accent;
      root.dataset.text = s.textSize;
      root.dataset.spacing = s.lineSpacing ? 'loose' : 'normal';
      root.dataset.motion = s.reduceMotion ? 'off' : 'on';
      root.dataset.fewer = s.fewerElements ? 'on' : 'off';
      root.dataset.cb = s.cbCues ? 'on' : 'off';
      root.dataset.kbd = s.keyboardHints ? 'on' : 'off';
    };
    apply();
    if (s.theme === 'system' && typeof matchMedia !== 'undefined') {
      const mq = matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
  }, [s]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [state.screen]);

  const go = (screen: typeof state.screen) => update((st) => ({ ...st, screen }));
  const common = { state, update, go };

  let body;
  switch (state.screen) {
    case 'welcome': body = <Welcome {...common} />; break;
    case 'onboarding': body = <Onboarding {...common} openSettings={() => setSettingsOpen(true)} />; break;
    case 'hub': body = <Hub {...common} />; break;
    case 'game': body = <GameRunner {...common} />; break;
    case 'format': body = <FormatComparison {...common} />; break;
    case 'reveal': body = <Reveal {...common} />; break;
    case 'dashboard': body = <Reveal {...common} dashboard reset={reset} />; break;
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="bg-shapes" aria-hidden="true">
        <i className="shape s1" /><i className="shape s2" /><i className="shape s3" /><i className="shape s4" />
      </div>
      <header className="topbar">
        <button className="brand" onClick={() => go(state.onboardingComplete ? 'dashboard' : 'welcome')} aria-label="Learning discovery home">
          <span aria-hidden="true">🌱</span> Learning Discovery
        </button>
        <div className="topbar-actions">
          {state.onboardingComplete && state.screen !== 'dashboard' && state.screen !== 'hub' && (
            <button className="btn ghost small" onClick={() => go('hub')}>🎮 Games</button>
          )}
          <button className="btn ghost small" onClick={() => setSettingsOpen(true)} aria-haspopup="dialog">⚙️ Settings</button>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="main">{body}</main>
      <footer className="footer">
        Prototype for University of Birmingham research. Your answers stay in this browser. These activities are informal — not an IQ test, assessment or diagnosis.
      </footer>
      {settingsOpen && (
        <SettingsDrawer
          state={state}
          update={update}
          onClose={() => setSettingsOpen(false)}
          onReset={reset}
          onDelete={() => { deleteAll(); setSettingsOpen(false); }}
        />
      )}
    </div>
  );
}
