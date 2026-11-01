import { useEffect, useMemo, useState } from 'react';
import type { ScreenProps } from './props';
import type { ArchetypeId, DimensionId, ProfileInput } from '../state/types';
import { CATEGORIES, type Category, type CategorySummary } from '../engine/types';
import { describeBoundary, mergeConfig, summarise } from '../engine/adaptive';
import { computeProfile } from '../profile/profile';
import { ARCHETYPES, ARCHETYPE_ORDER, DIMENSIONS } from '../profile/archetypes';
import { Radar } from '../components/Radar';
import { Mascot } from '../components/Mascot';
import { GAMES } from '../games/meta';

interface Props extends ScreenProps { dashboard?: boolean; reset?: (keepSettings: boolean) => void }

const STEPS = ['Looking at what you told me…', 'Adding what you did in the games…', 'Putting it all together…'];

export function Reveal({ state, update, go, dashboard, reset }: Props) {
  const cfg = mergeConfig(state.engineConfig);
  const summaries = useMemo(() => {
    const out: Partial<Record<Category, CategorySummary>> = {};
    for (const c of CATEGORIES) if (state.engines[c]) out[c] = summarise(state.engines[c]!, cfg);
    return out;
  }, [state.engines, cfg]);
  const input: ProfileInput = { answers: state.answers, settings: state.settings, summaries, gameFeedback: state.gameFeedback, formatResults: state.formatResults };
  const profile = useMemo(() => computeProfile(input), [state.answers, summaries, state.gameFeedback, state.formatResults]); // eslint-disable-line react-hooks/exhaustive-deps

  const [step, setStep] = useState(dashboard || state.settings.reduceMotion ? STEPS.length : 0);
  useEffect(() => {
    if (step >= STEPS.length) return;
    const t = setTimeout(() => setStep(step + 1), 1100);
    return () => clearTimeout(t);
  }, [step]);

  const primaryId: ArchetypeId = state.manualArchetype ?? profile.primary;
  const a = ARCHETYPES[primaryId];
  const dims = profile.dimensions.map((d) => ({ ...d, value: state.dimensionOverrides[d.id] ?? d.value }));
  const played = CATEGORIES.filter((c) => summaries[c] && !summaries[c]!.skippedCategory && summaries[c]!.answered > 0);

  if (step < STEPS.length) {
    return (
      <section className="card center" aria-labelledby="think">
        <h1 id="think" className="sr-only">Creating your learning profile</h1>
        <div className="orb" aria-hidden="true"><i /><i /><i /></div>
        <Mascot message={STEPS[step]} mood="think" />
        <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={STEPS.length} aria-valuenow={step} aria-label="Building your profile">
          <div className="progress-fill" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <button className="btn ghost" onClick={() => setStep(STEPS.length)}>Skip the animation</button>
      </section>
    );
  }

  const setDim = (id: DimensionId, v: number) => update((s) => ({ ...s, dimensionOverrides: { ...s.dimensionOverrides, [id]: v } }));
  const confidenceText = state.manualArchetype
    ? 'You chose this yourself, so it’s your call.'
    : profile.confidence === 'low-data' ? 'We don’t have much to go on yet, so we’re starting with a flexible mix. Playing a game or two will sharpen this.'
    : profile.confidence === 'close' ? `This is a close call — you also show some of ${ARCHETYPES[profile.runnerUp!].name.replace('The ', '')}. Feel free to choose the one that feels more like you.`
    : 'Your choices pointed fairly clearly this way.';

  return (
    <section className={`reveal ${dashboard ? '' : 'animate-in'}`} aria-labelledby="rv-title">
      {!dashboard && <div className="confetti" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ left: `${(i * 11 + 3) % 100}%`, animationDelay: `${(i % 6) * 0.1}s` }} />)}</div>}
      <div className={`card archetype hue-${a.hue}`}>
        <p className="eyebrow">{dashboard ? 'Your learning profile' : 'Your learning profile is ready'}</p>
        <div className="hero-emoji pop" aria-hidden="true">{a.emoji}</div>
        <h1 id="rv-title">{a.name}</h1>
        <p className="lead">{a.description}</p>
        <p className="notice-box" role="note">{confidenceText}</p>
        <h2>Things that may help you</h2>
        <ul className="tick-list">{a.support.map((x) => <li key={x}>{x}</li>)}</ul>
        <details>
          <summary>Not quite right? Choose a different style</summary>
          <div className="choices small">
            {ARCHETYPE_ORDER.map((id) => (
              <button key={id} className={`choice ${primaryId === id ? 'on' : ''}`} aria-pressed={primaryId === id} onClick={() => update((s) => ({ ...s, manualArchetype: id === profile.primary ? undefined : id }))}>
                <span className="choice-icon" aria-hidden="true">{ARCHETYPES[id].emoji}</span><span className="choice-label">{ARCHETYPES[id].short}</span>
                <span className="choice-mark" aria-hidden="true">{primaryId === id ? '●' : '○'}</span>
              </button>
            ))}
          </div>
        </details>
      </div>

      <div className="card">
        <h2>Your preference shape</h2>
        <div className="viz">
          <Radar dims={dims} />
          <div className="dim-list">
            {dims.map((d) => {
              const meta = DIMENSIONS.find((x) => x.id === d.id)!;
              return (
                <div key={d.id} className="dim">
                  <label htmlFor={`dim-${d.id}`}><strong>{meta.label}</strong> <span className="muted">{d.value}%</span></label>
                  <div className="meter" aria-hidden="true"><div className="meter-fill" style={{ width: `${d.value}%` }} /></div>
                  <input id={`dim-${d.id}`} type="range" min={0} max={100} step={5} value={d.value} onChange={(e) => setDim(d.id, Number(e.target.value))} aria-describedby={`dimd-${d.id}`} />
                  <small id={`dimd-${d.id}`}>{meta.description}. Drag to adjust if it doesn’t feel right.</small>
                </div>
              );
            })}
          </div>
        </div>
        <details>
          <summary>Why do I see this? (the evidence)</summary>
          {profile.signals.length === 0 ? <p>You skipped most questions, so there’s no evidence yet — and that’s okay.</p> : (
            <ul className="evidence">{profile.signals.map((s) => <li key={s.id}><span className="badge">{ARCHETYPES[s.archetype].short} +{s.points}</span> {s.source}</li>)}</ul>
          )}
          <p className="muted small-text">The score is just a transparent tally of your choices. Archetypes come from your preferences — not from how well you did in the games.</p>
        </details>
      </div>

      <div className="card">
        <h2>Your starting setup</h2>
        {profile.setup.length ? (
          <dl className="setup">{profile.setup.map((s) => <div key={s.key}><dt>{s.label}</dt><dd>{s.value}<small>{s.because}</small></dd></div>)}</dl>
        ) : <p>You skipped the setup questions, so we’ll start with sensible defaults and ask again later.</p>}
      </div>

      <div className="card">
        <h2>What the games suggest</h2>
        {played.length === 0 && <p>You haven’t played any games yet. They’re optional — and playing them can help fine-tune task support.</p>}
        <div className="summary-grid">
          {CATEGORIES.map((c) => {
            const s = summaries[c];
            if (!s) return null;
            return (
              <div key={c} className="mini-summary">
                <h3>{GAMES[c].emoji} {GAMES[c].name}</h3>
                {s.skippedCategory ? <p>Skipped</p> : (
                  <>
                    <p>Most consistent: <strong>{s.consistentLevel ? `Level ${s.consistentLevel}` : '—'}</strong> · Highest solo: <strong>{s.highestSuccessful ? `Level ${s.highestSuccessful}` : '—'}</strong></p>
                    <p className="muted">{describeBoundary(s)}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
        {profile.support.length > 0 && (
          <ul className="evidence">{profile.support.map((s) => <li key={s.id}><strong>{s.text}</strong><small> {s.because}</small></li>)}</ul>
        )}
        <p className="disclaimer">These levels describe where particular puzzle types felt comfortable today. They’re not an IQ score or a measure of your potential, and they can change from day to day.</p>
      </div>

      {state.explain && (
        <div className="card"><h2>Your “say it your way” answer</h2><p>You covered {state.explain.keyPointsHit} of 3 checklist points and prefer a {state.explain.depth === 'both' ? 'short or detailed' : state.explain.depth} format.</p></div>
      )}

      <p className="muted center">Your profile isn’t fixed — it can change as you learn what works. You can revisit it any time.</p>
      <div className="actions center">
        {!dashboard && <button className="btn primary big" onClick={() => go('dashboard')}>This looks good →</button>}
        <button className="btn" onClick={() => go('hub')}>🎮 {played.length ? 'More games' : 'Play the games'}</button>
        <button className="btn" onClick={() => go('format')}>🔄 Try a Different Way</button>
        <button className="btn" onClick={() => update((s) => ({ ...s, qIndex: 0, screen: 'onboarding' }))}>✏️ Review my answers</button>
        {dashboard && reset && <button className="btn ghost" onClick={() => { if (confirm('Start again? Your answers and results will be cleared (settings kept).')) { reset(true); } }}>Start again</button>}
      </div>
    </section>
  );
}
