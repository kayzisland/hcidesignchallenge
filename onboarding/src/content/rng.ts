import type { Option } from '../engine/types';

export type Rng = () => number;

/** Small deterministic PRNG (mulberry32) so generated questions can be rebuilt from their id. */
export function createRng(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const int = (rng: Rng, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));
export const pick = <T,>(rng: Rng, arr: readonly T[]): T => arr[Math.floor(rng() * arr.length)];

export function shuffle<T>(rng: Rng, arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample<T>(rng: Rng, arr: readonly T[], n: number): T[] {
  return shuffle(rng, arr).slice(0, n);
}

const IDS = ['a', 'b', 'c', 'd', 'e', 'f'];

/** Build shuffled options; the correct label is placed at a random position. Labels are de-duplicated. */
export function buildOptions(
  rng: Rng,
  correct: string,
  distractors: string[],
  count = 4,
): { options: Option[]; correctId: string } {
  const labels: string[] = [];
  for (const d of distractors) {
    if (d !== correct && !labels.includes(d)) labels.push(d);
  }
  const chosen = labels.slice(0, count - 1);
  const all = shuffle(rng, [correct, ...chosen]);
  const options = all.map((label, i) => ({ id: IDS[i], label }));
  return { options, correctId: options.find((o) => o.label === correct)!.id };
}

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
export const fraction = (n: number, d: number): string => {
  const g = gcd(n, d);
  return d / g === 1 ? `${n / g}` : `${n / g}/${d / g}`;
};

/** Plausible numeric distractors around an answer, padded if needed. */
export function numericDistractors(answer: number, plausible: number[], fmt: (n: number) => string = String): string[] {
  const out: string[] = [];
  const push = (n: number) => {
    const s = fmt(n);
    if (n !== answer && Number.isFinite(n) && !out.includes(s)) out.push(s);
  };
  plausible.forEach(push);
  const step = Math.max(1, Math.round(Math.abs(answer) * 0.1));
  for (const k of [1, -1, 2, -2, 3, -3, 4]) push(answer + k * step);
  return out;
}
