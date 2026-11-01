import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';
import { createInitialState } from './state/defaults';
import { QUESTIONS } from './data/onboarding';
import { Welcome } from './screens/Welcome';
import { Onboarding } from './screens/Onboarding';
import { Hub } from './screens/Hub';
import { Reveal } from './screens/Reveal';
import { FormatComparison } from './screens/FormatComparison';
import { QuestionRunner } from './games/QuestionRunner';
import { generateQuestion } from './content';
import { AUTHORED } from './content';
import { CATEGORIES, LEVELS } from './engine/types';
import { DEFAULT_SETTINGS } from './state/defaults';

const noop = () => {};
const props = (over = {}) => ({ state: { ...createInitialState(3), ...over }, update: noop, go: noop });

describe('UI smoke render', () => {
  it('renders welcome, hub, format and reveal screens', () => {
    expect(renderToString(<Welcome {...props()} />)).toContain('Let’s begin');
    expect(renderToString(<Hub {...props()} />)).toContain('Number Quest');
    expect(renderToString(<FormatComparison {...props()} />)).toContain('Try a Different Way');
    const html = renderToString(<Reveal {...props({ answers: { q4: ['walk'], q8: ['steps'] } })} dashboard />);
    expect(html).toContain('Guided Pathfinder');
  });
  it('renders every onboarding question', () => {
    QUESTIONS.forEach((_q, i) => {
      const html = renderToString(<Onboarding {...props({ qIndex: i })} openSettings={noop} />);
      expect(html.length).toBeGreaterThan(100);
    });
  });
  it('renders generated and authored questions in every category and level', () => {
    for (const c of CATEGORIES) for (const l of LEVELS) {
      if (c === 'verbal') continue;
      const q = generateQuestion(c, l, 42);
      expect(renderToString(<QuestionRunner q={q} settings={DEFAULT_SETTINGS} onDone={noop} />).length).toBeGreaterThan(50);
      if (q.memory) expect(renderToString(<QuestionRunner q={{ ...q, memory: undefined }} settings={DEFAULT_SETTINGS} onDone={noop} />)).toContain('option');
    }
    for (const q of AUTHORED.verbal.concat(AUTHORED.numerical)) {
      expect(renderToString(<QuestionRunner q={q} settings={DEFAULT_SETTINGS} onDone={noop} />)).toContain('Check my answer');
    }
  });
});
