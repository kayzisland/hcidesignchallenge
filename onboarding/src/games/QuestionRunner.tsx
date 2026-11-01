import { useEffect, useRef, useState } from 'react';
import type { Question, Response } from '../engine/types';
import { classifyOutcome } from '../engine/adaptive';
import type { Settings } from '../state/types';
import { FigureSvg } from './FigureSvg';

interface Props {
  q: Question;
  practice?: boolean;
  settings: Settings;
  onDone: (r: Response | null) => void;
  onEnd?: () => void;
}

function DataView({ q }: { q: Question }) {
  const d = q.data;
  if (!d) return null;
  if (d.kind === 'table') {
    return (
      <table className="data-table">
        <caption>{d.title}</caption>
        <thead><tr><th scope="col"> </th>{d.series.map((s) => <th scope="col" key={s.name}>{s.name}</th>)}</tr></thead>
        <tbody>{d.labels.map((l, i) => <tr key={l}><th scope="row">{l}</th>{d.series.map((s) => <td key={s.name}>{s.values[i]}{d.unit ?? ''}</td>)}</tr>)}</tbody>
      </table>
    );
  }
  const max = Math.max(...d.series.flatMap((s) => s.values), 1);
  return (
    <figure className="bars">
      <figcaption>{d.title}</figcaption>
      {d.labels.map((l, i) => (
        <div className="bar-row" key={l}>
          <span className="bar-label">{l}</span>
          <div className="bar-track">
            {d.series.map((s, si) => (
              <div key={s.name} className={`bar bar-${si}`} style={{ width: `${(s.values[i] / max) * 100}%` }}>
                <span>{d.series.length > 1 ? `${s.name}: ` : ''}{s.values[i]}{d.unit ?? ''}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </figure>
  );
}

function StudyView({ q }: { q: Question }) {
  const st = q.memory!.study;
  return (
    <div className="study" aria-label={st.title}>
      <h3>{st.title}</h3>
      {st.items && (
        <ul className={`study-items ${st.layout}`}>
          {st.items.map((it, i) => <li key={i}><span className="study-icon" aria-hidden="true">{it.icon}</span><span>{it.label}</span></li>)}
        </ul>
      )}
      {st.lines && <ol className="study-lines">{st.lines.map((l, i) => <li key={i}>{l}</li>)}</ol>}
    </div>
  );
}

export function QuestionRunner({ q, practice, settings, onDone, onEnd }: Props) {
  const [stage, setStage] = useState<'study' | 'interference' | 'recall'>(q.memory ? 'study' : 'recall');
  const [iIdx, setIIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [wrong, setWrong] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [hints, setHints] = useState(0);
  const [firstTry, setFirstTry] = useState(false);
  const [resolved, setResolved] = useState<null | 'correct' | 'incorrect'>(null);
  const [notice, setNotice] = useState('');
  const [helped, setHelped] = useState<boolean | undefined>();
  const [conf, setConf] = useState<1 | 2 | 3 | undefined>();
  const [marks, setMarks] = useState<number[]>([]);
  const [reread, setReread] = useState(false);
  const [flash, setFlash] = useState(false);
  const [relook, setRelook] = useState(false);
  const [showText, setShowText] = useState(false);
  const start = useRef(Date.now());
  const head = useRef<HTMLHeadingElement>(null);

  useEffect(() => { head.current?.focus({ preventScroll: true }); }, [stage, iIdx]);

  const check = () => {
    if (!picked) return;
    const n = attempts + 1;
    setAttempts(n);
    if (picked === q.correctId) {
      setFirstTry(n === 1);
      setResolved('correct');
      setNotice('');
    } else if (n >= 2 || practice) {
      setResolved('incorrect');
      setNotice('');
    } else {
      setWrong([...wrong, picked]);
      setPicked(null);
      setNotice('↻ Not quite. That’s okay — you can take a hint or try one more time.');
    }
  };

  const finish = (skipped = false) => {
    if (practice) return onDone(null);
    const correct = resolved === 'correct';
    const outcome = classifyOutcome({ correctFirstTry: firstTry, correctEventually: correct, hintsUsed: hints, skipped });
    onDone({
      category: q.category, questionId: q.id, level: q.level, correct, outcome, attempts: Math.max(attempts, skipped ? 0 : 1),
      hintsUsed: hints, confidence: conf, explanationHelped: helped, rereadUsed: reread || relook || undefined,
      responseMs: settings.recordResponseTime ? Date.now() - start.current : undefined,
    });
  };

  const nextHint = () => { if (hints < q.hints.length) { setHints(hints + 1); if (q.memory && hints === 1) setRelook(true); } };
  const toggleMark = (i: number) => setMarks(marks.includes(i) ? marks.filter((m) => m !== i) : [...marks, i]);

  if (q.memory && stage === 'study') {
    return (
      <div className="card">
        <h2 ref={head} tabIndex={-1}>Look carefully — take as long as you like</h2>
        <StudyView q={q} />
        <p className="tip">💡 Tip: {q.memory.strategyTip}</p>
        <div className="actions"><button className="btn primary big" onClick={() => setStage(q.memory!.interference.length ? 'interference' : 'recall')}>I’m ready →</button>
          {onEnd && <button className="btn ghost" onClick={onEnd}>End this game</button>}</div>
      </div>
    );
  }
  if (q.memory && stage === 'interference') {
    const t = q.memory.interference[iIdx];
    return (
      <div className="card">
        <p className="eyebrow">A quick, unrelated warm-down ({iIdx + 1} of {q.memory.interference.length})</p>
        <h2 ref={head} tabIndex={-1}>{t.prompt}</h2>
        <div className="options">
          {t.options.map((o) => (
            <button key={o.id} className="option" onClick={() => (iIdx + 1 < q.memory!.interference.length ? setIIdx(iIdx + 1) : setStage('recall'))}>{o.label}</button>
          ))}
        </div>
        <p className="muted small-text">This isn’t scored — it just gives your memory a short pause.</p>
      </div>
    );
  }

  const isMatrix = !!q.matrix;
  const passage = q.passage;
  const optionNode = (o: Question['options'][number], i: number) => {
    const isWrong = wrong.includes(o.id);
    const isCorrectShown = resolved && o.id === q.correctId;
    const isPicked = picked === o.id;
    const letter = String.fromCharCode(65 + i);
    return (
      <button
        key={o.id}
        className={`option ${isPicked ? 'picked' : ''} ${isWrong ? 'wrong' : ''} ${isCorrectShown ? 'right' : ''} ${o.figure ? 'fig-option' : ''}`}
        aria-pressed={isPicked}
        disabled={!!resolved || isWrong}
        onClick={() => setPicked(o.id)}
      >
        <span className="option-letter" aria-hidden="true">{letter}</span>
        {o.figure ? <FigureSvg figure={o.figure} label={`Option ${letter}: ${o.label}`} /> : <span>{o.label}</span>}
        {isPicked && !resolved && <span className="sr-only"> (selected)</span>}
        {isWrong && <span className="mark" aria-label="Not this one">✕ not this one</span>}
        {isCorrectShown && <span className="mark" aria-label="Correct answer">✓ correct</span>}
      </button>
    );
  };

  return (
    <div className="card question">
      {practice && <p className="badge">Practice — not scored</p>}
      <h2 ref={head} tabIndex={-1} className="qstem">{q.stem}</h2>

      {passage && (
        <div className={`passage ${flash ? 'flash' : ''}`}>
          <p className="muted small-text">Tip: tap a sentence to highlight it.</p>
          {passage.map((s, i) => (
            <button key={i} className={`sentence ${marks.includes(i) ? 'hl' : ''}`} aria-pressed={marks.includes(i)} onClick={() => toggleMark(i)}>{marks.includes(i) ? '✎ ' : ''}{s}</button>
          ))}
          <button className="btn small ghost" onClick={() => { setReread(true); setFlash(true); setTimeout(() => setFlash(false), 1200); }}>📖 I re-read the passage</button>
        </div>
      )}
      {q.data && <DataView q={q} />}
      {isMatrix && (
        <>
          <div className="matrix" role="group" aria-label="Pattern grid, 3 by 3. The bottom-right piece is missing.">
            {q.matrix!.cells.map((c, i) => <div key={i} className="matrix-cell"><FigureSvg figure={c} label={c ? q.matrix!.description[i] : 'Missing piece'} /></div>)}
          </div>
          <button className="btn small ghost" onClick={() => setShowText(!showText)} aria-expanded={showText}>{showText ? 'Hide' : 'Show'} the grid described in words</button>
          {showText && <ol className="desc">{q.matrix!.description.map((d, i) => <li key={i}>{d}</li>)}<li>Missing piece (row 3, column 3)</li></ol>}
        </>
      )}
      {q.memory?.recallScene && (
        <div className="study"><p className="muted">The scene now:</p>
          <ul className="study-items grid">{q.memory.recallScene.map((it, i) => <li key={i}><span className="study-icon" aria-hidden="true">{it.icon}</span><span>{it.label}</span></li>)}</ul></div>
      )}
      {q.memory && relook && !resolved && (<><StudyView q={q} /><p className="muted small-text">Looking again counts as a hint.</p></>)}
      {q.memory && hints >= 2 && !relook && !resolved && <button className="btn small" onClick={() => setRelook(true)}>👀 Look at it again</button>}
      {q.altText && <details><summary>Text description</summary><p>{q.altText}</p></details>}

      <div className={`options ${isMatrix ? 'fig-options' : ''}`} role="group" aria-label="Answer options">
        {q.options.map(optionNode)}
      </div>

      <div className="notice" role="status" aria-live="polite">{notice}</div>
      {q.hints.slice(0, hints).map((h, i) => <p key={i} className="hint">💡 Hint {i + 1}: {h}</p>)}

      {!resolved && (
        <div className="actions between">
          <div className="actions">
            <button className="btn primary big" onClick={check} disabled={!picked}>Check my answer</button>
            <button className="btn" onClick={nextHint} disabled={hints >= q.hints.length}>💡 {hints ? 'Another hint' : 'Show a hint'}</button>
          </div>
          <div className="actions">
            {!practice && <button className="btn ghost" onClick={() => finish(true)}>Skip this question</button>}
            {onEnd && <button className="btn ghost" onClick={onEnd}>End this game</button>}
          </div>
        </div>
      )}

      {resolved && (
        <div className={`feedback ${resolved}`} role="status" aria-live="polite">
          <p className="feedback-title">{resolved === 'correct' ? (firstTry && hints === 0 ? '✓ Correct — nice one!' : '✓ Got it — well done for sticking with it!') : '↻ Not this time — that’s useful information, not a failure.'}</p>
          <p><strong>Explanation:</strong> {q.explanation}</p>
          {!practice && (
            <div className="rate">
              <fieldset><legend>Did the explanation help?</legend>
                <div className="chips">
                  {[true, false].map((v) => <button key={String(v)} className={`chip ${helped === v ? 'on' : ''}`} aria-pressed={helped === v} onClick={() => setHelped(v)}>{helped === v && '✓ '}{v ? 'Yes' : 'Not really'}</button>)}
                </div>
              </fieldset>
              <fieldset><legend>How sure were you? (optional)</legend>
                <div className="chips">
                  {([[1, 'Guessing'], [2, 'Fairly sure'], [3, 'Very sure']] as const).map(([v, l]) => <button key={v} className={`chip ${conf === v ? 'on' : ''}`} aria-pressed={conf === v} onClick={() => setConf(conf === v ? undefined : v)}>{conf === v && '✓ '}{l}</button>)}
                </div>
              </fieldset>
            </div>
          )}
          <button className="btn primary big" onClick={() => finish()} autoFocus>{practice ? 'Start the real thing →' : 'Next →'}</button>
        </div>
      )}
    </div>
  );
}
