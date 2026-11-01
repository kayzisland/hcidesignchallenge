import { useState, type ReactElement } from 'react';
import type { Answers } from '../state/types';

/** Live "study environment" that reacts to the Stage 2 choices. */
export function StudyPreview({ answers }: { answers: Answers }) {
  const [flipped, setFlipped] = useState(false);
  const q5 = answers.q5 ?? [], q6 = answers.q6 ?? [], q7 = answers.q7?.[0];
  const minutes = q7 && q7 !== 'choose' ? Number(q7) : 15;
  const bits: ReactElement[] = [];
  if (q5.includes('diagram') || q6.includes('mindmaps')) bits.push(
    <div key="d" className="pv pv-diagram" aria-label="Preview: diagram"><span className="node n0">Topic</span><span className="node n1">Idea A</span><span className="node n2">Idea B</span><span className="node n3">Idea C</span></div>);
  if (q5.includes('audio') || q6.includes('listening')) bits.push(
    <div key="a" className="pv pv-wave" aria-label="Preview: audio"><span>🔊</span>{[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} style={{ animationDelay: `${i * 0.1}s` }} />)}</div>);
  if (q6.includes('flashcards')) bits.push(
    <button key="f" className={`pv pv-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)} aria-label="Preview: flashcard, press to flip">
      <span>{flipped ? 'A: A helpful answer' : 'Q: A helpful question?'}</span></button>);
  if (q5.includes('written') || q6.includes('summaries')) bits.push(<div key="w" className="pv pv-text" aria-label="Preview: short written summary"><b>Summary</b><p>Short, clear sentences with the key idea first.</p></div>);
  if (q5.includes('worked') || q6.includes('steps')) bits.push(<ol key="s" className="pv pv-steps" aria-label="Preview: worked example"><li>Read the problem</li><li>Do step one</li><li>Check it</li></ol>);
  if (q5.includes('interactive') || q5.includes('practice') || q6.includes('quizzes')) bits.push(<div key="i" className="pv pv-quiz" aria-label="Preview: quick quiz"><b>Quick question</b><span className="fake-btn">A</span><span className="fake-btn">B ✓</span></div>);

  return (
    <aside className="preview" aria-label="Live preview of your study space">
      <h3>Your study space</h3>
      <div className="preview-grid">
        {bits.length ? bits : <p className="muted">Pick some options and watch your study space appear here.</p>}
      </div>
      <div className="timeline" role="img" aria-label={`Session length preview: ${minutes} minutes`}>
        <div className="timeline-bar" style={{ width: `${Math.min(100, (minutes / 25) * 100)}%` }}>{minutes} min</div>
      </div>
    </aside>
  );
}
