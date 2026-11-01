import { useEffect, useMemo, useState } from 'react';
import type { ScreenProps } from './props';
import type { Category, EngineState, Response } from '../engine/types';
import { LEVELS, LEVEL_NAMES } from '../engine/types';
import {
  confirmFinish, createEngineState, describeBoundary, endEarly, keepChallenging, mergeConfig,
  recordResponse, setCurrentQuestion, skipCategory, summarise,
} from '../engine/adaptive';
import { getQuestionById, practiceQuestion, selectQuestion } from '../content';
import { EXPLAIN_ACTIVITY } from '../content/verbal';
import { QuestionRunner } from '../games/QuestionRunner';
import { GAMES, HELPED_OPTIONS } from '../games/meta';
import { Mascot } from '../components/Mascot';
import type { HelpedId } from '../state/types';

const STOP_TEXT: Record<string, string> = {
  top_reached: 'You’ve reached the top level here — brilliant! That’s plenty of information.',
  repeated_difficulty: 'These puzzles are getting tricky, and that’s completely fine. We’ve learned what we needed.',
  enough_evidence: 'We have a good picture of where this feels comfortable. You can stop here, or keep going if you’re enjoying it.',
  max_questions: 'That’s a good number of puzzles for one game. You can stop here, or keep going.',
};

export function GameRunner({ state, update, go }: ScreenProps) {
  const cat: Category = state.activeGame ?? 'numerical';
  const g = GAMES[cat];
  const cfg = useMemo(() => mergeConfig(state.engineConfig), [state.engineConfig]);
  const engine = state.engines[cat];
  const done = engine?.status === 'finished' || engine?.status === 'skipped';
  const [phase, setPhase] = useState<'intro' | 'practice' | 'play'>(engine && (engine.responses.length || done) ? 'play' : 'intro');
  const [banner, setBanner] = useState('');

  const setEngine = (fn: (e: EngineState) => EngineState) =>
    update((s) => (s.engines[cat] ? { ...s, engines: { ...s.engines, [cat]: fn(s.engines[cat]!) } } : s));

  const begin = () => {
    update((s) => (s.engines[cat] ? s : { ...s, engines: { ...s.engines, [cat]: createEngineState(cat, (s.formatSeed + 977 * (['numerical', 'verbal', 'nonverbal', 'memory'].indexOf(cat) + 1)) >>> 0, cfg) } }));
    setPhase('play');
  };

  // Choose the next question whenever the engine is active without one.
  const currentId = engine?.currentQuestionId;
  const active = engine?.status === 'active';
  useEffect(() => {
    if (phase === 'play' && engine && active && !currentId) {
      setEngine((e) => setCurrentQuestion(e, selectQuestion(e).id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, active, currentId, engine?.responses.length]);

  const q = useMemo(() => (currentId ? getQuestionById(currentId) : undefined), [currentId]);

  const onDone = (r: Response | null) => {
    if (!r || !engine) return;
    const next = recordResponse(engine, r, cfg);
    setBanner(next.lastEvent.type === 'level_up' ? `⬆ Level up! Now at Level ${next.level}: ${LEVEL_NAMES[next.level]}`
      : next.lastEvent.type === 'level_down' ? `↔ Let’s try something a little different — Level ${next.level}` : '');
    setEngine(() => next);
  };

  if (phase === 'intro') {
    return (
      <section className={`card game-intro g-${cat}`} aria-labelledby="gi-title">
        <div className="hero-emoji" aria-hidden="true">{g.emoji}</div>
        <h1 id="gi-title">{g.name}</h1>
        <Mascot message={g.intro} />
        <ul className="tick-list">
          <li>Questions get a little harder when you’re doing well.</li>
          <li>Hints are always optional, and they’re part of how you learn.</li>
          <li>Pause, skip a question or end the game whenever you like.</li>
          <li>This is not a test of intelligence — it’s a way to see what helps you.</li>
        </ul>
        <div className="actions">
          <button className="btn" onClick={() => go('hub')}>← Back</button>
          <button className="btn primary big" onClick={() => setPhase('practice')}>Try a practice one</button>
          <button className="btn" onClick={begin}>Skip practice</button>
        </div>
      </section>
    );
  }
  if (phase === 'practice') {
    return <QuestionRunner key="practice" q={practiceQuestion(cat)} practice settings={state.settings} onDone={begin} />;
  }
  if (!engine) { setPhase('intro'); return null; }

  if (done) return <Summary {...{ state, update, go, cat }} engine={engine} />;

  const stopNow = () => { if (confirm('End this game now? Your answers so far will still be used.')) setEngine(endEarly); };

  if (engine.status === 'suggest_stop') {
    return (
      <section className="card center" aria-labelledby="stop-title">
        <div className="hero-emoji pop" aria-hidden="true">🌟</div>
        <h1 id="stop-title">Shall we wrap up {g.name}?</h1>
        <Mascot message={STOP_TEXT[engine.stopReason ?? 'enough_evidence']} mood="cheer" />
        <div className="actions">
          <button className="btn primary big" onClick={() => setEngine(confirmFinish)}>Finish and see my results</button>
          <button className="btn big" onClick={() => setEngine(keepChallenging)}>🔥 Keep challenging me</button>
        </div>
        <p className="muted small-text">“Keep challenging me” won’t lower the difficulty. There is a limit, so the game still ends.</p>
      </section>
    );
  }

  const answered = engine.responses.length;
  return (
    <section className={`scene g-${cat}`} data-level={engine.level} aria-label={g.name}>
      <div className="scene-head">
        <h1 className="scene-title"><span aria-hidden="true">{g.emoji}</span> {g.name}</h1>
        <div className="level-meter" role="img" aria-label={`Level ${engine.level} of 8: ${LEVEL_NAMES[engine.level]}. ${answered} questions so far.`}>
          {LEVELS.map((l) => <i key={l} className={l < engine.level ? 'done' : l === engine.level ? 'now' : ''}>{l < engine.level ? '✓' : l}</i>)}
          <span className="level-name">{LEVEL_NAMES[engine.level]}</span>
        </div>
        <div className="actions">
          <button className="btn small ghost" onClick={() => go('hub')}>⏸ Pause</button>
          <button className="btn small ghost" onClick={() => { if (confirm('Skip this whole game?')) { setEngine(skipCategory); go('hub'); } }}>Skip game</button>
        </div>
      </div>
      <div className="scene-bg" aria-hidden="true" />
      {banner && <div className="level-banner" role="status">{banner}</div>}
      {q ? <QuestionRunner key={q.id} q={q} settings={state.settings} onDone={onDone} onEnd={stopNow} /> : <p role="status">Loading the next puzzle…</p>}
    </section>
  );
}

function Summary({ state, update, go, cat, engine }: ScreenProps & { cat: Category; engine: EngineState }) {
  const cfg = mergeConfig(state.engineConfig);
  const sum = summarise(engine, cfg);
  const g = GAMES[cat];
  const fb = state.gameFeedback[cat] ?? { helped: [] };
  const setHelped = (id: HelpedId) => update((s) => {
    const cur = s.gameFeedback[cat]?.helped ?? [];
    const helped = id === 'nothing' ? (cur.includes('nothing') ? [] : ['nothing' as HelpedId]) : cur.includes(id) ? cur.filter((x) => x !== id) : [...cur.filter((x) => x !== 'nothing'), id];
    return { ...s, gameFeedback: { ...s.gameFeedback, [cat]: { ...(s.gameFeedback[cat] ?? {}), helped } } };
  });
  const setComfort = (c: 1 | 2 | 3 | 4 | 5) => update((s) => ({ ...s, gameFeedback: { ...s.gameFeedback, [cat]: { helped: s.gameFeedback[cat]?.helped ?? [], comfort: c } } }));
  const replay = () => { if (confirm('Play this game again? Your current results for it will be replaced.')) update((s) => { const e = { ...s.engines }; delete e[cat]; return { ...s, engines: e }; }); };

  if (sum.skippedCategory) {
    return (
      <section className="card center">
        <h1>{g.name} skipped</h1>
        <p>No problem at all. We won’t make any assumptions based on this game.</p>
        <div className="actions"><button className="btn" onClick={replay}>Play it after all</button><button className="btn primary" onClick={() => go('hub')}>Back to the worlds</button></div>
      </section>
    );
  }
  return (
    <section className="card summary" aria-labelledby="sum-title">
      <h1 id="sum-title">{g.emoji} {g.name} — your results</h1>
      <Mascot message={sum.stopReason === 'student_ended' ? 'Thanks for playing as far as you wanted to!' : 'Nice work! Here’s what the puzzles showed.'} mood="cheer" />
      <p className="lead">
        <strong>Most consistent level:</strong> {sum.consistentLevel ? `Level ${sum.consistentLevel} (${LEVEL_NAMES[sum.consistentLevel as 1]})` : 'not enough information yet'}<br />
        <strong>Highest level you solved on your own:</strong> {sum.highestSuccessful ? `Level ${sum.highestSuccessful}` : '—'}<br />
        <strong>Where it started getting challenging:</strong> {describeBoundary(sum)}
      </p>
      {sum.hintRate >= 0.4 && <p>You used hints on {Math.round(sum.hintRate * 100)}% of puzzles. Hints and retries count as part of how you work, so those answers are treated as “with support”, not as mistakes.</p>}
      <table className="ladder">
        <caption>Level ladder: what happened at each level</caption>
        <thead><tr><th scope="col">Level</th><th scope="col">On my own</th><th scope="col">With help</th><th scope="col">Not yet</th></tr></thead>
        <tbody>
          {sum.levelStats.filter((l) => l.n > 0).map((l) => (
            <tr key={l.level}>
              <th scope="row">{l.level} · {LEVEL_NAMES[l.level]}</th>
              <td>{'✓'.repeat(l.independent) || '–'}</td><td>{'↻'.repeat(l.assisted) || '–'}</td><td>{'○'.repeat(l.incorrect) || '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="disclaimer">These are informal activities to understand which kinds of support might help you. They are not an IQ test or a measure of your ability, and they can’t diagnose anything.</p>

      <fieldset>
        <legend>What helped you most in this game? (optional)</legend>
        <div className="chips">
          {HELPED_OPTIONS.map((o) => {
            const on = fb.helped.includes(o.id);
            return <button key={o.id} className={`chip ${on ? 'on' : ''}`} aria-pressed={on} onClick={() => setHelped(o.id)}>{on ? '✓ ' : ''}{o.icon} {o.label}</button>;
          })}
        </div>
      </fieldset>
      <fieldset>
        <legend>How comfortable was this game?</legend>
        <div className="chips">
          {([[1, '😣 Not at all'], [2, '😕 A bit tricky'], [3, '😐 Okay'], [4, '🙂 Comfortable'], [5, '😄 Very']] as const).map(([v, l]) => (
            <button key={v} className={`chip ${fb.comfort === v ? 'on' : ''}`} aria-pressed={fb.comfort === v} onClick={() => setComfort(v)}>{fb.comfort === v ? '✓ ' : ''}{l}</button>
          ))}
        </div>
      </fieldset>
      {cat === 'verbal' && <ExplainBonus state={state} update={update} />}
      <div className="actions">
        <button className="btn" onClick={replay}>Play again</button>
        <button className="btn primary big" onClick={() => go('hub')}>Back to the worlds</button>
      </div>
    </section>
  );
}

function ExplainBonus({ state, update }: Pick<ScreenProps, 'state' | 'update'>) {
  const [text, setText] = useState(state.explain?.text ?? '');
  const [listening, setListening] = useState(false);
  const [depth, setDepth] = useState<'short' | 'detailed' | 'both'>(state.explain?.depth ?? 'short');
  const t = text.toLowerCase();
  const hits = EXPLAIN_ACTIVITY.keyPoints.map((k) => k.words.some((w) => t.includes(w)));
  const SR = (window as unknown as { webkitSpeechRecognition?: new () => { lang: string; onresult: (e: { results: { 0: { 0: { transcript: string } } } }) => void; onend: () => void; start: () => void } }).webkitSpeechRecognition;
  const dictate = () => {
    if (!SR) return;
    const r = new SR();
    r.lang = 'en-GB';
    r.onresult = (e) => setText((x) => `${x} ${e.results[0][0].transcript}`.trim());
    r.onend = () => setListening(false);
    setListening(true);
    r.start();
  };
  const save = () => update((s) => ({ ...s, explain: { text, keyPointsHit: hits.filter(Boolean).length, depth } }));
  return (
    <details className="bonus">
      <summary>✨ Bonus (optional): {EXPLAIN_ACTIVITY.title}</summary>
      <p>{EXPLAIN_ACTIVITY.concept}</p>
      <label className="field">{EXPLAIN_ACTIVITY.prompt}
        <textarea rows={4} value={text} maxLength={800} onChange={(e) => setText(e.target.value)} />
      </label>
      {SR && <button className="btn small" onClick={dictate} disabled={listening}>{listening ? '🎙 Listening…' : '🎙 Say it instead'}</button>}
      <fieldset><legend>Which format would you rather give?</legend>
        <div className="chips">
          {([['short', 'Short answer'], ['detailed', 'Detailed answer'], ['both', 'Either']] as const).map(([v, l]) => <button key={v} className={`chip ${depth === v ? 'on' : ''}`} aria-pressed={depth === v} onClick={() => setDepth(v)}>{depth === v ? '✓ ' : ''}{l}</button>)}
        </div>
      </fieldset>
      <ul className="checklist" aria-label="Key points checklist">
        {EXPLAIN_ACTIVITY.keyPoints.map((k, i) => <li key={k.label}>{hits[i] ? '✓' : '○'} {k.label}</li>)}
      </ul>
      <p className="muted small-text">This is a simple keyword checklist, not a grade. Different wording is just as valid.</p>
      <button className="btn small" onClick={save}>Save my answer</button>
      {state.explain && <p role="status">Saved ✓</p>}
    </details>
  );
}
