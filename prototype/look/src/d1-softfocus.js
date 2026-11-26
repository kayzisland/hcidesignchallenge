// Design 1, "Soft Focus": THE CONTROL. The look of LockedIn as it is built today
// (components/lockedin/lockedin.css and relay/web/styles.css), drawn with the test's sample content.
(function () {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // The light-theme tokens the app generates from one hue (src/core/companion/palette.ts), as hex.
  const TOK = {
    hci: { "bg-a": "#fbfbff", "bg-b": "#faf1ff", rail: "rgba(253,253,255,0.65)", surface: "#fdfdff", ink: "#1b1a2d", muted: "#535368", line: "#dcdced", accent: "#5d4fb9", "accent-text": "#43368e", soft: "#e9eaff", shadow: "rgba(95,92,143,0.14)", deep: "#2b2458", "deep-b": "#110317", "deep-ink": "#f4f4fc", "deep-muted": "#c1c1de", "deep-line": "#494772", "deep-accent": "#c2beff", "deep-soft": "#3a3760", "deep-panel": "#181535", notyet: "#bcbcca" },
    stat: { "bg-a": "#f3feff", "bg-b": "#e5f9ff", rail: "rgba(248,255,255,0.65)", surface: "#f9ffff", ink: "#042224", muted: "#3e5b5e", line: "#cee3e4", accent: "#007a8a", "accent-text": "#005a67", soft: "#cff5f8", shadow: "rgba(20,112,119,0.14)", deep: "#003941", "deep-b": "#000b1a", "deep-ink": "#eef7f8", "deep-muted": "#a7cccf", "deep-line": "#05585d", "deep-accent": "#3fe3ef", "deep-soft": "#00474d", "deep-panel": "#002226", notyet: "#b0c2c3" },
    hist: { "bg-a": "#fff9ff", "bg-b": "#ffeff7", rail: "rgba(255,252,255,0.65)", surface: "#fffcff", ink: "#251726", muted: "#604f60", line: "#e6d9e6", accent: "#8e3b94", "accent-text": "#6b2470", soft: "#fbe4fc", shadow: "rgba(122,83,124,0.14)", deep: "#431a46", "deep-b": "#17010a", "deep-ink": "#f9f3f9", "deep-muted": "#d2bcd3", "deep-line": "#603f62", "deep-accent": "#f5adf9", "deep-soft": "#4f2f51", "deep-panel": "#280f2a", notyet: "#c5bac5" },
  };
  const decl = (t) => Object.entries(t).map(([k, v]) => `--sf-${k}:${v};`).join("");
  const tint = (code) => `sf-t-${TOK[String(code || "").toLowerCase()] ? String(code).toLowerCase() : "hci"}`;

  // ── icons: one family of line icons, 24 px grid, 2 px stroke ──
  const svg = (inner, size = 20, sw = 2) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICON = {
    today: () => svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    library: () => svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'),
    calendar: () => svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    progress: () => svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    me: () => svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    play: () => svg('<path d="M7 4l13 8-13 8z" fill="currentColor"/>'),
    check: () => svg('<path d="M20 6 9 17l-5-5"/>', 18, 2.5),
    half: () => svg('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>', 18, 2.5),
    ring: () => svg('<circle cx="12" cy="12" r="8"/>', 18, 2.5),
    dot: () => svg('<circle cx="12" cy="12" r="3" fill="currentColor"/>', 18),
    chevron: () => svg('<path d="m6 9 6 6 6-6"/>', 16),
  };
  const NAV_ICON = { Today: "today", Library: "library", Week: "calendar", Progress: "progress", Me: "me" };
  const logo = (size = 32) => `<svg width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="var(--sf-line)" stroke-width="4"/><circle cx="20" cy="20" r="16" fill="none" stroke="var(--sf-accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="70 101" transform="rotate(-90 20 20)"/><rect x="14" y="18" width="12" height="9" rx="2" fill="var(--sf-accent)"/><path d="M16.5 18v-2.5a3.5 3.5 0 0 1 7 0V18" fill="none" stroke="var(--sf-accent)" stroke-width="2"/></svg>`;
  const focusRing = (done, total, size, stroke, track) => {
    const c = 2 * Math.PI * 30;
    const frac = total > 0 ? Math.min(1, done / total) : 0;
    return `<svg width="${size}" height="${size}" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="30" fill="none" stroke="${track}" stroke-width="7"/><circle cx="36" cy="36" r="30" fill="none" stroke="${stroke}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(c * frac).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 36 36)"/></svg>`;
  };

  // ── shared pieces ──
  const rail = (d, current) => `<nav class="sf-rail" aria-label="Main"><div class="sf-brand">${logo()}<span>${esc(d.brand)}</span></div>${d.menu.map((m) => `<a class="sf-nav" href="#"${m === current ? ' aria-current="page"' : ""}>${(ICON[NAV_ICON[m]] || ICON.dot)()}<span>${esc(m)}</span></a>`).join("")}</nav>`;
  const app = (d, current, body) => `<div class="sf-root"><div class="sf-app">${rail(d, current)}<main class="sf-main"><div class="sf-page">${body}</div></main></div></div>`;
  const pageHead = (eyebrow, title, extra = "") => `<header class="sf-page-head"><span class="sf-eyebrow">${esc(eyebrow)}</span><h1 class="sf-h1">${esc(title)}</h1>${extra}</header>`;
  const moduleDot = (code) => `<span class="${tint(code)} sf-dotwrap"><span class="sf-dot"></span></span>`;
  // A slide chip keeps its small look; the pressable area around it is 40 px high.
  const chip = (text) => `<button type="button" class="sf-hit"><span class="sf-chip">${esc(text)}</span></button>`;
  // "Title · rest": the rest is quieter, as on the app's Progress cards.
  const titled = (s) => { const i = String(s).indexOf(" · "); return i < 0 ? esc(s) : `${esc(s.slice(0, i))} <span class="sf-muted sf-small sf-plain">${esc(s.slice(i + 1))}</span>`; };
  const qdots = (n, of) => `<span class="sf-qdots" aria-hidden="true">${Array.from({ length: of }, (_, i) => `<i data-state="${i + 1 < n ? "done" : i + 1 === n ? "current" : "todo"}"></i>`).join("")}</span>`;
  const focusTop = (mode, study, title, sub, right, stop) => `<div class="sf-focus-top"><button type="button" class="sf-x"><span aria-hidden="true">✕</span><span class="sf-sr">${esc(stop)}</span></button><span class="sf-focus-title"><b class="sf-display sf-focus-name"><span class="sf-mode" data-study="${study}">${esc(mode)}</span> ${esc(title)}</b>${sub ? `<span class="sf-small sf-deep-muted">${esc(sub)}</span>` : ""}</span>${right}</div>`;
  const option = (key, text, cls = "", tag = "") => `<button type="button" class="sf-opt ${cls}">${key ? `<span class="sf-kbd">${esc(key)}</span>` : ""}<span class="sf-grow">${esc(text)}</span>${tag}</button>`;

  // ── the score chart (the app's own SVG: your line, the dashed pace line) ──
  const niceCeil = (v) => { if (v <= 0) return 100; const mag = 10 ** Math.floor(Math.log10(v)); for (const step of [1, 2, 2.5, 5, 10]) if (step * mag >= v) return step * mag; return 10 * mag; };
  function scoreChart(p) {
    const W = 820, H = 280, PAD = { top: 18, right: 18, bottom: 34, left: 46 };
    const n = p.days.length;
    const top = niceCeil(Math.max(1, ...p._you.map((v) => v ?? 0), ...p._pace.map((v) => v ?? 0)));
    const x = (i) => PAD.left + (n <= 1 ? 0 : (i * (W - PAD.left - PAD.right)) / (n - 1));
    const y = (v) => PAD.top + (1 - v / top) * (H - PAD.top - PAD.bottom);
    const past = p._you.map((v, i) => ({ v, i })).filter((q) => q.v !== null && q.v !== undefined);
    const selected = past.length ? past[past.length - 1].i : 0;
    const line = past.map((q) => `${x(q.i).toFixed(1)},${y(q.v).toFixed(1)}`).join(" ");
    const area = past.length ? `M${x(past[0].i).toFixed(1)},${y(0).toFixed(1)} L${line.replace(/ /g, " L")} L${x(selected).toFixed(1)},${y(0).toFixed(1)} Z` : "";
    const pace = p._pace.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
    const grid = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(top * f));
    return `<div class="sf-chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(p.scoreLabel)}">
      <defs><linearGradient id="sf-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--sf-accent)" stop-opacity="0.28"/><stop offset="1" stop-color="var(--sf-accent)" stop-opacity="0"/></linearGradient></defs>
      ${grid.map((v) => `<line x1="${PAD.left}" x2="${W - PAD.right}" y1="${y(v)}" y2="${y(v)}" class="sf-chart-grid"/><text x="${PAD.left - 8}" y="${y(v) + 4}" text-anchor="end" class="sf-chart-axis" aria-hidden="true">${v.toLocaleString("en-GB")}</text>`).join("")}
      ${p.days.map((t, i) => `<text x="${x(i)}" y="${H - 10}" text-anchor="middle" class="sf-chart-axis" data-on="${i === selected}">${esc(t)}</text>`).join("")}
      <polyline points="${pace}" class="sf-chart-pace"/>
      ${area ? `<path d="${area}" fill="url(#sf-fill)"/>` : ""}
      ${line ? `<polyline points="${line}" class="sf-chart-line"/>` : ""}
      ${past.length ? `<line x1="${x(selected)}" x2="${x(selected)}" y1="${PAD.top}" y2="${H - PAD.bottom}" class="sf-chart-cursor"/>` : ""}
      ${past.map((q) => `<circle cx="${x(q.i)}" cy="${y(q.v)}" r="${q.i === selected ? 6 : 4}" class="sf-chart-dot" data-on="${q.i === selected}"/>`).join("")}
    </svg></div>`;
  }

  // ── the week timetable ──
  function timetable(w) {
    const PX = 1.1;
    const all = [...w.lectures, ...w.commitments].map((e) => [e._start, e._end]).concat(w.blocks.map((b) => [b._start, b._start + 1]));
    const from = Math.min(8, ...all.map((a) => Math.floor(a[0]))) * 60;
    const to = Math.max(18, ...all.map((a) => Math.ceil(a[1]) + 1)) * 60;
    const top = (hour) => (hour * 60 - from) * PX;
    const hm = (h) => `${String(h).padStart(2, "0")}:00`;
    const hours = []; for (let h = from / 60; h <= to / 60; h++) hours.push(h);
    const two = (s) => { const i = String(s).indexOf(" "); return i < 0 ? [s, ""] : [s.slice(0, i), s.slice(i + 1)]; };
    const day = (di) => {
      const fixed = w.lectures.filter((l) => l._day === di).map((l) => { const [code, kind] = two(l.what); return `<div class="${tint(l._module)} sf-tt-item sf-tt-fixed" style="top:${top(l._start)}px;height:${Math.max(18, (l._end - l._start) * 60 * PX - 2)}px"><b>${esc(l.time)} ${esc(code)}</b> <span>${esc(kind)}</span></div>`; }).join("");
      const commit = w.commitments.filter((c) => c._day === di).map((c) => `<div class="sf-tt-item sf-tt-commit" style="top:${top(c._start)}px;height:${Math.max(18, (c._end - c._start) * 60 * PX - 2)}px"><b>${esc(c.time)}</b> <span>${esc(c.what)}</span></div>`).join("");
      return `<div class="sf-tt-day" data-today="${di === w._today}" style="left:${(di * 100) / 7}%">${fixed}${commit}</div>`;
    };
    const block = (b) => `<div class="${tint(b._module)} sf-tt-item sf-tt-block" style="top:${top(b._start)}px;height:${Math.max(22, 50 * PX - 2)}px;left:calc(${(b._day * 100) / 7}% + 3px);right:auto;width:calc(${100 / 7}% - 6px)"><div class="sf-tt-grab" data-status="${esc(b._status)}" role="button" tabindex="0"><b>${esc(b.time)} ${esc(b.what)}</b> <span>${esc(b.note)}${b._status === "done" ? " ✓" : ""}</span></div></div>`;
    return `<div class="sf-tt" role="group" aria-label="${esc(w.title)}">
      <div class="sf-tt-head"><span></span>${w.days.map((dn, i) => { const [name, num] = two(dn); return `<b data-today="${i === w._today}">${esc(name)} <span class="sf-muted sf-small">${esc(num)}</span></b>`; }).join("")}</div>
      <div class="sf-tt-body" style="height:${(to - from) * PX}px">
        <div class="sf-tt-hours" aria-hidden="true">${hours.map((h) => `<span style="top:${top(h)}px">${hm(h)}</span>`).join("")}</div>
        <div class="sf-tt-days">${hours.map((h) => `<i class="sf-tt-line" style="top:${top(h)}px"></i>`).join("")}${w.days.map((_, i) => day(i)).join("")}${w.blocks.map(block).join("")}</div>
      </div>
      <p class="sf-small sf-muted sf-tt-hint">${esc(w.hint)}</p>
    </div>`;
  }

  const css = `
.sf-root, .sf-root *, .sf-root *::before, .sf-root *::after { box-sizing: border-box; }
.sf-root, .sf-t-hci { ${decl(TOK.hci)} }
.sf-t-stat { ${decl(TOK.stat)} }
.sf-t-hist { ${decl(TOK.hist)} }
.sf-root {
  --sf-accent-ink: #ffffff;
  --sf-solid: #006aa0; --sf-solid-bg: #d7efff; --sf-solid-ink: #003151;
  --sf-revisit: #c46016; --sf-revisit-bg: #ffebd4; --sf-revisit-ink: #743100;
  --sf-font-display: "Bricolage Grotesque", system-ui, sans-serif;
  --sf-font-body: "Atkinson Hyperlegible", system-ui, sans-serif;
  min-height: 100vh; background: linear-gradient(160deg, var(--sf-bg-a), var(--sf-bg-b));
  color: var(--sf-ink); font-family: var(--sf-font-body); font-size: 16px; line-height: 1.5;
}
.sf-root a { color: inherit; text-decoration: none; }
.sf-root button { font: inherit; color: inherit; cursor: pointer; margin: 0; }
.sf-root :focus-visible { outline: 3px solid var(--sf-accent); outline-offset: 2px; border-radius: 10px; }
.sf-root h1, .sf-root h2, .sf-root h3, .sf-root p { margin: 0; }
.sf-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.sf-display { font-family: var(--sf-font-display); letter-spacing: -0.02em; }
.sf-eyebrow { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--sf-muted); }
.sf-muted { color: var(--sf-muted); }
.sf-small { font-size: 0.88em; }
.sf-plain { font-weight: 400; }
.sf-grow { flex-grow: 1; min-width: 0; }

/* layout */
.sf-app { display: flex; min-height: 100vh; }
.sf-rail { flex: 0 0 232px; display: flex; flex-direction: column; gap: 4px; padding: 28px 18px; background: var(--sf-rail); border-right: 1px solid var(--sf-line); backdrop-filter: blur(12px); }
.sf-brand { display: flex; align-items: center; gap: 10px; padding: 0 8px 24px; font-family: var(--sf-font-display); font-weight: 700; font-size: 20px; }
.sf-nav { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 12px; color: var(--sf-muted); font-weight: 700; width: 100%; min-height: 44px; }
.sf-root a.sf-nav { color: var(--sf-muted); }
.sf-root a.sf-nav:hover { background: var(--sf-soft); color: var(--sf-ink); }
.sf-root a.sf-nav[aria-current="page"] { background: var(--sf-soft); color: var(--sf-accent-text); }
.sf-main { flex: 1 1 auto; min-width: 0; padding: 40px 48px 64px; max-width: 1280px; }
.sf-page { display: flex; flex-direction: column; gap: 28px; min-width: 0; }
.sf-page-head { display: flex; flex-direction: column; gap: 4px; }
.sf-h1 { font-family: var(--sf-font-display); font-size: 2.6em; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
.sf-h2 { font-family: var(--sf-font-display); font-size: 1.25em; font-weight: 700; }
.sf-h2.sf-h2s { font-size: 1.1em; }
.sf-grid-2 { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 24px; align-items: start; }
.sf-stack { display: flex; flex-direction: column; gap: 16px; }
.sf-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.sf-col { display: flex; flex-direction: column; min-width: 0; }

/* surfaces and controls */
.sf-card { background: var(--sf-surface); border: 1px solid var(--sf-line); border-radius: 20px; padding: 20px 24px; box-shadow: 0 10px 30px var(--sf-shadow); }
.sf-card.flat { box-shadow: none; }
.sf-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 10px 20px; border-radius: 999px; font-weight: 700; border: 1px solid var(--sf-line); background: var(--sf-surface); color: var(--sf-ink); transition: transform 0.15s, box-shadow 0.15s; white-space: nowrap; }
.sf-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 18px var(--sf-shadow); }
.sf-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.sf-root .sf-btn.primary { background: var(--sf-accent); color: var(--sf-accent-ink); border-color: transparent; }
.sf-root .sf-btn.soft { background: var(--sf-soft); border-color: transparent; color: var(--sf-accent-text); }
.sf-root .sf-btn.ghost { background: none; border-color: transparent; text-decoration: underline; padding-inline: 8px; color: var(--sf-muted); }
.sf-btn.big { min-height: 52px; padding: 12px 28px; font-size: 1.05em; }
.sf-chip { display: inline-flex; align-items: center; gap: 6px; padding: 2px 12px; border-radius: 999px; font-size: 0.85em; font-weight: 700; background: var(--sf-soft); color: var(--sf-accent-text); border: 1px solid transparent; }
.sf-chip[data-on="true"] { background: var(--sf-accent); color: var(--sf-accent-ink); }
.sf-root .sf-hit { display: inline-flex; align-items: center; min-height: 40px; padding: 0; margin: 0 2px; border: none; background: none; vertical-align: middle; }
.sf-hit:hover .sf-chip { border-color: var(--sf-accent); }
.sf-kbd { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; padding: 1px 7px; border-radius: 6px; border: 1px solid var(--sf-line); color: var(--sf-muted); font-weight: 400; }
.sf-input { display: flex; align-items: center; width: 100%; min-height: 44px; padding: 10px 14px; border-radius: 14px; border: 2px solid var(--sf-line); background: var(--sf-surface); }
.sf-select { width: auto; gap: 22px; white-space: nowrap; }
.sf-dotwrap { display: inline-flex; flex-shrink: 0; }
.sf-dot { display: block; width: 10px; height: 10px; border-radius: 999px; flex-shrink: 0; background: var(--sf-accent); }
.sf-dot.big { width: 12px; height: 12px; }

/* hero card, in its module's colour */
.sf-root .sf-hero { display: flex; align-items: center; gap: 24px; padding: 28px; border-radius: 24px; color: #fff; background: linear-gradient(135deg, var(--sf-accent), var(--sf-deep)); box-shadow: 0 18px 40px var(--sf-shadow); border: none; text-align: left; width: 100%; }
.sf-hero-ring { position: relative; display: inline-flex; flex-shrink: 0; }
.sf-hero-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; }
.sf-hero-text { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.sf-hero-eyebrow { color: inherit; opacity: 0.9; }
.sf-hero-title { font-family: var(--sf-font-display); font-size: 1.9em; font-weight: 800; line-height: 1.1; }
.sf-hero-sub { opacity: 0.95; }
.sf-hero-cta { margin-left: auto; padding: 12px 22px; border-radius: 999px; background: #fff; color: #1c1830; font-weight: 700; white-space: nowrap; }

/* Today */
.sf-tl { display: flex; align-items: center; gap: 16px; padding: 12px 0; border-bottom: 1px solid var(--sf-line); }
.sf-tl:last-child { border-bottom: none; }
.sf-tl-time { width: 104px; flex-shrink: 0; font-size: 0.88em; color: var(--sf-muted); }
.sf-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.sf-stat-n { font-size: 1.8em; }
.sf-next { background: var(--sf-soft); border-color: transparent; }
.sf-next-icon { color: var(--sf-accent-text); display: inline-flex; }
.sf-conic { width: 16px; height: 16px; border-radius: 999px; background: conic-gradient(oklch(0.6 0.16 0), oklch(0.6 0.16 120), oklch(0.6 0.16 240), oklch(0.6 0.16 360)); }

/* status */
.sf-status { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; font-size: 0.85em; padding: 2px 10px; border-radius: 999px; white-space: nowrap; flex-shrink: 0; }
.sf-status.solid { background: var(--sf-solid-bg); color: var(--sf-solid-ink); }
.sf-status.revisit { background: var(--sf-revisit-bg); color: var(--sf-revisit-ink); }
.sf-status.notyet { border: 1px dashed var(--sf-notyet); color: var(--sf-muted); }

/* a session: focus mode */
.sf-focus { min-height: 100vh; padding: 24px 32px 32px; display: flex; flex-direction: column; gap: 20px; background: radial-gradient(120% 90% at 20% 0%, var(--sf-deep), var(--sf-deep-b)); }
.sf-focus-top { display: flex; align-items: center; gap: 16px; color: var(--sf-deep-ink); flex-wrap: wrap; }
.sf-root .sf-x { width: 44px; height: 44px; border-radius: 999px; border: none; background: var(--sf-deep-soft); color: var(--sf-deep-ink); display: inline-flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.sf-focus-title { display: flex; flex-direction: column; flex-grow: 1; min-width: 0; }
.sf-focus-name { font-size: 1.25em; }
.sf-deep-muted { color: var(--sf-deep-muted); }
.sf-mode { display: inline-block; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 10px; border-radius: 999px; border: 2px solid var(--sf-deep-ink); vertical-align: middle; margin-right: 6px; font-family: var(--sf-font-body); }
.sf-mode[data-study="practise"] { background: var(--sf-deep-ink); color: var(--sf-deep); }
.sf-qdots { display: inline-flex; gap: 6px; align-items: center; }
.sf-qdots i { width: 10px; height: 10px; border-radius: 999px; border: 2px solid var(--sf-deep-line); background: transparent; }
.sf-qdots i[data-state="done"] { background: var(--sf-deep-accent); border-color: var(--sf-deep-accent); }
.sf-qdots i[data-state="current"] { border-color: var(--sf-deep-ink); width: 14px; height: 14px; }
.sf-count { font-size: 1.1em; }
.sf-panes { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 24px; align-items: start; }
.sf-qcard { background: var(--sf-surface); border-radius: 24px; padding: 28px 32px; display: flex; flex-direction: column; gap: 18px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3); }
.sf-q-stem { font-family: var(--sf-font-display); font-size: 1.75em; font-weight: 700; line-height: 1.2; }
.sf-root .sf-opt { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 16px; border: 2px solid var(--sf-line); background: var(--sf-surface); text-align: left; min-height: 56px; width: 100%; }
.sf-root .sf-opt:hover, .sf-root .sf-opt.is-picked { border-color: var(--sf-accent); }
.sf-root .sf-opt.is-picked { background: var(--sf-soft); }
.sf-root .sf-opt.is-answer { border-color: var(--sf-solid); background: var(--sf-solid-bg); color: var(--sf-solid-ink); cursor: default; }
.sf-root .sf-opt.is-miss { border-color: var(--sf-revisit); background: var(--sf-revisit-bg); color: var(--sf-revisit-ink); cursor: default; }
.sf-root .sf-opt.is-plain { cursor: default; border-color: var(--sf-line); }
.sf-opt-tag { white-space: nowrap; }
.sf-stops { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
.sf-root .sf-stops button { min-height: 44px; border-radius: 12px; border: 2px solid var(--sf-line); background: var(--sf-surface); font-weight: 700; }
.sf-root .sf-stops button:hover { border-color: var(--sf-accent); }
.sf-root .sf-stops button.is-picked { background: var(--sf-accent); color: var(--sf-accent-ink); border-color: var(--sf-accent); }
.sf-feedback { padding: 18px 20px; border-radius: 18px; display: flex; flex-direction: column; gap: 10px; }
.sf-feedback.right { background: var(--sf-solid-bg); color: var(--sf-solid-ink); }
.sf-feedback.miss { background: var(--sf-revisit-bg); color: var(--sf-revisit-ink); }
.sf-fb-title { font-family: var(--sf-font-display); font-size: 1.4em; font-weight: 700; }
.sf-slides { background: var(--sf-deep-panel); color: var(--sf-deep-ink); border-radius: 24px; padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.sf-slides-head { min-height: 44px; display: flex; align-items: center; }
.sf-slide { aspect-ratio: 16 / 10; background: #ffffff; color: #1d1b26; border-radius: 14px; padding: 28px 32px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3); }
.sf-slide h3 { font-size: 1.5em; line-height: 1.15; }
.sf-slide ul { margin: 0; padding-left: 1.1em; display: flex; flex-direction: column; gap: 6px; }

/* Learn: one column, one step at a time */
.sf-learn .sf-panes { grid-template-columns: minmax(0, 1fr); width: 100%; max-width: 880px; margin: 0 auto; }
.sf-learn .sf-qcard { gap: 16px; }
.sf-root .sf-learn-tool { min-height: 40px; padding: 0 16px; border-radius: 999px; border: 2px solid var(--sf-deep-line); background: transparent; color: var(--sf-deep-ink); font-weight: 700; }
.sf-root .sf-learn-tool:hover, .sf-root .sf-learn-tool.is-on { background: var(--sf-deep-ink); color: var(--sf-deep); border-color: var(--sf-deep-ink); }
.sf-step { display: flex; flex-direction: column; gap: 14px; }
.sf-prose p { margin: 0 0 0.6em; }
.sf-prose p:last-child { margin-bottom: 0; }
.sf-say { display: flex; gap: 8px; align-items: flex-end; border-top: 1px solid var(--sf-line); padding: 14px 0 12px; margin-bottom: -12px; background: var(--sf-surface); }
.sf-say .sf-input { color: var(--sf-muted); }

/* Progress */
.sf-score { font-size: 3em; line-height: 1; }
.sf-score-row { display: flex; align-items: flex-end; gap: 12px; }
.sf-chart svg { display: block; width: 100%; height: auto; overflow: visible; }
.sf-chart-grid { stroke: var(--sf-line); stroke-width: 1; }
.sf-chart-axis { fill: var(--sf-muted); font-size: 12px; font-family: var(--sf-font-body); }
.sf-chart-axis[data-on="true"] { fill: var(--sf-ink); font-weight: 700; }
.sf-chart-line { fill: none; stroke: var(--sf-accent); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
.sf-chart-pace { fill: none; stroke: var(--sf-muted); stroke-width: 2; stroke-dasharray: 6 6; }
.sf-chart-dot { fill: var(--sf-surface); stroke: var(--sf-accent); stroke-width: 2.5; }
.sf-chart-dot[data-on="true"] { fill: var(--sf-accent); }
.sf-chart-cursor { stroke: var(--sf-accent); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.7; }
.sf-legend { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.sf-legend > span { display: inline-flex; align-items: center; gap: 6px; }
.sf-key { display: inline-block; width: 22px; height: 0; border-top: 3px solid var(--sf-accent); }
.sf-key-pace { border-top: 2px dashed var(--sf-muted); }
.sf-progress-two { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; align-items: start; }
.sf-share { display: flex; flex-direction: column; gap: 6px; }
.sf-share-row { display: flex; align-items: center; gap: 8px; }
.sf-share-pts { min-width: 52px; text-align: right; }
.sf-bar { display: block; height: 8px; border-radius: 999px; background: var(--sf-line); overflow: hidden; }
.sf-bar > span { display: block; height: 100%; border-radius: 999px; background: var(--sf-accent); }
.sf-attention { display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap; padding: 12px 14px; border-radius: 14px; background: var(--sf-soft); }
.sf-attention > span { flex: 1 1 220px; }
.sf-milestones { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 10px; }
.sf-milestone { display: flex; flex-direction: column; gap: 4px; padding: 12px 14px; border-radius: 14px; border: 1.5px dashed var(--sf-line); color: var(--sf-muted); }
.sf-milestone[data-earned="true"] { border: 1.5px solid var(--sf-solid); background: var(--sf-solid-bg); color: var(--sf-solid-ink); }
.sf-root .sf-gap-row { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 44px; padding: 6px 10px; border: none; border-radius: 10px; background: transparent; text-align: left; }
.sf-root .sf-gap-row:hover { background: var(--sf-soft); }

/* Week: a timetable. Fixed things are flat; study blocks are solid, in their module's colour. */
.sf-tt { display: flex; flex-direction: column; gap: 8px; }
.sf-tt-head { display: grid; grid-template-columns: 52px repeat(7, minmax(0, 1fr)); padding: 0 0 4px; }
.sf-tt-head b { text-align: center; padding: 4px 0; border-radius: 10px; }
.sf-tt-head b[data-today="true"] { background: var(--sf-soft); color: var(--sf-accent-text); }
.sf-tt-body { position: relative; display: grid; grid-template-columns: 52px minmax(0, 1fr); background: var(--sf-surface); border: 1px solid var(--sf-line); border-radius: 16px; overflow: hidden; }
.sf-tt-hours { position: relative; }
.sf-tt-hours span { position: absolute; right: 8px; transform: translateY(-50%); font-size: 13px; color: var(--sf-muted); }
.sf-tt-hours span:first-child { transform: translateY(2px); }
.sf-tt-hours span:last-child { transform: translateY(-100%); }
.sf-tt-days { position: relative; border-left: 1px solid var(--sf-line); }
.sf-tt-line { position: absolute; left: 0; right: 0; height: 0; border-top: 1px solid var(--sf-line); opacity: 0.7; }
.sf-tt-day { position: absolute; top: 0; bottom: 0; width: calc(100% / 7); border-left: 1px solid var(--sf-line); }
.sf-tt-day:first-of-type { border-left: none; }
.sf-tt-day[data-today="true"] { background: color-mix(in srgb, var(--sf-soft) 45%, transparent); }
.sf-tt-item { position: absolute; left: 3px; right: 3px; border-radius: 8px; overflow: hidden; font-size: 13px; line-height: 1.25; }
.sf-tt-item b, .sf-tt-item span { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sf-tt-fixed { padding: 3px 6px; background: var(--sf-soft); color: var(--sf-ink); border-left: 3px solid var(--sf-accent); opacity: 0.85; }
.sf-tt-commit { padding: 3px 6px; color: var(--sf-muted); border: 1px dashed var(--sf-line); background: repeating-linear-gradient(135deg, transparent 0 6px, color-mix(in srgb, var(--sf-line) 60%, transparent) 6px 7px); }
.sf-tt-block { overflow: visible; z-index: 1; }
.sf-tt-grab { min-height: 100%; padding: 3px 6px; border-radius: 8px; background: var(--sf-accent); color: var(--sf-accent-ink); cursor: grab; box-shadow: 0 2px 6px var(--sf-shadow); }
.sf-tt-grab[data-status="proposed"] { background: var(--sf-surface); color: var(--sf-ink); border: 2px dashed var(--sf-accent); }
.sf-tt-grab[data-status="proposed"] span { white-space: normal; overflow: visible; }
.sf-tt-grab:hover { outline: 3px solid var(--sf-ink); outline-offset: 1px; }
.sf-tt-hint { min-height: 1.4em; }

/* the phone app: the phone's own font, one fixed violet (relay/web/styles.css) */
.sf-phone { --bg: #f7f5fc; --surface: #ffffff; --ink: #1d1b26; --muted: #6a6680; --line: #e3dff0; --accent: #6d5fd3; --soft: #ece8fb; min-height: 100vh; background: var(--bg); color: var(--ink); font: 17px/1.45 system-ui, -apple-system, "Segoe UI", sans-serif; }
.sf-phone, .sf-phone * { box-sizing: border-box; }
.sf-phone main { max-width: 560px; margin: 0 auto; padding: 24px 18px 32px; display: flex; flex-direction: column; gap: 16px; }
.sf-phone h1 { font-size: 1.5em; line-height: 1.2; margin: 0; }
.sf-phone p { margin: 0; }
.sf-phone .muted { color: var(--muted); }
.sf-phone .small { font-size: 0.88em; }
.sf-phone .bar { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; padding-bottom: 6px; border-bottom: 1px solid var(--line); }
.sf-phone .options { display: flex; flex-direction: column; gap: 10px; }
.sf-phone .btn { font: inherit; min-height: 48px; padding: 10px 18px; border-radius: 14px; border: 2px solid var(--line); background: var(--surface); color: var(--ink); cursor: pointer; margin: 0; }
.sf-phone .btn.option { text-align: left; width: 100%; }
.sf-phone .btn.option:hover { border-color: var(--accent); }
.sf-phone .btn.ghost { background: transparent; border-color: transparent; text-decoration: underline; }

/* the style sheet page */
.sf-sheet { padding: 36px 40px 48px; display: flex; flex-direction: column; gap: 20px; }
.sf-sheet-top { display: flex; align-items: center; gap: 14px; }
.sf-sheet-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 20px; align-items: start; }
.sf-sheet .sf-card { display: flex; flex-direction: column; gap: 14px; }
.sf-spec { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 10px 16px; align-items: baseline; }
.sf-spec > .sf-small { color: var(--sf-muted); }
.sf-swatches { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.sf-sw { display: flex; flex-direction: column; gap: 2px; font-size: 13px; line-height: 1.35; min-width: 0; }
.sf-sw i { display: block; height: 40px; border-radius: 10px; border: 1px solid var(--sf-line); margin-bottom: 4px; }
.sf-sw b { font-size: 14px; }
.sf-sw code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; }
.sf-icons { display: flex; flex-wrap: wrap; gap: 10px; }
.sf-ic { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; width: 84px; height: 68px; border: 1px solid var(--sf-line); border-radius: 12px; font-size: 13px; color: var(--sf-ink); }
.sf-states { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 10px 14px; align-items: center; }
.sf-states > .sf-small { color: var(--sf-muted); }
.sf-demo-rail { flex: none; width: 196px; padding: 12px; border: 1px solid var(--sf-line); border-radius: 16px; position: static; height: auto; min-height: 0; }
.sf-demo-dark { padding: 14px 16px; border-radius: 16px; background: radial-gradient(120% 90% at 20% 0%, var(--sf-deep), var(--sf-deep-b)); color: var(--sf-deep-ink); display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.sf-demo-tt { position: relative; height: 62px; }
.sf-demo-tt .sf-tt-item { position: relative; left: auto; right: auto; height: 53px; }
.sf-demo-tt-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
`;

  LOOK.designs.push({
    id: "softfocus",
    name: "Soft Focus",
    idea: "The control: LockedIn as it is built today, a calm card dashboard in soft tinted colour, one hue per module, that goes dark and quiet around the question once a session starts.",
    fonts: ["https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Bricolage+Grotesque:wght@500;700;800&display=swap"],
    axes: {
      composition: "A dashboard of cards: Today is a hero card with five smaller cards beside and below it, and Progress stacks six sections. It grew from the first hi-fi rather than from a comparison, and the project's own notes record Today as showing more at once than the 'one tiny first step' principle asks for.",
      menu: "A 232 px rail down the left with five items, each a line icon and a word; it disappears in a session. Recorded reason: it is where students expect a menu from similar tools (mental models), and an icon with its label is read faster than an icon alone (Wiedenbeck 1999).",
      density: "Medium. Body text is 16 px at line height 1.5 with secondary labels at 14 px, cards have 20 to 28 px of padding, buttons are at least 44 px and answers 56 px. Recorded reason: large targets for one-handed, distracted use (WCAG 2.5.5, Parhi et al. 2006); the 16 px default is noted as on the small side.",
      numbers: "Studying is a score: one big number (230), a line chart against a dashed steady-pace line, a bar per module and plain counts on Today. Recorded reason: recording progress helps people reach goals (Harkin et al. 2016); the score never falls for a wrong answer and the gap to the pace line is never printed.",
      shape: "Rounded and soft: cards with a 20 px radius and a wide, faint coloured shadow, pill buttons, 16 px radius answers. Recorded reason: people prefer curved to sharp-cornered objects (Bar and Neta 2006) and round shapes were part of a design that helped learning (Um et al. 2012); the support is rated light.",
      type: "Bricolage Grotesque (700 to 800) for headings and big numbers over Atkinson Hyperlegible for everything else; the phone uses its own system font at 17 px. Recorded reason: a plain legible sans-serif helps every reader and special 'dyslexia fonts' do not (Rello and Baeza-Yates 2013); the heading face is brand character and declared as judgement.",
      colour: "Every colour is generated from one hue (violet, 285°) in OKLCH, and each module tints its own regions with its own hue; a session takes the module's hue for a dark backdrop. Right is blue and to-revisit is orange, never red, always with a word or mark. Recorded reason: one hue keeps colourfulness low and constant (Reinecke et al. 2013), and blue and orange stay apart for red-green colour blindness (Birch 2012).",
      icons: "One family of thin line icons at one stroke weight, always beside a word: the five menu items, the play mark in the hero, and status marks (tick, half circle, ring, dot, diamond). Recorded reason: consistency (Shneiderman 1) and icon plus label being the easiest to learn (Wiedenbeck 1999).",
      motion: "Calm by default: something moves only to explain a change the student caused. The ring fills as questions are answered, a right answer gets a soft tick, a wrong one slides its explanation in with no shake and no flash, and suggested blocks settle into the week one after another. Nothing moves to pull attention back, and Off or the system's reduced-motion setting removes it all (WCAG 2.3.3; Bartram et al. 2003).",
    },
    css,
    screens: {
      today(d) {
        const t = d.today, h = t.hero, b = t.block;
        const hero = `<div class="${tint(h._module)}"><button type="button" class="sf-hero">
          <span class="sf-hero-ring">${focusRing(h._done, h._total, 84, "#ffffff", "rgba(255,255,255,0.25)")}<span class="sf-hero-play">${ICON.play()}</span></span>
          <span class="sf-hero-text"><span class="sf-eyebrow sf-hero-eyebrow">${esc(h.eyebrow)}</span><span class="sf-hero-title">${esc(h.title)}</span><span class="sf-hero-sub">${esc(h.text)}</span></span>
          <span class="sf-hero-cta">${esc(h.cta)}</span>
        </button></div>`;
        const lectures = `<section class="sf-card"><h2 class="sf-h2" style="margin-bottom:8px">${esc(t.lecturesTitle)}</h2>${t.lectures.map((l) => `<div class="sf-tl"><span class="sf-tl-time">${esc(l.time)}</span>${moduleDot(l._module)}<span class="sf-col sf-grow"><b>${esc(l.what)}</b><span class="sf-small sf-muted">${esc(l.state)}</span></span><button type="button" class="sf-btn ghost sf-small">${esc(l.action)}</button></div>`).join("")}</section>`;
        const side = `<div class="sf-stack">
          <a href="#" class="sf-card flat sf-col" style="gap:6px"><h2 class="sf-h2 sf-h2s">${esc(t.revisit.title)}</h2><span class="sf-small sf-muted">${esc(t.revisit.text)}</span></a>
          <section class="sf-card flat"><h2 class="sf-h2 sf-h2s" style="margin-bottom:8px">${esc(t.week.title)}</h2><div class="sf-stats">${t.week.stats.map((s) => `<span class="sf-col"><b class="sf-display sf-stat-n">${esc(s.n)}</b><span class="sf-small sf-muted">${esc(s.label)}</span></span>`).join("")}</div></section>
          <div class="sf-card flat sf-row sf-next"><span class="sf-next-icon">${ICON.calendar()}</span><span class="sf-col sf-grow"><b>${esc(b.title)}</b><span class="sf-small sf-muted">${esc(b.when)} · ${esc(b.what)}</span><span class="sf-small">${esc(b.step)}</span></span><button type="button" class="sf-btn primary">${esc(b.cta)}</button><button type="button" class="sf-btn">${esc(b.alt)}</button></div>
          <a href="#" class="sf-btn" style="align-self:flex-start"><span class="sf-conic" aria-hidden="true"></span>${esc(t.appearance)}</a>
        </div>`;
        return app(d, "Today", `${pageHead(t.date, t.greeting)}<div class="sf-grid-2"><div class="sf-stack" style="gap:24px">${hero}${lectures}</div>${side}</div>`);
      },

      learn(d) {
        const l = d.learn;
        const tools = `${l.tools.map((x) => `<button type="button" class="sf-learn-tool">${esc(x)}</button>`).join("")}<b>${esc(l.time)}</b>`;
        const last = l.paragraphs.length - 1;
        const prose = `<div class="sf-prose">${l.paragraphs.map((p, i) => `<p>${esc(p)}${i === last ? ` ${l.chips.map(chip).join("")}` : ""}</p>`).join("")}</div>`;
        const options = `<div class="sf-stack" style="gap:10px" role="radiogroup">${l.options.map((o, i) => option(String(i + 1), o)).join("")}${option("?", l.dontKnow)}</div>`;
        return `<div class="sf-root"><div class="${tint("HCI")}"><div class="sf-focus sf-learn">
          ${focusTop(l.mode, "learn", l.title, l.where, tools, l.stop)}
          <div class="sf-panes"><section class="sf-qcard">
            <button type="button" class="sf-btn ghost" style="align-self:flex-start">${esc(l.earlier)}</button>
            <div class="sf-step">${prose}<span class="sf-eyebrow">${esc(l.label)}</span><h2 class="sf-q-stem" style="font-size:1.45em">${esc(l.question)}</h2>${options}</div>
            <div class="sf-say"><div class="sf-input">${esc(l.say)}</div><button type="button" class="sf-btn">${esc(l.send)}</button></div>
          </section></div>
        </div></div></div>`;
      },

      question(d) {
        const q = d.question;
        const right = `${qdots(q._n, q._of)}<b class="sf-count">${esc(q.count)}</b>`;
        return `<div class="sf-root"><div class="${tint("STAT")}"><div class="sf-focus">
          ${focusTop(q.mode, "practise", q.title, q.goal, right, q.stop)}
          <div class="sf-panes">
            <section class="sf-qcard">
              <h2 class="sf-q-stem">${esc(q.stem)}</h2>
              <span class="sf-small sf-muted">${esc(q.source)}</span>
              <div class="sf-stack" style="gap:10px" role="radiogroup">${q.options.map((o, i) => option(String(i + 1), o)).join("")}${option("?", q.dontKnow)}</div>
              <div class="sf-stack" style="gap:8px"><b>${esc(q.sure)}</b><div class="sf-stops" role="radiogroup">${q.sureOptions.map((s) => `<button type="button">${esc(s)}</button>`).join("")}</div></div>
              <div class="sf-row"><button type="button" class="sf-btn">${esc(q.showMe)} <span class="sf-kbd" aria-hidden="true">S</span></button><button type="button" class="sf-btn primary big" style="margin-left:auto">${esc(q.check)} <span class="sf-kbd" style="color:inherit;border-color:currentColor" aria-hidden="true">↵</span></button></div>
            </section>
            <aside class="sf-slides"><div class="sf-slides-head"><b>${esc(q.slide.page)}</b></div><div class="sf-slide"><h3>${esc(q.slide.title)}</h3><ul>${q.slide.bullets.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></aside>
          </div>
        </div></div></div>`;
      },

      feedback(d) {
        const f = d.feedback;
        const right = `${qdots(f._n, f._of)}<b class="sf-count">${esc(f.count)}</b>`;
        const opts = f.options.map((o) => option("", o.text, o._state === "answer" ? "is-answer" : o._state === "miss" ? "is-miss" : "is-plain", o.tag ? `<b class="sf-small sf-opt-tag">${o._state === "answer" ? "✓ " : ""}${esc(o.tag)}</b>` : "")).join("");
        return `<div class="sf-root"><div class="${tint("STAT")}"><div class="sf-focus">
          ${focusTop(f.mode, "practise", f.title, "", right, f.stop)}
          <div class="sf-panes">
            <section class="sf-qcard">
              <p class="sf-muted">${esc(f.head)}</p>
              <h2 class="sf-q-stem" style="font-size:1.35em">${esc(f.stem)}</h2>
              <div class="sf-stack" style="gap:8px">${opts}</div>
              <div class="sf-feedback miss"><span class="sf-fb-title">${esc(f.verdict)}</span><div class="sf-prose"><p>${esc(f.why)} ${chip(f.chip)}</p></div></div>
              <div class="sf-row"><span class="sf-small sf-muted sf-grow">${esc(f.later)}</span><button type="button" class="sf-btn primary big">${esc(f.next)} →</button></div>
            </section>
          </div>
        </div></div></div>`;
      },

      progress(d) {
        const p = d.progress;
        const maxShare = Math.max(0.0001, ...p.from.map((m) => m._share));
        const score = `<section class="sf-card sf-stack" style="gap:14px">
          <div class="sf-score-row"><div class="sf-col sf-grow"><h2 class="sf-eyebrow">${esc(p.scoreLabel)}</h2><span class="sf-row" style="align-items:baseline"><b class="sf-display sf-score">${esc(p.score)}</b><span class="sf-chip">${esc(p.gain)}</span><span class="sf-muted">${esc(p.secured)}</span></span></div>
          <div class="sf-row" role="group" style="gap:2px">${p.ranges.map((r, i) => `<button type="button" class="sf-hit" aria-pressed="${i === 0}"><span class="sf-chip" data-on="${i === 0}">${esc(r)}</span></button>`).join("")}</div></div>
          ${scoreChart(p)}
          <div class="sf-legend sf-small sf-muted"><span><i class="sf-key"></i>${esc(p.legendYou)}</span><span><i class="sf-key sf-key-pace"></i>${esc(p.legendPace)}</span></div>
        </section>`;
        const from = `<section class="sf-card sf-stack" style="gap:12px"><h2 class="sf-h2">${titled(p.fromTitle)}</h2>${p.from.map((m) => `<div class="sf-share"><span class="sf-share-row">${moduleDot(m._module)}<b class="sf-grow">${esc(m.name)}</b><span class="sf-small sf-muted" style="white-space:nowrap">${esc(m.time)}</span><b class="sf-share-pts">${esc(m.points)}</b></span><span class="${tint(m._module)}"><span class="sf-bar"><span style="width:${((m._share / maxShare) * 100).toFixed(1)}%"></span></span></span></div>`).join("")}</section>`;
        const attention = `<section class="sf-card sf-stack" style="gap:12px"><h2 class="sf-h2">${esc(p.attentionTitle)}</h2><div class="sf-attention"><span>${esc(p.attention.text)}</span><button type="button" class="sf-btn primary">${esc(p.attention.cta)}</button></div></section>`;
        const milestones = `<section class="sf-card sf-stack" style="gap:14px"><h2 class="sf-h2">${titled(p.milestonesTitle)}</h2><div class="sf-milestones">${p.milestones.map((m) => `<div class="sf-milestone" data-earned="${!!m._earned}"><b>${m._earned ? "◆ " : ""}${esc(m.name)}</b><span class="sf-small">${esc(m.when)}</span></div>`).join("")}</div></section>`;
        const gaps = `<section class="sf-stack"><h2 class="sf-h2">${esc(p.gapsTitle)}</h2>${p.gaps.map((g) => `<div class="${tint(g._module)}"><div class="sf-card" style="padding:12px 14px"><button type="button" class="sf-gap-row"><span class="sf-dot big" aria-hidden="true"></span><span class="sf-col sf-grow"><b>${esc(g.idea)}</b><span class="sf-small sf-muted">${esc(g.where)}</span></span><span class="sf-small">${esc(g.count)}</span></button></div></div>`).join("")}</section>`;
        return app(d, "Progress", `${pageHead(p.eyebrow, p.title)}${score}<div class="sf-progress-two">${from}${attention}</div>${milestones}${gaps}`);
      },

      week(d) {
        const w = d.week;
        const m = /^(.*\S)\s+(\d[\d.]*\s*h)$/.exec(w.target);
        const target = m ? `<span class="sf-row" style="gap:8px"><b>${esc(m[1])}</b> <span class="sf-input sf-select">${esc(m[2])}${ICON.chevron()}</span></span>` : `<b>${esc(w.target)}</b>`;
        const bar = `<section class="sf-card sf-row" style="gap:16px">${target}<span class="sf-muted sf-grow">${esc(w.kept)}</span><button type="button" class="sf-btn primary">${esc(w.plan)}</button></section>`;
        return app(d, "Week", `${pageHead(w.eyebrow, w.title, `<div class="sf-row" style="margin-top:12px"><b>${esc(w.range)}</b></div>`)}${bar}${timetable(w)}`);
      },

      phone(d) {
        const p = d.phone;
        return `<div class="sf-phone"><main>
          <header class="bar"><b>${esc(p.brand)}</b> <span class="muted small">${esc(p.where)}</span></header>
          <p class="muted small">${esc(p.count)}</p>
          <h1>${esc(p.stem)}</h1>
          <div class="options" role="group">${p.options.map((o) => `<button type="button" class="btn option">${esc(o)}</button>`).join("")}</div>
          <p class="muted small">${esc(p.why)}</p>
          <button type="button" class="btn ghost">${esc(p.later)}</button>
        </main></div>`;
      },
    },

    styleSheet(d) {
      const sw = (name, hex, use, bg) => `<div class="sf-sw"><i style="background:${bg || hex}"></i><b>${name}</b><code>${hex}</code><span class="sf-muted">${use}</span></div>`;
      const ic = (name, mark) => `<div class="sf-ic">${mark}<span>${name}</span></div>`;
      const glyph = (g) => `<b style="font-size:18px;line-height:20px">${g}</b>`;
      const type = `<section class="sf-card"><h2 class="sf-h2">Type</h2><div class="sf-spec">
        <span class="sf-small">Bricolage Grotesque 800 · 41.6 px<br>page title</span><span class="sf-h1">${esc(d.today.greeting)}</span>
        <span class="sf-small">Bricolage Grotesque 800 · 48 px<br>big number</span><b class="sf-display sf-score">${esc(d.progress.score)}</b>
        <span class="sf-small">Bricolage Grotesque 800 · 30.4 px<br>hero title</span><span class="sf-hero-title">${esc(d.today.hero.title)}</span>
        <span class="sf-small">Bricolage Grotesque 700 · 28 px<br>question</span><span class="sf-q-stem">${esc(d.question.stem)}</span>
        <span class="sf-small">Bricolage Grotesque 700 · 20 px<br>card heading</span><span class="sf-h2">${esc(d.progress.attentionTitle)}</span>
        <span class="sf-small">Atkinson Hyperlegible 400 / 700 · 16 px / 1.5 · body</span><span>${esc(d.learn.paragraphs[2])} <b>${esc(d.today.block.title)}</b></span>
        <span class="sf-small">Atkinson Hyperlegible 400 · 14 px<br>secondary label</span><span class="sf-small sf-muted">${esc(d.today.revisit.text)}</span>
        <span class="sf-small">Atkinson Hyperlegible 700 · 13 px<br>eyebrow, in capitals</span><span class="sf-eyebrow">${esc(d.progress.scoreLabel)}</span>
        <span class="sf-small">Atkinson Hyperlegible 13 px<br>smallest: timetable, key hints</span><span style="font-size:13px"><b>${esc(d.week.blocks[0].time)} ${esc(d.week.blocks[0].what)}</b> <span class="sf-kbd">1</span></span>
        <span class="sf-small">Phone: system-ui 17 px / 1.45,<br>question 700 · 25.5 px</span><span style="font:700 25.5px/1.2 system-ui,-apple-system,'Segoe UI',sans-serif">${esc(d.phone.stem)}</span>
      </div></section>`;
      const colour = `<section class="sf-card"><h2 class="sf-h2">Colour <span class="sf-muted sf-small sf-plain">· generated from one hue, violet 285°</span></h2><div class="sf-swatches">
        ${sw("Page", "#fbfbff → #faf1ff", "page background, a slow fade", "linear-gradient(160deg,#fbfbff,#faf1ff)")}
        ${sw("Surface", "#fdfdff", "cards, answers, buttons")}
        ${sw("Ink", "#1b1a2d", "text")}
        ${sw("Muted", "#535368", "secondary text, pace line")}
        ${sw("Hairline", "#dcdced", "borders, grid lines")}
        ${sw("Accent", "#5d4fb9", "main button, your line, HCI")}
        ${sw("Accent text", "#43368e", "current menu item, chips")}
        ${sw("Soft tint", "#e9eaff", "current item, chips, notes")}
        ${sw("Right / secure", "#006aa0 on #d7efff", "text #003151, with a tick", "linear-gradient(90deg,#006aa0 50%,#d7efff 50%)")}
        ${sw("To revisit / wrong pick", "#c46016 on #ffebd4", "text #743100, with a word", "linear-gradient(90deg,#c46016 50%,#ffebd4 50%)")}
        ${sw("Session backdrop", "#2b2458 → #110317", "behind a question (HCI)", "radial-gradient(120% 90% at 20% 0%,#2b2458,#110317)")}
        ${sw("Session panel", "#181535", "slide panel; text #f4f4fc")}
        ${sw("STAT, teal 202°", "#007a8a", "tint #cff5f8, session #003941", "linear-gradient(90deg,#007a8a 50%,#cff5f8 50%,#cff5f8 75%,#003941 75%)")}
        ${sw("HIST, magenta 325°", "#8e3b94", "tint #fbe4fc, session #431a46", "linear-gradient(90deg,#8e3b94 50%,#fbe4fc 50%,#fbe4fc 75%,#431a46 75%)")}
        ${sw("Phone violet", "#6d5fd3", "phone focus and hover")}
        ${sw("Phone page", "#f7f5fc", "line #e3dff0, muted #6a6680")}
      </div></section>`;
      const icons = `<section class="sf-card"><h2 class="sf-h2">Icons <span class="sf-muted sf-small sf-plain">· line, 2 px stroke, always with a word</span></h2><div class="sf-icons">
        ${ic("logo", logo(22))}${ic("today", ICON.today())}${ic("library", ICON.library())}${ic("week", ICON.calendar())}${ic("progress", ICON.progress())}${ic("me", ICON.me())}${ic("continue", ICON.play())}
        ${ic("solid", ICON.check())}${ic("shaky", ICON.half())}${ic("to revisit", ICON.ring())}${ic("not yet", ICON.dot())}${ic("open", ICON.chevron())}
        ${ic("answer", glyph("✓"))}${ic("milestone", glyph("◆"))}${ic("stop", glyph("✕"))}${ic("next", glyph("→"))}${ic("enter key", `<span class="sf-kbd">↵</span>`)}
      </div></section>`;
      const buttons = `<section class="sf-card"><h2 class="sf-h2">Buttons <span class="sf-muted sf-small sf-plain">· pills, 44 px; the main one 52 px</span></h2>
        <div class="sf-row"><button type="button" class="sf-btn primary big">${esc(d.feedback.next)} →</button><button type="button" class="sf-btn primary">${esc(d.week.plan)}</button><button type="button" class="sf-btn">${esc(d.today.block.alt)}</button><button type="button" class="sf-btn soft">${esc(d.phone.later)}</button><button type="button" class="sf-btn ghost">${esc(d.today.lectures[0].action)}</button><button type="button" class="sf-btn primary" disabled>${esc(d.question.check)}</button></div>
        <div class="sf-row"><span class="sf-small sf-muted">main · main, small · plain · soft · quiet link · not ready</span></div>
        <div class="sf-row"><div class="${tint("HIST")}" style="flex:1 1 300px"><div class="sf-hero" style="padding:14px 18px;border-radius:18px"><span class="sf-hero-ring">${focusRing(2, 4, 44, "#ffffff", "rgba(255,255,255,0.25)")}</span><b>Hero, in the module's colour</b><span class="sf-hero-cta">${esc(d.today.hero.cta)}</span></div></div>
        <span class="sf-row" style="gap:4px">${chip(d.feedback.chip)}<span class="sf-chip" data-on="true">${esc(d.progress.ranges[0])}</span><span class="sf-chip">${esc(d.progress.ranges[1])}</span></span></div>
      </section>`;
      const answers = `<section class="sf-card"><h2 class="sf-h2">Answer option <span class="sf-muted sf-small sf-plain">· 56 px rows with a key hint</span></h2><div class="sf-states">
        <span class="sf-small">Resting</span>${option("1", d.learn.options[1])}
        <span class="sf-small">Chosen</span>${option("2", d.learn.options[0], "is-picked")}
        <span class="sf-small">The answer</span>${option("", d.feedback.options[0].text, "is-answer", `<b class="sf-small sf-opt-tag">✓ ${esc(d.feedback.options[0].tag)}</b>`)}
        <span class="sf-small">A wrong pick</span>${option("", d.feedback.options[1].text, "is-miss", `<b class="sf-small sf-opt-tag">${esc(d.feedback.options[1].tag)}</b>`)}
        <span class="sf-small">${esc(d.question.dontKnow)}</span>${option("?", d.question.dontKnow)}
      </div></section>`;
      const sure = `<section class="sf-card"><h2 class="sf-h2">${esc(d.question.sure)} <span class="sf-muted sf-small sf-plain">· four taps, none chosen for you; here the third is chosen</span></h2><div class="sf-stops">${d.question.sureOptions.map((s, i) => `<button type="button"${i === 2 ? ' class="is-picked"' : ""}>${esc(s)}</button>`).join("")}</div></section>`;
      const status = `<section class="sf-card"><h2 class="sf-h2">Status marks <span class="sf-muted sf-small sf-plain">· always a mark or a word, never colour alone</span></h2>
        <div class="sf-row"><span class="sf-status solid">${ICON.check()}Solid</span><span class="sf-status solid">${ICON.half()}Shaky</span><span class="sf-status revisit">${ICON.ring()}To revisit</span><span class="sf-status notyet">${ICON.dot()}Not yet</span><span class="sf-status solid">${ICON.check()}Done</span></div>
        <div class="sf-row" style="align-items:stretch"><div class="sf-milestone" data-earned="true" style="flex:1"><b>◆ ${esc(d.progress.milestones[0].name)}</b><span class="sf-small">${esc(d.progress.milestones[0].when)}</span></div><div class="sf-milestone" data-earned="false" style="flex:1"><b>${esc(d.progress.milestones[4].name)}</b><span class="sf-small">still to earn: dashed</span></div></div>
        <div class="${tint("STAT")}"><div class="sf-demo-dark"><span class="sf-mode" data-study="practise">${esc(d.question.mode)}</span><span class="sf-mode" data-study="learn">${esc(d.learn.mode)}</span>${qdots(3, 5)}<span class="sf-small">done · the one you are on (larger) · to come</span></div></div>
        <div class="sf-demo-tt-row">
          <div class="sf-demo-tt"><div class="${tint("HCI")} sf-tt-item sf-tt-fixed"><b>${esc(d.week.lectures[0].time)} HCI</b><span>Lecture: flat</span></div></div>
          <div class="sf-demo-tt"><div class="sf-tt-item sf-tt-commit"><b>${esc(d.week.commitments[0].time)}</b><span>${esc(d.week.commitments[0].what)}: hatched</span></div></div>
          <div class="sf-demo-tt"><div class="${tint("STAT")} sf-tt-item sf-tt-block"><div class="sf-tt-grab" data-status="done"><b>STAT study</b><span>done ✓: solid</span></div></div></div>
          <div class="sf-demo-tt"><div class="${tint("HIST")} sf-tt-item sf-tt-block"><div class="sf-tt-grab" data-status="proposed"><b>HIST study</b><span>suggested: dashed</span></div></div></div>
        </div>
      </section>`;
      const menu = `<section class="sf-card"><h2 class="sf-h2">Menu <span class="sf-muted sf-small sf-plain">· left rail, icon and word; the current page is tinted</span></h2><div class="sf-row" style="align-items:flex-start;flex-wrap:nowrap;gap:20px"><div class="sf-rail sf-demo-rail">${d.menu.map((m, i) => `<a class="sf-nav" href="#"${i === 0 ? ' aria-current="page"' : ""}>${(ICON[NAV_ICON[m]] || ICON.dot)()}<span>${esc(m)}</span></a>`).join("")}</div>
        <div class="sf-stack sf-grow"><span class="sf-small sf-muted">Card: radius 20, hairline border, soft shadow in the page's hue.</span><div class="sf-card" style="gap:4px"><b>${esc(d.today.revisit.title)}</b><span class="sf-small sf-muted">${esc(d.today.revisit.text)}</span></div><span class="sf-small sf-muted">Text box: 44 px, 2 px border.</span><div class="sf-input" style="color:var(--sf-muted)">${esc(d.learn.say)}</div></div></div></section>`;
      return `<div class="sf-root"><div class="sf-sheet">
        <div class="sf-sheet-top">${logo(44)}<div class="sf-col"><h1 class="sf-h1" style="font-size:2.2em">Soft Focus</h1><span class="sf-muted">The control: LockedIn as it is built today. Rounded cards, soft tinted colour, one hue per module.</span></div></div>
        <div class="sf-sheet-grid"><div class="sf-stack" style="gap:20px">${type}${icons}${answers}${sure}</div><div class="sf-stack" style="gap:20px">${colour}${buttons}${status}${menu}</div></div>
      </div></div>`;
    },
  });
})();
