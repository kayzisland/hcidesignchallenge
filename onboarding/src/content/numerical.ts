import type { DataSpec, Level, Question } from '../engine/types';
import { buildOptions, createRng, fraction, int, numericDistractors, pick, type Rng } from './rng';

/* ------------------------------------------------------------------ */
/* Authored numerical questions (hand-verified)                        */
/* ------------------------------------------------------------------ */
export const AUTHORED_NUMERICAL: Question[] = [
  {
    id: 'num-a1-portal',
    category: 'numerical',
    level: 1,
    kind: 'sequence',
    stem: '3 → 6 → 12 → 24 → ?',
    options: [
      { id: 'a', label: '30' },
      { id: 'b', label: '36' },
      { id: 'c', label: '48' },
      { id: 'd', label: '54' },
    ],
    correctId: 'c',
    hints: ['Look at how each number relates to the one before it.', 'Each number is the previous one multiplied by 2.'],
    explanation: 'Each step doubles the number: 3×2=6, 6×2=12, 12×2=24, so 24×2=48.',
  },
  {
    id: 'num-a2-train',
    category: 'numerical',
    level: 2,
    kind: 'arithmetic',
    stem: 'A train leaves at 09:40 and the journey takes 1 hour 35 minutes. When does it arrive?',
    options: [
      { id: 'a', label: '10:55' },
      { id: 'b', label: '11:05' },
      { id: 'c', label: '11:15' },
      { id: 'd', label: '11:25' },
    ],
    correctId: 'c',
    hints: ['Add the hour first, then the minutes.', '09:40 + 1h = 10:40. Then add 35 minutes.'],
    explanation: '09:40 + 1h = 10:40; 10:40 + 35 min = 11:15 (20 minutes gets you to 11:00, then 15 more).',
  },
  {
    id: 'num-a3-mixed',
    category: 'numerical',
    level: 3,
    kind: 'percentages',
    stem: 'What is 15% of 240, plus one quarter of 48?',
    options: [
      { id: 'a', label: '42' },
      { id: 'b', label: '48' },
      { id: 'c', label: '50' },
      { id: 'd', label: '60' },
    ],
    correctId: 'b',
    hints: ['Work out the two parts separately first.', '10% of 240 is 24; 5% is 12.'],
    explanation: '15% of 240 = 36. A quarter of 48 = 12. 36 + 12 = 48.',
  },
  {
    id: 'num-a4-recipe',
    category: 'numerical',
    level: 4,
    kind: 'proportion',
    stem: 'A recipe for 6 people uses 450 g of flour. How much flour is needed for 10 people?',
    options: [
      { id: 'a', label: '600 g' },
      { id: 'b', label: '675 g' },
      { id: 'c', label: '750 g' },
      { id: 'd', label: '900 g' },
    ],
    correctId: 'c',
    hints: ['Find the amount for one person first.', '450 ÷ 6 = 75 g per person.'],
    explanation: '450 ÷ 6 = 75 g per person, and 75 × 10 = 750 g.',
  },
  {
    id: 'num-a5-discount',
    category: 'numerical',
    level: 5,
    kind: 'multi-step',
    stem: 'A shirt costs £80. It is reduced by 25%, then a further 10% is taken off the reduced price. What is the final price?',
    options: [
      { id: 'a', label: '£52' },
      { id: 'b', label: '£54' },
      { id: 'c', label: '£56' },
      { id: 'd', label: '£60' },
    ],
    correctId: 'b',
    hints: ['The second discount applies to the new price, not the original.', 'After the first discount: £60.'],
    explanation: '£80 × 0.75 = £60, then £60 × 0.90 = £54. (Two discounts of 25% and 10% are not the same as 35% off.)',
  },
  {
    id: 'num-a6-prob',
    category: 'numerical',
    level: 6,
    kind: 'probability',
    stem: 'A bag holds 4 red and 6 blue counters. Two counters are drawn without replacement. What is the probability that exactly one is red?',
    options: [
      { id: 'a', label: '12/25' },
      { id: 'b', label: '8/15' },
      { id: 'c', label: '4/9' },
      { id: 'd', label: '2/5' },
    ],
    correctId: 'b',
    hints: ['There are two ways to get exactly one red: red-then-blue or blue-then-red.', 'P(R then B) = 4/10 × 6/9.'],
    explanation: 'P(R,B) = 4/10 × 6/9 = 24/90 and P(B,R) = 6/10 × 4/9 = 24/90. Total 48/90 = 8/15.',
  },
  {
    id: 'num-a7-ratio',
    category: 'numerical',
    level: 7,
    kind: 'chained-ratio',
    stem: 'x : y = 2 : 3 and y : z = 4 : 5. If x + y + z = 70, what is y?',
    options: [
      { id: 'a', label: '20' },
      { id: 'b', label: '24' },
      { id: 'c', label: '28' },
      { id: 'd', label: '30' },
    ],
    correctId: 'b',
    hints: ['Make the y-part the same in both ratios.', 'Scale 2:3 by 4 and 4:5 by 3 so y matches: x:y:z = 8:12:15.'],
    explanation: 'x:y:z = 8:12:15, which sums to 35 parts. 70 ÷ 35 = 2, so y = 12 × 2 = 24.',
  },
  {
    id: 'num-a8-digits',
    category: 'numerical',
    level: 8,
    kind: 'constraint-puzzle',
    stem: 'A two-digit number has digits that add to 11. Reversing its digits gives a number that is 27 greater. What is the original number?',
    options: [
      { id: 'a', label: '29' },
      { id: 'b', label: '38' },
      { id: 'c', label: '47' },
      { id: 'd', label: '56' },
    ],
    correctId: 'c',
    hints: ['Write the number as 10a + b and set up two equations.', 'Reversing gives 10b + a, so 9(b − a) = 27.'],
    explanation: 'a + b = 11 and b − a = 3 gives b = 7, a = 4. Check: 74 − 47 = 27 ✓.',
  },
];

/* ------------------------------------------------------------------ */
/* Procedural generators                                              */
/* ------------------------------------------------------------------ */

interface Built {
  stem: string;
  correct: string;
  wrong: string[];
  hints: [string, string];
  explanation: string;
  params: number[];
  data?: DataSpec;
  kind: string;
}

function finish(rng: Rng, level: Level, id: string, b: Built): Question {
  const { options, correctId } = buildOptions(rng, b.correct, b.wrong);
  return {
    id,
    category: 'numerical',
    level,
    kind: b.kind,
    stem: b.stem,
    data: b.data,
    options,
    correctId,
    hints: b.hints,
    explanation: b.explanation,
    meta: { kind: b.kind, params: b.params },
  };
}

const gp = (n: number) => `£${n}`;
const pc = (n: number) => `${n}%`;

const GENERATORS: Record<string, (rng: Rng) => Built> = {
  'seq-add': (rng) => {
    const s = int(rng, 2, 20), d = int(rng, 2, 9);
    const t = (i: number) => s + d * i;
    const ans = t(5);
    return {
      kind: 'seq-add', params: [s, d],
      stem: `${[0, 1, 2, 3, 4].map(t).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [ans + 1, ans - 1, ans + d]),
      hints: ['Find the gap between neighbouring numbers.', `The gap is always ${d}.`],
      explanation: `Each step adds ${d}, so the next number is ${t(4)} + ${d} = ${ans}.`,
    };
  },
  'seq-mul': (rng) => {
    const s = int(rng, 1, 4), m = pick(rng, [2, 3, 3, 4] as const);
    const t = (i: number) => s * m ** i;
    const ans = t(4);
    return {
      kind: 'seq-mul', params: [s, m],
      stem: `${[0, 1, 2, 3].map(t).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t(3) + (t(3) - t(2)), ans + m, ans - m]),
      hints: ['Try dividing a number by the one before it.', `Each number is multiplied by ${m}.`],
      explanation: `Each step multiplies by ${m}: ${t(3)} × ${m} = ${ans}.`,
    };
  },
  pack: (rng) => {
    const per = int(rng, 6, 15), n = int(rng, 4, 9);
    const ans = per * n;
    return {
      kind: 'pack', params: [per, n],
      stem: `A pack holds ${per} pencils. How many pencils are in ${n} packs?`,
      correct: String(ans), wrong: numericDistractors(ans, [per + n, ans + per, ans - per]),
      hints: ['Is this adding or multiplying?', `${n} equal groups of ${per}.`],
      explanation: `${per} × ${n} = ${ans}.`,
    };
  },
  'seq-growdiff': (rng) => {
    const s = int(rng, 1, 12), d0 = int(rng, 1, 3);
    const t: number[] = [s];
    for (let i = 0; i < 5; i++) t.push(t[i] + d0 + i);
    const ans = t[5];
    return {
      kind: 'seq-growdiff', params: [s, d0],
      stem: `${t.slice(0, 5).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [ans - 1, ans + 1, t[4] + (t[4] - t[3])]),
      hints: ['The gaps between numbers are not constant — look at the gaps themselves.', `The gaps are ${[0, 1, 2, 3].map((i) => d0 + i).join(', ')}… growing by 1.`],
      explanation: `The differences grow by 1 each time (${d0}, ${d0 + 1}, ${d0 + 2}, ${d0 + 3}), so the next difference is ${d0 + 4}: ${t[4]} + ${d0 + 4} = ${ans}.`,
    };
  },
  'seq-square': (rng) => {
    const k = int(rng, -3, 6), n0 = int(rng, 1, 4);
    const t = (i: number) => (n0 + i) ** 2 + k;
    const ans = t(5);
    return {
      kind: 'seq-square', params: [k, n0],
      stem: `${[0, 1, 2, 3, 4].map(t).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t(4) + (t(4) - t(3)), ans + 2, ans - 2]),
      hints: ['The gaps are not constant. Do the gaps follow a pattern?', 'These are square numbers with a constant added or removed.'],
      explanation: `The terms are n² ${k >= 0 ? '+' : '−'} ${Math.abs(k)} for n = ${n0}, ${n0 + 1}, … so the next is ${n0 + 5}² ${k >= 0 ? '+' : '−'} ${Math.abs(k)} = ${ans}.`,
    };
  },
  change: (rng) => {
    const n = int(rng, 2, 5), a = int(rng, 2, 4), b = int(rng, 1, 3) + 0.5;
    const pay = 20;
    const ans = pay - n * a - b;
    const f = (x: number) => `£${x.toFixed(2)}`;
    return {
      kind: 'change', params: [n, a, b * 2, pay],
      stem: `Sam buys ${n} notebooks at £${a.toFixed(2)} each and one pen for £${b.toFixed(2)}. He pays with £${pay}. How much change does he get?`,
      correct: f(ans), wrong: numericDistractors(ans, [pay - n * a, pay - n * a - b - a, pay - a - b], f),
      hints: ['Add up everything he buys first.', `Notebooks cost ${n} × £${a.toFixed(2)}.`],
      explanation: `${n} × £${a.toFixed(2)} = £${(n * a).toFixed(2)}; plus the pen = £${(n * a + b).toFixed(2)}. £${pay} − that = ${f(ans)}.`,
    };
  },
  'seq-alt': (rng) => {
    const s = int(rng, 2, 8), a = int(rng, 2, 7), m = pick(rng, [2, 3] as const);
    const t = [s];
    for (let i = 1; i <= 5; i++) t.push(i % 2 === 1 ? t[i - 1] + a : t[i - 1] * m);
    const ans = t[5];
    return {
      kind: 'seq-alt', params: [s, a, m],
      stem: `${t.slice(0, 5).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t[4] * m, t[4] + a * 2, ans + a]),
      hints: ['Two different operations may be taking turns.', `One step adds ${a}; the other multiplies by ${m}.`],
      explanation: `The operations alternate: +${a}, ×${m}, +${a}, ×${m}, … The next step is +${a}: ${t[4]} + ${a} = ${ans}.`,
    };
  },
  percent: (rng) => {
    let p = 15, y = 240;
    do {
      p = pick(rng, [5, 15, 20, 35, 45, 60, 65, 75] as const);
      y = int(rng, 4, 30) * 20;
    } while ((p * y) % 100 !== 0);
    const ans = (p * y) / 100;
    return {
      kind: 'percent', params: [p, y],
      stem: `What is ${p}% of ${y}?`,
      correct: String(ans), wrong: numericDistractors(ans, [y / p, ans / 2, ans * 2, y - ans]),
      hints: ['Start from 10% (divide by 10).', `10% of ${y} is ${y / 10}. Build ${p}% from 10% and 5% pieces.`],
      explanation: `${p}% of ${y} = ${p}/100 × ${y} = ${ans}.`,
    };
  },
  'fraction-of': (rng) => {
    const dens = [[2, 3], [3, 4], [2, 5], [3, 5]] as const;
    let n1 = 2, d1 = 3, n2 = 3, d2 = 4, x = 48;
    do {
      [n1, d1] = pick(rng, dens);
      [n2, d2] = pick(rng, dens);
      x = int(rng, 2, 12) * d1 * d2;
    } while ((x * n1 * n2) % (d1 * d2) !== 0);
    const ans = (x * n1 * n2) / (d1 * d2);
    return {
      kind: 'fraction-of', params: [n1, d1, n2, d2, x],
      stem: `What is ${n1}/${d1} of ${n2}/${d2} of ${x}?`,
      correct: String(ans), wrong: numericDistractors(ans, [(x * n1) / d1, (x * n2) / d2, ans + d1]),
      hints: ['Work from the inside out.', `${n2}/${d2} of ${x} = ${(x * n2) / d2}.`],
      explanation: `${n2}/${d2} of ${x} = ${(x * n2) / d2}; then ${n1}/${d1} of that = ${ans}.`,
    };
  },
  proportion: (rng) => {
    let w1 = 8, d1 = 6, w2 = 12;
    do {
      w1 = pick(rng, [4, 6, 8, 9, 10, 12] as const);
      d1 = int(rng, 3, 12);
      w2 = pick(rng, [2, 3, 4, 5, 6, 8, 12, 16, 18, 24] as const);
    } while ((w1 * d1) % w2 !== 0 || w1 === w2);
    const ans = (w1 * d1) / w2;
    return {
      kind: 'proportion', params: [w1, d1, w2],
      stem: `${w1} workers take ${d1} days to finish a job. Working at the same rate, how many days would ${w2} workers need?`,
      correct: String(ans), wrong: numericDistractors(ans, [(d1 * w2) / w1, d1 + (w2 - w1), Math.round((d1 * w2) / w1) + 1]),
      hints: ['More workers means fewer days — this is inverse proportion.', `Total work = ${w1} × ${d1} worker-days.`],
      explanation: `The job is ${w1} × ${d1} = ${w1 * d1} worker-days. With ${w2} workers: ${w1 * d1} ÷ ${w2} = ${ans} days.`,
    };
  },
  'bars-pct': (rng) => {
    let q1 = 40, q3 = 50, q2 = 45, q4 = 55;
    do {
      q1 = int(rng, 4, 20) * 10;
      q3 = q1 + pick(rng, [10, 20, 30, 40] as const) * (q1 >= 100 ? 2 : 1);
      q2 = q1 + int(rng, -1, 3) * 10;
      q4 = q3 + int(rng, -2, 2) * 10;
    } while (((q3 - q1) * 100) % q1 !== 0 || q2 < 10 || q4 < 10);
    const ans = ((q3 - q1) * 100) / q1;
    const data: DataSpec = {
      kind: 'bars', title: 'Weekly study sessions booked', labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [{ name: 'Sessions', values: [q1, q2, q3, q4] }],
    };
    return {
      kind: 'bars-pct', params: [q1, q2, q3, q4], data,
      stem: 'By what percentage did bookings rise from Q1 to Q3?',
      correct: pc(ans), wrong: numericDistractors(ans, [q3 - q1, ((q3 - q1) * 100) / q3, ans + 10], pc),
      hints: ['Percentage change = change ÷ starting value × 100.', `The change is ${q3 - q1} and the starting value is ${q1}.`],
      explanation: `Change = ${q3} − ${q1} = ${q3 - q1}. ${q3 - q1} ÷ ${q1} = ${ans / 100} = ${ans}%. (Dividing by Q3 instead would be a common slip.)`,
    };
  },
  'ratio-share': (rng) => {
    let a = 2, b = 3, c = 5, total = 400;
    do {
      a = int(rng, 1, 4); b = int(rng, 2, 6); c = int(rng, 3, 8);
      total = int(rng, 4, 40) * 10;
    } while (total % (a + b + c) !== 0 || new Set([a, b, c]).size < 3);
    const ans = (Math.max(a, b, c) * total) / (a + b + c);
    return {
      kind: 'ratio-share', params: [a, b, c, total],
      stem: `£${total} is shared between three people in the ratio ${a} : ${b} : ${c}. How much does the person with the largest share receive?`,
      correct: gp(ans), wrong: numericDistractors(ans, [total / 3, Math.max(a, b, c) * (total / 10), ans + total / (a + b + c)], gp),
      hints: ['Add the parts to find how many equal shares there are.', `There are ${a + b + c} parts in total.`],
      explanation: `One part = £${total} ÷ ${a + b + c} = £${total / (a + b + c)}. The largest share is ${Math.max(a, b, c)} parts = £${ans}.`,
    };
  },
  'pct-updown': (rng) => {
    let price = 200, p = 20, q = 25;
    do {
      price = int(rng, 4, 30) * 20;
      p = pick(rng, [10, 20, 25, 30, 50] as const);
      q = pick(rng, [10, 20, 25, 30, 50] as const);
    } while ((price * (100 + p) * (100 - q)) % 10000 !== 0 || p === q);
    const ans = (price * (100 + p) * (100 - q)) / 10000;
    return {
      kind: 'pct-updown', params: [price, p, q],
      stem: `A price of £${price} rises by ${p}%, and then the new price falls by ${q}%. What is the final price?`,
      correct: gp(ans), wrong: numericDistractors(ans, [(price * (100 + p - q)) / 100, price, (price * (100 + q - p)) / 100], gp),
      hints: ['Apply the changes one after the other; the second change uses the new price.', `After the rise the price is £${(price * (100 + p)) / 100}.`],
      explanation: `£${price} × ${(100 + p) / 100} = £${(price * (100 + p)) / 100}; then × ${(100 - q) / 100} = £${ans}. A +${p}% and −${q}% change does not simply net to ${p - q}%.`,
    };
  },
  'seq-interleave': (rng) => {
    const s1 = int(rng, 2, 9), d1 = int(rng, 2, 5), s2 = int(rng, 30, 50), d2 = -int(rng, 2, 5);
    const t: number[] = [];
    for (let i = 0; i < 7; i++) t.push(i % 2 === 0 ? s1 + d1 * (i / 2) : s2 + d2 * ((i - 1) / 2));
    const ans = t[6];
    return {
      kind: 'seq-interleave', params: [s1, d1, s2, d2],
      stem: `${t.slice(0, 6).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t[5] + d2, t[4] + d2, ans + d1]),
      hints: ['Two sequences may be woven together. Look at every other number.', `Positions 1, 3, 5, … go up by ${d1}.`],
      explanation: `Odd positions (${t[0]}, ${t[2]}, ${t[4]}) rise by ${d1}; even positions (${t[1]}, ${t[3]}, ${t[5]}) change by ${d2}. The 7th term continues the odd-position sequence: ${t[4]} + ${d1} = ${ans}.`,
    };
  },
  'prob-repl': (rng) => {
    const r = int(rng, 2, 6), b = int(rng, 2, 7), t = r + b;
    const ans = fraction(r * r, t * t);
    return {
      kind: 'prob-repl', params: [r, b],
      stem: `A bag holds ${r} red and ${b} blue counters. One counter is drawn, its colour noted, and it is put back. A second counter is then drawn. What is the probability both are red?`,
      correct: ans, wrong: [fraction(r * (r - 1), t * (t - 1)), fraction(2 * r, t), fraction(r, t), fraction(r * r, t * t + 1)],
      hints: ['Because the counter is replaced, the two draws are independent.', `P(red) = ${r}/${t} each time.`],
      explanation: `P(red) = ${r}/${t}. Independent draws multiply: (${r}/${t})² = ${ans}.`,
    };
  },
  'mean-add': (rng) => {
    let m = 12, n = 5, x = 18;
    do {
      m = int(rng, 10, 40); n = int(rng, 4, 9); x = int(rng, 5, 60);
    } while ((m * n + x) % (n + 1) !== 0);
    const ans = (m * n + x) / (n + 1);
    return {
      kind: 'mean-add', params: [m, n, x],
      stem: `The mean of ${n} numbers is ${m}. A new number, ${x}, is added to the set. What is the new mean?`,
      correct: String(ans), wrong: numericDistractors(ans, [(m + x) / 2, m, (m * n + x) / n]),
      hints: ['Convert the mean back into a total.', `The original total is ${n} × ${m} = ${n * m}.`],
      explanation: `Total = ${m * n}; adding ${x} gives ${m * n + x} across ${n + 1} numbers: ${m * n + x} ÷ ${n + 1} = ${ans}.`,
    };
  },
  collatz: (rng) => {
    const start = int(rng, 5, 30), steps = int(rng, 4, 6);
    let v = start;
    const trail = [v];
    for (let i = 0; i < steps; i++) { v = v % 2 === 0 ? v / 2 : 3 * v + 1; trail.push(v); }
    return {
      kind: 'collatz', params: [start, steps],
      stem: `Start with ${start}. Repeat this rule ${steps} times: if the number is even, halve it; if it is odd, multiply by 3 and add 1. What number do you finish on?`,
      correct: String(v), wrong: numericDistractors(v, [trail[steps - 1], trail[Math.max(0, steps - 2)], v * 2, v + 1]),
      hints: ['Follow the rule one step at a time and write each result down.', `Step 1 gives ${trail[1]}.`],
      explanation: `The chain is ${trail.join(' → ')}. After ${steps} steps you reach ${v}.`,
    };
  },
  'prob-norepl': (rng) => {
    const r = int(rng, 3, 6), b = int(rng, 3, 7), t = r + b;
    const ans = fraction(r * (r - 1), t * (t - 1));
    return {
      kind: 'prob-norepl', params: [r, b],
      stem: `A bag holds ${r} red and ${b} blue counters. Two counters are drawn together without replacement. What is the probability that both are red?`,
      correct: ans, wrong: [fraction(r * r, t * t), fraction(r * (r - 1), t * t), fraction(2 * r, t * (t - 1)), fraction(r, t)],
      hints: ['After one red counter is removed, the bag changes.', `P(second red | first red) = ${r - 1}/${t - 1}.`],
      explanation: `${r}/${t} × ${r - 1}/${t - 1} = ${ans}.`,
    };
  },
  'ratio-percent': (rng) => {
    let a = 3, b = 2, k = 10, p = 20, q = 50;
    do {
      a = int(rng, 2, 4); b = int(rng, 2, 5); k = int(rng, 2, 9) * 5;
      p = pick(rng, [20, 40, 50, 60] as const); q = pick(rng, [10, 25, 50, 75] as const);
    } while (a === b || (a * k * p) % 100 !== 0 || (b * k * q) % 100 !== 0);
    const ans = (a * k * p) / 100 + (b * k * q) / 100;
    return {
      kind: 'ratio-percent', params: [a, b, k, p, q],
      stem: `A club has members in the ratio ${a} : ${b} of first-years to second-years, with ${(a + b) * k} members in total. ${p}% of first-years and ${q}% of second-years attend the Friday session. How many members attend?`,
      correct: String(ans), wrong: numericDistractors(ans, [((a + b) * k * (p + q)) / 200, (a * k * q) / 100 + (b * k * p) / 100, (a + b) * k - ans]),
      hints: ['Split the total into the two year groups first.', `Each ratio part is ${k} members.`],
      explanation: `First-years: ${a * k}, second-years: ${b * k}. Attending: ${p}% of ${a * k} = ${(a * k * p) / 100}, plus ${q}% of ${b * k} = ${(b * k * q) / 100}. Total ${ans}.`,
    };
  },
  wmean: (rng) => {
    let xs = [60, 70, 80], ws = [1, 2, 1];
    do {
      xs = [int(rng, 4, 9) * 10, int(rng, 4, 9) * 10, int(rng, 4, 9) * 10];
      ws = [int(rng, 1, 3), int(rng, 1, 3), int(rng, 1, 4)];
    } while ((xs[0] * ws[0] + xs[1] * ws[1] + xs[2] * ws[2]) % (ws[0] + ws[1] + ws[2]) !== 0 || new Set(ws).size < 2);
    const sw = ws[0] + ws[1] + ws[2];
    const ans = (xs[0] * ws[0] + xs[1] * ws[1] + xs[2] * ws[2]) / sw;
    const data: DataSpec = {
      kind: 'table', title: 'Module marks and credit weights', labels: ['Module A', 'Module B', 'Module C'],
      series: [{ name: 'Mark (%)', values: xs }, { name: 'Credits (×10)', values: ws }],
    };
    return {
      kind: 'wmean', params: [...xs, ...ws], data,
      stem: 'Using the table, what is the credit-weighted average mark?',
      correct: String(ans), wrong: numericDistractors(ans, [Math.round((xs[0] + xs[1] + xs[2]) / 3), ans + 2, ans - 2]),
      hints: ['A plain average ignores how much each module counts.', 'Multiply each mark by its weight, add, then divide by the total weight.'],
      explanation: `(${xs.map((x, i) => `${x}×${ws[i]}`).join(' + ')}) ÷ ${sw} = ${ans}.`,
    };
  },
  recur: (rng) => {
    const mult = pick(rng, [2, 3] as const), c = pick(rng, [-2, -1, 1, 2] as const), a1 = int(rng, 1, 5);
    const t = [a1];
    for (let n = 1; n <= 5; n++) t.push(mult * t[n - 1] + c * n);
    const ans = t[5];
    const rule = `${mult}×(previous) ${c >= 0 ? '+' : '−'} ${Math.abs(c)}×(position of the previous term)`;
    return {
      kind: 'recur', params: [a1, mult, c],
      stem: `${t.slice(0, 5).join(' → ')} → ?   (Hint: the rule involves the term's position as well as its value.)`,
      correct: String(ans), wrong: numericDistractors(ans, [t[4] * mult, t[4] * mult + c, t[4] + (t[4] - t[3]) * mult, ans + mult]),
      hints: ['Compare each term with twice (or three times) the previous one — what is left over?', 'The leftover changes by the same amount each step: it depends on position.'],
      explanation: `Each term is ${rule}. So t₆ = ${mult}×${t[4]} ${c >= 0 ? '+' : '−'} ${Math.abs(c)}×5 = ${ans}.`,
    };
  },
  cubic: (rng) => {
    const a = pick(rng, [1, 2] as const), b = int(rng, -3, 4);
    const t = (n: number) => a * n ** 3 + b * n;
    const ans = t(6);
    const d1 = [1, 2, 3, 4].map((n) => t(n + 1) - t(n));
    return {
      kind: 'cubic', params: [a, b],
      stem: `${[1, 2, 3, 4, 5].map(t).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t(5) + (t(5) - t(4)) + 6 * a, t(5) + 2 * (t(5) - t(4)) - (t(4) - t(3)), ans + 6]),
      hints: ['Take differences — and then differences of the differences.', `First differences: ${d1.join(', ')}. Keep going until they settle.`],
      explanation: `Third differences are constant (${6 * a}), so the sequence is cubic: tₙ = ${a}n³ ${b >= 0 ? '+' : '−'} ${Math.abs(b)}n. For n = 6: ${ans}.`,
    };
  },
  bayes: (rng) => {
    const [prev, sens, fp] = pick(rng, BAYES_PARAMS);
    const pop = 1000;
    const tp = (pop * prev * sens) / 10000;
    const fpos = ((pop * (100 - prev)) * fp) / 10000;
    const ans = Math.round((tp * 100) / (tp + fpos));
    return {
      kind: 'bayes', params: [prev, sens, fp],
      stem: `${prev}% of students in a group have a particular trait. A screening activity flags ${sens}% of those who have it, and also flags ${fp}% of those who do not. A student is flagged. Roughly what is the chance they actually have the trait?`,
      correct: pc(ans), wrong: numericDistractors(ans, [sens, 100 - fp, prev, Math.round(ans / 2)], pc),
      hints: ['Imagine 1,000 students and count how many are flagged in each group.', `Flagged with the trait: ${tp}. Flagged without it: ${fpos}.`],
      explanation: `Of 1,000 students: ${tp} true flags and ${fpos} false flags. The chance a flagged student has the trait is ${tp} ÷ ${tp + fpos} = ${ans}%.`,
    };
  },
  digitsum: (rng) => {
    const start = int(rng, 3, 19);
    const t = [start];
    const ds = (n: number) => String(n).split('').reduce((s, c) => s + Number(c), 0);
    for (let i = 0; i < 5; i++) t.push(t[i] + ds(t[i]));
    const ans = t[5];
    return {
      kind: 'digitsum', params: [start],
      stem: `${t.slice(0, 5).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t[4] + 10, t[4] + 8, t[4] + ds(t[4]) + 1, t[4] + ds(ans)]),
      hints: ['The gaps are not constant and don’t follow a simple pattern. Look inside the numbers.', 'Compare each gap with the digits of the earlier number.'],
      explanation: `Each term = previous + (sum of the previous term's digits). ${t[4]} + ${ds(t[4])} = ${ans}.`,
    };
  },
  operator: (rng) => {
    const p = int(rng, 1, 3), q = int(rng, 1, 3), r = int(rng, 1, 2);
    const x = int(rng, 2, 6), y = int(rng, 2, 6), z = int(rng, 2, 6);
    const op = (a: number, b: number) => p * a + q * b - r * a * b;
    const first = op(x, y);
    const ans = op(first, z);
    return {
      kind: 'operator', params: [p, q, r, x, y, z],
      stem: `Define a ⊕ b = ${p}a + ${q}b − ${r === 1 ? '' : r}ab. What is (${x} ⊕ ${y}) ⊕ ${z}?`,
      correct: String(ans), wrong: numericDistractors(ans, [op(x, op(y, z)), op(op(y, x), z), first + z, op(first, z) + 1]),
      hints: ['Evaluate the bracket first, then use that result as the new "a".', `${x} ⊕ ${y} = ${first}.`],
      explanation: `${x} ⊕ ${y} = ${p}×${x} + ${q}×${y} − ${r}×${x}×${y} = ${first}. Then ${first} ⊕ ${z} = ${ans}. (This operation isn’t associative, so order matters.)`,
    };
  },
  lastdigit: (rng) => {
    const base = pick(rng, [2, 3, 7, 8, 13, 17, 19] as const), k = int(rng, 20, 60);
    // powers of any base mod 10 repeat every 4 for k >= 1, so k ≡ r (mod 4) with r in 1..4
    const r = ((k - 1) % 4) + 1;
    let ans = 1;
    for (let i = 0; i < r; i++) ans = (ans * base) % 10;
    return {
      kind: 'lastdigit', params: [base, k],
      stem: `What is the last digit of ${base}^${k}?`,
      correct: String(ans), wrong: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => n !== ans).map(String),
      hints: ['You do not need the whole number — write out the last digits of the first few powers.', 'The last digits repeat in a cycle of length 4.'],
      explanation: `Last digits of powers of ${base} cycle every 4 steps. ${k} leaves remainder ${k % 4} when divided by 4, so it matches position ${r} in the cycle, giving ${ans}.`,
    };
  },
  handshake: (rng) => {
    const couples = int(rng, 4, 9), n = couples * 2;
    const ans = (n * (n - 1)) / 2 - couples;
    return {
      kind: 'handshake', params: [couples],
      stem: `${couples} couples attend a party. Everyone shakes hands once with everyone else, except that nobody shakes hands with their own partner. How many handshakes happen in total?`,
      correct: String(ans), wrong: numericDistractors(ans, [n * (n - 1) - couples, (n * (n - 1)) / 2, n * (n - 2) / 2 + 1, ans - couples]),
      hints: ['Count all possible pairs first, then remove the ones that never happen.', `With ${n} people there are ${n}×${n - 1}÷2 pairs.`],
      explanation: `All pairs: ${n}×${n - 1}÷2 = ${(n * (n - 1)) / 2}. Remove the ${couples} partner pairs: ${ans}.`,
    };
  },
  'fib-alt': (rng) => {
    const x1 = int(rng, 1, 6), x2 = int(rng, x1 + 1, 9);
    const t = [x1, x2];
    for (let n = 3; n <= 7; n++) t.push(n % 2 === 1 ? t[n - 2] + t[n - 3] : Math.abs(t[n - 2] - t[n - 3]));
    const ans = t[6];
    return {
      kind: 'fib-alt', params: [x1, x2],
      stem: `${t.slice(0, 6).join(' → ')} → ?`,
      correct: String(ans), wrong: numericDistractors(ans, [t[5] + t[4] + 1, t[5] + t[4] + t[3], Math.abs(t[5] - t[4]), t[5] * 2]),
      hints: ['Each term depends on the previous two terms — but not always in the same way.', 'Check whether odd and even positions use different operations.'],
      explanation: `Odd positions: add the previous two terms. Even positions: take the difference of the previous two. So term 7 = ${t[5]} + ${t[4]} = ${ans}.`,
    };
  },
  expected: (rng) => {
    const k = pick(rng, [2, 4, 6, 8] as const);
    const ev = (12 - 3 * k) / 6;
    const f = (n: number) => (n < 0 ? `−£${Math.abs(n)}` : `£${n}`);
    return {
      kind: 'expected', params: [k],
      stem: `You roll a fair six-sided die. If the result is even you win that many pounds (2, 4 or 6). If it is odd you lose £${k}. What is your expected gain per roll?`,
      correct: f(ev), wrong: [f(3), f(0), f(ev + 1), f(-ev), f(ev - 1), f(2)],
      hints: ['Expected value = sum of (outcome × probability).', 'Each face has probability 1/6. Odd faces count as −' + k + '.'],
      explanation: `(2 + 4 + 6 − 3×${k}) ÷ 6 = (12 − ${3 * k}) ÷ 6 = ${ev}.`,
    };
  },
};

// Parameter triples [prevalence %, sensitivity %, false-positive %] whose answer is a whole percentage
const BAYES_PARAMS: [number, number, number][] = (() => {
  const out: [number, number, number][] = [];
  for (const prev of [5, 10, 20, 25])
    for (const sens of [80, 90, 100])
      for (const fp of [5, 10, 20]) {
        const tp = (1000 * prev * sens) / 10000;
        const fpos = (1000 * (100 - prev) * fp) / 10000;
        if (Number.isInteger(tp) && Number.isInteger(fpos) && Number.isInteger((tp * 100) / (tp + fpos))) out.push([prev, sens, fp]);
      }
  return out;
})();

export const NUMERICAL_KINDS_BY_LEVEL: Record<Level, string[]> = {
  1: ['seq-add', 'seq-mul', 'pack'],
  2: ['seq-growdiff', 'seq-square', 'change'],
  3: ['seq-alt', 'percent', 'fraction-of'],
  4: ['proportion', 'bars-pct', 'ratio-share'],
  5: ['pct-updown', 'seq-interleave', 'prob-repl', 'mean-add'],
  6: ['collatz', 'prob-norepl', 'ratio-percent', 'wmean'],
  7: ['recur', 'cubic', 'bayes', 'digitsum'],
  8: ['operator', 'lastdigit', 'handshake', 'fib-alt', 'expected'],
};

export function generateNumerical(level: Level, seed: number): Question {
  const rng = createRng(seed);
  const kind = pick(rng, NUMERICAL_KINDS_BY_LEVEL[level]);
  const built = GENERATORS[kind](rng);
  return finish(rng, level, `num-g${level}-${seed}`, built);
}

export const generateNumericalFromId = (id: string): Question | undefined => {
  const m = /^num-g([1-8])-(\d+)$/.exec(id);
  return m ? generateNumerical(Number(m[1]) as Level, Number(m[2])) : undefined;
};

/* ------------------------------------------------------------------ */
/* Independent re-computation (brute force / simulation) used in tests */
/* ------------------------------------------------------------------ */
export function recomputeNumerical(kind: string, p: number[]): string | null {
  switch (kind) {
    case 'seq-add': { let v = p[0]; for (let i = 0; i < 5; i++) v += p[1]; return String(v); }
    case 'seq-mul': { let v = p[0]; for (let i = 0; i < 4; i++) v *= p[1]; return String(v); }
    case 'pack': { let v = 0; for (let i = 0; i < p[1]; i++) v += p[0]; return String(v); }
    case 'seq-growdiff': { let v = p[0], d = p[1]; for (let i = 0; i < 5; i++) { v += d; d++; } return String(v); }
    case 'seq-square': return String((p[1] + 5) * (p[1] + 5) + p[0]);
    case 'change': return `£${(20 - p[0] * p[1] - p[2] / 2).toFixed(2)}`;
    case 'seq-alt': { let v = p[0]; for (let i = 1; i <= 5; i++) v = i % 2 ? v + p[1] : v * p[2]; return String(v); }
    case 'percent': { let c = 0; for (let i = 1; i <= p[0]; i++) c += p[1] / 100; return String(Math.round(c)); }
    case 'fraction-of': return String(Math.round(p[4] * (p[0] / p[1]) * (p[2] / p[3])));
    case 'proportion': { for (let d = 1; d < 1000; d++) if (p[2] * d === p[0] * p[1]) return String(d); return null; }
    case 'bars-pct': return pc(Math.round(((p[2] / p[0]) - 1) * 100));
    case 'ratio-share': { const per = p[3] / (p[0] + p[1] + p[2]); return gp(Math.max(p[0], p[1], p[2]) * per); }
    case 'pct-updown': return gp(Math.round(p[0] * (1 + p[1] / 100) * (1 - p[2] / 100)));
    case 'seq-interleave': return String(p[0] + p[1] * 3);
    case 'prob-repl': { const t = p[0] + p[1]; let favourable = 0, total = 0; for (let i = 0; i < t; i++) for (let j = 0; j < t; j++) { total++; if (i < p[0] && j < p[0]) favourable++; } return fraction(favourable, total); }
    case 'mean-add': return String(Math.round((p[0] * p[1] + p[2]) / (p[1] + 1)));
    case 'collatz': { let v = p[0]; for (let i = 0; i < p[1]; i++) v = v & 1 ? 3 * v + 1 : v / 2; return String(v); }
    case 'prob-norepl': { const t = p[0] + p[1]; let f = 0, tot = 0; for (let i = 0; i < t; i++) for (let j = 0; j < t; j++) { if (i === j) continue; tot++; if (i < p[0] && j < p[0]) f++; } return fraction(f, tot); }
    case 'ratio-percent': { const boys = p[0] * p[2], girls = p[1] * p[2]; return String(Math.round(boys * p[3] / 100 + girls * p[4] / 100)); }
    case 'wmean': { let s = 0, w = 0; for (let i = 0; i < 3; i++) { s += p[i] * p[i + 3]; w += p[i + 3]; } return String(s / w); }
    case 'recur': { let v = p[0]; for (let n = 1; n <= 5; n++) v = p[1] * v + p[2] * n; return String(v); }
    case 'cubic': return String(p[0] * 216 + p[1] * 6);
    case 'bayes': { const tp = (10 * p[0] * p[1]) / 100; const fpos = (10 * (100 - p[0]) * p[2]) / 100; return pc(Math.round((tp * 100) / (tp + fpos))); }
    case 'digitsum': { let v = p[0]; for (let i = 0; i < 5; i++) { let s = 0; for (const c of String(v)) s += Number(c); v += s; } return String(v); }
    case 'operator': { const op = (a: number, b: number) => p[0] * a + p[1] * b - p[2] * a * b; return String(op(op(p[3], p[4]), p[5])); }
    case 'lastdigit': { let v = 1; for (let i = 0; i < p[1]; i++) v = (v * p[0]) % 10; return String(v); }
    case 'handshake': { const n = p[0] * 2; let c = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.floor(i / 2) !== Math.floor(j / 2)) c++; return String(c); }
    case 'fib-alt': { const t = [p[0], p[1]]; for (let n = 3; n <= 7; n++) { const a = t[n - 2], b = t[n - 3]; t.push(n % 2 ? a + b : Math.abs(a - b)); } return String(t[6]); }
    case 'expected': { let total = 0; for (let face = 1; face <= 6; face++) total += face % 2 === 0 ? face : -p[0]; const ev = total / 6; return ev < 0 ? `−£${Math.abs(ev)}` : `£${ev}`; }
    default: return null;
  }
}
