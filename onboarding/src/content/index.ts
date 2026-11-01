import type { Category, EngineState, Level, Question } from '../engine/types';
import { nextQuestionSeed } from '../engine/adaptive';
import { AUTHORED_NUMERICAL, generateNumerical, generateNumericalFromId } from './numerical';
import { AUTHORED_VERBAL } from './verbal';
import { generateNonverbal, generateNonverbalFromId } from './nonverbal';
import { generateMemory, generateMemoryFromId } from './memory';
import { createRng, shuffle } from './rng';

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};

/** Shuffle verbal options deterministically per question so the correct answer isn't always in the same slot. */
function shuffled(q: Question): Question {
  const rng = createRng(hash(q.id));
  const order = shuffle(rng, q.options);
  const options = order.map((o, i) => ({ ...o, id: 'abcdef'[i] }));
  const correctId = options[order.findIndex((o) => o.id === q.correctId)].id;
  return { ...q, options, correctId };
}

export const AUTHORED: Record<Category, Question[]> = {
  numerical: AUTHORED_NUMERICAL,
  verbal: AUTHORED_VERBAL.map(shuffled),
  nonverbal: [],
  memory: [],
};

const AUTHORED_BY_ID = new Map<string, Question>(
  Object.values(AUTHORED).flat().map((q) => [q.id, q]),
);

export function getQuestionById(id: string): Question | undefined {
  return (
    AUTHORED_BY_ID.get(id) ??
    generateNumericalFromId(id) ??
    generateNonverbalFromId(id) ??
    generateMemoryFromId(id)
  );
}

export function generateQuestion(category: Category, level: Level, seed: number): Question {
  switch (category) {
    case 'numerical': return generateNumerical(level, seed);
    case 'nonverbal': return generateNonverbal(level, seed);
    case 'memory': return generateMemory(level, seed);
    default: throw new Error('Verbal questions are authored');
  }
}

/** Picks the next question for the engine's current level, avoiding repeats. Deterministic given the state. */
export function selectQuestion(state: EngineState): Question {
  const asked = new Set(state.responses.map((r) => r.questionId));
  const seed = nextQuestionSeed(state);
  const rng = createRng(seed);
  const authored = AUTHORED[state.category];
  const sameLevel = authored.filter((q) => q.level === state.level && !asked.has(q.id));

  if (state.category === 'verbal') {
    if (sameLevel.length) return sameLevel[Math.floor(rng() * sameLevel.length)];
    const nearest = authored
      .filter((q) => !asked.has(q.id))
      .sort((a, b) => Math.abs(a.level - state.level) - Math.abs(b.level - state.level) || a.level - b.level);
    return nearest[0] ?? authored.filter((q) => q.level === state.level)[0];
  }
  if (sameLevel.length && (state.responses.filter((r) => r.level === state.level).length === 0 || rng() < 0.4)) {
    return sameLevel[0];
  }
  return generateQuestion(state.category, state.level, seed);
}

/** Un-scored warm-up question for each game. */
export function practiceQuestion(category: Category): Question {
  switch (category) {
    case 'numerical': return { ...generateNumerical(1, 11), id: 'practice-num' };
    case 'verbal':
      return {
        id: 'practice-ver', category: 'verbal', level: 1, kind: 'practice',
        stem: 'What colour was the door?',
        passage: ['The detective found a note pinned to a red door.', 'It read: “Meet me at noon.”'],
        options: [{ id: 'a', label: 'Red' }, { id: 'b', label: 'Blue' }, { id: 'c', label: 'Green' }],
        correctId: 'a',
        hints: ['The answer is written in the passage.', 'Look at the first sentence.'],
        explanation: 'The note was pinned to a red door.',
      };
    case 'nonverbal': return { ...generateNonverbal(1, 5), id: 'practice-non' };
    case 'memory': return { ...generateMemory(1, 7), id: 'practice-mem' };
  }
}
