import type { Category } from '../engine/types';

export const GAMES: Record<Category, { name: string; emoji: string; world: string; blurb: string; intro: string; skill: string }> = {
  numerical: { name: 'Number Quest', emoji: '🔢', world: 'Cosmic Workshop', blurb: 'Number puzzles — from simple sums to multi-step reasoning.', intro: 'Help Pip fix the machines in the Cosmic Workshop with number puzzles. Each puzzle is a little harder when you’re doing well.', skill: 'working with numbers' },
  verbal: { name: 'Word Garden', emoji: '📖', world: 'Story Garden', blurb: 'Short passages and questions about what they say — and imply.', intro: 'Wander the Story Garden and read short passages. You can highlight sentences and re-read as much as you like.', skill: 'reading and reasoning with text' },
  nonverbal: { name: 'Pattern Planet', emoji: '🔷', world: 'Pattern Planet', blurb: 'Spot the rule in a grid of shapes and find the missing piece.', intro: 'On Pattern Planet every grid hides a rule. Work out the rule, then pick the piece that fits the gap.', skill: 'spotting patterns' },
  memory: { name: 'Memory Meadow', emoji: '🧠', world: 'Memory Meadow', blurb: 'Notice, hold on to, and recall things — with little distractions between.', intro: 'In Memory Meadow you’ll look at something, do a tiny unrelated task, then recall what you saw. A strategy tip is always available.', skill: 'remembering and recalling' },
};

export const HELPED_OPTIONS: { id: 'hints' | 'steps' | 'visual' | 'retry' | 'reread' | 'strategy' | 'nothing'; label: string; icon: string }[] = [
  { id: 'hints', label: 'Hints', icon: '💡' },
  { id: 'steps', label: 'Step-by-step explanation', icon: '🪜' },
  { id: 'visual', label: 'Seeing it visually', icon: '👁️' },
  { id: 'retry', label: 'Trying again', icon: '🔁' },
  { id: 'reread', label: 'Re-reading or looking again', icon: '📖' },
  { id: 'strategy', label: 'A memory strategy', icon: '🧩' },
  { id: 'nothing', label: 'None of these', icon: '🤷' },
];
