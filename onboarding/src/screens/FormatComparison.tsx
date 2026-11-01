import { useEffect, useRef, useState } from 'react';
import type { ScreenProps } from './props';
import type { FormatId, FormatResult } from '../state/types';
import { FORMAT_TOPICS, type FormatTopic } from '../data/formats';
import { Mascot } from '../components/Mascot';

const FORMATS: FormatId[] = ['written', 'visual', 'audio'];
const NAMES: Record<FormatId, string> = { written: '📝 Written', visual: '🕸️ Visual diagram', audio: '🔊 Audio' };

function order(seed: number): FormatId[] {
  const k = seed % 3;
  return [FORMATS[k], FORMATS[(k + 1) % 3], FORMATS[(k + 2) % 3]];
}

export function FormatComparison({ state, update, go }: ScreenProps) {
  const fmts = order(state.formatSeed);
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'learn' | 'quiz' | 'rate'>('intro');
  const [results, setResults] = useState<FormatResult[]>([]);
  const [score, setScore] = useState(0);

  const finishAll = (all: FormatResult[], skipped = false) =>
    update((s) => ({ ...s, formatResults: all, formatsSkipped: skipped, screen: 'reveal' }));

  if (phase === 'intro') {
    return (
      <section className="card center" aria-labelledby="f-title">
        <div className="hero-emoji" aria-hidden="true">🔄</div>
        <h1 id="f-title">Try a Different Way!</h1>
        <Mascot message="I’ll explain three short ideas — one as text, one as a diagram and one as audio — then ask what felt comfortable. It’s about the format, not about you being right." />
        <div className="actions">
          <button className="btn" onClick={() => go('hub')}>← Back</button>
          <button className="btn ghost" onClick={() => finishAll([], true)}>Skip this</button>
          <button className="btn primary big" onClick={() => setPhase('learn')}>Let’s try</button>
        </div>
      </section>
    );
  }
  const format = fmts[step];
  const topic = FORMAT_TOPICS[step];

  if (phase === 'learn') return <Learn key={step} format={format} topic={topic} step={step} state={state} onNext={() => setPhase('quiz')} onSkip={() => finishAll(results, results.length === 0)} />;
  if (phase === 'quiz') return <Quiz key={step} topic={topic} onDone={(c) => { setScore(c); setPhase('rate'); }} />;
  return (
    <Rate
      key={step} format={format} correct={score} total={topic.questions.length}
      onDone={(r) => {
        const res = { ...r, format, topicId: topic.id, correct: score, total: topic.questions.length };
        const all = [...results.filter((x) => x.format !== format), res];
        setResults(all);
        if (step + 1 >= fmts.length) finishAll(all);
        else { setStep(step + 1); setPhase('learn'); }
      }}
    />
  );
}

function Learn({ format, topic, step, state, onNext, onSkip }: { format: FormatId; topic: FormatTopic; step: number; state: ScreenProps['state']; onNext: () => void; onSkip: () => void }) {
  const [view, setView] = useState(0);
  const [mode, setMode] = useState(state.settings.infoMode === 'switch' ? 'step' : state.settings.infoMode);
  const [speaking, setSpeaking] = useState(false);
  const full = topic.steps.map((s) => `${s.title}. ${s.text}`).join(' ');
  const synth = typeof speechSynthesis !== 'undefined' ? speechSynthesis : undefined;
  const utter = useRef<SpeechSynthesisUtterance | null>(null);
  useEffect(() => () => synth?.cancel(), [synth]);
  const play = () => {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(`${topic.title}. ${full}`);
    u.rate = state.settings.audioSpeed;
    u.lang = 'en-GB';
    u.onend = () => setSpeaking(false);
    utter.current = u;
    setSpeaking(true);
    synth.speak(u);
  };
  const stop = () => { synth?.cancel(); setSpeaking(false); };

  return (
    <section className="card" aria-labelledby="l-title">
      <p className="eyebrow">Idea {step + 1} of 3 · {NAMES[format]}</p>
      <h1 id="l-title">{topic.title}</h1>
      {format === 'written' && (
        <>
          {state.settings.infoMode === 'switch' && (
            <div className="chips" role="group" aria-label="How to show this">
              {(['step', 'scroll', 'outline'] as const).map((m) => <button key={m} className={`chip ${mode === m ? 'on' : ''}`} aria-pressed={mode === m} onClick={() => setMode(m)}>{mode === m ? '✓ ' : ''}{{ step: 'One at a time', scroll: 'Full page', outline: 'Outline' }[m]}</button>)}
            </div>
          )}
          {mode === 'step' && (
            <div className="step-view">
              <p><strong>{view + 1}. {topic.steps[view].title}</strong></p>
              <p>{topic.steps[view].text}</p>
              <div className="actions">
                <button className="btn" disabled={view === 0} onClick={() => setView(view - 1)}>← Previous</button>
                <button className="btn" disabled={view === topic.steps.length - 1} onClick={() => setView(view + 1)}>Next part →</button>
              </div>
              <p className="muted small-text">Part {view + 1} of {topic.steps.length}</p>
            </div>
          )}
          {mode === 'scroll' && topic.steps.map((s, i) => <p key={i}><strong>{s.title}.</strong> {s.text}</p>)}
          {mode === 'outline' && topic.steps.map((s, i) => <details key={i} open={i === 0}><summary>{s.title}</summary><p>{s.text}</p></details>)}
        </>
      )}
      {format === 'visual' && (
        <>
          <ol className="flow" aria-label="Diagram of the steps">
            {topic.steps.map((s, i) => (
              <li key={i}><span className="flow-icon" aria-hidden="true">{s.icon}</span><strong>{s.title}</strong><span>{s.text}</span>{i < topic.steps.length - 1 && <span className="flow-arrow" aria-hidden="true">➜</span>}</li>
            ))}
          </ol>
        </>
      )}
      {format === 'audio' && (
        <>
          <div className="actions">
            {synth ? <button className="btn primary" onClick={speaking ? stop : play}>{speaking ? '⏹ Stop' : '▶ Play explanation'}</button> : <p className="muted">Audio isn’t available in this browser, so please read the transcript.</p>}
            <span className="muted">Speed {state.settings.audioSpeed.toFixed(1)}× (change in Settings)</span>
          </div>
          <div className={`wave-big ${speaking ? 'on' : ''}`} aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} style={{ animationDelay: `${i * 0.07}s` }} />)}</div>
          <div className="transcript"><h2>Transcript</h2>{topic.steps.map((s, i) => <p key={i}><strong>{s.title}.</strong> {s.text}</p>)}</div>
        </>
      )}
      <div className="actions between">
        <button className="btn ghost" onClick={onSkip}>Skip the rest</button>
        <button className="btn primary big" onClick={onNext}>Ready for 2 questions →</button>
      </div>
    </section>
  );
}

function Quiz({ topic, onDone }: { topic: FormatTopic; onDone: (correct: number) => void }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const q = topic.questions[i];
  return (
    <section className="card" aria-labelledby="qq">
      <p className="eyebrow">Question {i + 1} of {topic.questions.length}</p>
      <h1 id="qq" className="qstem">{q.q}</h1>
      <div className="options" role="group" aria-label="Answers">
        {q.options.map((o, k) => (
          <button key={o} className={`option ${pick === k ? 'picked' : ''} ${pick !== null && k === q.correct ? 'right' : ''}`} aria-pressed={pick === k} disabled={pick !== null} onClick={() => setPick(k)}>
            <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + k)}</span>{o}
            {pick !== null && k === q.correct && <span className="mark">✓ correct</span>}
            {pick === k && k !== q.correct && <span className="mark">↻ not this one</span>}
          </button>
        ))}
      </div>
      {pick !== null && (
        <button className="btn primary big" autoFocus onClick={() => { const s = score + (pick === q.correct ? 1 : 0); if (i + 1 >= topic.questions.length) onDone(s); else { setScore(s); setI(i + 1); setPick(null); } }}>Next →</button>
      )}
    </section>
  );
}

function Rate({ format, correct, total, onDone }: { format: FormatId; correct: number; total: number; onDone: (r: Pick<FormatResult, 'comfort' | 'effort' | 'again'>) => void }) {
  const [comfort, setComfort] = useState<FormatResult['comfort']>();
  const [effort, setEffort] = useState<FormatResult['effort']>();
  const [again, setAgain] = useState<FormatResult['again']>();
  const ready = comfort && effort && again;
  const group = <T extends string | number>(legend: string, cur: T | undefined, set: (v: T) => void, opts: [T, string][]) => (
    <fieldset><legend>{legend}</legend>
      <div className="chips">{opts.map(([v, l]) => <button key={String(v)} className={`chip ${cur === v ? 'on' : ''}`} aria-pressed={cur === v} onClick={() => set(v)}>{cur === v ? '✓ ' : ''}{l}</button>)}</div>
    </fieldset>
  );
  return (
    <section className="card" aria-labelledby="rt">
      <h1 id="rt">How was the {NAMES[format].replace(/^\S+ /, '').toLowerCase()} version?</h1>
      <p className="muted">You got {correct} of {total} — but that’s not what we’re looking at. We want to know how it <em>felt</em>.</p>
      {group<FormatResult['comfort']>('How comfortable was it?', comfort, setComfort, [[1, '1 Not at all'], [2, '2'], [3, '3'], [4, '4'], [5, '5 Very']])}
      {group<FormatResult['effort']>('How much effort did it take?', effort, setEffort, [['low', 'Little effort'], ['medium', 'Some effort'], ['high', 'A lot of effort']])}
      {group<FormatResult['again']>('Would you use this again?', again, setAgain, [['yes', 'Yes'], ['maybe', 'Maybe'], ['no', 'No']])}
      <button className="btn primary big" disabled={!ready} onClick={() => ready && onDone({ comfort, effort, again })}>Continue →</button>
    </section>
  );
}
