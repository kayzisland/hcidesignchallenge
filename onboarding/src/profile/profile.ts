import type { Category, CategorySummary } from '../engine/types';
import { CATEGORIES } from '../engine/types';
import type { ArchetypeId, DimensionId, FormatId, HelpedId, ProfileInput } from '../state/types';
import { ARCHETYPE_ORDER } from './archetypes';
import { labelOf, QUESTION_BY_ID } from '../data/onboarding';

/* ------------------------------------------------------------------ */
/* Tunable constants (documented in the README)                        */
/* ------------------------------------------------------------------ */
export const PROFILE_CONFIG = {
  /** If the top two archetype scores differ by this much or less, the result is presented as "close". */
  closeMargin: 2,
  /** If the total evidence for the four non-flexible archetypes is below this, we default to Flexible Learner. */
  lowDataThreshold: 5,
  /** Flexible gets a bonus if this many non-flexible archetypes each reach at least `breadthShare` of the top score. */
  breadthCount: 4,
  breadthShare: 0.5,
  breadthBonus: 3,
  /** Format comparison: a format must beat the average by this much to count as a preference. */
  formatMargin: 1.5,
};

export type ArchetypeScores = Record<ArchetypeId, number>;

export interface Signal {
  id: string;
  archetype: ArchetypeId;
  points: number;
  dimension?: DimensionId;
  source: string; // plain-language evidence shown to the student
}

export interface DimensionResult {
  id: DimensionId;
  value: number; // 0..100
  evidence: string[];
}

export type Confidence = 'clear' | 'close' | 'low-data';

export interface SetupItem {
  key: string;
  label: string;
  value: string;
  because: string;
}

export interface SupportItem {
  id: string;
  text: string;
  because: string;
}

export interface Profile {
  scores: ArchetypeScores;
  ranking: ArchetypeId[];
  primary: ArchetypeId;
  runnerUp?: ArchetypeId;
  confidence: Confidence;
  signals: Signal[];
  dimensions: DimensionResult[];
  setup: SetupItem[];
  support: SupportItem[];
  evidenceCount: number;
}

const DIM_OF: Partial<Record<ArchetypeId, DimensionId>> = {
  navigator: 'visual',
  pathfinder: 'guidance',
  explorer: 'interactive',
  reflector: 'independence',
};

/** Static rules: [question id, option id, archetype, points, evidence text] */
type Rule = [string, string, ArchetypeId, number, string];
export const OPTION_RULES: Rule[] = [
  // Q2 / Q3 — what they want help with / find hard (kept deliberately light)
  ['q2', 'breakdown', 'pathfinder', 1, 'You’d like help breaking down difficult topics.'],
  ['q3', 'where', 'pathfinder', 1, 'You find it hard to know where to start.'],
  ['q3', 'engaged', 'explorer', 1, 'You find staying engaged tricky, which active tasks can help with.'],
  ['q3', 'text', 'navigator', 1, 'Large amounts of text are hard, so visual structure may help.'],
  // Q4 — guidance
  ['q4', 'walk', 'pathfinder', 4, 'You’d like to be walked through everything.'],
  ['q4', 'plan', 'pathfinder', 2, 'You’d like a plan to follow, then space to work.'],
  ['q4', 'explore', 'explorer', 2, 'You’d like to explore independently.'],
  ['q4', 'explore', 'reflector', 2, 'You’d like to explore independently.'],
  ['q4', 'unsure', 'flexible', 2, 'You’re not sure yet how much guidance you want.'],
  // Q5 — how to explore a new topic
  ['q5', 'diagram', 'navigator', 3, 'You selected visual diagrams as a way to explore new topics.'],
  ['q5', 'worked', 'pathfinder', 2, 'You selected worked examples to explore new topics.'],
  ['q5', 'interactive', 'explorer', 3, 'You selected interactive activities to explore new topics.'],
  ['q5', 'practice', 'explorer', 2, 'You selected practice questions to explore new topics.'],
  ['q5', 'written', 'reflector', 2, 'You selected short written explanations to explore new topics.'],
  ['q5', 'audio', 'reflector', 1, 'You selected audio explanations to explore new topics.'],
  ['q5', 'anything', 'flexible', 3, 'You’re happy to try anything for new topics.'],
  // Q6 — revision activities
  ['q6', 'mindmaps', 'navigator', 2, 'You find mind maps useful for revision.'],
  ['q6', 'steps', 'pathfinder', 2, 'You find step-by-step examples useful for revision.'],
  ['q6', 'flashcards', 'explorer', 1, 'You find flashcards useful for revision.'],
  ['q6', 'quizzes', 'explorer', 1, 'You find multiple-choice quizzes useful for revision.'],
  ['q6', 'explaining', 'reflector', 1, 'You find explaining concepts useful for revision.'],
  ['q6', 'summaries', 'reflector', 2, 'You find reading summaries useful for revision.'],
  ['q6', 'listening', 'reflector', 1, 'You find listening to explanations useful for revision.'],
  ['q6', 'notyet', 'flexible', 2, 'You haven’t found what works for revision yet.'],
  // Q7 — session length
  ['q7', '5', 'pathfinder', 1, 'You prefer very short sessions.'],
  ['q7', '10', 'pathfinder', 1, 'You prefer short sessions.'],
  ['q7', '25', 'reflector', 1, 'You’re comfortable with longer sessions.'],
  ['q7', 'choose', 'flexible', 1, 'You’d like to choose the session length each time.'],
  // Q8 — when wrong
  ['q8', 'hint', 'pathfinder', 1, 'When you’re wrong you’d like a hint first.'],
  ['q8', 'hint', 'explorer', 1, 'When you’re wrong you’d like a hint first, then another go.'],
  ['q8', 'steps', 'pathfinder', 3, 'When you’re wrong you’d like a step-by-step explanation.'],
  ['q8', 'similar', 'pathfinder', 1, 'When you’re wrong you’d like to see a similar example.'],
  ['q8', 'later', 'reflector', 3, 'When you’re wrong you’d like to revisit it later.'],
  ['q8', 'ask', 'flexible', 1, 'You’d like to be asked what to do each time you’re wrong.'],
  // Q10 — comfort (accessibility needs are never treated as a preference for a format)
  ['q10', 'fewer', 'pathfinder', 1, 'You’d like fewer elements on screen at once.'],
  // Q11 — how information appears
  ['q11', 'step', 'pathfinder', 2, 'You prefer information one small section at a time.'],
  ['q11', 'scroll', 'reflector', 1, 'You prefer information on a scrollable page you can revisit.'],
  ['q11', 'outline', 'navigator', 1, 'You prefer an outline with expandable sections.'],
  ['q11', 'switch', 'flexible', 1, 'You’d like to switch how information appears.'],
];

const HELPED_RULES: Record<HelpedId, { archetype: ArchetypeId; points: number; text: string } | null> = {
  steps: { archetype: 'pathfinder', points: 2, text: 'You said step-by-step explanations helped in the games.' },
  hints: { archetype: 'pathfinder', points: 1, text: 'You said hints helped in the games.' },
  visual: { archetype: 'navigator', points: 2, text: 'You said a visual demonstration helped in the games.' },
  retry: { archetype: 'explorer', points: 2, text: 'You said trying again helped in the games.' },
  reread: { archetype: 'reflector', points: 2, text: 'You said re-reading or revisiting helped in the games.' },
  strategy: { archetype: 'reflector', points: 1, text: 'You said a memory strategy helped in the games.' },
  nothing: null,
};

const FORMAT_LABEL: Record<FormatId, string> = { written: 'written', visual: 'visual', audio: 'audio' };

function selected(input: ProfileInput, qid: string): string[] {
  return input.answers[qid] ?? [];
}

export function formatPreference(r: ProfileInput['formatResults'][number]): number {
  const again = r.again === 'yes' ? 2 : r.again === 'maybe' ? 1 : 0;
  const effort = r.effort === 'low' ? 0 : r.effort === 'medium' ? 0.5 : 1;
  return r.comfort + again - effort;
}

/** Collect every piece of evidence that is actually present. Missing data adds nothing. */
export function collectSignals(input: ProfileInput): Signal[] {
  const signals: Signal[] = [];
  for (const [qid, opt, archetype, points, source] of OPTION_RULES) {
    if (selected(input, qid).includes(opt)) {
      signals.push({ id: `${qid}:${opt}:${archetype}`, archetype, points, dimension: DIM_OF[archetype], source });
    }
  }

  // Post-game feedback: what helped, counted once per kind (+1 when it was reported in 2+ games)
  const helpedCounts = new Map<HelpedId, number>();
  for (const cat of CATEGORIES) {
    for (const h of input.gameFeedback[cat]?.helped ?? []) helpedCounts.set(h, (helpedCounts.get(h) ?? 0) + 1);
  }
  for (const [h, count] of helpedCounts) {
    const rule = HELPED_RULES[h];
    if (!rule) continue;
    const bonus = count >= 2 && (h === 'steps' || h === 'visual') ? 1 : 0;
    signals.push({ id: `game:${h}`, archetype: rule.archetype, points: rule.points + bonus, dimension: DIM_OF[rule.archetype], source: rule.text });
  }

  // Behaviour: leaning on hints in many puzzles across at least two games
  const heavyHintGames = CATEGORIES.filter((c) => {
    const s = input.summaries[c];
    return s && s.answered >= 2 && s.hintRate >= 0.5;
  });
  if (heavyHintGames.length >= 2) {
    signals.push({ id: 'game:hint-use', archetype: 'pathfinder', points: 1, dimension: 'guidance', source: 'You asked for hints in many of the puzzles.' });
  }

  // Optional format comparison
  const fr = input.formatResults;
  if (fr.length >= 2) {
    const prefs = fr.map((r) => ({ r, p: formatPreference(r) }));
    const mean = prefs.reduce((s, x) => s + x.p, 0) / prefs.length;
    const best = prefs.reduce((a, b) => (b.p > a.p ? b : a));
    const tiedBest = prefs.filter((x) => x.p === best.p).length > 1;
    if (best.p - mean >= PROFILE_CONFIG.formatMargin && !tiedBest) {
      const f = best.r.format;
      const archetype: ArchetypeId = f === 'visual' ? 'navigator' : 'reflector';
      const points = f === 'visual' ? 3 : 2;
      signals.push({
        id: `format:${f}`, archetype, points, dimension: DIM_OF[archetype],
        source: `In “Try a Different Way!” the ${FORMAT_LABEL[f]} explanation felt the most comfortable and you’d like to use it again.`,
      });
    }
  }
  return signals;
}

export function scoreArchetypes(signals: Signal[]): ArchetypeScores {
  const scores: ArchetypeScores = { navigator: 0, pathfinder: 0, explorer: 0, reflector: 0, flexible: 0 };
  for (const s of signals) scores[s.archetype] += s.points;
  const cfg = PROFILE_CONFIG;
  const nonFlex = ARCHETYPE_ORDER.filter((a) => a !== 'flexible');
  const top = Math.max(...nonFlex.map((a) => scores[a]));
  if (top > 0 && nonFlex.filter((a) => scores[a] >= top * cfg.breadthShare).length >= cfg.breadthCount) {
    scores.flexible += cfg.breadthBonus;
  }
  return scores;
}

/** Highest score wins; ties go to the Flexible Learner, otherwise a fixed documented order. */
export function rankArchetypes(scores: ArchetypeScores): ArchetypeId[] {
  const tieRank = (a: ArchetypeId) => (a === 'flexible' ? -1 : ARCHETYPE_ORDER.indexOf(a));
  return [...ARCHETYPE_ORDER].sort((a, b) => scores[b] - scores[a] || tieRank(a) - tieRank(b));
}

const DIM_MAX: Record<DimensionId, number> = { visual: 11, guidance: 16, interactive: 10, independence: 12, proactive: 6 };

function proactiveSignal(input: ProfileInput): { value: number; evidence: string[] } {
  const q12 = selected(input, 'q12')[0], q13 = selected(input, 'q13')[0], q14 = selected(input, 'q14')[0];
  let v = 0;
  const evidence: string[] = [];
  if (q12) {
    v += { suggest: 3, deadlines: 2, mine: 1, none: 0 }[q12] ?? 0;
    evidence.push(`You chose “${labelOf('q12', q12)}”.`);
  }
  if (q13) {
    v += { daily: 1, weekly: 2, deadline: 1, custom: 1, none: 0 }[q13] ?? 0;
    evidence.push(`Suggestion frequency: “${labelOf('q13', q13)}”.`);
  }
  if (q14 === 'connect') {
    v += 1;
    evidence.push('You tried the demo calendar connection.');
  }
  return { value: v, evidence };
}

export function buildDimensions(signals: Signal[], input: ProfileInput): DimensionResult[] {
  const ids: DimensionId[] = ['visual', 'guidance', 'interactive', 'independence', 'proactive'];
  return ids.map((id) => {
    if (id === 'proactive') {
      const p = proactiveSignal(input);
      return { id, value: Math.round(Math.min(100, (p.value / DIM_MAX.proactive) * 100)), evidence: p.evidence };
    }
    const mine = signals.filter((s) => s.dimension === id);
    const pts = mine.reduce((s, x) => s + x.points, 0);
    return { id, value: Math.round(Math.min(100, (pts / DIM_MAX[id]) * 100)), evidence: mine.map((m) => m.source) };
  });
}

/* ---------------- Starting setup (only what the student actually told us) ---------------- */
function joinLabels(qid: string, ids: string[], max = 3): string {
  const labels = ids.filter((i) => !['anything', 'notyet'].includes(i)).map((i) => labelOf(qid, i));
  return labels.slice(0, max).join(', ') + (labels.length > max ? ` +${labels.length - max} more` : '');
}

export function buildSetup(input: ProfileInput, primary: ArchetypeId): SetupItem[] {
  const items: SetupItem[] = [];
  const q7 = selected(input, 'q7')[0];
  if (q7) items.push({ key: 'length', label: 'Suggested session duration', value: q7 === 'choose' ? 'You choose each time' : labelOf('q7', q7), because: 'From your session-length choice.' });
  const q5 = selected(input, 'q5').filter((i) => i !== 'anything');
  if (q5.length) items.push({ key: 'explore', label: 'Explanation approach', value: joinLabels('q5', q5), because: 'From how you like to explore new topics.' });
  const q6 = selected(input, 'q6').filter((i) => i !== 'notyet');
  if (q6.length) items.push({ key: 'practice', label: 'Practice activities', value: joinLabels('q6', q6), because: 'From the revision activities you find useful.' });
  const q8 = selected(input, 'q8')[0];
  if (q8) {
    const text = { hint: 'Hints before full explanations', steps: 'Step-by-step explanations', similar: 'A similar example', later: 'Revisit it later', ask: 'Ask you each time' }[q8] ?? labelOf('q8', q8);
    items.push({ key: 'feedback', label: 'When you get stuck', value: text, because: 'From what you want to happen after a wrong answer.' });
  }
  const q11 = selected(input, 'q11')[0];
  if (q11) items.push({ key: 'layout', label: 'Information layout', value: labelOf('q11', q11), because: 'From how you want information to appear.' });
  const q9 = selected(input, 'q9')[0];
  if (q9) items.push({ key: 'theme', label: 'Interface theme', value: labelOf('q9', q9), because: 'From the theme you picked.' });
  const q12 = selected(input, 'q12')[0], q13 = selected(input, 'q13')[0];
  if (q12) {
    const reminders = { suggest: 'Suggested sessions when you have time', deadlines: 'Before important deadlines', mine: 'Only reminders you set', none: 'No reminders' }[q12] ?? '';
    items.push({ key: 'reminders', label: 'Study reminders', value: q13 && q13 !== 'none' && q12 !== 'none' ? `${reminders} · ${labelOf('q13', q13).toLowerCase()}` : reminders, because: 'From your reminder choices.' });
  }
  const q10 = selected(input, 'q10').filter((i) => !['none', 'other'].includes(i));
  if (q10.length) items.push({ key: 'comfort', label: 'Comfort settings', value: joinLabels('q10', q10, 4), because: 'Applied from your comfort choices.' });
  void primary;
  return items;
}

/* ---------------- Task-support recommendations from the adaptive games ---------------- */
const CAT_LABEL: Record<Category, string> = { numerical: 'Number Quest', verbal: 'Word Garden', nonverbal: 'Pattern Planet', memory: 'Memory Meadow' };

export function buildSupport(input: ProfileInput): SupportItem[] {
  const out: SupportItem[] = [];
  const done = CATEGORIES.map((c) => input.summaries[c]).filter((s): s is CategorySummary => !!s && !s.skippedCategory && s.answered >= 2);
  const skipped = CATEGORIES.filter((c) => input.summaries[c]?.skippedCategory);

  for (const s of done) {
    const level = s.consistentLevel || Math.max(1, s.highestSuccessful);
    out.push({ id: `start-${s.category}`, text: `Start ${CAT_LABEL[s.category]}-style practice around Level ${level}.`, because: `Your answers were most consistent at Level ${s.consistentLevel || '—'}${s.highestSuccessful > s.consistentLevel ? `, with some independent successes up to Level ${s.highestSuccessful}` : ''}.` });
  }
  const strong = done.filter((s) => s.consistentLevel >= 6);
  if (strong.length) out.push({ id: 'demanding', text: 'Offer more demanding activities and stretch questions.', because: `You completed advanced problems confidently in ${strong.map((s) => CAT_LABEL[s.category]).join(' and ')}.` });

  const multiStep = done.filter((s) => (s.category === 'numerical' || s.category === 'verbal') && s.answered >= 4 && s.highestSuccessful > 0 && s.highestSuccessful <= 5);
  if (multiStep.length) out.push({ id: 'worked', text: 'Include more worked examples for multi-step problems.', because: 'Multi-step reasoning was where things became less consistent in the games.' });

  const totalAnswered = done.reduce((n, s) => n + s.answered, 0);
  const hintAnswers = done.reduce((n, s) => n + s.hintRate * s.answered, 0);
  if (done.length && totalAnswered >= 6 && hintAnswers / totalAnswered >= 0.4) {
    out.push({ id: 'hints-early', text: 'Offer optional hints earlier in practice.', because: 'Hints were used in a good share of the puzzles.' });
  }
  const mem = input.summaries.memory;
  if (mem && !mem.skippedCategory && mem.answered >= 3 && mem.highestSuccessful <= 5 && mem.highestSuccessful > 0 || (mem && mem.answered >= 3 && mem.highestSuccessful === 0)) {
    out.push({ id: 'retrieval', text: 'Add gentle retrieval practice and spaced recall.', because: 'Recall after a delay became less consistent in Memory Meadow. This is about one task format, not your memory in general.' });
  }
  const nv = input.summaries.nonverbal;
  if (nv && !nv.skippedCategory && nv.answered >= 3 && nv.consistentLevel <= 3) {
    out.push({ id: 'describe', text: 'Provide written descriptions alongside diagrams.', because: 'Pattern puzzles got tricky around the middle levels. Visual puzzles are only one kind of task.' });
  }
  if (skipped.length) out.push({ id: 'skipped', text: `No assumptions made about ${skipped.map((c) => CAT_LABEL[c]).join(', ')}.`, because: 'You skipped these games, which is completely fine.' });
  return out;
}

export function computeProfile(input: ProfileInput): Profile {
  const signals = collectSignals(input);
  const scores = scoreArchetypes(signals);
  const evidence = signals.filter((s) => s.archetype !== 'flexible').reduce((n, s) => n + s.points, 0);
  const ranking = rankArchetypes(scores);

  let primary = ranking[0];
  let confidence: Confidence = 'clear';
  if (evidence < PROFILE_CONFIG.lowDataThreshold) {
    primary = 'flexible';
    confidence = 'low-data';
  } else if (scores[ranking[0]] - scores[ranking[1]] <= PROFILE_CONFIG.closeMargin) {
    confidence = 'close';
  }
  const runnerUp = ranking.find((a) => a !== primary);
  return {
    scores, ranking, primary, runnerUp, confidence, signals,
    dimensions: buildDimensions(signals, input),
    setup: buildSetup(input, primary),
    support: buildSupport(input),
    evidenceCount: signals.length,
  };
}

export { QUESTION_BY_ID };
