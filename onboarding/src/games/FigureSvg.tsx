import { useId } from 'react';
import type { Figure } from '../engine/types';
import { describeFigure } from '../content/nonverbal';

/** Shape, shading, size, pointer and corner marks carry the meaning — never colour alone. */
export function FigureSvg({ figure, missing, label }: { figure: Figure | null; missing?: boolean; label?: string }) {
  const pid = useId();
  if (!figure) {
    return (
      <svg viewBox="0 0 60 60" className="fig" role="img" aria-label={label ?? 'Missing piece'}>
        <rect x="6" y="6" width="48" height="48" rx="8" className="fig-missing" />
        <text x="30" y="38" textAnchor="middle" className="fig-q">?</text>
      </svg>
    );
  }
  const r = [10, 15, 21][figure.size];
  const fill = figure.fill === 0 ? 'none' : figure.fill === 1 ? `url(#${pid})` : 'currentColor';
  let shape;
  if (figure.shape === 0) shape = <circle cx="30" cy="30" r={r} fill={fill} className="fig-stroke" />;
  else if (figure.shape === 1) shape = <rect x={30 - r} y={30 - r} width={r * 2} height={r * 2} fill={fill} className="fig-stroke" />;
  else shape = <polygon points={`30,${30 - r} ${30 + r},${30 + r * 0.8} ${30 - r},${30 + r * 0.8}`} fill={fill} className="fig-stroke" />;
  const dir = [[0, -1], [1, 0], [0, 1]][figure.tick];
  const tip = [30 + dir[0] * (r + 4), 30 + dir[1] * (r + 4)];
  const corners = [[4, 4], [50, 4], [4, 50], [50, 50]];
  void missing;
  return (
    <svg viewBox="0 0 60 60" className="fig" role="img" aria-label={label ?? describeFigure(figure)}>
      <defs>
        <pattern id={pid} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="fig-line" strokeWidth="3" />
        </pattern>
      </defs>
      {shape}
      <line x1="30" y1="30" x2={tip[0]} y2={tip[1]} className="fig-pointer" />
      <circle cx={tip[0]} cy={tip[1]} r="2.5" className="fig-tip" />
      {corners.map(([x, y], i) => (figure.marks & (1 << i) ? <rect key={i} x={x} y={y} width="6" height="6" className="fig-mark" /> : null))}
    </svg>
  );
}
