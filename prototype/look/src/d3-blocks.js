// Blocks: big, bold, hard to miss. One file, one design.
(function () {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // ---------- icons: one family, filled and rounded, drawn on a 24 grid ----------
  const IC = {
    today: `<circle cx="12" cy="12" r="5"/><path fill="none" stroke-width="2.6" d="M12 2.4v1.7M12 19.9v1.7M2.4 12h1.7M19.9 12h1.7M5.2 5.2l1.2 1.2M17.6 17.6l1.2 1.2M5.2 18.8l1.2-1.2M17.6 6.4l1.2-1.2"/>`,
    library: `<rect x="3" y="3" width="5" height="18" rx="1.6"/><rect x="9.5" y="7" width="5" height="14" rx="1.6"/><rect x="16" y="4.5" width="5" height="16.5" rx="1.6"/>`,
    week: `<path fill-rule="evenodd" d="M6 4.5h12a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3zM6.8 10.6v3h3v-3zM14.2 10.6v3h3v-3zM6.8 15.4v2.8h3v-2.8z"/><rect x="6.6" y="2" width="2.6" height="5" rx="1.3"/><rect x="14.8" y="2" width="2.6" height="5" rx="1.3"/>`,
    progress: `<rect x="3" y="13" width="5" height="8" rx="1.6"/><rect x="9.5" y="8" width="5" height="13" rx="1.6"/><rect x="16" y="3" width="5" height="18" rx="1.6"/>`,
    me: `<circle cx="12" cy="7.6" r="4.4"/><path d="M3.8 20.2c0-4 3.6-6.4 8.2-6.4s8.2 2.4 8.2 6.4c0 .8-.6 1.3-1.4 1.3H5.2c-.8 0-1.4-.5-1.4-1.3z"/>`,
    go: `<path fill="none" stroke-width="3.2" d="M4.5 12h14M13 6l6 6-6 6"/>`,
    check: `<path fill="none" stroke-width="3.4" d="M5 12.8l4.4 4.4L19 7.4"/>`,
    pick: `<circle cx="12" cy="12" r="8" fill="none" stroke-width="3"/><circle cx="12" cy="12" r="3.4"/>`,
    almost: `<circle cx="12" cy="12" r="8.6" fill="none" stroke-width="2.6"/><path d="M12 12V6.8a5.2 5.2 0 1 1-5.2 5.2z"/>`,
    clock: `<path fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zM10.8 6.6h2.4v4.7l3.2 1.9-1.2 2.1-4.4-2.6z"/>`,
    learn: `<path stroke-width="1.6" d="M3 6c2.8-1 5.6-.7 7.8.9v12.3C8.6 17.6 5.8 17.3 3 18.3zM21 6c-2.8-1-5.6-.7-7.8.9v12.3c2.2-1.6 5-1.9 7.8-.9z"/>`,
    practise: `<path stroke-width="1.4" d="M4 20l1.1-4.6L15.9 4.6a1.6 1.6 0 0 1 2.3 0l1.2 1.2a1.6 1.6 0 0 1 0 2.3L8.6 18.9z"/>`,
    pause: `<rect x="5.5" y="4.5" width="5" height="15" rx="1.8"/><rect x="13.5" y="4.5" width="5" height="15" rx="1.8"/>`,
    slide: `<rect x="2.5" y="3.5" width="19" height="12.5" rx="2.6"/><path fill="none" stroke-width="2.6" d="M12 16v3.5M8 20.5h8"/>`,
    plan: `<rect x="3" y="4" width="4" height="4" rx="1.3"/><rect x="9.5" y="4.25" width="11.5" height="3.5" rx="1.75"/><rect x="3" y="10" width="4" height="4" rx="1.3"/><rect x="9.5" y="10.25" width="11.5" height="3.5" rx="1.75"/><rect x="3" y="16" width="4" height="4" rx="1.3"/><rect x="9.5" y="16.25" width="11.5" height="3.5" rx="1.75"/>`,
    down: `<path fill="none" stroke-width="3.2" d="M6 9l6 6 6-6"/>`,
    send: `<path stroke-width="1.8" d="M3.5 11L20.5 3.5 15 20.5l-3.4-6.2z"/>`,
    say: `<path stroke-width="1.4" d="M5 4.500h14a2.500 2.500 0 0 1 2.500 2.500v7.500A2.500 2.500 0 0 1 19 17h-7.500L7 20.500V17H5a2.500 2.500 0 0 1-2.500-2.500V7A2.500 2.500 0 0 1 5 4.500z"/>`,
    ai: `<path stroke-width="1.6" d="M12 3l2.3 6.7L21 12l-6.7 2.300L12 21l-2.300-6.700L3 12l6.700-2.300z"/>`,
    unsure: `<path fill="none" stroke-width="3.2" d="M8 8.500a4 4 0 1 1 6 3.500c-1.300.800-2 1.600-2 3"/><circle cx="12" cy="19.600" r="1.900"/>`,
    eye: `<path fill-rule="evenodd" d="M1.800 12C4.300 7.600 7.900 5.200 12 5.200s7.700 2.400 10.200 6.800c-2.500 4.400-6.100 6.800-10.200 6.800S4.300 16.400 1.800 12zM12 8.600a3.400 3.400 0 1 0 0 6.800 3.400 3.400 0 0 0 0-6.800z"/>`,
    again: `<path fill="none" stroke-width="3.2" d="M18.800 13.500A7 7 0 1 1 16.200 6.500"/><path stroke-width="1.6" d="M19.800 3v6h-6z"/>`,
    palette: `<path fill-rule="evenodd" d="M12 3a9 9 0 0 0 0 18c1.400 0 2.200-.900 2.200-2 0-1.200-.800-1.600-.800-2.600 0-1 .800-1.700 1.900-1.700H17a4 4 0 0 0 4-4c0-4.400-4-7.700-9-7.700zM7.600 10a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3zM10.800 6.200a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3zM15.400 6.800a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3z"/>`,
    lecture: `<path stroke-width="1.4" d="M12 4L2.500 8.800 12 13.600l9.500-4.800z"/><path d="M6.500 12.800v3.600c1.500 1.500 3.300 2.300 5.500 2.300s4-.800 5.500-2.300v-3.600L12 15.600z"/><path fill="none" stroke-width="2" d="M21.200 9.200v4.800"/>`,
    flag: `<rect x="4" y="2.500" width="2.800" height="19" rx="1.400"/><path stroke-width="1.6" d="M8.500 4.500H19l-2.600 3.800L19 12H8.500z"/>`,
    up: `<path fill="none" stroke-width="3.2" d="M12 19.500V5.500M6 11l6-6 6 6"/>`,
    move: `<path fill="none" stroke-width="2.6" d="M12 3v18M3 12h18M9.200 5.800L12 3l2.800 2.800M9.200 18.200L12 21l2.800-2.800M5.800 9.200L3 12l2.800 2.800M18.200 9.200L21 12l-2.800 2.800"/>`,
    work: `<rect x="2.500" y="7.500" width="19" height="13" rx="2.800"/><path fill="none" stroke-width="2.4" d="M8.500 7.500V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.500"/>`,
    target: `<path fill-rule="evenodd" d="M12 2.500a9.500 9.500 0 1 0 0 19 9.500 9.500 0 0 0 0-19zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>`,
    hci: `<path stroke-width="2" d="M5.500 4l13 6.200-5.400 1.900-1.900 5.400z"/>`,
    stat: `<path stroke-width="1.6" d="M2.500 19c4.200 0 4.700-13 9.500-13s5.300 13 9.500 13z"/>`,
    hist: `<rect x="3.500" y="3" width="17" height="4" rx="1.400"/><rect x="6" y="8.500" width="3" height="8" rx="1"/><rect x="10.500" y="8.500" width="3" height="8" rx="1"/><rect x="15" y="8.500" width="3" height="8" rx="1"/><rect x="3" y="18" width="18" height="3.500" rx="1.400"/>`,
  };
  const ic = (n, s = 24, c = "") =>
    `<svg class="bk-ic${c ? " " + c : ""}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${IC[n]}</svg>`;

  const MOD = { HCI: { c: "bk-hci", i: "hci" }, STAT: { c: "bk-stat", i: "stat" }, HIST: { c: "bk-hist", i: "hist" } };
  const MENU = { Today: "today", Library: "library", Week: "week", Progress: "progress", Me: "me" };
  const modFor = (d, s) => (d.modules.find((m) => s.startsWith(m.code) || s.includes(m.name)) || d.modules[0]).code;
  const modChip = (code, size = 22) => `<span class="bk-mod ${MOD[code].c}">${ic(MOD[code].i, size)}</span>`;

  const logo = `<svg class="bk-logo" width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><rect x="1" y="1" width="14.500" height="14.500" rx="4.500" fill="#FF9248"/><rect x="1" y="18.500" width="14.500" height="14.500" rx="4.500" fill="#FFD037"/><rect x="18.500" y="18.500" width="14.500" height="14.500" rx="4.500" fill="#FF94BC"/></svg>`;

  // the menu: a tab bar along the top
  const bar = (d, on) => `
  <header class="bk-bar">
    <a class="bk-brand" href="#">${logo}<span>${esc(d.brand)}</span></a>
    <nav class="bk-tabs" aria-label="Main">
      ${d.menu.map((m) => `<a class="bk-tab" href="#"${m === on ? ' aria-current="page"' : ""}>${ic(MENU[m], 28)}<span>${esc(m)}</span></a>`).join("")}
    </nav>
  </header>`;

  // the bar of a study session (Learn, Practise): where you are, and the way out
  const sbar = (mode, icon, title, sub, right) => `
  <header class="bk-sbar">
    <span class="bk-mode">${ic(icon, 24)}<span>${esc(mode)}</span></span>
    <div class="bk-sbar-main">
      <h1 class="bk-sbar-title">${esc(title)}</h1>
      ${sub ? `<div class="bk-sbar-sub">${sub}</div>` : ""}
    </div>
    <div class="bk-sbar-right">${right}</div>
  </header>`;
  const stopBtn = (label) => `<button class="bk-btn bk-btn-inv" type="button">${ic("pause", 20)}<span>${esc(label)}</span></button>`;

  // segmented counter: solid = done, tall with a dot = this one, dashed = to come
  const segs = (n, of) =>
    `<span class="bk-segs" aria-hidden="true">${Array.from({ length: of }, (_, i) => `<i class="bk-seg${i < n - 1 ? " is-done" : i === n - 1 ? " is-now" : ""}"></i>`).join("")}</span>`;

  const box = (state) =>
    `<span class="bk-box" aria-hidden="true">${state === "is-answer" ? ic("check", 18) : state === "is-miss" || state === "is-on" ? `<i class="bk-dot"></i>` : ""}</span>`;
  const opt = (text, state = "", tag = "", el = "button") =>
    `<${el} class="bk-opt${state ? " " + state : ""}"${el === "button" ? ' type="button"' : ""}>${box(state)}<span class="bk-opt-t">${esc(text)}</span>${tag}</${el}>`;

  const lvl = (n) => `<span class="bk-lvl" aria-hidden="true">${[1, 2, 3, 4].map((k) => `<i${k <= n ? ' class="is-f"' : ""}></i>`).join("")}</span>`;
  const sure = (labels, on = -1) =>
    `<div class="bk-sure" role="group">${labels.map((s, i) => `<button class="bk-sure-o${i === on ? " is-on" : ""}" type="button">${lvl(i + 1)}<span>${esc(s)}</span></button>`).join("")}</div>`;

  // the week's time split: a thick ring of wedges, one per module
  const ring = (parts) => {
    const R = 104, r = 52, c = 110;
    let a = -Math.PI / 2;
    const pt = (rad, ang) => `${(c + rad * Math.cos(ang)).toFixed(1)} ${(c + rad * Math.sin(ang)).toFixed(1)}`;
    const wedges = parts.map((p) => {
      const a0 = a, a1 = a + p._share * 2 * Math.PI;
      a = a1;
      const big = p._share > 0.5 ? 1 : 0, mid = (a0 + a1) / 2;
      const ix = c + ((R + r) / 2) * Math.cos(mid) - 11, iy = c + ((R + r) / 2) * Math.sin(mid) - 11;
      return `<path d="M${pt(R, a0)}A${R} ${R} 0 ${big} 1 ${pt(R, a1)}L${pt(r, a1)}A${r} ${r} 0 ${big} 0 ${pt(r, a0)}Z" style="fill:var(--${p._module.toLowerCase()})"/>
        <svg x="${ix.toFixed(1)}" y="${iy.toFixed(1)}" width="22" height="22" viewBox="0 0 24 24" fill="#1F1B2D" stroke="#1F1B2D" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">${IC[MOD[p._module].i]}</svg>`;
    });
    return `<svg class="bk-ring" width="220" height="220" viewBox="0 0 220 220" aria-hidden="true"><g stroke="#1F1B2D" stroke-width="3" stroke-linejoin="round">${wedges.join("")}</g></svg>`;
  };

  // the score, day by day: a stack of blocks for you, a shelf for the steady pace
  const stacks = (p) => {
    const u = 0.7, unit = 25;
    return `<div class="bk-stacks">${p.days.map((day, i) => {
      const v = p._you[i], pace = p._pace[i];
      let blocks = "";
      if (v != null) {
        const edges = [];
        for (let k = 0; k * unit < v; k++) edges.push([k * unit, Math.min(v, (k + 1) * unit)]);
        if (edges.length > 1 && edges[edges.length - 1][1] - edges[edges.length - 1][0] < 10) { const last = edges.pop(); edges[edges.length - 1][1] = last[1]; }
        blocks = edges.map(([b, t]) => `<i class="bk-blk" style="bottom:${(b * u).toFixed(1)}px;height:${((t - b) * u - 3).toFixed(1)}px"></i>`).join("");
      }
      return `<div class="bk-stack-col"><div class="bk-stack">${blocks}<i class="bk-shelf" style="bottom:${(pace * u).toFixed(1)}px"></i></div><span class="bk-stack-day">${esc(day)}</span></div>`;
    }).join("")}</div>`;
  };

  // ---------- CSS ----------
  const css = `
.bk{--ink:#1F1B2D;--paper:#FFF3DC;--card:#FFFDF8;--sand:#F1DFBC;--mute:#4B4560;
  --hci:#FF9248;--hci-soft:#FFDCC2;--stat:#FFD037;--stat-soft:#FFEFB0;--hist:#FF94BC;--hist-soft:#FFD9E7;
  --mint:#7BE0AE;--lilac:#CDBEFF;
  --head:"Bricolage Grotesque","Arial Black","Helvetica Neue",Arial,sans-serif;
  --text:"Atkinson Hyperlegible Next","Atkinson Hyperlegible",Verdana,"Segoe UI",Arial,sans-serif;
  --m:var(--sand);--ms:var(--sand);
  box-sizing:border-box;min-height:100vh;background:var(--paper);color:var(--ink);
  font-family:var(--text);font-size:17px;line-height:1.5;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.bk *,.bk *::before,.bk *::after{box-sizing:border-box}
:where(.bk) :is(h1,h2,h3,p,ul,ol){margin:0;padding:0}
:where(.bk) :is(ul,ol){list-style:none}
:where(.bk) a{color:inherit;text-decoration:none}
:where(.bk) button{font-family:var(--text);color:inherit}
.bk-ic{flex:none;display:block}
.bk-hci{--m:var(--hci);--ms:var(--hci-soft)}
.bk-stat{--m:var(--stat);--ms:var(--stat-soft)}
.bk-hist{--m:var(--hist);--ms:var(--hist-soft)}
.bk-wrap{max-width:1280px;margin:0 auto;padding:28px 32px 56px}

/* menu: a tab bar along the top */
.bk-bar{display:flex;align-items:flex-end;gap:40px;height:84px;padding:0 32px;background:var(--ink);color:var(--paper)}
.bk-brand{display:flex;align-items:center;gap:12px;height:84px;font:800 27px/1 var(--head);letter-spacing:-.02em}
.bk-tabs{display:flex;gap:6px}
.bk-tab{display:flex;align-items:center;gap:10px;height:64px;padding:0 22px 4px;border-radius:20px 20px 0 0;font:700 19px/1 var(--text);color:var(--paper)}
.bk-tab:hover{background:rgba(255,243,220,.16)}
.bk-tab[aria-current]{background:var(--paper);color:var(--ink)}
.bk-tab:focus-visible{outline:3px solid var(--stat);outline-offset:-6px}

/* session bar */
.bk-sbar{display:flex;align-items:center;gap:20px;min-height:92px;padding:14px 32px;background:var(--ink);color:var(--paper)}
.bk-mode{flex:none;display:inline-flex;align-items:center;gap:9px;height:52px;padding:0 18px 0 14px;border-radius:16px;background:var(--m);color:var(--ink);font:800 21px/1 var(--head)}
.bk-sbar-main{min-width:0}
.bk-sbar-title{font:800 28px/1.1 var(--head);letter-spacing:-.015em}
.bk-sbar-sub{display:flex;align-items:center;gap:12px;margin-top:5px;font-size:16px;line-height:1.3}
.bk-sbar-right{margin-left:auto;display:flex;align-items:center;gap:12px;flex:none}
.bk-sbar-time{display:inline-flex;align-items:center;gap:8px;padding:0 6px;font:700 17px/1 var(--text)}
.bk-sbar .bk-seg{border-color:var(--paper)}
.bk-sbar .bk-seg.is-done{background:var(--paper)}
.bk-sbar .bk-seg.is-now{background:var(--m)}
.bk-sbar .bk-seg.is-now::after{background:var(--ink)}

/* buttons: a hard shadow means "this can be pressed" */
.bk-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 22px;border:3px solid var(--ink);border-radius:17px;background:var(--card);color:var(--ink);font:700 18px/1.15 var(--text);box-shadow:4px 4px 0 var(--ink);cursor:pointer;text-align:center;transition:transform .12s cubic-bezier(.3,1.6,.5,1),box-shadow .12s}
.bk-btn:hover,.bk-btn.is-hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}
.bk-btn:active,.bk-btn.is-press{transform:translate(4px,4px);box-shadow:0 0 0 var(--ink)}
.bk-btn:focus-visible,.bk-btn.is-focus{outline:4px solid var(--ink);outline-offset:4px}
.bk-btn-go{min-height:68px;padding:0 30px 0 32px;border-radius:22px;background:var(--ink);color:var(--paper);font:800 24px/1.1 var(--head);letter-spacing:-.01em;box-shadow:6px 6px 0 rgba(31,27,45,.3)}
.bk-btn-go:hover,.bk-btn-go.is-hover{box-shadow:8px 8px 0 rgba(31,27,45,.3)}
.bk-btn-go:active,.bk-btn-go.is-press{transform:translate(6px,6px);box-shadow:0 0 0 rgba(31,27,45,.3)}
.bk-btn-quiet{background:transparent;box-shadow:none;border-width:2.500px}
.bk-btn-quiet:hover,.bk-btn-quiet.is-hover{background:rgba(255,253,248,.6);transform:none;box-shadow:none}
.bk-btn-quiet:active,.bk-btn-quiet.is-press{transform:scale(.97);box-shadow:none}
.bk-btn-sm{min-height:44px;padding:0 14px;border-radius:14px;font-size:16px;box-shadow:3px 3px 0 var(--ink)}
.bk-btn-sm:hover{box-shadow:5px 5px 0 var(--ink)}
.bk-btn-inv{min-height:48px;padding:0 16px;background:transparent;color:var(--paper);border-color:var(--paper);border-width:2.500px;box-shadow:none;font-size:17px;border-radius:15px}
.bk-btn-inv:hover{background:rgba(255,243,220,.16);transform:none;box-shadow:none}
.bk-btn-inv:focus-visible{outline-color:var(--paper)}
.bk-btn-wide{width:100%}

/* panels: big flat areas of colour */
.bk-panel{border:3px solid var(--ink);border-radius:30px;background:var(--card);padding:28px}
.bk-fill{background:var(--m)}
.bk-inkp{background:var(--ink);color:var(--paper)}
.bk-eye{display:flex;align-items:center;gap:10px;font:700 17px/1.25 var(--text)}
.bk-h2{font:800 28px/1.1 var(--head);letter-spacing:-.015em}
.bk-mod{flex:none;display:inline-grid;place-items:center;width:40px;height:40px;border:2.500px solid var(--ink);border-radius:13px;background:var(--m);color:var(--ink)}
.bk-fill .bk-mod{background:var(--card)}
.bk-tag{display:inline-flex;align-items:center;gap:6px;min-height:30px;padding:2px 11px;border:2px solid var(--ink);border-radius:999px;background:var(--card);color:var(--ink);font:700 16px/1.1 var(--text);white-space:nowrap}
.bk-tag-ink{background:var(--ink);color:var(--card)}

/* segmented counter */
.bk-segs{display:inline-flex;align-items:center;gap:6px}
.bk-seg{position:relative;width:34px;height:16px;border:2.500px dashed var(--ink);border-radius:6px}
.bk-seg.is-done{border-style:solid;background:var(--ink)}
.bk-seg.is-now{border-style:solid;height:26px;border-radius:8px;background:var(--card)}
.bk-seg.is-now::after{content:"";position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px;border-radius:50%;background:var(--ink)}
.bk-count{display:flex;align-items:center;gap:14px;font:700 17px/1 var(--text)}

/* answer options */
.bk-opts{display:grid;gap:12px}
.bk-opt{display:flex;align-items:center;gap:14px;width:100%;min-height:56px;padding:10px 16px 10px 14px;border:3px solid var(--ink);border-radius:18px;background:var(--card);color:var(--ink);font:600 17px/1.3 var(--text);text-align:left;box-shadow:4px 4px 0 var(--ink);cursor:pointer;transition:transform .12s cubic-bezier(.3,1.6,.5,1),box-shadow .12s}
button.bk-opt:hover,.bk-opt.is-hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}
button.bk-opt:active{transform:translate(4px,4px);box-shadow:none}
button.bk-opt:focus-visible{outline:4px solid var(--ink);outline-offset:4px}
.bk-opt-t{flex:1;min-width:0}
.bk-box{flex:none;display:grid;place-items:center;width:30px;height:30px;border:3px solid var(--ink);border-radius:10px;background:var(--card);color:var(--card)}
.bk-dot{width:10px;height:10px;border-radius:50%;background:currentColor}
.bk-opt.is-on{transform:translate(4px,4px);box-shadow:none;background:var(--sand)}
.bk-opt.is-on .bk-box,.bk-opt.is-miss .bk-box,.bk-opt.is-answer .bk-box{background:var(--ink)}
.bk-opt.is-answer{background:var(--mint);box-shadow:none;cursor:default}
.bk-opt.is-miss{background:var(--lilac);box-shadow:none;cursor:default}
.bk-opt.is-plain{box-shadow:none;border-width:2px;padding:11px 17px 11px 15px;color:var(--mute);cursor:default}
.bk-opt.is-plain .bk-box{border-width:2px;border-color:var(--mute)}

/* how sure are you */
.bk-sure{display:grid;grid-template-columns:repeat(4,1fr);border:3px solid var(--ink);border-radius:18px;background:var(--card);box-shadow:4px 4px 0 var(--ink);overflow:hidden}
.bk-sure-o{display:flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 8px;border:0;border-left:3px solid var(--ink);background:transparent;font:700 17px/1 var(--text);cursor:pointer}
.bk-sure-o:first-child{border-left:0}
.bk-sure-o:hover,.bk-sure-o.is-hover{background:var(--sand)}
.bk-sure-o:focus-visible{outline:4px solid var(--ink);outline-offset:-7px}
.bk-sure-o.is-on{background:var(--ink);color:var(--paper)}
.bk-lvl{display:inline-flex;align-items:flex-end;gap:2px;height:22px}
.bk-lvl i{width:7px;border:2px solid currentColor;border-radius:2.500px}
.bk-lvl i:nth-child(1){height:9px}.bk-lvl i:nth-child(2){height:13px}.bk-lvl i:nth-child(3){height:17px}.bk-lvl i:nth-child(4){height:22px}
.bk-lvl i.is-f{background:currentColor}

/* ---------- Today ---------- */
.bk-greet{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:22px}
.bk-greet h1{font:800 50px/1 var(--head);letter-spacing:-.025em;margin-top:6px}
.bk-date{display:flex;align-items:center;gap:8px;font:700 17px/1.2 var(--text)}
.bk-today-top{display:grid;grid-template-columns:1fr 396px;gap:20px}
.bk-hero{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;padding:36px 44px 40px 40px}
.bk-hero-title{font:800 68px/.96 var(--head);letter-spacing:-.03em;margin:18px 0 16px;max-width:9.500em}
.bk-hero-text{font-size:19px;line-height:1.45;max-width:30em;margin-bottom:26px}
.bk-tower{display:flex;flex-direction:column-reverse;gap:9px;padding:0 6px}
.bk-tower i{display:grid;place-items:center;width:168px;height:62px;border:3px dashed var(--ink);border-radius:18px}
.bk-tower i.is-done{border-style:solid;background:var(--card);box-shadow:5px 5px 0 var(--ink)}
.bk-tower i:nth-child(odd){transform:translateX(-10px)}
.bk-tower i:nth-child(even){transform:translateX(10px)}
.bk-next{display:flex;flex-direction:column;padding:28px}
.bk-when{font:800 54px/1 var(--head);letter-spacing:-.03em;margin:16px 0 8px}
.bk-next-what{font:700 19px/1.2 var(--text)}
.bk-step{display:flex;gap:10px;align-items:flex-start;margin:18px 0 20px;padding:14px 16px;border:2.500px solid var(--ink);border-radius:16px;background:var(--card);font-size:17px;line-height:1.35}
.bk-step .bk-ic{margin-top:1px}
.bk-next-acts{margin-top:auto;display:grid;gap:12px}
.bk-today-low{display:grid;grid-template-columns:1.450fr 1fr 1fr;gap:20px;margin-top:20px}
.bk-lecs{display:grid;gap:12px;margin-top:16px}
.bk-lec{display:flex;align-items:center;gap:12px}
.bk-lec-main{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.25}
.bk-lec-time{font:800 19px/1.2 var(--head)}
.bk-num{font:800 96px/.82 var(--head);letter-spacing:-.04em}
.bk-revisit-title{display:flex;align-items:flex-end;gap:14px;font:800 24px/1.05 var(--head);letter-spacing:-.01em}
.bk-minis{display:flex;flex-wrap:wrap;gap:5px}
.bk-minis i{width:22px;height:22px;border:2.500px solid var(--ink);border-radius:7px;background:var(--lilac)}
.bk-revisit .bk-minis{margin:16px 0 12px}
.bk-stats{display:grid;grid-template-columns:auto 1fr;gap:28px;margin-top:20px}
.bk-stat-n{display:block;font:800 88px/.85 var(--head);letter-spacing:-.04em}
.bk-stat-l{display:block;margin-top:10px;font:700 17px/1.2 var(--text)}

/* ---------- Learn ---------- */
.bk-learn{display:grid;grid-template-columns:1fr 484px;gap:20px;align-items:start;padding-top:24px}
.bk-read{padding:0;overflow:hidden}
.bk-earlier{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;padding:0 28px;border:0;border-bottom:2.500px dashed var(--ink);background:var(--paper);font:700 17px/1 var(--text);text-align:left;cursor:pointer}
.bk-earlier:hover{background:var(--sand)}
.bk-read-body{padding:30px 44px 28px}
.bk-read-body p{font-size:19px;line-height:1.62;max-width:35em}
.bk-read-body p + p{margin-top:18px}
.bk-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.bk-say{display:flex;gap:14px;margin-top:20px}
.bk-say-in{flex:1;display:flex;align-items:center;gap:12px;min-height:56px;padding:0 18px;border:3px solid var(--ink);border-radius:18px;background:var(--card);color:var(--mute);font-size:17px}
.bk-check{padding:28px}
.bk-check-q{font:800 30px/1.14 var(--head);letter-spacing:-.015em;margin:16px 0 22px}
.bk-dk{margin-top:14px}

/* ---------- Practise question ---------- */
.bk-quiz{display:grid;grid-template-columns:minmax(0,1fr) 348px;gap:24px;align-items:start;padding-top:22px}
.bk-q{padding:24px 28px 26px}
.bk-stem{font:800 40px/1.06 var(--head);letter-spacing:-.022em;margin:14px 0 10px}
.bk-source{display:flex;align-items:center;gap:8px;font-size:16px;line-height:1.3;margin-bottom:18px}
.bk-q-foot{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;margin-top:20px}
.bk-sure-label{font:700 17px/1.2 var(--text);margin-bottom:9px}
.bk-q-acts{display:flex;gap:14px;align-items:center;justify-content:flex-end}
.bk-slide{position:relative;margin:6px 10px 0 0;padding:24px 24px 28px;border:3px solid var(--ink);border-radius:22px;background:var(--card);box-shadow:10px 10px 0 var(--stat),10px 10px 0 3px var(--ink)}
.bk-slide-title{font:800 28px/1.1 var(--head);letter-spacing:-.015em;margin:16px 0 16px}
.bk-slide li{position:relative;padding-left:26px;font-size:17px;line-height:1.4}
.bk-slide li + li{margin-top:12px}
.bk-slide li::before{content:"";position:absolute;left:0;top:5px;width:13px;height:13px;border-radius:4px;background:var(--ink)}

/* ---------- Feedback ---------- */
.bk-fb{display:grid;grid-template-columns:1fr 468px;gap:24px;align-items:start;padding-top:22px}
.bk-fb-q{padding:26px 28px 30px}
.bk-fb-top{display:flex;align-items:center;justify-content:space-between;gap:16px}
.bk-fb-stem{font:800 32px/1.1 var(--head);letter-spacing:-.02em;margin:16px 0 22px}
.bk-verdict{padding:28px}
.bk-verdict-head{display:flex;align-items:center;gap:16px}
.bk-verdict-mark{flex:none;display:grid;place-items:center;width:68px;height:68px;border:3px solid var(--ink);border-radius:22px;background:var(--card)}
.bk-verdict-word{font:800 60px/.95 var(--head);letter-spacing:-.03em}
.bk-why{font-size:19px;line-height:1.55;margin:20px 0 18px}
.bk-later{display:flex;gap:12px;align-items:flex-start;margin:20px 0 24px;padding:14px 16px;border:2.500px solid var(--ink);border-radius:16px;background:var(--card);font-size:17px;line-height:1.4}
.bk-later .bk-ic{margin-top:1px}

/* ---------- Progress ---------- */
.bk-page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:22px}
.bk-page-head h1{font:800 54px/1 var(--head);letter-spacing:-.028em;margin-top:8px}
.bk-prog-top{display:grid;grid-template-columns:540px 1fr;gap:20px}
.bk-score-panel{padding:28px 32px 30px}
.bk-score-row{display:flex;align-items:flex-end;gap:20px;margin:14px 0 24px}
.bk-score{font:800 168px/.76 var(--head);letter-spacing:-.045em}
.bk-gain{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:0 14px 0 10px;border-radius:14px;background:var(--mint);color:var(--ink);font:800 19px/1 var(--head);margin-bottom:2px}
.bk-score-panel .bk-minis i{width:18px;height:18px;border:2px solid var(--paper);border-radius:6px;background:transparent}
.bk-score-panel .bk-minis i.is-f{background:var(--mint);border-color:var(--mint)}
.bk-score-panel .bk-minis{max-width:460px}
.bk-secured{margin-top:12px;font:700 18px/1.2 var(--text)}
.bk-attn{display:flex;flex-direction:column;padding:30px 36px 34px}
.bk-attn-text{font:800 44px/1.02 var(--head);letter-spacing:-.025em;margin:18px 0 24px;max-width:13em}
.bk-attn .bk-btn{margin-top:auto;align-self:flex-start}
.bk-prog-mid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}
.bk-chart-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}
.bk-ranges{display:inline-grid;grid-auto-flow:column;border:3px solid var(--ink);border-radius:15px;overflow:hidden;background:var(--card)}
.bk-range{min-height:42px;padding:0 16px;border:0;border-left:3px solid var(--ink);background:transparent;font:700 16px/1 var(--text);cursor:pointer}
.bk-range:first-child{border-left:0}
.bk-range[aria-pressed="true"]{background:var(--ink);color:var(--paper)}
.bk-range:hover:not([aria-pressed="true"]){background:var(--sand)}
.bk-stacks{display:grid;grid-template-columns:repeat(7,1fr);gap:0;padding:0 4px;border-bottom:3px solid var(--ink)}
.bk-stack-col{display:flex;flex-direction:column;align-items:center}
.bk-stack{position:relative;width:46px;height:222px}
.bk-blk{position:absolute;left:0;right:0;border:2.500px solid var(--ink);border-radius:6px;background:var(--mint)}
.bk-shelf{position:absolute;left:-10px;right:-10px;height:10px;margin-bottom:-5px;border:2.500px solid var(--ink);border-radius:5px;background:var(--card)}
.bk-stack-day{position:relative;top:36px;margin-top:-26px;font:700 16px/1 var(--text)}
.bk-legend{display:grid;gap:8px;margin-top:44px;font-size:16px;line-height:1.35}
.bk-legend-row{display:flex;align-items:flex-start;gap:12px}
.bk-key-you{flex:none;width:22px;height:18px;margin-top:2px;border:2.500px solid var(--ink);border-radius:6px;background:var(--mint)}
.bk-key-pace{flex:none;width:30px;height:10px;margin-top:6px;border:2.500px solid var(--ink);border-radius:5px;background:var(--card)}
.bk-legend b{font-weight:700}
.bk-from{display:grid;grid-template-columns:220px 1fr;gap:28px;align-items:center;margin-top:20px}
.bk-from-rows{display:grid;gap:16px}
.bk-from-row{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center}
.bk-from-name{display:block;font:700 17px/1.2 var(--text)}
.bk-from-time{display:flex;align-items:center;gap:6px;margin-top:3px;font-size:16px;line-height:1.2}
.bk-from-pts{display:inline-flex;align-items:center;gap:6px;font:800 30px/1 var(--head)}
.bk-prog-low{display:grid;grid-template-columns:1fr 1.350fr;gap:20px;margin-top:20px}
.bk-gaps{display:grid;gap:14px;margin-top:18px}
.bk-gap{display:grid;grid-template-columns:40px 1fr;gap:14px;align-items:start;padding-bottom:14px;border-bottom:2.500px dashed var(--sand)}
.bk-gap:last-child{border-bottom:0;padding-bottom:0}
.bk-gap-idea{display:block;font:800 22px/1.15 var(--head)}
.bk-gap-where{display:block;font-size:16px;line-height:1.3;color:var(--mute);margin:3px 0 8px}
.bk-miles{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}
.bk-mile{padding:14px 14px 16px;border:2.500px solid var(--ink);border-radius:18px;background:var(--paper)}
.bk-mile-mark{display:grid;place-items:center;width:36px;height:36px;border:2.500px solid var(--ink);border-radius:12px;background:var(--mint);margin-bottom:10px}
.bk-mile-name{display:block;font:700 17px/1.2 var(--text)}
.bk-mile-when{display:block;margin-top:4px;font-size:16px;line-height:1.3}
.bk-mile.is-open{border-style:dashed;background:transparent}
.bk-mile.is-open .bk-mile-mark{border-style:dashed;background:transparent}
.bk-mile.is-open .bk-mile-when{color:var(--mute)}

/* ---------- Week ---------- */
.bk-week-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:20px}
.bk-week-head h1{font:800 54px/1 var(--head);letter-spacing:-.028em;margin:8px 0 8px}
.bk-range-line{font:700 17px/1.2 var(--text)}
.bk-week-side{display:flex;align-items:center;gap:20px}
.bk-target{padding:14px 18px 14px;border:3px solid var(--ink);border-radius:22px;background:var(--card)}
.bk-target-top{display:flex;align-items:center;justify-content:space-between;gap:20px;font:700 17px/1.2 var(--text)}
.bk-target-top span{display:inline-flex;align-items:center;gap:8px}
.bk-hours{display:flex;gap:5px;margin-top:10px}
.bk-hours i{display:block;width:62px;height:22px;border:2.500px solid var(--ink);border-radius:7px;background:var(--card);overflow:hidden}
.bk-hours i b{display:block;height:100%;background:var(--mint);border-right:2.500px solid var(--ink)}
.bk-hours i.is-full b{border-right:0}
.bk-cal{border:3px solid var(--ink);border-radius:30px;background:var(--card);overflow:hidden}
.bk-cal-head{display:grid;grid-template-columns:repeat(7,1fr);border-bottom:3px solid var(--ink);background:var(--paper)}
.bk-cal-day{display:flex;align-items:center;justify-content:center;gap:8px;height:52px;font:700 18px/1 var(--text)}
.bk-cal-day + .bk-cal-day,.bk-col + .bk-col{border-left:2px solid var(--sand)}
.bk-cal-day.is-today{background:var(--ink);color:var(--paper);border-left-color:var(--ink)}
.bk-cal-body{display:grid;grid-template-columns:repeat(7,1fr)}
.bk-col{position:relative;height:566px;background-image:linear-gradient(var(--sand) 2px,transparent 2px);background-size:100% 70px;background-position:0 -2px}
.bk-col.is-today{background-color:var(--paper)}
.bk-ev{position:absolute;left:7px;right:9px;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:4px 9px;border:2.500px solid var(--ink);border-radius:14px;background:var(--ms);font:700 16px/1.2 var(--text);overflow:hidden}
.bk-ev-row{display:flex;align-items:center;justify-content:space-between;gap:6px;white-space:nowrap}
.bk-ev-what{display:flex;align-items:center;gap:6px;white-space:nowrap}
.bk-ev-time{font:800 16px/1.2 var(--head)}
.bk-ev-note{display:inline-flex;align-items:center;gap:3px;font-weight:600}
.bk-ev-lec{justify-content:flex-start;padding-top:8px}
.bk-ev-study{background:var(--m);border-width:3px;box-shadow:3px 3px 0 var(--ink);cursor:grab;overflow:visible}
.bk-ev-study.is-done{box-shadow:none;cursor:default}
.bk-ev-study.is-today{box-shadow:5px 5px 0 var(--ink)}
.bk-ev-study.is-proposed{background:var(--card);border-style:dashed;box-shadow:none}
.bk-ev-cap{position:absolute;left:7px;right:9px;padding:8px 6px 0 6px;font-size:16px;line-height:1.3;color:var(--mute)}
.bk-ev-cap::before{content:"";display:block;width:14px;height:14px;margin:-6px 0 4px 14px;border:2.500px dashed var(--ink);border-right:0;border-bottom:0;transform:rotate(45deg);background:transparent}
.bk-ev-busy{justify-content:flex-start;padding-top:8px;background:repeating-linear-gradient(135deg,var(--sand) 0 10px,var(--paper) 10px 20px)}
.bk-hint{display:flex;align-items:center;gap:12px;margin-top:20px;font-size:17px;line-height:1.4}

/* ---------- Phone ---------- */
.bk-phone{display:flex;flex-direction:column;font-size:18px}
.bk-pbar{display:flex;align-items:center;justify-content:space-between;gap:12px;height:68px;padding:0 16px;background:var(--ink);color:var(--paper)}
.bk-pbar .bk-brand{height:auto;font-size:23px;gap:9px}
.bk-pbar .bk-logo{width:28px;height:28px}
.bk-pwhere{display:inline-flex;align-items:center;gap:7px;min-height:38px;padding:0 13px 0 10px;border-radius:13px;background:var(--m);color:var(--ink);font:700 17px/1 var(--text)}
.bk-pmain{flex:1;display:flex;flex-direction:column;padding:14px 14px 18px}
.bk-pq{padding:22px 18px 24px;border-radius:30px}
.bk-pq .bk-count{justify-content:space-between;font-size:17px}
.bk-pq .bk-seg{width:28px}
.bk-pstem{font:800 33px/1.07 var(--head);letter-spacing:-.022em;margin:20px 0 22px}
.bk-pq .bk-opts{gap:14px}
.bk-pq .bk-opt{min-height:66px;font-size:18px;border-radius:20px}
.bk-pwhy{display:flex;gap:10px;align-items:flex-start;margin:20px 6px 16px;font-size:17px;line-height:1.4}
.bk-pwhy .bk-ic{margin-top:1px}
.bk-plater{margin-top:auto;min-height:56px;font-size:19px}

/* ---------- Style sheet ---------- */
.bk-sheet{padding:36px 40px 56px}
.bk-sheet-head{display:flex;align-items:flex-end;justify-content:space-between;gap:40px;padding-bottom:22px;border-bottom:3px solid var(--ink)}
.bk-sheet-head h1{font:800 88px/.86 var(--head);letter-spacing:-.04em}
.bk-sheet-head p{max-width:34em;font-size:19px;line-height:1.45}
.bk-sheet h2{font:800 26px/1.1 var(--head);letter-spacing:-.015em;margin:34px 0 14px}
.bk-sheet h3{font:700 16px/1.2 var(--text);margin-bottom:10px}
.bk-sheet-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.bk-spec{display:grid;gap:10px}
.bk-spec-row{display:grid;grid-template-columns:1fr auto;align-items:baseline;gap:16px;padding-bottom:8px;border-bottom:2px solid var(--sand)}
.bk-spec-row:last-child{border-bottom:0;padding-bottom:0}
.bk-spec-row small{font:400 16px/1.2 var(--text);white-space:nowrap}
.bk-swatches{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
.bk-sw{border:3px solid var(--ink);border-radius:20px;overflow:hidden;background:var(--card)}
.bk-sw-c{height:84px;border-bottom:3px solid var(--ink);display:flex;align-items:flex-end;padding:8px 12px;font:800 20px/1 var(--head)}
.bk-sw-t{padding:10px 12px 12px;font-size:16px;line-height:1.3}
.bk-sw-t b{display:block;font-weight:700}
.bk-sw-t code{font:700 16px/1.3 var(--text)}
.bk-icons{display:grid;grid-template-columns:repeat(10,1fr);gap:12px}
.bk-icon{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 4px 10px;border:2.500px solid var(--ink);border-radius:16px;background:var(--card);font:700 16px/1 var(--text)}
.bk-states{display:flex;flex-wrap:wrap;gap:22px 26px;align-items:flex-end}
.bk-state{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.bk-state > small{font:400 16px/1.2 var(--text)}
.bk-sheet-opts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px 22px}
.bk-sheet .bk-panel{padding:24px 26px 28px}
.bk-sheet .bk-panel > h2:first-child{margin-top:0}
.bk-sheet .bk-ev{position:static;width:158px;height:52px}
.bk-sheet .bk-ev-lec{height:60px}
`;

  // ---------- screens ----------
  const today = (d) => {
    const t = d.today, hm = t.hero._module, bm = t.block._module;
    const [n7, ...rest] = t.revisit.title.split(" ");
    return `<div class="bk">${bar(d, "Today")}
<main class="bk-wrap">
  <div class="bk-greet">
    <div>
      <p class="bk-date">${ic("today", 22)}<span>${esc(t.date)}</span></p>
      <h1>${esc(t.greeting)}</h1>
    </div>
    <button class="bk-btn bk-btn-quiet" type="button">${ic("palette", 22)}<span>${esc(t.appearance)}</span></button>
  </div>

  <div class="bk-today-top">
    <section class="bk-panel bk-fill bk-hero ${MOD[hm].c}">
      <div>
        <p class="bk-eye">${modChip(hm)}<span>${esc(t.hero.eyebrow)}</span></p>
        <h2 class="bk-hero-title">${esc(t.hero.title)}</h2>
        <p class="bk-hero-text">${esc(t.hero.text)}</p>
        <a class="bk-btn bk-btn-go" href="#"><span>${esc(t.hero.cta)}</span>${ic("go", 28)}</a>
      </div>
      <div class="bk-tower" aria-hidden="true">
        ${Array.from({ length: t.hero._total }, (_, i) => `<i${i < t.hero._done ? ' class="is-done"' : ""}>${i < t.hero._done ? ic("check", 26) : ""}</i>`).join("")}
      </div>
    </section>

    <section class="bk-panel bk-fill bk-next ${MOD[bm].c}">
      <p class="bk-eye">${modChip(bm)}<span>${esc(t.block.title)}</span></p>
      <p class="bk-when">${esc(t.block.when)}</p>
      <p class="bk-next-what">${esc(t.block.what)}</p>
      <p class="bk-step">${ic("slide", 22)}<span>${esc(t.block.step)}</span></p>
      <div class="bk-next-acts">
        <a class="bk-btn bk-btn-wide" href="#">${ic("learn", 22)}<span>${esc(t.block.cta)}</span></a>
        <a class="bk-btn bk-btn-quiet bk-btn-wide" href="#">${ic("practise", 22)}<span>${esc(t.block.alt)}</span></a>
      </div>
    </section>
  </div>

  <div class="bk-today-low">
    <section class="bk-panel">
      <h2 class="bk-h2">${esc(t.lecturesTitle)}</h2>
      <ul class="bk-lecs">
        ${t.lectures.map((l) => `<li class="bk-lec">${modChip(l._module)}
          <span class="bk-lec-main"><span class="bk-lec-time">${esc(l.time)}</span> <span>${esc(l.what)}</span></span>
          <span class="bk-tag">${esc(l.state)}</span>
          <button class="bk-btn bk-btn-sm" type="button">${esc(l.action)}</button></li>`).join("")}
      </ul>
    </section>

    <section class="bk-panel bk-revisit">
      <h2 class="bk-revisit-title"><span class="bk-num">${esc(n7)}</span> <span>${esc(rest.join(" "))}</span></h2>
      <div class="bk-minis" aria-hidden="true">${Array.from({ length: Number(n7) || 0 }, () => "<i></i>").join("")}</div>
      <p>${esc(t.revisit.text)}</p>
    </section>

    <section class="bk-panel bk-inkp">
      <h2 class="bk-h2">${esc(t.week.title)}</h2>
      <div class="bk-stats">
        ${t.week.stats.map((s) => `<div><span class="bk-stat-n">${esc(s.n)}</span> <span class="bk-stat-l">${esc(s.label)}</span></div>`).join("")}
      </div>
    </section>
  </div>
</main></div>`;
  };

  const learn = (d) => {
    const l = d.learn, m = modFor(d, l.title);
    const num = /(\d+) of (\d+)/.exec(l.where) || [0, 1, 1];
    const toolIcon = { Plan: "plan", Slide: "slide" };
    return `<div class="bk ${MOD[m].c}">
${sbar(l.mode, "learn", l.title, `${segs(+num[1], +num[2])}<span>${esc(l.where)}</span>`,
  `${l.tools.map((t) => `<button class="bk-btn bk-btn-inv" type="button">${ic(toolIcon[t] || "plan", 20)}<span>${esc(t)}</span></button>`).join("")}
   <span class="bk-sbar-time">${ic("clock", 22)}<span>${esc(l.time)}</span></span>
   ${stopBtn(l.stop)}`)}
<main class="bk-wrap bk-learn">
  <div>
    <section class="bk-panel bk-read">
      <button class="bk-earlier" type="button">${ic("down", 20)}<span>${esc(l.earlier)}</span></button>
      <div class="bk-read-body">
        ${l.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        <div class="bk-chips">${l.chips.map((c) => `<button class="bk-btn bk-btn-sm" type="button">${ic("slide", 18)}<span>${esc(c)}</span></button>`).join("")}</div>
      </div>
    </section>
    <div class="bk-say">
      <div class="bk-say-in">${ic("say", 22)}<span>${esc(l.say)}</span></div>
      <button class="bk-btn" type="button"><span>${esc(l.send)}</span>${ic("send", 20)}</button>
    </div>
  </div>
  <section class="bk-panel bk-fill bk-check">
    <p class="bk-eye"><span class="bk-mod">${ic("check", 22)}</span><span>${esc(l.label)}</span></p>
    <h2 class="bk-check-q">${esc(l.question)}</h2>
    <div class="bk-opts">${l.options.map((o) => opt(o)).join("")}</div>
    <button class="bk-btn bk-btn-quiet bk-btn-wide bk-dk" type="button">${ic("unsure", 20)}<span>${esc(l.dontKnow)}</span></button>
  </section>
</main></div>`;
  };

  const question = (d) => {
    const q = d.question, m = modFor(d, q.title);
    return `<div class="bk ${MOD[m].c}">
${sbar(q.mode, "practise", q.title, `<span>${esc(q.goal)}</span>`, stopBtn(q.stop))}
<main class="bk-wrap bk-quiz">
  <section class="bk-panel bk-fill bk-q">
    <p class="bk-count"><span>${esc(q.count)}</span>${segs(q._n, q._of)}</p>
    <h2 class="bk-stem">${esc(q.stem)}</h2>
    <p class="bk-source">${ic("ai", 20)}<span>${esc(q.source)}</span></p>
    <div class="bk-opts">${q.options.map((o) => opt(o)).join("")}</div>
    <button class="bk-btn bk-btn-quiet bk-btn-sm bk-dk" type="button">${ic("unsure", 18)}<span>${esc(q.dontKnow)}</span></button>
    <div class="bk-q-foot">
      <div>
        <p class="bk-sure-label">${esc(q.sure)}</p>
        ${sure(q.sureOptions)}
      </div>
      <div class="bk-q-acts">
        <button class="bk-btn" type="button">${ic("eye", 22)}<span>${esc(q.showMe)}</span></button>
        <button class="bk-btn bk-btn-go" type="button"><span>${esc(q.check)}</span>${ic("go", 26)}</button>
      </div>
    </div>
  </section>
  <aside class="bk-slide">
    <span class="bk-tag">${ic("slide", 18)}<span>${esc(q.slide.page)}</span></span>
    <h3 class="bk-slide-title">${esc(q.slide.title)}</h3>
    <ul>${q.slide.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </aside>
</main></div>`;
  };

  const feedback = (d) => {
    const f = d.feedback, m = modFor(d, f.title);
    const st = { answer: "is-answer", miss: "is-miss", plain: "is-plain" };
    const tag = (o) => !o.tag ? "" : o._state === "answer"
      ? `<span class="bk-tag bk-tag-ink">${ic("check", 16)}<span>${esc(o.tag)}</span></span>`
      : `<span class="bk-tag">${ic("pick", 16)}<span>${esc(o.tag)}</span></span>`;
    return `<div class="bk ${MOD[m].c}">
${sbar(f.mode, "practise", f.title, "", stopBtn(f.stop))}
<main class="bk-wrap bk-fb">
  <section class="bk-panel bk-fb-q">
    <div class="bk-fb-top">
      <p class="bk-eye">${ic("pick", 22)}<span>${esc(f.head)}</span></p>
      <p class="bk-count"><span>${esc(f.count)}</span>${segs(f._n, f._of)}</p>
    </div>
    <h2 class="bk-fb-stem">${esc(f.stem)}</h2>
    <div class="bk-opts">${f.options.map((o) => opt(o.text, st[o._state], tag(o), "div")).join("")}</div>
  </section>
  <section class="bk-panel bk-fill bk-verdict">
    <div class="bk-verdict-head">
      <span class="bk-verdict-mark">${ic("almost", 40)}</span>
      <h2 class="bk-verdict-word">${esc(f.verdict)}</h2>
    </div>
    <p class="bk-why">${esc(f.why)}</p>
    <button class="bk-btn bk-btn-sm" type="button">${ic("slide", 18)}<span>${esc(f.chip)}</span></button>
    <p class="bk-later">${ic("again", 22)}<span>${esc(f.later)}</span></p>
    <button class="bk-btn bk-btn-go bk-btn-wide" type="button"><span>${esc(f.next)}</span>${ic("go", 28)}</button>
  </section>
</main></div>`;
  };

  const progress = (d) => {
    const p = d.progress;
    const sec = /(\d+) of (\d+)/.exec(p.secured) || [0, 0, 0];
    const am = modFor(d, p.attention.text);
    return `<div class="bk">${bar(d, "Progress")}
<main class="bk-wrap">
  <div class="bk-page-head">
    <div>
      <p class="bk-eye">${ic("progress", 22)}<span>${esc(p.eyebrow)}</span></p>
      <h1>${esc(p.title)}</h1>
    </div>
  </div>

  <div class="bk-prog-top">
    <section class="bk-panel bk-inkp bk-score-panel">
      <p class="bk-eye">${ic("progress", 22)}<span>${esc(p.scoreLabel)}</span></p>
      <div class="bk-score-row">
        <span class="bk-score">${esc(p.score)}</span>
        <span class="bk-gain">${ic("up", 22)}<span>${esc(p.gain)}</span></span>
      </div>
      <div class="bk-minis" aria-hidden="true">${Array.from({ length: +sec[2] }, (_, i) => `<i${i < +sec[1] ? ' class="is-f"' : ""}></i>`).join("")}</div>
      <p class="bk-secured">${esc(p.secured)}</p>
    </section>

    <section class="bk-panel bk-fill bk-attn ${MOD[am].c}">
      <p class="bk-eye">${modChip(am)}<span>${esc(p.attentionTitle)}</span></p>
      <p class="bk-attn-text">${esc(p.attention.text)}</p>
      <a class="bk-btn bk-btn-go" href="#"><span>${esc(p.attention.cta)}</span>${ic("go", 28)}</a>
    </section>
  </div>

  <div class="bk-prog-mid">
    <section class="bk-panel">
      <div class="bk-chart-top">
        <div class="bk-legend-row"><i class="bk-key-you"></i><b>${esc(p.legendYou)}</b></div>
        <div class="bk-ranges" role="group">${p.ranges.map((r, i) => `<button class="bk-range" type="button" aria-pressed="${i === 0}">${esc(r)}</button>`).join("")}</div>
      </div>
      ${stacks(p)}
      <div class="bk-legend"><div class="bk-legend-row"><i class="bk-key-pace"></i><span>${esc(p.legendPace)}</span></div></div>
    </section>

    <section class="bk-panel">
      <h2 class="bk-h2">${esc(p.fromTitle)}</h2>
      <div class="bk-from">
        ${ring(p.from)}
        <ul class="bk-from-rows">
          ${p.from.map((f) => `<li class="bk-from-row">${modChip(f._module)}
            <span><span class="bk-from-name">${esc(f.name)}</span> <span class="bk-from-time">${ic("clock", 18)}<span>${esc(f.time)}</span></span></span>
            <span class="bk-from-pts" aria-label="points">${ic("progress", 20)}<span>${esc(f.points)}</span></span></li>`).join("")}
        </ul>
      </div>
    </section>
  </div>

  <div class="bk-prog-low">
    <section class="bk-panel">
      <h2 class="bk-h2">${esc(p.gapsTitle)}</h2>
      <ul class="bk-gaps">
        ${p.gaps.map((g) => `<li class="bk-gap">${modChip(g._module)}
          <span><span class="bk-gap-idea">${esc(g.idea)}</span> <span class="bk-gap-where">${esc(g.where)}</span>
          <span class="bk-tag">${ic("again", 16)}<span>${esc(g.count)}</span></span></span></li>`).join("")}
      </ul>
    </section>
    <section class="bk-panel">
      <h2 class="bk-h2">${esc(p.milestonesTitle)}</h2>
      <ul class="bk-miles">
        ${p.milestones.map((s) => `<li class="bk-mile${s._earned ? "" : " is-open"}">
          <span class="bk-mile-mark">${s._earned ? ic("check", 22) : ""}</span>
          <span class="bk-mile-name">${esc(s.name)}</span> <span class="bk-mile-when">${esc(s.when)}</span></li>`).join("")}
      </ul>
    </section>
  </div>
</main></div>`;
  };

  const week = (d) => {
    const w = d.week, HH = 70, T0 = 9;
    const tgt = +(/(\d+)\s*h/.exec(w.target) || [0, 5])[1];
    const km = /(\d+)\s*h\s*(\d+)?/.exec(w.kept) || [0, 0, 0];
    const kept = +km[1] + (+(km[2] || 0)) / 60;
    const hours = Array.from({ length: tgt }, (_, i) => {
      const f = Math.max(0, Math.min(1, kept - i));
      return `<i${f === 1 ? ' class="is-full"' : ""}>${f > 0 ? `<b style="width:${f === 1 ? 100 : Math.max(12, Math.round(f * 100))}%"></b>` : ""}</i>`;
    }).join("");
    const pos = (s, e) => `top:${(s - T0) * HH + 3}px;height:${(e - s) * HH - 8}px`;
    const noteIcon = { done: "check" };
    const col = (di) => {
      const lec = w.lectures.filter((x) => x._day === di).map((x) =>
        `<div class="bk-ev bk-ev-lec ${MOD[x._module].c}" style="${pos(x._start, x._end)}"><span class="bk-ev-time">${esc(x.time)}</span> <span class="bk-ev-what">${ic("lecture", 18)}<span>${esc(x.what)}</span></span></div>`);
      const busy = w.commitments.filter((x) => x._day === di).map((x) =>
        `<div class="bk-ev bk-ev-busy" style="${pos(x._start, x._end)}"><span class="bk-ev-time">${esc(x.time)}</span> <span class="bk-ev-what">${ic("work", 18)}<span>${esc(x.what)}</span></span></div>`);
      const study = w.blocks.filter((x) => x._day === di).map((x) => {
        const end = x._start + 50 / 60, prop = x._status === "proposed";
        return `<div class="bk-ev bk-ev-study is-${x._status} ${MOD[x._module].c}" style="${pos(x._start, end)}">
          <span class="bk-ev-row"><span class="bk-ev-time">${esc(x.time)}</span>${prop ? "" : ` <span class="bk-ev-note">${noteIcon[x.note] ? ic(noteIcon[x.note], 16) : ""}<span>${esc(x.note)}</span></span>`}</span>
          <span class="bk-ev-what">${ic("learn", 18)}<span>${esc(x.what)}</span></span></div>${prop ? `<p class="bk-ev-cap" style="top:${(end - T0) * HH}px">${esc(x.note)}</p>` : ""}`;
      });
      return `<div class="bk-col${di === w._today ? " is-today" : ""}">${lec.join("")}${busy.join("")}${study.join("")}</div>`;
    };
    return `<div class="bk">${bar(d, "Week")}
<main class="bk-wrap">
  <div class="bk-week-head">
    <div>
      <p class="bk-eye">${ic("week", 22)}<span>${esc(w.eyebrow)}</span></p>
      <h1>${esc(w.title)}</h1>
      <p class="bk-range-line">${esc(w.range)}</p>
    </div>
    <div class="bk-week-side">
      <div class="bk-target">
        <div class="bk-target-top"><span>${ic("target", 20)}<span>${esc(w.target)}</span></span> <span>${ic("check", 18)}<span>${esc(w.kept)}</span></span></div>
        <div class="bk-hours" aria-hidden="true">${hours}</div>
      </div>
      <button class="bk-btn bk-btn-go" type="button"><span>${esc(w.plan)}</span>${ic("go", 28)}</button>
    </div>
  </div>

  <section class="bk-cal">
    <div class="bk-cal-head">${w.days.map((day, i) => `<div class="bk-cal-day${i === w._today ? " is-today" : ""}">${i === w._today ? ic("today", 20) : ""}<span>${esc(day)}</span></div>`).join("")}</div>
    <div class="bk-cal-body">${w.days.map((_, i) => col(i)).join("")}</div>
  </section>
  <p class="bk-hint">${ic("move", 24)}<span>${esc(w.hint)}</span></p>
</main></div>`;
  };

  const phone = (d) => {
    const p = d.phone, m = modFor(d, p.where);
    return `<div class="bk bk-phone ${MOD[m].c}">
  <header class="bk-pbar">
    <span class="bk-brand">${logo}<span>${esc(p.brand)}</span></span>
    <span class="bk-pwhere">${ic(MOD[m].i, 20)}<span>${esc(p.where)}</span></span>
  </header>
  <main class="bk-pmain">
    <section class="bk-panel bk-fill bk-pq">
      <p class="bk-count"><span>${esc(p.count)}</span>${segs(p._n, p._of)}</p>
      <h1 class="bk-pstem">${esc(p.stem)}</h1>
      <div class="bk-opts">${p.options.map((o) => opt(o)).join("")}</div>
    </section>
    <p class="bk-pwhy">${ic("lecture", 22)}<span>${esc(p.why)}</span></p>
    <button class="bk-btn bk-btn-quiet bk-btn-wide bk-plater" type="button">${ic("clock", 22)}<span>${esc(p.later)}</span></button>
  </main>
</div>`;
  };

  // ---------- the design system on one page ----------
  const styleSheet = (d) => {
    const sw = (name, hex, use, light) => `<div class="bk-sw"><div class="bk-sw-c" style="background:${hex};color:${light ? "#FFF3DC" : "#1F1B2D"}">Aa</div><div class="bk-sw-t"><b>${name}</b><code>${hex}</code><br>${use}</div></div>`;
    const state = (label, html) => `<div class="bk-state">${html}<small>${label}</small></div>`;
    const names = { today: "Today", library: "Library", week: "Week", progress: "Progress, score", me: "Me", go: "Go on", check: "Right, done", pick: "Your pick", almost: "Not quite", clock: "Time", learn: "Learn, study", practise: "Practise", pause: "Stop for now", slide: "Slide", plan: "Plan", down: "Open", send: "Send", say: "Say", ai: "Written by AI", unsure: "Don't know", eye: "Show me", again: "Comes back", palette: "Make it yours", lecture: "Lecture", flag: "Milestone", up: "Gain", move: "Drag", work: "Work shift", target: "Target", hci: "HCI", stat: "STAT", hist: "HIST" };
    return `<div class="bk bk-sheet">
  <div class="bk-sheet-head">
    <h1>Blocks</h1>
    <p>Big, bold, hard to miss. Flat panels of colour show things. Anything with a hard shadow can be pressed. One ink button per screen is the next step.</p>
  </div>

  <div class="bk-sheet-2">
    <div>
      <h2>Type: headings</h2>
      <div class="bk-panel bk-spec">
        <div class="bk-spec-row"><span style="font:800 68px/.96 var(--head);letter-spacing:-.03em">The Welfare State</span><small>Bricolage Grotesque 800 · 68</small></div>
        <div class="bk-spec-row"><span style="font:800 54px/1 var(--head);letter-spacing:-.028em">Where you are</span><small>800 · 54 page title</small></div>
        <div class="bk-spec-row"><span style="font:800 40px/1.06 var(--head);letter-spacing:-.022em">What does a p-value tell you?</span><small>800 · 40 question</small></div>
        <div class="bk-spec-row"><span style="font:800 28px/1.1 var(--head)">Ideas to revisit</span><small>800 · 28 panel title</small></div>
        <div class="bk-spec-row"><span style="font:800 96px/.82 var(--head);letter-spacing:-.04em">230 · 7 · 24</span><small>800 · 88 to 168 numerals</small></div>
      </div>
    </div>
    <div>
      <h2>Type: reading</h2>
      <div class="bk-panel bk-spec">
        <div class="bk-spec-row"><span style="font-size:19px;line-height:1.62">A mental model is the picture a person holds of how something works. It is built from belief and from what they have used before.</span><small>Atkinson Hyperlegible Next 400 · 19 / 1.62 reading</small></div>
        <div class="bk-spec-row"><span style="font-size:17px">They come back in a short retest. No rush.</span><small>400 · 17 text (18 on the phone)</small></div>
        <div class="bk-spec-row"><span style="font:700 18px/1.2 var(--text)">Learn this · I wasn't there</span><small>700 · 18 buttons, 17 labels</small></div>
        <div class="bk-spec-row"><span style="font:600 17px/1.3 var(--text)">A slip caused by tiredness</span><small>600 · 17 answer options</small></div>
        <div class="bk-spec-row"><span style="font-size:16px;color:var(--mute)">Statistics · Hypothesis testing</span><small>400 · 16 smallest, quiet ink #4B4560</small></div>
      </div>
    </div>
  </div>

  <h2>Colour: one block per module, one strong neutral. Text on colour is always ink.</h2>
  <div class="bk-swatches">
    ${sw("Ink", "#1F1B2D", "Text, outlines, hard shadows, the bars, the one go button", true)}
    ${sw("Paper", "#FFF3DC", "The page. Text on ink.")}
    ${sw("Card", "#FFFDF8", "Reading surfaces and anything pressable")}
    ${sw("Sand", "#F1DFBC", "Grid lines, busy time, a pressed option")}
    ${sw("Mint", "#7BE0AE", "Right answer, done, secured. Always with a tick.")}
    ${sw("Lilac", "#CDBEFF", "Your pick when it was not the answer, ideas to revisit. Never red.")}
    ${sw("Tangerine", "#FF9248", "HCI: panels and study blocks")}
    ${sw("Sunflower", "#FFD037", "STAT: panels and study blocks")}
    ${sw("Rose", "#FF94BC", "HIST: panels and study blocks")}
    ${sw("Tangerine soft", "#FFDCC2", "HCI lectures in the week")}
    ${sw("Sunflower soft", "#FFEFB0", "STAT lectures in the week")}
    ${sw("Rose soft", "#FFD9E7", "HIST lectures in the week")}
  </div>

  <h2>Icons: filled, rounded, always beside a word</h2>
  <div class="bk-icons">${Object.keys(IC).map((k) => `<div class="bk-icon">${ic(k, 30)}<span>${names[k] || k}</span></div>`).join("")}</div>

  <h2>Buttons</h2>
  <div class="bk-panel bk-fill bk-hist">
    <div class="bk-states">
      ${state("Go: rest", `<button class="bk-btn bk-btn-go" type="button"><span>Continue</span>${ic("go", 28)}</button>`)}
      ${state("Go: hover, lifts", `<button class="bk-btn bk-btn-go is-hover" type="button"><span>Continue</span>${ic("go", 28)}</button>`)}
      ${state("Go: pressed, lands", `<button class="bk-btn bk-btn-go is-press" type="button"><span>Continue</span>${ic("go", 28)}</button>`)}
      ${state("Go: keyboard focus", `<button class="bk-btn bk-btn-go is-focus" type="button"><span>Continue</span>${ic("go", 28)}</button>`)}
      ${state("Second: rest", `<button class="bk-btn" type="button">${ic("learn", 22)}<span>Learn this</span></button>`)}
      ${state("Second: hover", `<button class="bk-btn is-hover" type="button">${ic("learn", 22)}<span>Learn this</span></button>`)}
      ${state("Second: pressed", `<button class="bk-btn is-press" type="button">${ic("learn", 22)}<span>Learn this</span></button>`)}
      ${state("Quiet", `<button class="bk-btn bk-btn-quiet" type="button">${ic("practise", 22)}<span>Practise instead</span></button>`)}
      ${state("Small", `<button class="bk-btn bk-btn-sm" type="button">${ic("slide", 18)}<span>Slide 14</span></button>`)}
    </div>
  </div>

  <h2>Answer option</h2>
  <div class="bk-panel bk-fill bk-stat">
    <div class="bk-sheet-opts">
      ${state("Rest", opt("A slip caused by tiredness"))}
      ${state("Hover", opt("A slip caused by tiredness", "is-hover"))}
      ${state("Picked, before checking", opt("A slip caused by tiredness", "is-on"))}
    </div>
  </div>
  <div class="bk-panel" style="margin-top:14px">
    <div class="bk-sheet-opts">
      ${state("The answer: mint, a tick, the word", opt("About 3% of the time", "is-answer", `<span class="bk-tag bk-tag-ink">${ic("check", 16)}<span>Answer</span></span>`, "div"))}
      ${state("Your pick, not the answer: lilac, a dot, the word", opt("A 3% chance", "is-miss", `<span class="bk-tag">${ic("pick", 16)}<span>Your pick</span></span>`, "div"))}
      ${state("The other option", opt("3% larger than expected", "is-plain", "", "div"))}
    </div>
  </div>

  <div class="bk-sheet-2">
    <div>
      <h2>How sure are you</h2>
      <div class="bk-panel bk-fill bk-stat">
        ${state("Rest", sure(d.question.sureOptions))}
        <div style="height:18px"></div>
        ${state("One chosen", sure(d.question.sureOptions, 2))}
      </div>
    </div>
    <div>
      <h2>Status marks: a shape and a word, never colour alone</h2>
      <div class="bk-panel">
        <div class="bk-states">
          ${state("Done · this one · to come", segs(2, 5))}
          ${state("Tags", `<span style="display:flex;gap:8px"><span class="bk-tag bk-tag-ink">${ic("check", 16)}<span>Answer</span></span><span class="bk-tag">${ic("pick", 16)}<span>Your pick</span></span><span class="bk-tag">${ic("again", 16)}<span>2 missed</span></span><span class="bk-tag">ended</span></span>`)}
          ${state("Milestone reached · still open", `<span style="display:flex;gap:10px"><span class="bk-mile-mark" style="margin:0">${ic("check", 22)}</span><span class="bk-mile-mark" style="margin:0;border-style:dashed;background:transparent"></span></span>`)}
        </div>
        <div class="bk-states bk-hci" style="margin-top:22px">
          ${state("Lecture: soft, flat", `<div class="bk-ev bk-ev-lec"><span class="bk-ev-time">10:00</span><span class="bk-ev-what">${ic("lecture", 18)}<span>HCI Lecture</span></span></div>`)}
          ${state("Study: done", `<div class="bk-ev bk-ev-study is-done"><span class="bk-ev-row"><span class="bk-ev-time">15:00</span><span class="bk-ev-note">${ic("check", 16)}<span>done</span></span></span><span class="bk-ev-what">${ic("learn", 18)}<span>HCI study</span></span></div>`)}
          ${state("Study: today", `<div class="bk-ev bk-ev-study is-today"><span class="bk-ev-row"><span class="bk-ev-time">15:00</span><span class="bk-ev-note"><span>moved</span></span></span><span class="bk-ev-what">${ic("learn", 18)}<span>HCI study</span></span></div>`)}
          ${state("Study: suggested", `<div class="bk-ev bk-ev-study is-proposed"><span class="bk-ev-row"><span class="bk-ev-time">14:00</span></span><span class="bk-ev-what">${ic("learn", 18)}<span>HCI study</span></span></div>`)}
          ${state("Study: accepted", `<div class="bk-ev bk-ev-study is-accepted"><span class="bk-ev-row"><span class="bk-ev-time">16:00</span><span class="bk-ev-note"><span>50 min</span></span></span><span class="bk-ev-what">${ic("learn", 18)}<span>HCI study</span></span></div>`)}
        </div>
      </div>
    </div>
  </div>

  <h2>Menu: a tab bar along the top. The current tab is cut out of the bar and joins the page.</h2>
  <div style="border-radius:22px;overflow:hidden;border:3px solid var(--ink)">${bar(d, "Today")}<div style="height:26px;background:var(--paper)"></div></div>

  <h2>Numbers: chunky and physical</h2>
  <div class="bk-panel" style="display:flex;gap:44px;align-items:center;flex-wrap:wrap">
    ${state("Big numeral", `<span class="bk-num">24</span>`)}
    ${state("Blocks you can count", `<div class="bk-minis" style="width:200px">${"<i></i>".repeat(7)}</div>`)}
    ${state("Tower: done and to come", `<div class="bk-tower" style="transform:scale(.6);transform-origin:left bottom;margin:-60px -70px 0 0"><i class="is-done">${ic("check", 26)}</i><i class="is-done">${ic("check", 26)}</i><i></i></div>`)}
    ${state("Thick ring for a split", `<div style="width:120px;height:120px"><div style="transform:scale(.545);transform-origin:left top">${ring(d.progress.from)}</div></div>`)}
    ${state("Segmented bar for hours", `<div class="bk-hours"><i class="is-full"><b style="width:100%"></b></i><i class="is-full"><b style="width:100%"></b></i><i><b style="width:40%"></b></i><i></i></div>`)}
    ${state("Stack and shelf", `<div class="bk-stack" style="height:110px"><i class="bk-blk" style="bottom:0;height:15px"></i><i class="bk-blk" style="bottom:18px;height:15px"></i><i class="bk-blk" style="bottom:36px;height:15px"></i><i class="bk-blk" style="bottom:54px;height:15px"></i><i class="bk-shelf" style="bottom:86px"></i></div>`)}
  </div>
</div>`;
  };

  LOOK.designs.push({
    id: "blocks",
    name: "Blocks",
    idea: "Big, bold, hard to miss: starting is the hard part, so the first step is the largest, warmest thing on the screen and looks easy to press.",
    fonts: [
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap",
      "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400..800&display=swap",
    ],
    axes: {
      composition: "Full-width panels of flat colour, tiled edge to edge with one very large panel for the next step, so the eye lands on where to start before it reads anything. Big simple areas give a strong figure against a calm cream ground.",
      menu: "A tab bar along the top with large filled pictograms and words; the current tab is cut out of the dark bar and joins the page. It is always in the same place and each target is big enough to hit without aiming.",
      density: "Low to medium: a few large things per screen-height, each with room around it. A student who cannot get going should never have to choose between many small things.",
      numbers: "Chunky and physical: huge numerals, stacks of blocks you can count, segmented bars, and a thick ring for the week's time split. Numbers look like things you have built, not like a report, which suits students who are not from STEM.",
      shape: "3 px ink outlines, large radii, and hard offset shadows with no blur. The shadow has one meaning: anything that casts one can be pressed, and flat things are for looking at.",
      type: "Bricolage Grotesque at weight 800 for headings and numerals, set very large and tight, with Atkinson Hyperlegible Next for all text at 16 px or more (17 to 19 px for reading). The heading face gives warmth and confidence; the text face keeps the three Learn paragraphs calm.",
      colour: "One full colour block per module (tangerine for HCI, sunflower for STAT, rose for HIST) on warm cream, with a deep ink as the strong neutral; warm colours and round shapes are linked to better feeling and comprehension (Um et al. 2012). Text on colour is always ink, the right answer is mint with a tick and the word, and a wrong pick is lilac with a dot and the words Your pick, never red.",
      icons: "Filled, rounded pictograms drawn as one family on a 24 px grid, used generously and always next to a word. Each module has its own pictogram so it is never told apart by colour alone.",
      motion: "Lively but brief: a pressable block lifts a little on hover, then presses down onto its shadow and bounces back in about 120 ms. Panels slide up into place and a finished block drops onto the tower; nothing loops, flashes or counts down, and it is all off when the system asks for reduced motion.",
    },
    css,
    screens: { today, learn, question, feedback, progress, week, phone },
    styleSheet,
  });
})();
