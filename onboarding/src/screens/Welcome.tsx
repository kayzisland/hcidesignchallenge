import type { ScreenProps } from './props';
import { Mascot } from '../components/Mascot';

export function Welcome({ state, update, go }: ScreenProps) {
  const started = Object.keys(state.answers).length > 0 || state.qIndex > 0;
  return (
    <section className="card hero" aria-labelledby="welcome-title">
      <div className="hero-emoji" aria-hidden="true">🌱</div>
      <h1 id="welcome-title">Let’s find what works for you</h1>
      <Mascot message="Hi, I’m Pip! I’ll ask a few friendly questions and offer some optional games, then suggest a study setup that fits you." mood="cheer" />
      <ul className="tick-list">
        <li>About 5–10 minutes. Skip anything you like.</li>
        <li>There are no right or wrong answers.</li>
        <li>Everything stays in your browser, and you can delete it any time.</li>
        <li>Not an IQ test, assessment or diagnosis.</li>
      </ul>
      <div className="actions">
        <button className="btn primary big" onClick={() => go('onboarding')}>{started && !state.onboardingComplete ? 'Continue where I left off' : 'Let’s begin'}</button>
        {state.onboardingComplete && <button className="btn big" onClick={() => go('dashboard')}>See my profile</button>}
        {started && !state.onboardingComplete && (
          <button className="btn ghost" onClick={() => update((s) => ({ ...s, qIndex: 0, answers: {}, otherText: {} }))}>Start over</button>
        )}
      </div>
    </section>
  );
}
