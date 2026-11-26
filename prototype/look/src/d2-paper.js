// Paper: a calm page you read. One centred reading column, hairline rules, words not pictures.
(function () {
  const e = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "’");
  // The module's small typographic device: a filled, an open or a half-filled square.
  const mk = (code) => (code ? `<i class="pp-mk pp-mk-${code}" aria-hidden="true"></i>` : "");
  const dots = (on, total, group) =>
    `<span class="pp-dots" aria-hidden="true">${Array.from({ length: total }, (_, i) => `<i class="${i < on ? "on" : ""}${group && (i + 1) % group === 0 && i + 1 < total ? " gap" : ""}"></i>`).join("")}</span>`;
  const nOf = (s) => { const m = /(\d+) of (\d+)/.exec(s); return m ? [+m[1], +m[2]] : [0, 0]; };
  const mins = (s) => { const m = /(\d+)\s*h(?:\s*(\d+))?/.exec(s); return m ? +m[1] * 60 + +(m[2] || 0) : 0; };
  const codeOf = (d, name) => { const m = d.modules.find((x) => x.name === name || x.code === name); return m ? m.code : ""; };

  const mast = (d, here) =>
    `<header class="pp-row"><div class="pp-c pp-mast"><span class="pp-brand">${e(d.brand)}</span><nav class="pp-menu">${d.menu.map((m) => `<a href="#" class="${m === here ? "is-here" : ""}"${m === here ? ' aria-current="page"' : ""}>${e(m)}</a>`).join("")}</nav></div></header>`;
  const run = (d, mode, right) =>
    `<header class="pp-row"><div class="pp-c pp-run"><span class="pp-run-l"><span class="pp-brand">${e(d.brand)}</span><span class="pp-mode">${e(mode)}</span></span><span class="pp-run-r">${right}</span></div></header>`;
  const opt = (text, i, o) => {
    o = o || {};
    return `<li><button type="button" class="pp-opt ${o.cls || ""}"><span class="pp-key">${o.key || "ABCDE"[i]}</span><span class="pp-opt-t">${e(text)}</span>${o.tag ? `<span class="pp-tag">${e(o.tag)}</span>` : ""}</button></li>`;
  };
  const count = (label, n, of) => `<p class="pp-label">${e(label)}</p><p class="pp-count-d">${dots(n, of)}</p>`;

  LOOK.designs.push({
    id: "paper",
    name: "Paper",
    idea: "A calm page you read: the app set like a well-made page of a book, with one thing to do and everything else small and quiet.",
    fonts: [
      "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap",
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
    ],
    axes: {
      composition: "One centred reading column 660 px wide with no cards or boxes; sections are parted by white space and hairline rules. The left margin names each section and the right margin carries asides and sources (the slide, the legend), so an overloaded student meets one thing at a time.",
      menu: "A quiet line of five words on the masthead, closed by a double rule like a newspaper's. The current page is the word in ink with an underline; there is no rail, so the page stays a page.",
      density: "Low. Each screen gives its weight to one thing (the idea to continue, the paragraph to read, the question) and sets everything else small and grey around it, because \"too much at once\" is what stops sessions.",
      numbers: "Numbers are written into sentences and helped by small typographic marks: a row of dots for a count, a thin rule for a share, a tick for the steady pace. No axes, gridlines or dashboard numerals, so the app does not feel \"for STEM students\"; Progress and Week are set as ruled tables.",
      shape: "Square corners (2 px at most), hairlines, no shadows and no gradients. As little design as possible, so nothing competes with the words.",
      type: "Newsreader, a serif made for reading on screens, for headings and reading text at 19 to 20 px; Inter for labels and controls. A restrained scale of 13, 15, 19, 24, 32 and 44 px gives a clear order without shouting.",
      colour: "Ink on warm off-white, with one accent, an ink blue, kept for the single next action and for links. Modules are told apart by name and a small square mark (filled, open, half), and right or wrong by a word and a mark, never by a colour; wrong is drawn in the same ink as everything else.",
      icons: "None: words only. Symbol-heavy screens made one interviewee's \"brain switch off\", so the only marks are type itself: a tick, an arrow, a middle dot, a row of dots.",
      motion: "Almost none. A new page or a new step fades in over 150 ms; nothing slides, bounces or counts up, and with reduced motion on there is no fade at all.",
    },
    css: `
.pp{--paper:#f6f2e9;--ink:#1d1b18;--ink2:#5c564b;--rule:#d5cdbd;--tint:#ebe5d6;--accent:#21409a;
  --serif:"Newsreader","Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif;
  --sans:"Inter",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;
  background:var(--paper);color:var(--ink);font-family:var(--serif);font-size:19px;line-height:1.55;min-height:100vh;
  box-sizing:border-box;padding-bottom:88px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-optical-sizing:auto}
.pp *,.pp *::before,.pp *::after{box-sizing:border-box}
:where(.pp) :is(p,h1,h2,h3,ol,ul,li){margin:0;padding:0}
:where(.pp) :is(ol,ul){list-style:none}
:where(.pp) :is(i){font-style:normal}
:where(.pp) :is(a){color:var(--accent);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;cursor:pointer}
.pp a:hover{text-decoration-thickness:2px}
.pp :focus-visible{outline:2px solid var(--accent);outline-offset:3px}

/* The page: a centred column with a margin either side */
.pp-row{display:grid;grid-template-columns:minmax(0,1fr) 220px 40px 660px 40px 220px minmax(0,1fr);align-items:baseline}
.pp-row>.pp-l{grid-column:2;grid-row:1;text-align:right}
.pp-row>.pp-c{grid-column:4;grid-row:1;min-width:0}
.pp-row>.pp-r{grid-column:6;grid-row:1}
.pp-row+.pp-row{margin-top:40px}
.pp-ruled>.pp-c{border-top:1px solid var(--rule);padding-top:26px}

/* Masthead and running head */
.pp-mast,.pp-run{display:flex;justify-content:space-between;align-items:baseline;padding-top:18px}
.pp-mast{border-bottom:3px double var(--ink)}
.pp-run{border-bottom:1px solid var(--ink)}
.pp-brand{font-family:var(--serif);font-weight:600;font-size:24px;line-height:1;letter-spacing:-.01em}
.pp-menu{display:flex;gap:30px}
.pp .pp-menu a{display:inline-flex;align-items:center;height:48px;font-family:var(--sans);font-size:15px;color:var(--ink2);text-decoration:none}
.pp .pp-menu a:hover{color:var(--ink);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:7px}
.pp .pp-menu a.is-here{color:var(--ink);font-weight:600;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:7px}
.pp-run-l{display:inline-flex;align-items:baseline;gap:16px}
.pp-run .pp-brand{font-size:20px}
.pp-mode{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;padding-left:16px;border-left:1px solid var(--ink)}
.pp-run-r{display:inline-flex;align-items:baseline;gap:26px;font-family:var(--sans);font-size:15px;color:var(--ink2)}
.pp-run-r a{display:inline-flex;align-items:center;height:48px}

/* Type */
.pp-label{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--ink2);line-height:1.5}
.pp-display{font-weight:500;font-size:44px;line-height:1.12;letter-spacing:-.015em}
.pp-title{font-weight:500;font-size:36px;line-height:1.15;letter-spacing:-.012em}
.pp-stem{font-weight:500;font-size:32px;line-height:1.2;letter-spacing:-.01em}
.pp-sub{font-weight:500;font-size:24px;line-height:1.3;letter-spacing:-.005em}
.pp-lede{font-size:21px;line-height:1.5}
.pp-deck{font-style:italic;font-size:19px;line-height:1.5;color:var(--ink2)}
.pp-quiet{font-style:italic;font-size:17px;color:var(--ink2)}
.pp-small{font-family:var(--sans);font-size:15px;line-height:1.5;color:var(--ink2)}
.pp-prose p{font-size:20px;line-height:1.6}
.pp-prose p+p{margin-top:16px}
.pp-num{font-variant-numeric:tabular-nums lining-nums}

/* Marks */
.pp-mk{display:inline-block;width:.62em;height:.62em;min-width:8px;min-height:8px;border:1.5px solid currentColor;margin-right:.55em;vertical-align:.02em}
.pp-mk-HCI{background:currentColor}
.pp-mk-HIST{border-left-width:.34em}
.pp-dots{display:inline-flex;align-items:center;gap:5px;vertical-align:.08em}
.pp-dots i{display:block;width:8px;height:8px;border-radius:50%;border:1px solid currentColor}
.pp-dots i.on{background:currentColor}
.pp-dots i.gap{margin-right:9px}
.pp-bar{display:inline-block;position:relative;height:1px;background:var(--ink2);vertical-align:middle}
.pp-bar i{position:absolute;left:0;top:-1px;height:3px;background:var(--ink)}
.pp-bar.to::after{content:"";position:absolute;right:0;top:-6px;width:1px;height:13px;background:var(--ink)}
.pp-ring{display:inline-block;width:10px;height:10px;border-radius:50%;border:1px solid var(--ink)}
.pp-tick{font-family:var(--sans);font-weight:600}

/* Things you press */
.pp .pp-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 24px;font-family:var(--sans);font-size:16px;font-weight:600;line-height:1.2;
  color:var(--ink);background:transparent;border:1px solid var(--ink);border-radius:2px;text-decoration:none;cursor:pointer}
.pp .pp-btn:hover,.pp .pp-btn.is-hover{background:var(--tint)}
.pp .pp-btn-primary{background:var(--accent);border-color:var(--accent);color:var(--paper)}
.pp .pp-btn-primary:hover,.pp .pp-btn-primary.is-hover{background:var(--ink);border-color:var(--ink)}
.pp .pp-btn.is-focus,.pp .pp-opt.is-focus{outline:2px solid var(--accent);outline-offset:3px}
.pp .pp-link{display:inline-flex;align-items:center;min-height:44px;font-family:var(--sans);font-size:15px;font-weight:500}
.pp-actions{display:flex;align-items:center;gap:24px;margin-top:22px}

.pp-opts{border-top:1px solid var(--rule);margin-top:16px}
.pp-opts li{border-bottom:1px solid var(--rule)}
.pp-opt{display:grid;grid-template-columns:28px 1fr auto;column-gap:16px;align-items:start;width:calc(100% + 24px);margin:0 -12px;min-height:52px;padding:12px;
  background:none;border:0;border-radius:0;font:inherit;color:inherit;text-align:left;cursor:pointer}
.pp-opt:hover,.pp-opt.is-hover{background:var(--tint)}
.pp-key{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--ink);font-family:var(--sans);font-size:13px;font-weight:600;line-height:1}
.pp-opt-t{font-size:19px;line-height:28px}
.pp-tag{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;line-height:28px;white-space:nowrap;padding-left:8px}
.pp-opt.is-chosen .pp-key,.pp-opt.is-miss .pp-key{background:var(--ink);color:var(--paper)}
.pp-opt.is-chosen .pp-opt-t{font-weight:600}
.pp-opt.is-answer .pp-key{border-width:2px;font-size:15px}
.pp-opt.is-answer .pp-opt-t{font-weight:600}
.pp-opt.is-miss .pp-tag{font-weight:500}
.pp-opt.is-plain{cursor:default}
.pp-opt.is-plain .pp-opt-t{color:var(--ink2)}
.pp-opt.is-plain .pp-key{border-color:var(--ink2);color:var(--ink2)}

.pp-sure{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:14px;padding-top:18px;border-top:1px solid var(--rule)}
.pp-sure-h{font-style:italic;font-size:19px}
.pp-seg{display:inline-flex}
.pp-seg button{min-height:44px;padding:0 18px;margin-left:-1px;border:1px solid var(--ink);border-radius:0;background:none;color:var(--ink);font-family:var(--sans);font-size:15px;font-weight:500;cursor:pointer}
.pp-seg button:first-child{margin-left:0;border-radius:2px 0 0 2px}
.pp-seg button:last-child{border-radius:0 2px 2px 0}
.pp-seg button:hover,.pp-seg button.is-hover{background:var(--tint)}
.pp-seg button.is-on{background:var(--ink);color:var(--paper);font-weight:600}

.pp-field{flex:1;display:flex;align-items:center;min-height:44px;border-bottom:1px solid var(--ink);font-style:italic;font-size:19px;color:var(--ink2);cursor:text}
.pp-say{display:flex;align-items:flex-end;gap:16px}

/* Margin notes and the set-in figure */
.pp-note{font-size:16.5px;line-height:1.45;color:var(--ink2)}
.pp-note+.pp-note{margin-top:26px}
.pp-note .pp-label{margin-bottom:4px}
.pp-note-h{font-weight:600;color:var(--ink)}
.pp-note .pp-dots{margin:7px 0 6px}
.pp-note a{font-family:var(--sans);font-size:15px;font-weight:500;display:inline-flex;align-items:center;min-height:40px}
.pp-fig{border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);padding:12px 0 16px}
.pp-fig-t{font-weight:600;font-size:20px;line-height:1.25;margin:6px 0 10px;color:var(--ink)}
.pp-fig li{position:relative;padding-left:16px;font-family:var(--sans);font-size:15px;line-height:1.45;color:var(--ink)}
.pp-fig li+li{margin-top:8px}
.pp-fig li::before{content:"\\2013";position:absolute;left:0;color:var(--ink2)}

/* Ruled tables */
.pp-table{border-top:1px solid var(--ink)}
.pp-tr{display:grid;align-items:baseline;column-gap:20px;padding:11px 0;border-bottom:1px solid var(--rule);line-height:28px}
.pp-td-s{font-family:var(--sans);font-size:15px;color:var(--ink2)}
.pp-td-r{text-align:right}

/* Today */
.pp-s1{margin-top:44px}
.pp-greet{font-style:italic;font-size:24px;line-height:1.3;margin-bottom:34px}
.pp-eyebrow{margin-bottom:8px}
.pp-today .pp-display{margin-bottom:14px}
.pp-today .pp-lede .pp-dots{margin-right:10px}
.pp-block .pp-sub{margin-bottom:4px}
.pp-sep{color:var(--ink2);padding:0 .3em}
.pp-lec{grid-template-columns:128px 1fr auto 130px}
.pp-lec .pp-link{min-height:28px;justify-content:flex-end}
.pp-state{font-style:italic;color:var(--ink2);font-size:17px}
.pp-foot{border-top:1px solid var(--rule);padding-top:10px}

/* Learn */
.pp-learn .pp-title{margin-bottom:8px}
.pp-where .pp-dots{margin-right:10px}
.pp-check>.pp-c{border-top:1px solid var(--ink);padding-top:22px}
.pp-q{font-weight:500;font-size:24px;line-height:1.3;letter-spacing:-.005em}
.pp-learn .pp-row+.pp-row{margin-top:32px}

/* Practise */
.pp-kicker .pp-deck{margin-top:6px}
.pp-count-d{margin-top:6px;color:var(--ink);line-height:1}
.pp-source{font-style:italic;font-size:16px;color:var(--ink2);margin-top:6px}
.pp-practise .pp-row+.pp-row{margin-top:30px}
.pp-stem-s{font-size:24px;line-height:1.3;margin-top:6px}
.pp-verdict .pp-display{font-size:36px;margin-bottom:10px}
.pp-verdict .pp-quiet{margin-top:10px}

/* Progress */
.pp-progress .pp-display,.pp-weekpage .pp-display{margin-bottom:12px}
.pp-lede b{font-weight:600}
.pp-forty{margin-top:12px;line-height:1}
.pp-ranges{display:flex;gap:24px;margin-bottom:4px}
.pp-ranges button{min-height:40px;padding:0;border:0;background:none;font-family:var(--sans);font-size:15px;color:var(--ink2);cursor:pointer}
.pp-ranges button:hover{color:var(--ink);text-decoration:underline;text-underline-offset:7px}
.pp-ranges button.is-here{color:var(--ink);font-weight:600;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:7px}
.pp-days{border-top:1px solid var(--ink);border-bottom:1px solid var(--rule);padding:8px 0}
.pp-day{display:grid;grid-template-columns:56px 1fr;align-items:center;height:25px}
.pp-day-n{font-family:var(--sans);font-size:14px;color:var(--ink2)}
.pp-day.is-today .pp-day-n{color:var(--ink);font-weight:600}
.pp-day-t{position:relative;height:25px}
.pp-you{position:absolute;left:0;top:11px;height:3px;background:var(--ink)}
.pp-pace{position:absolute;top:6px;width:1px;height:13px;background:var(--ink)}
.pp-legend p+p{margin-top:12px}
.pp-key-you{display:inline-block;width:22px;height:3px;background:var(--ink);vertical-align:middle;margin-right:8px}
.pp-key-pace{display:inline-block;width:1px;height:13px;background:var(--ink);vertical-align:-2px;margin:0 8px 0 2px}
.pp-from{grid-template-columns:1fr 96px 150px 40px}
.pp-from .pp-bar{width:150px}
.pp-gap{grid-template-columns:1fr auto}
.pp-gap-i{font-weight:600}
.pp-gap-w{display:block;font-family:var(--sans);font-size:14.5px;color:var(--ink2);line-height:22px}
.pp-mile{grid-template-columns:22px 1fr auto}
.pp-mile .pp-ring{vertical-align:0}
.pp-mile.is-open .pp-td-s{font-family:var(--serif);font-style:italic;font-size:16px}
.pp-mile-d{margin-top:8px;line-height:1}

/* Week */
.pp-kept{display:flex;align-items:center;gap:14px;margin-top:14px;font-family:var(--sans);font-size:15px}
.pp-kept b{font-weight:600}
.pp-kept .pp-bar{width:180px}
.pp-kept span:last-child{color:var(--ink2)}
.pp-week{border-top:1px solid var(--ink)}
.pp-wd{display:grid;grid-template-columns:84px 226px 1fr;align-items:start;padding:11px 0;border-bottom:1px solid var(--rule);line-height:28px}
.pp-wd-d{font-family:var(--sans);font-size:15px;color:var(--ink2)}
.pp-wd.is-today .pp-wd-d{color:var(--ink);font-weight:600}
.pp-wd-now{display:block;font-size:12px;letter-spacing:.09em;text-transform:uppercase;line-height:16px;font-weight:600}
.pp-wd-fixed li{display:grid;grid-template-columns:54px 1fr;font-family:var(--sans);font-size:15px;color:var(--ink2)}
.pp-blk{display:grid;grid-template-columns:54px 1fr;width:100%;padding:0 0 0 12px;border:0;border-left:2px solid var(--ink);border-radius:0;background:none;font:inherit;color:inherit;text-align:left;line-height:28px;cursor:grab}
.pp-blk:hover{background:var(--tint)}
.pp-blk .pp-t{font-family:var(--sans);font-size:15px}
.pp-blk-w{font-weight:600}
.pp-blk-n{font-style:italic;font-size:16.5px;color:var(--ink2);margin-left:10px}
.pp-blk.is-done{border-left-color:var(--ink2)}
.pp-blk.is-done .pp-blk-w{font-weight:400}
.pp-blk.is-today{border-left-width:4px;padding-left:10px}
.pp-blk.is-proposed{border-left-style:dashed}
.pp-blk.is-proposed .pp-blk-w{font-weight:400;font-style:italic}
.pp-blk.is-proposed .pp-blk-n{display:block;margin-left:0;line-height:22px;padding-bottom:3px}

/* Phone */
.pp-phone{display:flex;flex-direction:column;padding:0 20px 20px;font-size:19px}
.pp-phone .pp-mast{padding-top:14px;padding-bottom:12px}
.pp-phone .pp-brand{font-size:22px}
.pp-phone .pp-count{display:flex;align-items:center;justify-content:space-between;margin-top:30px}
.pp-phone .pp-stem{font-size:29px;line-height:1.2;margin-top:12px}
.pp-phone .pp-opts{margin-top:26px}
.pp-phone .pp-opt{min-height:64px;padding:18px 12px}
.pp-phone .pp-opt-t{font-size:20px}
.pp-phone-foot{margin-top:auto;border-top:1px solid var(--rule);padding-top:16px}
.pp-phone-foot .pp-quiet{font-size:17px;line-height:1.45}
.pp-phone .pp-btn{min-height:50px;width:100%;margin-top:16px;font-size:17px}

/* The style sheet */
.pp-sheet{padding:0 0 80px}
.pp-sh{width:1160px;margin:0 auto}
.pp-sh-head{display:flex;justify-content:space-between;align-items:baseline;padding-top:26px;padding-bottom:10px;border-bottom:3px double var(--ink)}
.pp-sh-head .pp-brand{font-size:30px}
.pp-sh-grid{display:grid;grid-template-columns:1fr 1fr;column-gap:80px;row-gap:34px;margin-top:30px}
.pp-sh-sec>h2{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--ink2);border-top:1px solid var(--ink);padding-top:10px;margin-bottom:12px}
.pp-sh-type{display:grid;grid-template-columns:1fr auto;align-items:baseline;column-gap:20px;padding:5px 0;border-bottom:1px solid var(--rule)}
.pp-sh-type>span:last-child,.pp-sh-cap{font-family:var(--sans);font-size:13px;color:var(--ink2);white-space:nowrap}
.pp-sh-sw{display:grid;grid-template-columns:44px 108px 78px 1fr;align-items:center;column-gap:14px;padding:6px 0;border-bottom:1px solid var(--rule);font-family:var(--sans);font-size:15px;line-height:1.35}
.pp-sh-sw>i{display:block;width:44px;height:30px;border:1px solid var(--ink)}
.pp-sh-sw>b{font-weight:600}
.pp-sh-sw>code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13.5px}
.pp-sh-sw>span{color:var(--ink2);font-size:14px}
.pp-sh-marks{display:grid;grid-template-columns:1fr 1fr;column-gap:32px}
.pp-sh-mark{display:grid;grid-template-columns:72px 1fr;align-items:center;column-gap:12px;min-height:38px;border-bottom:1px solid var(--rule);font-family:var(--sans);font-size:14px;color:var(--ink2);line-height:1.3}
.pp-sh-mark>span:first-child{color:var(--ink);font-size:17px;display:flex;align-items:center}
.pp-sh-mark .pp-mk{margin-right:0}
.pp-sh-states{display:flex;flex-wrap:wrap;gap:18px 26px;align-items:flex-end}
.pp-sh-states>div{display:flex;flex-direction:column;gap:6px;align-items:flex-start}
.pp-sh-sec .pp-opts{margin-top:0}
.pp-sh-sec .pp-mast,.pp-sh-sec .pp-run{padding-top:0}
.pp-sh-sec .pp-run{margin-top:10px}
.pp-sh-sec .pp-sure{border-top:0;padding-top:0;margin-top:0}
.pp-sh-note{font-family:var(--sans);font-size:14px;color:var(--ink2);line-height:1.45;margin-top:10px}
`,
    screens: {
      today(d) {
        const t = d.today;
        const rv = parseInt(t.revisit.title, 10) || 0;
        return `<div class="pp pp-today">${mast(d, "Today")}
<section class="pp-row pp-s1">
  <p class="pp-l pp-label">${e(t.date)}</p>
  <div class="pp-c">
    <p class="pp-greet">${e(t.greeting)}</p>
    <p class="pp-label pp-eyebrow">${mk(t.hero._module)}${e(t.hero.eyebrow)}</p>
    <h1 class="pp-display">${e(t.hero.title)}</h1>
    <p class="pp-lede">${dots(t.hero._done, t.hero._total)}${e(t.hero.text)}</p>
    <p class="pp-actions"><a href="#" class="pp-btn pp-btn-primary">${e(t.hero.cta)}</a></p>
  </div>
  <aside class="pp-r">
    <div class="pp-note"><h2 class="pp-label">${e(t.week.title)}</h2><p>${t.week.stats.map((s) => `<span class="pp-num">${e(s.n)}</span> ${e(s.label)}`).join(",<br>")}.</p></div>
    <div class="pp-note"><p class="pp-note-h">${e(t.revisit.title)}</p><p>${dots(rv, rv)}</p><p>${e(t.revisit.text)}</p></div>
  </aside>
</section>
<section class="pp-row pp-ruled pp-block">
  <h2 class="pp-l pp-label">${e(t.block.title)}</h2>
  <div class="pp-c">
    <p class="pp-sub">${e(t.block.when)}<span class="pp-sep">·</span>${mk(t.block._module)}${e(t.block.what)}</p>
    <p>${e(t.block.step)}</p>
    <p class="pp-actions"><a href="#" class="pp-btn">${e(t.block.cta)}</a><a href="#" class="pp-link">${e(t.block.alt)}</a></p>
  </div>
</section>
<section class="pp-row">
  <h2 class="pp-l pp-label">${e(t.lecturesTitle)}</h2>
  <ul class="pp-c pp-table">${t.lectures.map((l) => `<li class="pp-tr pp-lec"><span class="pp-td-s pp-num">${e(l.time)}</span><span>${mk(l._module)}${e(l.what)}</span><span class="pp-state">${e(l.state)}</span><span class="pp-td-r"><a href="#" class="pp-link">${e(l.action)}</a></span></li>`).join("")}</ul>
</section>
<footer class="pp-row"><p class="pp-c"><a href="#" class="pp-link">${e(t.appearance)}</a></p></footer>
</div>`;
      },

      learn(d) {
        const L = d.learn;
        const [n, of] = nOf(L.where);
        const code = codeOf(d, L.title.split(" · ")[0]);
        return `<div class="pp pp-learn">${run(d, L.mode, `<span class="pp-num">${e(L.time)}</span>${L.tools.map((t) => `<a href="#">${e(t)}</a>`).join("")}<a href="#">${e(L.stop)}</a>`)}
<section class="pp-row pp-s1">
  <div class="pp-c">
    <h1 class="pp-title">${mk(code)}${e(L.title)}</h1>
    <p class="pp-small pp-where">${dots(n, of)}${e(L.where)}</p>
  </div>
</section>
<section class="pp-row">
  <p class="pp-l"><a href="#" class="pp-link">${e(L.earlier)}</a></p>
  <div class="pp-c pp-prose">${L.paragraphs.map((p) => `<p>${e(p)}</p>`).join("")}</div>
  <aside class="pp-r pp-note">${L.chips.map((c) => `<p><a href="#">${e(c)}</a></p>`).join("")}</aside>
</section>
<section class="pp-row pp-check">
  <h2 class="pp-l pp-label">${e(L.label)}</h2>
  <div class="pp-c">
    <p class="pp-q">${e(L.question)}</p>
    <ol class="pp-opts">${L.options.map((o, i) => opt(o, i)).join("")}</ol>
    <p><a href="#" class="pp-link">${e(L.dontKnow)}</a></p>
  </div>
</section>
<section class="pp-row">
  <div class="pp-c pp-say"><div class="pp-field" role="textbox" tabindex="0">${e(L.say)}</div><button type="button" class="pp-btn">${e(L.send)}</button></div>
</section>
</div>`;
      },

      question(d) {
        const q = d.question;
        return `<div class="pp pp-practise">${run(d, q.mode, `<a href="#">${e(q.stop)}</a>`)}
<section class="pp-row pp-s1 pp-kicker">
  <div class="pp-c"><p class="pp-label">${mk(codeOf(d, q.title))}${e(q.title)}</p><p class="pp-deck">${e(q.goal)}</p></div>
</section>
<section class="pp-row">
  <div class="pp-l">${count(q.count, q._n, q._of)}</div>
  <div class="pp-c">
    <h1 class="pp-stem">${e(q.stem)}</h1>
    <p class="pp-source">${e(q.source)}</p>
    <ol class="pp-opts">${q.options.map((o, i) => opt(o, i)).join("")}</ol>
    <p><a href="#" class="pp-link">${e(q.dontKnow)}</a></p>
    <div class="pp-sure"><p class="pp-sure-h">${e(q.sure)}</p><div class="pp-seg">${q.sureOptions.map((s) => `<button type="button">${e(s)}</button>`).join("")}</div></div>
    <p class="pp-actions"><button type="button" class="pp-btn pp-btn-primary">${e(q.check)}</button><button type="button" class="pp-btn">${e(q.showMe)}</button></p>
  </div>
  <aside class="pp-r pp-fig"><p class="pp-label">${e(q.slide.page)}</p><p class="pp-fig-t">${e(q.slide.title)}</p><ul>${q.slide.bullets.map((b) => `<li>${e(b)}</li>`).join("")}</ul></aside>
</section>
</div>`;
      },

      feedback(d) {
        const f = d.feedback;
        const st = { answer: { cls: "is-answer", key: "✓" }, miss: { cls: "is-miss" }, plain: { cls: "is-plain" } };
        return `<div class="pp pp-practise">${run(d, f.mode, `<a href="#">${e(f.stop)}</a>`)}
<section class="pp-row pp-s1 pp-kicker">
  <div class="pp-c"><p class="pp-label">${mk(codeOf(d, f.title))}${e(f.title)}</p></div>
</section>
<section class="pp-row">
  <div class="pp-l">${count(f.count, f._n, f._of)}</div>
  <div class="pp-c">
    <p class="pp-label">${e(f.head)}</p>
    <p class="pp-stem pp-stem-s">${e(f.stem)}</p>
    <ol class="pp-opts">${f.options.map((o, i) => opt(o.text, i, Object.assign({ tag: o.tag }, st[o._state]))).join("")}</ol>
  </div>
</section>
<section class="pp-row pp-verdict">
  <div class="pp-c">
    <h1 class="pp-display">${e(f.verdict)}</h1>
    <p class="pp-lede">${e(f.why)}</p>
    <p class="pp-quiet">${e(f.later)}</p>
    <p class="pp-actions"><a href="#" class="pp-btn pp-btn-primary">${e(f.next)}</a></p>
  </div>
  <aside class="pp-r pp-note"><p><a href="#">${e(f.chip)}</a></p></aside>
</section>
</div>`;
      },

      progress(d) {
        const p = d.progress;
        const [sec, all] = nOf(p.secured);
        const [got, outOf] = nOf(p.milestonesTitle);
        const top = Math.max.apply(null, p._pace.concat(p._you.filter((v) => v != null)));
        let last = -1;
        p._you.forEach((v, i) => { if (v != null) last = i; });
        const pos = (v) => `calc((100% - 1px) * ${(v / top).toFixed(4)})`;
        return `<div class="pp pp-progress">${mast(d, "Progress")}
<section class="pp-row pp-s1">
  <p class="pp-l pp-label">${e(p.eyebrow)}</p>
  <div class="pp-c">
    <h1 class="pp-display">${e(p.title)}</h1>
    <p class="pp-lede">${e(p.scoreLabel)} <b>${e(p.score)}</b>, ${e(p.gain)}. ${e(p.secured)}.</p>
    <p class="pp-forty">${dots(sec, all, 10)}</p>
  </div>
</section>
<section class="pp-row">
  <div class="pp-c">
    <div class="pp-ranges">${p.ranges.map((r, i) => `<button type="button" class="${i === 0 ? "is-here" : ""}"${i === 0 ? ' aria-pressed="true"' : ""}>${e(r)}</button>`).join("")}</div>
    <div class="pp-days">${p.days.map((day, i) => `<div class="pp-day${i === last ? " is-today" : ""}"><span class="pp-day-n">${e(day)}</span><span class="pp-day-t">${p._you[i] != null ? `<i class="pp-you" style="width:${pos(p._you[i])}"></i>` : ""}<i class="pp-pace" style="left:${pos(p._pace[i])}"></i></span></div>`).join("")}</div>
  </div>
  <aside class="pp-r pp-note pp-legend"><p><i class="pp-key-you"></i>${e(p.legendYou)}</p><p><i class="pp-key-pace"></i>${e(p.legendPace)}</p></aside>
</section>
<section class="pp-row pp-ruled">
  <h2 class="pp-l pp-label">${e(p.attentionTitle)}</h2>
  <div class="pp-c">
    <p>${e(p.attention.text)}</p>
    <p class="pp-actions"><a href="#" class="pp-btn pp-btn-primary">${e(p.attention.cta)}</a></p>
  </div>
</section>
<section class="pp-row">
  <h2 class="pp-l pp-label">${e(p.fromTitle)}</h2>
  <ul class="pp-c pp-table">${p.from.map((f) => `<li class="pp-tr pp-from"><span>${mk(f._module)}${e(f.name)}</span><span class="pp-td-s pp-td-r pp-num">${e(f.time)}</span><span class="pp-bar"><i style="width:${Math.round(f._share * 100)}%"></i></span><span class="pp-td-r pp-num">+${e(f.points)}</span></li>`).join("")}</ul>
</section>
<section class="pp-row">
  <h2 class="pp-l pp-label">${e(p.gapsTitle)}</h2>
  <ul class="pp-c pp-table">${p.gaps.map((g) => `<li class="pp-tr pp-gap"><span><span class="pp-gap-i">${e(g.idea)}</span><span class="pp-gap-w">${mk(g._module)}${e(g.where)}</span></span><span class="pp-td-s pp-num">${e(g.count)}</span></li>`).join("")}</ul>
</section>
<section class="pp-row">
  <div class="pp-l"><h2 class="pp-label">${e(p.milestonesTitle)}</h2><p class="pp-mile-d">${dots(got, outOf, 5)}</p></div>
  <ul class="pp-c pp-table">${p.milestones.map((m) => `<li class="pp-tr pp-mile${m._earned ? "" : " is-open"}"><span>${m._earned ? `<span class="pp-tick">✓</span>` : `<i class="pp-ring"></i>`}</span><span>${e(m.name)}</span><span class="pp-td-s pp-td-r pp-num">${e(m.when)}</span></li>`).join("")}</ul>
</section>
</div>`;
      },

      week(d) {
        const w = d.week;
        const ratio = Math.min(1, mins(w.kept) / (mins(w.target) || 1));
        const rows = w.days.map((day, i) => {
          const fixed = w.lectures.concat(w.commitments).filter((x) => x._day === i).sort((a, b) => a._start - b._start);
          const blocks = w.blocks.filter((x) => x._day === i).sort((a, b) => a._start - b._start);
          return `<li class="pp-wd${i === w._today ? " is-today" : ""}">
  <div class="pp-wd-d">${e(day)}${i === w._today ? `<span class="pp-wd-now">${e(d.menu[0])}</span>` : ""}</div>
  <ul class="pp-wd-fixed">${fixed.map((x) => `<li><span class="pp-num">${e(x.time)}</span><span>${mk(x._module)}${e(x.what)}</span></li>`).join("")}</ul>
  <div class="pp-wd-blocks">${blocks.map((b) => `<button type="button" class="pp-blk is-${b._status}"><span class="pp-t pp-num">${e(b.time)}</span><span><span class="pp-blk-w">${mk(b._module)}${e(b.what)}</span><span class="pp-blk-n">${b._status === "done" ? `<span class="pp-tick">✓</span> ` : ""}${e(b.note)}</span></span></button>`).join("")}</div>
</li>`;
        }).join("");
        return `<div class="pp pp-weekpage">${mast(d, "Week")}
<section class="pp-row pp-s1">
  <p class="pp-l pp-label">${e(w.eyebrow)}</p>
  <div class="pp-c">
    <h1 class="pp-display">${e(w.title)}</h1>
    <p class="pp-deck">${e(w.range)}</p>
    <p class="pp-kept"><b class="pp-num">${e(w.kept)}</b><span class="pp-bar to"><i style="width:${Math.round(ratio * 100)}%"></i></span><span class="pp-num">${e(w.target)}</span></p>
    <p class="pp-actions"><a href="#" class="pp-btn pp-btn-primary">${e(w.plan)}</a></p>
  </div>
</section>
<section class="pp-row">
  <ol class="pp-c pp-week">${rows}</ol>
  <aside class="pp-r pp-note"><p>${e(w.hint)}</p></aside>
</section>
</div>`;
      },

      phone(d) {
        const p = d.phone;
        const code = codeOf(d, p.where.split(" · ")[0]);
        return `<div class="pp pp-phone">
<header class="pp-mast"><span class="pp-brand">${e(p.brand)}</span><span class="pp-label">${mk(code)}${e(p.where)}</span></header>
<div class="pp-count"><span class="pp-label">${e(p.count)}</span>${dots(p._n, p._of)}</div>
<h1 class="pp-stem">${e(p.stem)}</h1>
<ol class="pp-opts">${p.options.map((o, i) => opt(o, i)).join("")}</ol>
<footer class="pp-phone-foot"><p class="pp-quiet">${e(p.why)}</p><a href="#" class="pp-btn">${e(p.later)}</a></footer>
</div>`;
      },
    },

    styleSheet(d) {
      const type = [
        ["pp-display", "The Welfare State, 1945 to 1951", "Display · Newsreader 500 · 44"],
        ["pp-stem", "What does a p-value of 0.03 tell you?", "Question · Newsreader 500 · 32"],
        ["pp-sub", "Today 15:00 · HCI · 50 min", "Subhead · Newsreader 500 · 24"],
        ["pp-prose-s", "A mental model is the picture a person holds of how something works.", "Reading · Newsreader 400 · 19 to 20"],
        ["pp-quiet", "This one comes back in a short retest in a day or two.", "Aside · Newsreader italic · 17"],
        ["pp-small", "Idea 2 of 4 · How models form", "Small · Inter 400 · 15"],
        ["pp-label", "Next study block", "Label · Inter 600 caps · 13"],
      ];
      const colours = [
        ["#f6f2e9", "Paper", "The page. Warm, never pure white."],
        ["#1d1b18", "Ink", "Text, rules, marks, chosen states."],
        ["#5c564b", "Soft ink", "Labels, notes, times. 6.5 to 1 on paper."],
        ["#d5cdbd", "Hairline", "Rules between rows and sections."],
        ["#ebe5d6", "Tint", "Under the pointer only. Never a state."],
        ["#21409a", "Accent", "The one next action, and links. Nothing else."],
      ];
      const marks = [
        [`<span class="pp-tick">✓</span>`, "Tick: done, earned, the answer"],
        [`${mk("HCI")}`, "Filled square: HCI"],
        ["→", "Arrow: what comes next, in a line of text"],
        [`${mk("STAT")}`, "Open square: STAT"],
        ["·", "Middle dot: parts one line"],
        [`${mk("HIST")}`, "Half square: HIST"],
        [dots(2, 4), "Dots: a small count, so many of so many"],
        [`<i class="pp-ring"></i>`, "Ring: not yet earned"],
        [`<span class="pp-bar" style="width:60px"><i style="width:55%"></i></span>`, "Thin rule: a share or an amount"],
        [`<i class="pp-key-pace"></i>`, "Upright tick: the steady pace"],
      ];
      const o = d.question.options;
      return `<div class="pp pp-sheet"><div class="pp-sh">
<header class="pp-sh-head"><span class="pp-brand">Paper</span><span class="pp-deck">A calm page you read. As little design as possible.</span></header>
<div class="pp-sh-grid">
  <section class="pp-sh-sec"><h2>Type · Newsreader for reading, Inter for labels and controls</h2>
    ${type.map((t) => `<div class="pp-sh-type"><span class="${t[0] === "pp-prose-s" ? "" : t[0]}" style="${t[0] === "pp-display" ? "font-size:38px" : ""}">${e(t[1])}</span><span>${e(t[2])}</span></div>`).join("")}
  </section>
  <section class="pp-sh-sec"><h2>Colour · ink on paper, and one accent</h2>
    ${colours.map((c) => `<div class="pp-sh-sw"><i style="background:${c[0]}"></i><b>${c[1]}</b><code>${c[0]}</code><span>${c[2]}</span></div>`).join("")}
  </section>
  <section class="pp-sh-sec"><h2>Icons · none. These marks are type, not pictures</h2>
    <div class="pp-sh-marks">${marks.map((m) => `<div class="pp-sh-mark"><span>${m[0]}</span><span>${m[1]}</span></div>`).join("")}</div>
  </section>
  <section class="pp-sh-sec"><h2>Menu · a line of words; the running head inside a session</h2>
    <div class="pp-mast"><span class="pp-brand">${e(d.brand)}</span><nav class="pp-menu">${d.menu.map((m, i) => `<a href="#" class="${i === 0 ? "is-here" : ""}">${e(m)}</a>`).join("")}</nav></div>
    <div class="pp-run"><span class="pp-run-l"><span class="pp-brand">${e(d.brand)}</span><span class="pp-mode">${e(d.learn.mode)}</span></span><span class="pp-run-r"><span>${e(d.learn.time)}</span><a href="#">${e(d.learn.stop)}</a></span></div>
    <p class="pp-sh-note">Here: ink, bold and underlined. Elsewhere: soft ink. Every word is 48 px tall to press.</p>
  </section>
  <section class="pp-sh-sec"><h2>Buttons · 44 px high, 50 px on the phone</h2>
    <div class="pp-sh-states">
      <div><span class="pp-btn pp-btn-primary">${e(d.today.hero.cta)}</span><span class="pp-sh-cap">Next action</span></div>
      <div><span class="pp-btn pp-btn-primary is-hover">${e(d.today.hero.cta)}</span><span class="pp-sh-cap">Pointer over</span></div>
      <div><span class="pp-btn pp-btn-primary is-focus">${e(d.today.hero.cta)}</span><span class="pp-sh-cap">Keyboard focus</span></div>
      <div><span class="pp-btn">${e(d.today.block.cta)}</span><span class="pp-sh-cap">Other action</span></div>
      <div><span class="pp-btn is-hover">${e(d.today.block.cta)}</span><span class="pp-sh-cap">Pointer over</span></div>
      <div><a href="#" class="pp-link">${e(d.today.block.alt)}</a><span class="pp-sh-cap">Link</span></div>
    </div>
    <h2 style="margin-top:26px">How sure are you · four joined words</h2>
    <div class="pp-sure"><div class="pp-seg">${d.question.sureOptions.map((s, i) => `<button type="button" class="${i === 2 ? "is-on" : i === 1 ? "is-hover" : ""}">${i === 2 ? "✓ " : ""}${e(s)}</button>`).join("")}</div><span class="pp-sh-cap">Resting · pointer over · chosen (filled, with a tick)</span></div>
  </section>
  <section class="pp-sh-sec"><h2>Answer option · resting, pointer over, chosen; then answer, your pick, the rest</h2>
    <ol class="pp-opts">
      ${opt(o[2], 0)}
      ${opt(o[2], 1, { cls: "is-hover" })}
      ${opt(o[2], 2, { cls: "is-chosen" })}
      ${opt(d.feedback.options[0].text, 0, { cls: "is-answer", key: "✓", tag: d.feedback.options[0].tag })}
      ${opt(d.feedback.options[1].text, 1, { cls: "is-miss", tag: d.feedback.options[1].tag })}
      ${opt(d.feedback.options[2].text, 2, { cls: "is-plain" })}
    </ol>
    <p class="pp-sh-note">Status marks: the answer is bold with a tick in its key and the word Answer; your pick keeps its filled key and the words Your pick. Both are ink. Nothing turns red.</p>
  </section>
</div></div></div>`;
    },
  });
})();
