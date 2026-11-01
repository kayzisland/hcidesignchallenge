import type { DimensionResult } from '../profile/profile';
import { DIMENSIONS } from '../profile/archetypes';

/** Radar chart of the five preference dimensions, with a text equivalent. */
export function Radar({ dims }: { dims: Pick<DimensionResult, 'id' | 'value'>[] }) {
  const size = 260, c = size / 2, r = 86;
  const pt = (i: number, v: number) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / dims.length;
    return [c + Math.cos(a) * r * v, c + Math.sin(a) * r * v] as const;
  };
  const ring = (v: number) => dims.map((_, i) => pt(i, v).join(',')).join(' ');
  const poly = dims.map((d, i) => pt(i, Math.max(0.04, d.value / 100)).join(',')).join(' ');
  const label = (id: string) => DIMENSIONS.find((d) => d.id === id)?.label ?? id;
  const summary = dims.map((d) => `${label(d.id)} ${d.value} out of 100`).join(', ');
  return (
    <svg className="radar" viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Preference radar chart: ${summary}`}>
      {[0.33, 0.66, 1].map((v) => <polygon key={v} points={ring(v)} className="radar-ring" />)}
      {dims.map((_, i) => <line key={i} x1={c} y1={c} x2={pt(i, 1)[0]} y2={pt(i, 1)[1]} className="radar-ring" />)}
      <polygon points={poly} className="radar-area" />
      {dims.map((d, i) => {
        const [x, y] = pt(i, Math.max(0.04, d.value / 100));
        const [lx, ly] = pt(i, 1.2);
        return (
          <g key={d.id}>
            <circle cx={x} cy={y} r={4} className="radar-dot" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="radar-label">{label(d.id).split(' ')[0]}</text>
          </g>
        );
      })}
    </svg>
  );
}
