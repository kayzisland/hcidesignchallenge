import type { ArchetypeId, DimensionId } from '../state/types';

export interface Archetype {
  id: ArchetypeId;
  name: string;
  short: string;
  emoji: string;
  hue: string; // CSS colour variable name suffix
  description: string;
  support: string[];
}

/** Tie-break order when scores are equal (the Flexible Learner always wins ties — see profile.ts). */
export const ARCHETYPE_ORDER: ArchetypeId[] = ['pathfinder', 'navigator', 'explorer', 'reflector', 'flexible'];

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  navigator: {
    id: 'navigator', name: 'The Visual Navigator', short: 'Visual Navigator', emoji: '🧭', hue: 'lavender',
    description: 'Your choices suggest you like to start with the big picture — diagrams, maps and clearly organised structure — before filling in the detail.',
    support: ['Visual summaries', 'Diagrams and concept maps', 'Clearly organised content', 'Interactive visual explanations'],
  },
  pathfinder: {
    id: 'pathfinder', name: 'The Guided Pathfinder', short: 'Guided Pathfinder', emoji: '🗺️', hue: 'mint',
    description: 'Your choices suggest that you like knowing where you’re going before diving into something new. You may find it helpful to work through topics in smaller steps, with the option to ask for hints whenever you need them.',
    support: ['Step-by-step lessons', 'Short learning sections', 'Frequent check-ins', 'Optional hints', 'Clear progress indicators'],
  },
  explorer: {
    id: 'explorer', name: 'The Active Explorer', short: 'Active Explorer', emoji: '🔭', hue: 'coral',
    description: 'Your choices suggest that you like learning by doing — trying things, testing ideas and getting quick feedback as you go.',
    support: ['Interactive examples', 'Frequent practice questions', 'Discovery-based activities', 'Immediate, encouraging feedback'],
  },
  reflector: {
    id: 'reflector', name: 'The Reflective Thinker', short: 'Reflective Thinker', emoji: '🌙', hue: 'blue',
    description: 'Your choices suggest that you like space to take information in carefully, revisit explanations, and think things through at your own pace.',
    support: ['Self-paced sessions', 'Written or audio explanations', 'Time to reflect', 'Flexible revision activities', 'Minimal time pressure'],
  },
  flexible: {
    id: 'flexible', name: 'The Flexible Learner', short: 'Flexible Learner', emoji: '🌈', hue: 'peach',
    description: 'Your preferences are varied, or we don’t have enough information yet — and that’s completely fine. We’ll start with a mix and learn from what you actually use.',
    support: ['A mix of presentation formats', 'Chances to try different learning methods', 'Regular preference check-ins', 'Adapting as you give feedback'],
  },
};

export const DIMENSIONS: { id: DimensionId; label: string; description: string }[] = [
  { id: 'visual', label: 'Visual explanations', description: 'How much you favour diagrams, maps and visual structure' },
  { id: 'guidance', label: 'Structured guidance', description: 'How much you favour clear steps, hints and a route to follow' },
  { id: 'interactive', label: 'Interactive activities', description: 'How much you favour hands-on tasks and practice' },
  { id: 'independence', label: 'Independent pacing', description: 'How much you favour your own pace, reflection and revisiting' },
  { id: 'proactive', label: 'Proactive support', description: 'How much you’d like suggestions and reminders' },
];
