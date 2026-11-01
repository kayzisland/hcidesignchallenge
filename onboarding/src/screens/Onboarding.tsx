import { useMemo, useState } from 'react';
import type { ScreenProps } from './props';
import type { Settings } from '../state/types';
import { DEMO_CALENDAR, QUESTIONS, STAGES, SUBJECTS, type OptionDef, type QuestionDef } from '../data/onboarding';
import { Mascot } from '../components/Mascot';
import { StudyPreview } from '../components/StudyPreview';

interface Props extends ScreenProps { openSettings: () => void }

const REACTIONS: Record<string, string> = {
  q1: 'Great — I’ll keep that in mind!', q2: 'Got it. That’s really useful to know.', q3: 'Thanks for being honest — that helps me help you.',
  q4: 'Noted! You can change this any time.', q5: 'Ooh, your study space is changing!', q6: 'Nice mix of ideas.', q7: 'Perfect, I’ll keep sessions that length.',
  q8: 'Wrong answers are just clues. Good to know how you like to respond.', q9: 'Look — the whole app changed!', q10: 'Done — that’s applied right now.',
  q11: 'I’ll show things that way.', q12: 'Understood.', q13: 'I’ll keep to that.', q14: 'This is a demo — no real calendar was touched.', q15: 'Thanks!',
};

/** Maps the "comfort" choices straight onto app settings so the change is visible immediately. */
export function comfortSettings(selected: string[]): Partial<Settings> {
  return {
    textSize: selected.includes('largetext') ? 'large' : 'normal',
    lineSpacing: selected.includes('spacing'),
    reduceMotion: selected.includes('reducemotion'),
    fewerElements: selected.includes('fewer'),
    captions: selected.includes('captions'),
    cbCues: selected.includes('cbcues'),
    keyboardHints: selected.includes('keyboard'),
  };
}

export function Onboarding({ state, update, go, openSettings }: Props) {
  const q = QUESTIONS[Math.min(state.qIndex, QUESTIONS.length - 1)];
  const firstOfStage = QUESTIONS.findIndex((x) => x.stage === q.stage) === state.qIndex;
  const [phase, setPhase] = useState<'intro' | 'q' | 'done'>(firstOfStage ? 'intro' : 'q');
  const [mood, setMood] = useState<string>('');
  const stage = STAGES[q.stage - 1];
  const idx = state.qIndex;
  const progress = Math.round((idx / QUESTIONS.length) * 100);

  const setAnswer = (qid: string, ids: string[]) => update((s) => {
    const next = { ...s, answers: { ...s.answers, [qid]: ids } };
    if (qid === 'q9' && ids[0] && ids[0] !== 'custom') next.settings = { ...s.settings, theme: ids[0] as Settings['theme'] };
    if (qid === 'q10') next.settings = { ...s.settings, ...comfortSettings(ids) };
    if (qid === 'q11' && ids[0]) next.settings = { ...s.settings, infoMode: ids[0] as Settings['infoMode'] };
    return next;
  });

  const finish = (target: 'hub' | 'reveal') => update((s) => ({ ...s, onboardingComplete: true, screen: target }));

  const advance = () => {
    const last = idx >= QUESTIONS.length - 1;
    if (last) return finish('reveal');
    const nextQ = QUESTIONS[idx + 1];
    update((s) => ({ ...s, qIndex: idx + 1 }));
    setMood('');
    if (nextQ.stage !== q.stage) setPhase('done'); else setPhase('q');
  };
  const afterStageDone = () => { setPhase('intro'); };
  const back = () => {
    if (idx === 0) return go('welcome');
    update((s) => ({ ...s, qIndex: idx - 1 }));
    setPhase('q'); setMood('');
  };

  if (phase === 'done') {
    const prevStage = STAGES[Math.max(0, QUESTIONS[idx - 1].stage - 1)];
    return (
      <section className="card center" aria-labelledby="stage-done">
        <div className="hero-emoji pop" aria-hidden="true">{prevStage.emoji}</div>
        <h1 id="stage-done">Stage complete!</h1>
        <Mascot message={prevStage.done} mood="cheer" />
        <Celebration />
        <button className="btn primary big" onClick={afterStageDone} autoFocus>Continue</button>
      </section>
    );
  }
  if (phase === 'intro') {
    return (
      <section className="card center" aria-labelledby="stage-intro">
        <p className="eyebrow">{stage.tagline}</p>
        <div className="hero-emoji pop" aria-hidden="true">{stage.emoji}</div>
        <h1 id="stage-intro">{stage.name}</h1>
        <Mascot message={stage.intro} />
        <div className="actions">
          <button className="btn" onClick={back}>← Back</button>
          <button className="btn primary big" onClick={() => setPhase('q')} autoFocus>Let’s go</button>
        </div>
      </section>
    );
  }

  const selected = state.answers[q.id] ?? [];
  const hasAnswer = selected.length > 0;

  return (
    <section className="onboarding" aria-labelledby="q-title">
      <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label={`Question ${idx + 1} of ${QUESTIONS.length}`}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="eyebrow">{stage.name} · Question {idx + 1} of {QUESTIONS.length}</p>
      <div className={`qlayout ${q.stage === 2 ? 'with-preview' : ''}`}>
        <div className="card">
          <h1 id="q-title" className="qtitle">{q.title}</h1>
          <p className="muted">{q.help}</p>
          <QuestionBody q={q} state={state} selected={selected} setAnswer={setAnswer} update={update} openSettings={openSettings} onPick={() => setMood(REACTIONS[q.id] ?? '')} />
          <div className="actions between">
            <button className="btn" onClick={back}>← Back</button>
            <div className="actions">
              {q.id === 'q15' ? (
                <>
                  <button className="btn primary big" onClick={() => { setAnswer('q15', ['play']); finish('hub'); }}>🎮 Let’s play!</button>
                  <button className="btn" onClick={() => { setAnswer('q15', ['later']); finish('reveal'); }}>Maybe later</button>
                  <button className="btn ghost" onClick={() => { setAnswer('q15', ['skip']); finish('reveal'); }}>Skip for now</button>
                </>
              ) : (
                <>
                  {!hasAnswer && <button className="btn ghost" onClick={advance}>Skip</button>}
                  <button className="btn primary big" onClick={advance} disabled={!hasAnswer}>Next →</button>
                </>
              )}
            </div>
          </div>
          {state.settings.keyboardHints && <p className="muted small-text">Keyboard: Tab to move, Space or Enter to choose.</p>}
        </div>
        {q.stage === 2 && <StudyPreview answers={state.answers} />}
      </div>
      {!state.settings.fewerElements && <Mascot message={mood || 'Take your time — there are no wrong answers.'} mood={mood ? 'cheer' : 'happy'} />}
    </section>
  );
}

function Celebration() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => <i key={i} style={{ left: `${(i * 7 + 5) % 100}%`, animationDelay: `${(i % 5) * 0.12}s` }} />)}
    </div>
  );
}

interface BodyProps {
  q: QuestionDef;
  state: Props['state'];
  selected: string[];
  setAnswer: (qid: string, ids: string[]) => void;
  update: Props['update'];
  openSettings: () => void;
  onPick: () => void;
}

function QuestionBody({ q, state, selected, setAnswer, update, openSettings, onPick }: BodyProps) {
  if (q.type === 'search') return <SubjectSearch value={selected[0] ?? ''} onChange={(v) => { setAnswer(q.id, v ? [v] : []); if (v) onPick(); }} />;
  const multi = q.type === 'multi';
  const toggle = (o: OptionDef) => {
    onPick();
    if (!multi) return setAnswer(q.id, [o.id]);
    if (o.exclusive) return setAnswer(q.id, selected.includes(o.id) ? [] : [o.id]);
    const without = selected.filter((i) => i !== o.id && !q.options.find((x) => x.id === i)?.exclusive);
    setAnswer(q.id, selected.includes(o.id) ? without : [...without, o.id]);
  };
  const withText = q.options.find((o) => o.allowsText && selected.includes(o.id));
  return (
    <>
      <div className={`choices ${q.type === 'theme' ? 'themes' : ''}`} role="group" aria-label={q.title}>
        {q.options.map((o) => {
          const on = selected.includes(o.id);
          return (
            <button
              key={o.id}
              type="button"
              className={`choice ${on ? 'on' : ''} ${q.type === 'theme' ? `theme-${o.id}` : ''}`}
              aria-pressed={on}
              onClick={() => { toggle(o); if (o.id === 'custom' && q.id === 'q9') openSettings(); }}
            >
              <span className={`choice-icon ${on && o.anim ? `anim-${o.anim}` : ''}`} aria-hidden="true">{o.icon}</span>
              <span className="choice-label">{o.label}</span>
              <span className="choice-mark" aria-hidden="true">{on ? (multi ? '☑' : '●') : (multi ? '☐' : '○')}</span>
              {on && <span className="sr-only"> (selected)</span>}
            </button>
          );
        })}
      </div>
      {withText && (
        <label className="field">Tell us more (optional)
          <input type="text" maxLength={120} value={state.otherText[q.id] ?? ''} onChange={(e) => update((s) => ({ ...s, otherText: { ...s.otherText, [q.id]: e.target.value } }))} />
        </label>
      )}
      {q.id === 'q14' && selected[0] === 'connect' && (
        <div className="demo-cal" aria-label="Sample calendar">
          <p><strong>Demo only</strong> — these are sample dates, not your real timetable.</p>
          <ul>{DEMO_CALENDAR.map((c) => <li key={c.when}><b>{c.when}</b> {c.what}</li>)}</ul>
        </div>
      )}
    </>
  );
}

function SubjectSearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const matches = useMemo(() => {
    const t = value.trim().toLowerCase();
    return t ? SUBJECTS.filter((s) => s.toLowerCase().includes(t)).slice(0, 6) : SUBJECTS.slice(0, 6);
  }, [value]);
  return (
    <div className="combo">
      <label className="field">Subject or course
        <input
          type="text" role="combobox" aria-expanded={open} aria-controls="subject-list" aria-autocomplete="list"
          value={value} maxLength={80} placeholder="e.g. Psychology" autoComplete="off"
          onChange={(e) => { onChange(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)} onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        />
      </label>
      {open && matches.length > 0 && (
        <ul id="subject-list" className="combo-list" role="listbox">
          {matches.map((m) => (
            <li key={m} role="option" aria-selected={m === value}>
              <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => { onChange(m); setOpen(false); }}>{m}</button>
            </li>
          ))}
        </ul>
      )}
      <p className="muted small-text">Not listed? Just type your own. Or press Skip.</p>
    </div>
  );
}
