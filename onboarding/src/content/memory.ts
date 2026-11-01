import type { Level, Option, Question, StudyItem } from '../engine/types';
import { buildOptions, createRng, int, pick, sample, shuffle, type Rng } from './rng';

export const OBJECTS: StudyItem[] = [
  { label: 'Apple', icon: '🍎' }, { label: 'Lantern', icon: '🏮' }, { label: 'Chair', icon: '🪑' },
  { label: 'River', icon: '🌊' }, { label: 'Key', icon: '🔑' }, { label: 'Umbrella', icon: '☂️' },
  { label: 'Book', icon: '📖' }, { label: 'Clock', icon: '⏰' }, { label: 'Shell', icon: '🐚' },
  { label: 'Kite', icon: '🪁' }, { label: 'Bicycle', icon: '🚲' }, { label: 'Mushroom', icon: '🍄' },
  { label: 'Candle', icon: '🕯️' }, { label: 'Compass', icon: '🧭' }, { label: 'Feather', icon: '🪶' },
  { label: 'Bell', icon: '🔔' }, { label: 'Ladder', icon: '🪜' }, { label: 'Anchor', icon: '⚓' },
  { label: 'Hat', icon: '🎩' }, { label: 'Drum', icon: '🥁' }, { label: 'Map', icon: '🗺️' },
  { label: 'Rose', icon: '🌹' }, { label: 'Telescope', icon: '🔭' }, { label: 'Basket', icon: '🧺' },
];

const ROOMS = ['Kitchen', 'Garden', 'Study', 'Attic', 'Cellar', 'Balcony', 'Hallway', 'Workshop'];
const NAMES = ['Mira', 'Tomas', 'Anya', 'Kofi', 'Leila', 'Jonas', 'Priya', 'Ravi'];
const VEHICLES = ['bicycle', 'tram', 'ferry', 'scooter', 'minibus'];
const PLACES = ['harbour', 'market', 'orchard', 'observatory', 'museum', 'greenhouse'];
const THINGS = ['oranges', 'notebooks', 'lanterns', 'postcards', 'seed packets'];
const GIFTS = ['blue scarf', 'brass key', 'paper kite', 'tin whistle', 'wooden spoon'];

type Task = { prompt: string; options: Option[]; correctId: string };

function interference(rng: Rng, n: number, hard: boolean): Task[] {
  return Array.from({ length: n }, () => {
    const a = int(rng, hard ? 12 : 4, hard ? 49 : 19), b = int(rng, hard ? 6 : 3, hard ? 19 : 9), c = int(rng, 2, 9);
    const ans = hard ? a + b * c : a + b;
    const { options, correctId } = buildOptions(
      rng,
      String(ans),
      [ans + 1, ans - 1, ans + 10, ans - 10, ans + 2].map(String),
    );
    return { prompt: hard ? `A quick break: what is ${a} + ${b} × ${c}?` : `A quick break: what is ${a} + ${b}?`, options, correctId };
  });
}

const itemOptions = (rng: Rng, correct: string, wrong: string[], count = 4) => buildOptions(rng, correct, wrong, count);

function seenItems(rng: Rng, n: number) {
  return sample(rng, OBJECTS, n);
}

type MemBuilt = Omit<Question, 'id' | 'category' | 'level'>;

const BUILDERS: Record<string, (rng: Rng) => MemBuilt> = {
  'recog-new': (rng) => {
    const all = seenItems(rng, 5);
    const study = all.slice(0, 4);
    const fresh = all[4];
    const { options, correctId } = itemOptions(rng, fresh.label, sample(rng, study, 3).map((s) => s.label));
    return {
      kind: 'recog-new',
      stem: 'Three of these were in the garden and one was not. Which one was NOT there?',
      memory: { study: { title: 'Objects in the garden', items: study, layout: 'row' }, interference: [], strategyTip: 'Try saying each item’s name quietly, or picture it in a different spot in the garden.' },
      options, correctId,
      hints: ['Try saying each item’s name quietly, or picture it in a different spot in the garden.', 'Take another look at the garden (this counts as using a hint).'],
      explanation: `The garden contained ${study.map((s) => s.label).join(', ')}. ${fresh.label} was new.`,
    };
  },
  second: (rng) => {
    const items = seenItems(rng, 5);
    const { options, correctId } = itemOptions(rng, items[1].label, [items[0], items[2], items[3], items[4]].map((s) => s.label));
    return {
      kind: 'second',
      stem: 'Which item appeared second?',
      memory: { study: { title: 'A row of garden finds', items, layout: 'row' }, interference: [], strategyTip: 'Number the items in your head — one, two, three…' },
      options, correctId,
      hints: ['Number the items in your head — one, two, three…', 'Take another look at the row (this counts as using a hint).'],
      explanation: `In order the items were ${items.map((s) => s.label).join(', ')}. The second was ${items[1].label}.`,
    };
  },
  after: (rng) => {
    const items = seenItems(rng, 6);
    const i = int(rng, 1, 4);
    const { options, correctId } = itemOptions(rng, items[i + 1].label, items.filter((_, k) => k !== i + 1 && k !== i).map((s) => s.label));
    return {
      kind: 'after',
      stem: `Which item came directly after the ${items[i].label}?`,
      memory: { study: { title: 'A trail of six finds', items, layout: 'row' }, interference: [], strategyTip: 'Link each item to the next in a tiny story — for example “the apple rolled into the river”.' },
      options, correctId,
      hints: ['Link each item to the next in a tiny story — for example “the apple rolled into the river”.', 'Take another look at the trail (this counts as using a hint).'],
      explanation: `The order was ${items.map((s) => s.label).join(' → ')}. After ${items[i].label} came ${items[i + 1].label}.`,
    };
  },
  story: (rng) => {
    const name = pick(rng, NAMES);
    const friend = pick(rng, NAMES.filter((n) => n !== name));
    const vehicle = pick(rng, VEHICLES), place = pick(rng, PLACES), thing = pick(rng, THINGS), gift = pick(rng, GIFTS);
    const n = int(rng, 3, 9);
    const text = `${name} took a ${vehicle} to the ${place}, carrying ${n} ${thing}. At the gate, ${friend} handed ${name} a ${gift}.`;
    const ask = pick(rng, ['vehicle', 'place', 'count', 'gift'] as const);
    const build = {
      vehicle: () => ({ q: `How did ${name} travel?`, ...itemOptions(rng, vehicle, VEHICLES.filter((v) => v !== vehicle)) }),
      place: () => ({ q: `Where was ${name} going?`, ...itemOptions(rng, `the ${place}`, PLACES.filter((v) => v !== place).map((p) => `the ${p}`)) }),
      count: () => ({ q: `How many ${thing} was ${name} carrying?`, ...itemOptions(rng, String(n), [n + 1, n - 1, n + 2, n - 2].map(String)) }),
      gift: () => ({ q: `What did ${friend} hand to ${name}?`, ...itemOptions(rng, `a ${gift}`, GIFTS.filter((g) => g !== gift).map((g) => `a ${g}`)) }),
    }[ask]();
    return {
      kind: 'story',
      stem: build.q,
      memory: { study: { title: 'A short illustrated story', lines: [text], layout: 'story' }, interference: [], strategyTip: 'Picture the scene as a little film: where, who, what they carry.' },
      options: build.options, correctId: build.correctId,
      hints: ['Picture the scene as a little film: where, who, what they carry.', 'Take another look at the story (this counts as using a hint).'],
      explanation: `The story said: “${text}”`,
    };
  },
  order: (rng) => {
    const items = seenItems(rng, 6);
    const labels = items.map((s) => s.label);
    const swaps = (arr: string[], i: number) => { const c = [...arr]; [c[i], c[i + 1]] = [c[i + 1], c[i]]; return c; };
    const wrong = [swaps(labels, int(rng, 0, 4)), swaps(labels, int(rng, 0, 4)), [...labels].reverse(), [...labels.slice(2), ...labels.slice(0, 2)]].map((l) => l.join(' → '));
    const correct = labels.join(' → ');
    const { options, correctId } = itemOptions(rng, correct, wrong);
    return {
      kind: 'order',
      stem: 'Which sequence matches the order in which the items appeared?',
      memory: { study: { title: 'Remember the order', items, layout: 'row' }, interference: [], strategyTip: 'Chunk the six items into two groups of three.' },
      options, correctId,
      hints: ['Chunk the six items into two groups of three.', 'Take another look at the order (this counts as using a hint).'],
      explanation: `The original order was ${correct}.`,
    };
  },
  'pairs-where': (rng) => {
    const items = seenItems(rng, 4);
    const rooms = sample(rng, ROOMS, 4);
    const k = int(rng, 0, 3);
    const lines = items.map((it, i) => `${it.icon ?? ''} ${it.label}: ${rooms[i]}`);
    const { options, correctId } = itemOptions(rng, rooms[k], rooms.filter((_, i) => i !== k).concat(ROOMS.filter((r) => !rooms.includes(r))));
    return {
      kind: 'pairs-where',
      stem: `Where was the ${items[k].label.toLowerCase()}?`,
      memory: { study: { title: 'Which item is in which room?', lines, layout: 'list' }, interference: interference(rng, 1, false), strategyTip: 'Imagine walking through each room and placing its item there.' },
      options, correctId,
      hints: ['Imagine walking through each room and placing its item there.', 'Take another look at the list (this counts as using a hint).'],
      explanation: `${items[k].label} was in the ${rooms[k]}.`,
    };
  },
  'pairs-same-room': (rng) => {
    const items = seenItems(rng, 6);
    const rooms = sample(rng, ROOMS, 5);
    const roomOf = [rooms[0], rooms[0], rooms[1], rooms[2], rooms[3], rooms[4]];
    const order = shuffle(rng, [0, 1, 2, 3, 4, 5]);
    const lines = order.map((i) => `${items[i].icon ?? ''} ${items[i].label}: ${roomOf[i]}`);
    const pair = (a: number, b: number) => `${items[a].label} and ${items[b].label}`;
    const { options, correctId } = itemOptions(rng, pair(0, 1), [pair(0, 2), pair(1, 3), pair(2, 4), pair(3, 5), pair(4, 5)]);
    return {
      kind: 'pairs-same-room',
      stem: 'Which two items were in the same room?',
      memory: { study: { title: 'Which item is in which room?', lines, layout: 'list' }, interference: interference(rng, 1, true), strategyTip: 'Group the items by room rather than memorising the list top to bottom.' },
      options, correctId,
      hints: ['Group the items by room rather than memorising the list top to bottom.', 'Take another look at the list (this counts as using a hint).'],
      explanation: `${items[0].label} and ${items[1].label} were both in the ${rooms[0]}; every other room held one item.`,
    };
  },
  'scene-change': (rng) => {
    const pool = shuffle(rng, OBJECTS);
    const a = pool.slice(0, 6);
    const fresh = pool[6];
    const idx = int(rng, 0, 5);
    const b = a.map((x, i) => (i === idx ? fresh : x));
    const others = b.filter((_, i) => i !== idx);
    const { options, correctId } = itemOptions(rng, fresh.label, sample(rng, others, 3).map((s) => s.label));
    return {
      kind: 'scene-change',
      stem: 'Look at the scene again. Which item was NOT in the original scene?',
      memory: {
        study: { title: 'The original scene', items: a, layout: 'grid' },
        interference: interference(rng, 2, true),
        recallScene: b,
        strategyTip: 'Remember where things sat: top row, bottom row, left, right.',
      },
      options, correctId,
      hints: ['Remember where things sat: top row, bottom row, left, right.', 'Take another look at the original scene (this counts as using a hint).'],
      explanation: `The original scene had ${a.map((s) => s.label).join(', ')}. ${fresh.label} replaced ${a[idx].label}.`,
    };
  },
  update: (rng) => {
    const items = seenItems(rng, 5);
    const rooms = sample(rng, ROOMS, 6);
    const lines = items.map((it, i) => `${it.icon ?? ''} The ${it.label.toLowerCase()} is in the ${rooms[i]}.`);
    const k = int(rng, 0, 4);
    const first = rooms[k], second = rooms[5];
    const third = rooms.find((r, i) => i !== k && i !== 5 && r !== first && r !== second && i < 5 && i !== k)!;
    const updates = [`➡️ The ${items[k].label.toLowerCase()} is moved to the ${second}.`, `➡️ The ${items[k].label.toLowerCase()} is moved to the ${third}.`];
    const decoys = [`➡️ The ${items[(k + 1) % 5].label.toLowerCase()} is moved to the ${rooms[5]}.`];
    const { options, correctId } = itemOptions(rng, third, [first, second, ROOMS.find((r) => !rooms.includes(r))!]);
    return {
      kind: 'update',
      stem: `Where did the ${items[k].label.toLowerCase()} end up?`,
      memory: {
        study: { title: 'Rooms, then some moves', lines: [...lines, ...updates.slice(0, 1), ...decoys, updates[1]], layout: 'list' },
        interference: interference(rng, 2, true),
        strategyTip: 'Keep only the latest position of each item — replace the old picture with the new one.',
      },
      options, correctId,
      hints: ['Keep only the latest position of each item — replace the old picture with the new one.', 'Take another look at the list (this counts as using a hint).'],
      explanation: `The ${items[k].label.toLowerCase()} started in the ${first}, moved to the ${second}, then to the ${third}. The final position is the ${third}.`,
    };
  },
};

export const MEMORY_KINDS_BY_LEVEL: Record<Level, string[]> = {
  1: ['recog-new'],
  2: ['second'],
  3: ['after'],
  4: ['story', 'order'],
  5: ['pairs-where'],
  6: ['pairs-same-room'],
  7: ['scene-change'],
  8: ['update'],
};

export function generateMemory(level: Level, seed: number): Question {
  const rng = createRng(seed);
  const kind = pick(rng, MEMORY_KINDS_BY_LEVEL[level]);
  const built = BUILDERS[kind](rng);
  return { id: `mem-g${level}-${seed}`, category: 'memory', level, ...built, meta: { kind, params: [] } };
}

export const generateMemoryFromId = (id: string): Question | undefined => {
  const m = /^mem-g([1-8])-(\d+)$/.exec(id);
  return m ? generateMemory(Number(m[1]) as Level, Number(m[2])) : undefined;
};

/** Practice item for Memory Meadow — a tiny, un-scored warm-up. */
export const PRACTICE_MEMORY: Question = generateMemory(1, 7);
