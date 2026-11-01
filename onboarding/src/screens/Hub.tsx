import type { ScreenProps } from './props';
import { CATEGORIES } from '../engine/types';
import { describeBoundary, mergeConfig, summarise } from '../engine/adaptive';
import { GAMES } from '../games/meta';

export function Hub({ state, update, go }: ScreenProps) {
  const cfg = mergeConfig(state.engineConfig);
  const open = (c: (typeof CATEGORIES)[number]) => update((s) => ({ ...s, activeGame: c, screen: 'game' }));
  const skip = (c: (typeof CATEGORIES)[number]) => update((s) => {
    const e = s.engines[c];
    return { ...s, engines: { ...s.engines, [c]: { ...(e ?? { category: c, level: 1, responses: [], independentStreak: 0, incorrectStreak: 0, keepChallenging: false, seed: 1, lastEvent: { type: 'none', from: 1, to: 1 }, maxLevelReached: 1 }), status: 'skipped', stopReason: 'student_skipped' } } };
  });
  const played = CATEGORIES.filter((c) => state.engines[c]?.responses.length).length;
  return (
    <section aria-labelledby="hub-title">
      <h1 id="hub-title">Choose a world to explore</h1>
      <p className="lead">Play any, all or none — in any order. Each game adapts to you and you can stop whenever you like. {played > 0 && `You’ve explored ${played} of 4.`}</p>
      <div className="hub-grid">
        {CATEGORIES.map((c) => {
          const e = state.engines[c];
          const g = GAMES[c];
          const sum = e ? summarise(e, cfg) : null;
          const finished = e?.status === 'finished';
          const skipped = e?.status === 'skipped';
          const inProgress = e && !finished && !skipped && e.responses.length > 0;
          return (
            <article key={c} className={`card game-card g-${c}`}>
              <div className="game-emoji" aria-hidden="true">{g.emoji}</div>
              <h2>{g.name}</h2>
              <p>{g.blurb}</p>
              <p className="status" aria-live="polite">
                {skipped ? '⏭ Skipped' : finished ? `✓ Completed · ${describeBoundary(sum!)}` : inProgress ? `↻ In progress · ${e!.responses.length} answered` : '○ Not started'}
              </p>
              <div className="actions">
                <button className="btn primary" onClick={() => open(c)}>{finished ? 'View results' : inProgress ? 'Resume' : skipped ? 'Play anyway' : 'Play'}</button>
                {!finished && !skipped && <button className="btn ghost" onClick={() => skip(c)}>Skip this one</button>}
              </div>
            </article>
          );
        })}
      </div>
      <div className="card center">
        <h2>🔄 Try a Different Way! <span className="badge">optional</span></h2>
        <p>See the same kind of idea explained as text, a diagram and audio, and tell us which felt most comfortable.</p>
        <div className="actions">
          <button className="btn" onClick={() => go('format')}>{state.formatResults.length ? 'Redo it' : 'Try it'}</button>
          <button className="btn primary big" onClick={() => go('reveal')}>✨ See my learning profile</button>
        </div>
      </div>
    </section>
  );
}
