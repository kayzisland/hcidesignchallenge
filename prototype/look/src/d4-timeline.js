// Design 4, "Timeline": your day is the interface. A strip of time is the spine of every screen.
(function () {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const mod = (m) => "m-" + String(m || "none").toLowerCase();
  const hm = (s) => { const m = /(\d{1,2}):(\d{2})/.exec(String(s)); return m ? +m[1] + +m[2] / 60 : 0; };

  // One family of markers, all drawn on a 16 px grid with the same stroke.
  const P = {
    dot: '<circle cx="8" cy="8" r="4" fill="currentColor"/>',
    stop: '<circle cx="8" cy="8" r="5.5" fill="currentColor"/>',
    ring: '<circle cx="8" cy="8" r="4.25" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    here: '<circle cx="8" cy="8" r="6.5" fill="currentColor"/><circle cx="8" cy="8" r="2.5" fill="#fff"/>',
    now: '<path d="M3 2.5 13 8 3 13.5Z" fill="currentColor"/>',
    diamond: '<path d="M8 2 14 8 8 14 2 8Z" fill="currentColor"/>',
    diamondOpen: '<path d="M8 2.6 13.4 8 8 13.4 2.6 8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2.4 1.6"/>',
    check: '<circle cx="8" cy="8" r="7" fill="currentColor"/><path d="M4.7 8.3 7.1 10.6 11.4 5.7" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    pick: '<circle cx="8" cy="8" r="5.75" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2.5" fill="currentColor"/>',
    half: '<circle cx="8" cy="8" r="5.75" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 2.25A5.75 5.75 0 0 0 8 13.75Z" fill="currentColor"/>',
    loop: '<path d="M12.6 8A4.6 4.6 0 1 1 8 3.4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6.4 1 8.9 3.4 6.4 5.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    square: '<rect x="3.75" y="3.75" width="8.5" height="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    tick: '<path d="M8 2.5V13.5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    arrow: '<path d="M2.5 8H13M9.2 4.2 13 8 9.2 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  };
  const ic = (name, size = 16, cls = "") => `<svg class="tl-i ${cls}" width="${size}" height="${size}" viewBox="0 0 16 16" aria-hidden="true" focusable="false">${P[name]}</svg>`;

  // A quantity as ticks on a line, in fives.
  const ticks = (n, on) => {
    let x = 1, out = "";
    for (let i = 0; i < n; i++) { if (i && i % 5 === 0) x += 5; out += `<path d="M${x} 1V13" class="${i < on ? "on" : "off"}"/>`; x += 6; }
    const w = x - 4;
    return `<svg class="tl-ticks" width="${w}" height="14" viewBox="0 0 ${w} 14" aria-hidden="true" focusable="false">${out}</svg>`;
  };

  // A short strip of stops inside a card: done, here, ahead.
  const mini = (done, total, here) => {
    const s = 26, w = (total - 1) * s + 16;
    let out = `<path d="M8 8H${w - 8}" class="ln"/>`;
    if (done > 1 || here != null) out += `<path d="M8 8H${8 + ((here != null ? here : done - 1)) * s}" class="ln past"/>`;
    for (let i = 0; i < total; i++) {
      const cx = 8 + i * s;
      if (here === i) out += `<circle cx="${cx}" cy="8" r="6.5" class="here"/><circle cx="${cx}" cy="8" r="2.5" fill="#fff"/>`;
      else if (i < done) out += `<circle cx="${cx}" cy="8" r="4" class="done"/>`;
      else out += `<circle cx="${cx}" cy="8" r="4.25" class="ahead"/>`;
    }
    return `<svg class="tl-mini" width="${w}" height="16" viewBox="0 0 ${w} 16" aria-hidden="true" focusable="false">${out}</svg>`;
  };

  // The head of the strip on Today, Progress and Week: the five places as stops on one line.
  const head = (d, on) => `<header class="tl-head">
    <a class="tl-brand" href="#">${ic("now", 14)}<span>${esc(d.brand)}</span></a>
    <nav class="tl-menu" aria-label="Main">${d.menu.map((m) => `<a href="#" class="${m === on ? "on" : ""}"${m === on ? ' aria-current="page"' : ""}><span class="mk">${ic(m === on ? "stop" : "ring", 18)}</span><span>${esc(m)}</span></a>`).join("")}</nav>
    <div class="tl-track"></div>
  </header>`;

  // The head of a session: no menu, only where you are and the way out.
  const shead = (d, mode, title, extra, stop) => `<header class="tl-shead">
    <span class="tl-brand">${ic("now", 14)}<span>${esc(d.brand)}</span></span>
    <span class="tl-mode">${esc(mode)}</span>
    <h1 class="tl-stitle">${esc(title)}</h1>
    <div class="tl-sright">${extra || ""}<button type="button" class="tl-b quiet sm">${esc(stop)}</button></div>
  </header>`;

  // The session drawn as stops down a line. The current stop's line runs on into the open card.
  const rail = (stops) => {
    const hereY = (stops.find((s) => s.kind === "here") || stops[0]).y;
    const solid = stops.filter((s) => s.kind !== "loop");
    const last = solid[solid.length - 1].y, loop = stops.find((s) => s.kind === "loop");
    const h = Math.max(...stops.map((s) => s.y + (s.tail || 24)));
    return `<div class="tl-rail" style="height:${h}px">
      <i class="ln past" style="top:${stops[0].y}px;height:${hereY - stops[0].y}px"></i>
      <i class="ln ahead" style="top:${hereY}px;height:${last - hereY}px"></i>
      ${loop ? `<i class="ln back" style="top:${last}px;height:${loop.y - last}px"></i>` : ""}
      ${stops.map((s) => `<div class="st ${s.kind}" style="top:${s.y}px"><span class="mk">${ic(s.kind === "done" ? "dot" : s.kind === "here" ? "here" : s.kind === "loop" ? "loop" : "ring", s.kind === "here" ? 20 : 16)}</span>${s.label ? `<div class="lbl">${s.label}</div>` : ""}</div>`).join("\n")}
    </div>`;
  };

  const opt = (text, o = {}) => `<button type="button" class="tl-opt ${o.cls || ""}">${ic(o.icon || "ring", 18)}<span class="tx">${esc(text)}</span>${o.tag ? `<span class="tag">${esc(o.tag)}</span>` : ""}</button>`;

  const css = `
.tl{--paper:#F4F3EF;--surface:#FFFFFF;--tint:#FAF9F6;--ink:#1B1F24;--ink2:#4A515B;--ink3:#636A74;--line:#DAD7CE;--line2:#B3AFA4;--accent:#2346D9;--accent-d:#1B37B0;--accent-soft:#E9EDFC;--hci:#0B9C8F;--stat:#A83E96;--hist:#C9821A;
--fc:"Barlow Semi Condensed","Arial Narrow","Roboto Condensed","Helvetica Neue",Arial,sans-serif;
--fr:"Source Sans 3","Source Sans Pro","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
background:var(--paper);color:var(--ink);font:400 16px/1.45 var(--fr);min-height:100vh;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.tl *,.tl *::before,.tl *::after{box-sizing:border-box}
:where(.tl) :is(h1,h2,h3,p,ul,ol,dl,dd,dt,fieldset,legend){margin:0;padding:0;border:0;font-weight:inherit;font-size:inherit}
:where(.tl) :is(ul,ol){list-style:none}
:where(.tl) :is(a){color:inherit;text-decoration:none}
:where(.tl) :is(button){font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:left}
.tl-i{display:inline-block;flex:none}
.tl .num,.tl-t{font-family:var(--fc);font-variant-numeric:tabular-nums lining-nums}
.tl-lab{font:600 13px/1.2 var(--fc);letter-spacing:.09em;text-transform:uppercase;color:var(--ink2)}
.tl .m-hci{--m:var(--hci)}.tl .m-stat{--m:var(--stat)}.tl .m-hist{--m:var(--hist)}.tl .m-none{--m:var(--line2)}
.tl a:focus-visible,.tl button:focus-visible,.tl .is-focus{outline:2px solid var(--accent);outline-offset:2px}

/* quantities */
.tl-ticks{display:block}
.tl-ticks path{fill:none;stroke-width:2}
.tl-ticks .on{stroke:var(--ink)}
.tl-ticks .off{stroke:var(--line2)}
.tl-mini{display:block}
.tl-mini .ln{stroke:var(--line2);stroke-width:2;fill:none}
.tl-mini .ln.past{stroke:var(--ink3)}
.tl-mini .done{fill:var(--ink3)}
.tl-mini .ahead{fill:var(--surface);stroke:var(--ink3);stroke-width:1.5}
.tl-mini .here{fill:var(--accent)}

/* buttons */
.tl .tl-b{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:44px;padding:0 18px;border:1.5px solid transparent;border-radius:4px;font:600 17px/1 var(--fc);letter-spacing:.015em;white-space:nowrap;cursor:pointer}
.tl .tl-b.sm{height:40px;padding:0 14px;font-size:16px}
.tl .tl-b.go{background:var(--accent);border-color:var(--accent);color:#fff}
.tl .tl-b.go:hover,.tl .tl-b.go.is-hover{background:var(--accent-d);border-color:var(--accent-d)}
.tl .tl-b.line{background:var(--surface);border-color:var(--accent);color:var(--accent)}
.tl .tl-b.line:hover,.tl .tl-b.line.is-hover{background:var(--accent-soft)}
.tl .tl-b.quiet{border:1px solid var(--line2);color:var(--ink);font-weight:500}
.tl .tl-b.quiet:hover,.tl .tl-b.quiet.is-hover{border-color:var(--ink2);background:var(--surface)}
.tl .tl-b.text{padding:0 8px;color:var(--ink2);font-weight:500;text-decoration:underline;text-decoration-color:var(--line2);text-decoration-thickness:1px;text-underline-offset:5px}
.tl .tl-b.text:hover,.tl .tl-b.text.is-hover{color:var(--ink);text-decoration-color:var(--ink)}

/* head of the strip: the menu as stops on a line */
.tl-head{height:68px;display:flex;align-items:center;padding:0 40px}
.tl-brand{display:inline-flex;align-items:center;gap:7px;height:40px;font:700 21px/1 var(--fc);letter-spacing:.005em;color:var(--ink);margin-right:36px}
.tl-brand .tl-i{color:var(--accent)}
.tl-menu{display:flex;position:relative;height:56px}
.tl-menu::before{content:"";position:absolute;left:-16px;right:0;top:17px;height:2px;background:var(--line2)}
.tl-menu a{position:relative;width:100px;height:56px;display:flex;flex-direction:column;align-items:center;padding-top:9px;gap:6px;font:500 16px/1 var(--fc);color:var(--ink2)}
.tl-menu a .mk{display:block;width:18px;height:18px;border-radius:50%;background:var(--paper);color:var(--ink3)}
.tl-menu a .mk svg{display:block}
.tl-menu a:hover{color:var(--ink)}
.tl-menu a:hover .mk{color:var(--ink)}
.tl-menu a.on{color:var(--ink);font-weight:700}
.tl-menu a.on .mk{color:var(--ink)}
.tl-track{flex:1;align-self:flex-start;height:1px;margin-top:23.5px;background:repeating-linear-gradient(to right,var(--line2) 0 1px,transparent 1px 12px);height:5px;margin-top:21px;opacity:.9}

/* head of a session */
.tl-shead{height:60px;display:flex;align-items:center;padding:0 40px;border-bottom:1px solid var(--line)}
.tl-shead .tl-brand{margin-right:20px}
.tl-mode{font:600 13px/1 var(--fc);letter-spacing:.09em;text-transform:uppercase;color:var(--ink2);padding:0 12px 0 20px;border-left:1px solid var(--line2);height:24px;display:inline-flex;align-items:center}
.tl-stitle{font:600 21px/1.1 var(--fc);color:var(--ink)}
.tl-sright{margin-left:auto;display:flex;align-items:center;gap:20px}
.tl-sright .time{font:500 16px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);display:inline-flex;align-items:center;gap:6px}

/* ---------- Today ---------- */
.tl-page{padding:4px 40px 44px}
.tl-hello{height:52px;display:flex;align-items:center}
.tl-hello h1{font:600 30px/1.1 var(--fc);letter-spacing:-.005em}
.tl-cols{display:grid;grid-template-columns:824px 1fr;column-gap:48px}
.tl-dayhead{height:36px;display:flex;align-items:baseline;gap:12px}
.tl-dayhead .date{font:500 17px/1.2 var(--fc);color:var(--ink)}
.tl-day{position:relative;--sx:116px}
.tl-spine{position:absolute;left:calc(var(--sx) - 1px);width:2px;top:-8px;bottom:-12px;background:var(--line2)}
.tl-tk{position:absolute;left:calc(var(--sx) - 10px);width:9px;height:1px;background:var(--line2)}
.tl-tk.min{left:calc(var(--sx) - 6px);width:5px}
.tl-ev{position:absolute;left:calc(var(--sx) - 2px);right:0;border:1px solid var(--line);border-left:4px solid var(--m);border-radius:0 4px 4px 0;display:flex;align-items:center}
.tl-ev>.tl-t{position:absolute;right:100%;top:50%;transform:translateY(-50%);margin-right:20px;font:500 16px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);white-space:nowrap}
.tl-lec{padding:0 14px 0 20px;gap:20px}
.tl-lec .wh{font:600 18px/1.2 var(--fc);min-width:128px}
.tl-lec .st{display:inline-flex;align-items:center;gap:6px;font:500 16px/1 var(--fc);color:var(--ink2)}
.tl-lec .st .tl-i{color:var(--ink3)}
.tl-lec .tl-b{margin-left:auto}
.tl-hero{background:var(--surface);border-top:2px solid var(--accent);border-radius:0 0 4px 0;padding:0 22px 0 22px;gap:24px;box-shadow:0 1px 0 rgba(27,31,36,.04)}
.tl-hero::before{content:"";position:absolute;right:100%;top:-2px;width:calc(var(--sx) - 2px);height:2px;background:var(--accent)}
.tl-hero .ptr{position:absolute;right:100%;top:-10px;margin-right:calc(var(--sx) - 16px);color:var(--accent);display:block;height:16px}
.tl-hero .ptr svg{display:block}
.tl-hero .main{flex:1;min-width:0}
.tl-hero .eb{font:600 13px/1.2 var(--fc);letter-spacing:.09em;text-transform:uppercase;color:var(--ink2)}
.tl-hero h2{font:600 29px/1.15 var(--fc);letter-spacing:-.005em;margin:5px 0 6px}
.tl-hero .tx{font-size:16px;line-height:1.4;color:var(--ink2)}
.tl-hero .side{display:flex;flex-direction:column;align-items:flex-end;gap:14px}
.tl-hero .tl-b.go{height:48px;padding:0 22px;font-size:18px}
.tl-blk{background:var(--surface);padding:0 12px 0 22px;gap:16px}
.tl-blk .main{flex:1;min-width:0}
.tl-blk .l1{display:flex;align-items:center;gap:8px;font:600 13px/1.2 var(--fc);letter-spacing:.09em;text-transform:uppercase;color:var(--ink2)}
.tl-blk .l1 .tl-i{color:var(--ink)}
.tl-blk .l1 .wh{font:600 17px/1.2 var(--fc);letter-spacing:0;text-transform:none;color:var(--ink);margin-left:6px}
.tl-blk .step{font-size:16px;line-height:1.35;margin-top:3px;color:var(--ink)}
.tl-side{padding-top:36px}
.tl-sec{border-top:1px solid var(--line2);padding:14px 0 26px}
.tl-stat{display:grid;grid-template-columns:52px 1fr;column-gap:14px;align-items:center;margin-top:14px}
.tl-stat .n{font:600 34px/1 var(--fc);text-align:right;font-variant-numeric:tabular-nums}
.tl-stat .l{font-size:16px;line-height:1.3;color:var(--ink);display:block;margin-bottom:5px}
.tl-rev h2{font:600 20px/1.2 var(--fc);margin-top:12px}
.tl-rev .marks{display:flex;gap:5px;margin:10px 0 10px;color:var(--ink3)}
.tl-rev p{font-size:16px;color:var(--ink2)}
.tl-side .foot{border-top:1px solid var(--line2);padding-top:16px}

/* ---------- a session: the rail and the open stop ---------- */
.tl-ses{display:grid;grid-template-columns:230px 1fr;column-gap:30px;padding:22px 40px 48px}
.tl-rail{position:relative}
.tl-rail .ln{position:absolute;left:9px;width:2px;display:block}
.tl-rail .ln.past{background:var(--ink3)}
.tl-rail .ln.ahead{background:var(--line2)}
.tl-rail .ln.back{background:repeating-linear-gradient(to bottom,var(--line2) 0 4px,transparent 4px 8px)}
.tl-rail .st{position:absolute;left:0;width:100%}
.tl-rail .st .mk{position:absolute;left:2px;top:-7px;width:16px;height:16px;border-radius:50%;background:var(--paper);color:var(--ink3)}
.tl-rail .st .mk svg{display:block}
.tl-rail .st.here .mk{left:0;top:-9px;width:20px;height:20px;color:var(--accent);z-index:1}
.tl-rail .st.here::after{content:"";position:absolute;left:10px;top:0;width:250px;height:2px;background:var(--accent)}
.tl-rail .st.done::after{content:"";position:absolute;left:18px;top:0;width:242px;height:1px;background:var(--line2)}
.tl-rail .st.loop .mk{color:var(--ink2)}
.tl-rail .lbl{position:absolute;left:32px;top:-10px;width:186px;font:500 16px/1.3 var(--fc);color:var(--ink2);font-variant-numeric:tabular-nums}
.tl-rail .st.here .lbl{top:13px;color:var(--ink)}
.tl-rail .st.here .lbl b{font-weight:700;display:block;font-size:17px}
.tl-rail .st.loop .lbl{font:400 15px/1.4 var(--fr);top:-11px}
.tl-rowa{height:40px;display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}
.tl-rowa .goal{font-size:16px;color:var(--ink2)}
.tl-rowa .tools{display:flex;gap:8px}
.tl-rowa .tl-b.text{margin-left:-8px}
.tl-open{background:var(--surface);border:1px solid var(--line);border-top:2px solid var(--accent);border-radius:0 0 4px 4px;display:grid;grid-template-columns:1fr 372px}
.tl-pane{padding:26px 32px 28px}
.tl-pane+.tl-pane{border-left:1px solid var(--line);background:var(--tint);padding:26px 26px 28px}
.tl-read p{font:400 18px/1.62 var(--fr);max-width:35em;margin-bottom:15px;color:var(--ink)}
.tl-chips{display:flex;gap:8px;margin-top:22px}
.tl .tl-chip{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 12px;border:1px solid var(--line2);border-radius:3px;background:var(--surface);font:500 15px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink)}
.tl .tl-chip .tl-i{color:var(--ink3)}
.tl .tl-chip:hover{border-color:var(--ink2)}
.tl-say{display:flex;gap:8px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line)}
.tl-say .in{flex:1;height:44px;display:flex;align-items:center;padding:0 14px;border:1px solid var(--line2);border-radius:4px;background:var(--surface);font-size:16px;color:var(--ink3)}
.tl-checklab{display:flex;align-items:center;gap:8px;color:var(--accent)}
.tl-checklab .tl-lab{color:var(--accent)}
.tl-q{font:600 19px/1.38 var(--fr);margin:10px 0 16px}
.tl-opts{display:grid;gap:8px}
.tl .tl-opt{display:flex;align-items:flex-start;gap:12px;width:100%;min-height:48px;padding:12px 14px;border:1px solid var(--line2);border-radius:4px;background:var(--surface);font:400 16px/1.4 var(--fr);color:var(--ink)}
.tl .tl-opt .tl-i{margin-top:2px;color:var(--ink3)}
.tl .tl-opt .tx{flex:1}
.tl .tl-opt:hover,.tl .tl-opt.is-hover{border-color:var(--ink)}
.tl .tl-opt.sel{border-color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent)}
.tl .tl-opt.sel .tl-i{color:var(--accent)}
.tl .tl-opt.dk{border-style:dashed;background:transparent;color:var(--ink2)}
.tl .tl-opt .tag{font:600 13px/1.6 var(--fc);letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;margin-left:8px}
.tl .tl-opt.is-answer{border-color:var(--ink);box-shadow:inset 3px 0 0 var(--ink);cursor:default}
.tl .tl-opt.is-answer .tl-i{color:var(--ink)}
.tl .tl-opt.is-answer .tx{font-weight:600}
.tl .tl-opt.is-miss{border-style:dashed;border-color:var(--ink3);background:var(--tint);cursor:default}
.tl .tl-opt.is-miss .tl-i,.tl .tl-opt.is-miss .tag{color:var(--ink2)}
.tl .tl-opt.is-plain{border-color:var(--line);color:var(--ink2);cursor:default}
.tl .tl-opt.is-plain .tl-i{color:var(--line2)}

/* a question */
.tl-stem{font:600 23px/1.3 var(--fr);letter-spacing:-.005em}
.tl-src{display:flex;align-items:center;gap:7px;font:500 15px/1.2 var(--fc);color:var(--ink2);margin:8px 0 20px;font-variant-numeric:tabular-nums}
.tl-src .tl-i{color:var(--ink3)}
.tl-sure{margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
.tl-sure legend,.tl-sure .lg{font:600 17px/1.2 var(--fc);float:left;width:100%;margin-bottom:8px}
.tl-sure .scale{clear:both;display:grid;grid-template-columns:repeat(4,1fr);position:relative}
.tl-sure .scale::before{content:"";position:absolute;left:12.5%;right:12.5%;top:16px;height:2px;background:var(--line2)}
.tl-sure .scale::after{content:"";position:absolute;left:12.5%;right:12.5%;top:12px;height:10px;background:repeating-linear-gradient(to right,var(--line2) 0 1px,transparent 1px calc(100% / 12));opacity:.9}
.tl .tl-sure .s{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:56px;padding-top:7px;border-radius:4px;font:500 16px/1 var(--fc);color:var(--ink2);text-align:center}
.tl .tl-sure .s .mk{display:block;width:20px;height:20px;border-radius:50%;background:var(--surface);color:var(--ink3)}
.tl .tl-sure .s .mk svg{display:block}
.tl .tl-sure .s:hover,.tl .tl-sure .s.is-hover{color:var(--ink);background:var(--tint)}
.tl .tl-sure .s:hover .mk,.tl .tl-sure .s.is-hover .mk{color:var(--ink);background:var(--tint)}
.tl .tl-sure .s.on{color:var(--ink);font-weight:700}
.tl .tl-sure .s.on .mk{color:var(--accent)}
.tl-acts{display:flex;justify-content:space-between;align-items:center;margin-top:20px}
.tl-acts .tl-b.go{min-width:150px;height:48px;font-size:18px}
.tl-slide{border:1px solid var(--line2);border-radius:3px;background:var(--surface);padding:20px 20px 22px;margin-top:12px}
.tl-slide h2{font:600 21px/1.2 var(--fc);padding-bottom:12px;border-bottom:1px solid var(--line);margin-bottom:12px}
.tl-slide li{position:relative;padding-left:18px;font-size:16px;line-height:1.4;margin-top:9px}
.tl-slide li::before{content:"";position:absolute;left:0;top:11px;width:9px;height:1.5px;background:var(--ink3)}

/* feedback */
.tl-fbhead{margin-bottom:8px}
.tl-fb .tl-stem{margin-bottom:18px}
.tl-verdict{display:flex;align-items:center;gap:10px;font:600 26px/1.1 var(--fc)}
.tl-verdict .tl-i{color:var(--ink2)}
.tl-why{font-size:17px;line-height:1.5;margin:12px 0 16px}
.tl-next{margin-top:22px;padding-top:20px;border-top:1px solid var(--line)}
.tl-next .tl-b{width:100%;height:48px;font-size:18px}

/* ---------- Progress ---------- */
.tl-title{height:64px;display:flex;align-items:center;justify-content:space-between}
.tl-title h1{font:600 30px/1.1 var(--fc);letter-spacing:-.005em;margin-top:3px}
.tl-pgrid{display:grid;grid-template-columns:780px 1fr;column-gap:36px;row-gap:28px;align-items:start}
.tl-panel{background:var(--surface);border:1px solid var(--line);border-radius:4px}
.tl-score{padding:20px 28px 16px}
.tl-score .top{display:flex;align-items:flex-end;gap:28px}
.tl-score .big{font:600 68px/.86 var(--fc);font-variant-numeric:tabular-nums;letter-spacing:-.01em;margin-top:8px}
.tl-score .facts{padding-bottom:1px}
.tl-score .gain{font:600 19px/1.2 var(--fc);font-variant-numeric:tabular-nums}
.tl-score .sec{display:flex;align-items:center;gap:12px;margin-top:8px;font:500 16px/1.2 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2)}
.tl-ranges{margin-left:auto;align-self:flex-start;display:flex;position:relative}
.tl-ranges::before{content:"";position:absolute;left:34px;right:34px;top:13px;height:2px;background:var(--line2)}
.tl .tl-ranges button{position:relative;width:68px;height:48px;display:flex;flex-direction:column;align-items:center;gap:5px;padding-top:6px;font:500 15px/1 var(--fc);color:var(--ink2)}
.tl .tl-ranges .mk{display:block;width:16px;height:16px;border-radius:50%;background:var(--surface);color:var(--ink3)}
.tl .tl-ranges .mk svg{display:block}
.tl .tl-ranges button.on{color:var(--ink);font-weight:700}
.tl .tl-ranges button.on .mk{color:var(--ink)}
.tl .tl-ranges button:hover{color:var(--ink)}
.tl-chart{display:block;margin-top:10px}
.tl-chart .grid{stroke:var(--line);stroke-width:1;fill:none}
.tl-chart .axis{stroke:var(--line2);stroke-width:2;fill:none}
.tl-chart .pace{stroke:var(--ink3);stroke-width:1.5;stroke-dasharray:5 5;fill:none}
.tl-chart .pacetk{stroke:var(--ink3);stroke-width:1.5}
.tl-chart .you{stroke:var(--ink);stroke-width:2.5;fill:none;stroke-linejoin:round}
.tl-chart .pt{fill:var(--ink)}
.tl-chart .nowln{stroke:var(--accent);stroke-width:1.5}
.tl-chart .nowpt{fill:var(--accent)}
.tl-chart .dpast{fill:var(--ink3)}
.tl-chart .dahead{fill:var(--surface);stroke:var(--ink3);stroke-width:1.5}
.tl-chart text{font:500 15px var(--fc);fill:var(--ink2);text-anchor:middle}
.tl-chart text.on{font-weight:700;fill:var(--ink)}
.tl-legend{display:flex;gap:28px;align-items:center;font-size:15px;line-height:1.3;color:var(--ink2);padding-top:10px;border-top:1px solid var(--line);margin-top:6px}
.tl-legend span{display:inline-flex;align-items:center;gap:9px}
.tl-legend svg{flex:none}
.tl-att{padding:18px 22px 22px;border-left:4px solid var(--m);border-top:2px solid var(--accent);border-radius:0 0 4px 0}
.tl-att p{font-size:18px;line-height:1.4;margin:8px 0 16px}
.tl-att .tl-b{width:100%;height:48px;justify-content:space-between;font-size:18px}
.tl-from{padding:18px 22px 14px;margin-top:20px}
.tl-from .body{display:grid;grid-template-columns:124px 1fr;column-gap:22px;align-items:center;margin-top:12px}
.tl-from .row{border-left:4px solid var(--m);padding:1px 0 1px 12px;margin:10px 0}
.tl-from .nm{font:600 16px/1.25 var(--fc);display:block}
.tl-from .fig{display:flex;justify-content:space-between;align-items:baseline;font:500 16px/1.3 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2)}
.tl-from .fig b{font-weight:700;color:var(--ink);font-size:18px}
.tl-gaps{padding:18px 28px 8px}
.tl-gaps li{display:grid;grid-template-columns:230px 1fr auto;column-gap:20px;align-items:center;min-height:52px;border-top:1px solid var(--line);padding-left:14px;position:relative}
.tl-gaps li:first-child{margin-top:12px}
.tl-gaps li::before{content:"";position:absolute;left:0;top:13px;bottom:13px;width:4px;background:var(--m)}
.tl-gaps .idea{font:600 18px/1.2 var(--fc)}
.tl-gaps .where{font-size:16px;color:var(--ink2)}
.tl-gaps .count{font:500 16px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);display:inline-flex;align-items:center;gap:7px}
.tl-miles{grid-column:1 / -1;padding:4px 0 0}
.tl-miles ol{display:grid;grid-template-columns:repeat(6,1fr);position:relative;margin-top:14px}
.tl-miles li{position:relative;padding:30px 20px 0 0}
.tl-miles li::before{content:"";position:absolute;left:0;right:0;top:9px;height:2px;background:var(--ink3)}
.tl-miles li.todo::before{background:repeating-linear-gradient(to right,var(--line2) 0 5px,transparent 5px 10px)}
.tl-miles li .mk{position:absolute;left:0;top:0;width:20px;height:20px;border-radius:50%;background:var(--paper);color:var(--ink)}
.tl-miles li .mk svg{display:block}
.tl-miles li.todo .mk{color:var(--ink3)}
.tl-miles .nm{font:600 18px/1.2 var(--fc);display:block}
.tl-miles .wn{font:500 16px/1.3 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);display:block;margin-top:3px}
.tl-miles li.todo .wn{font:400 15px/1.35 var(--fr)}

/* ---------- Week ---------- */
.tl-wtitle{height:72px;display:flex;align-items:center;gap:28px}
.tl-wtitle h1{font:600 30px/1.1 var(--fc);letter-spacing:-.005em;margin-top:3px}
.tl-wtitle .range{font:500 17px/1.2 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);align-self:flex-end;padding-bottom:13px}
.tl-meter{margin-left:auto;display:flex;align-items:center;gap:12px;font:600 17px/1 var(--fc);font-variant-numeric:tabular-nums}
.tl-meter .tg{font-weight:500;color:var(--ink2)}
.tl-meter svg{display:block}
.tl-wk{display:grid;grid-template-columns:52px repeat(7,1fr)}
.tl-wk-head{position:relative;margin-top:4px}
.tl-wk-head::before{content:"";position:absolute;left:52px;right:0;bottom:9px;height:2px;background:var(--line2)}
.tl-wk-head .d{height:50px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;font:500 17px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2);padding-top:6px;position:relative}
.tl-wk-head .d .mk{display:block;width:20px;height:20px;border-radius:50%;background:var(--paper);color:var(--ink3);padding:2px}
.tl-wk-head .d .mk svg{display:block}
.tl-wk-head .d.on{color:var(--ink);font-weight:700}
.tl-wk-head .d.on .mk{color:var(--accent);padding:0}
.tl-wk-body{position:relative;margin-top:6px}
.tl-wk-body .hrs{position:relative}
.tl-wk-body .hrs span{position:absolute;right:10px;transform:translateY(-50%);font:500 13px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink3)}
.tl-wk-body .col{position:relative;border-left:1px solid var(--line);background-image:linear-gradient(to bottom,var(--line) 1px,transparent 1px);background-size:100% 60px}
.tl-wk-body .col:last-child{border-right:1px solid var(--line)}
.tl-wk-body .col.on{background-color:rgba(255,255,255,.75)}
.tl-wk-body .col::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--line)}
.tl-it{position:absolute;left:5px;right:5px;padding:5px 8px 0 9px;border-left:3px solid var(--m);font-family:var(--fc)}
.tl-it .r1{display:flex;justify-content:space-between;align-items:center;font:500 14px/1.2 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2)}
.tl-it .nt{display:inline-flex;align-items:center;gap:4px}
.tl-it .wh{display:flex;align-items:center;gap:5px;font:600 16px/1.25 var(--fc);color:var(--ink);margin-top:1px;white-space:nowrap}
.tl-it.lec{border-top:1px solid var(--line2);border-bottom:1px solid var(--line2);border-right:1px solid var(--line2);background:var(--paper);border-radius:0 3px 3px 0}
.tl-wk-body .col.on .tl-it.lec{background:var(--tint)}
.tl-it.com{border:1px solid var(--line2);border-left:3px solid var(--ink3);border-radius:0 3px 3px 0;background:repeating-linear-gradient(135deg,transparent 0 7px,var(--line) 7px 8px),var(--paper);padding:0}
.tl-it.com .in{display:inline-block;background:var(--paper);padding:5px 10px 6px 9px;border-radius:0 0 3px 0}
.tl-it.blk{background:var(--surface);border:1px solid var(--ink3);border-left:3px solid var(--m);border-radius:0 3px 3px 0;cursor:grab;padding-top:4px}
.tl-it.blk.today{border-color:var(--accent);border-left-color:var(--m);box-shadow:0 0 0 1px var(--accent)}
.tl-it.blk.today .wh .tl-i{color:var(--accent)}
.tl-it.blk.proposed{border-style:dashed;border-left-style:solid;background:transparent}
.tl-it.blk .below{position:absolute;left:-3px;right:-2px;top:100%;margin-top:6px;font:400 14px/1.3 var(--fr);color:var(--ink2);display:block}
.tl-nowln{position:absolute;left:0;right:0;height:2px;background:var(--accent);z-index:2}
.tl-nowln svg{position:absolute;left:-13px;top:-7px;color:var(--accent);display:block}
.tl-hint{display:flex;align-items:center;gap:9px;margin:18px 0 0 52px;font-size:16px;color:var(--ink2)}
.tl-hint .tl-i{color:var(--ink3)}

/* ---------- phone ---------- */
.tl-ph{font-size:17px;padding-bottom:24px}
.tl-ph .top{height:56px;display:flex;align-items:center;padding:0 16px 0 14px}
.tl-ph .tl-brand{font-size:21px;margin:0}
.tl-ph .day{position:relative;padding:4px 16px 0 22px}
.tl-ph .day::before{content:"";position:absolute;left:23px;top:0;bottom:0;width:2px;background:var(--line2)}
.tl-ph .lec{position:relative;height:50px;display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-left:4px solid var(--m);border-radius:0 4px 4px 0;padding:0 14px;background:var(--paper);font:600 18px/1.2 var(--fc);font-variant-numeric:tabular-nums}
.tl-ph .card{position:relative;margin-top:18px;background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--m);border-top:2px solid var(--accent);border-radius:0 0 4px 0;padding:16px 14px 16px 16px}
.tl-ph .card::before{content:"";position:absolute;right:100%;top:-2px;width:26px;height:2px;background:var(--accent)}
.tl-ph .card .ptr{position:absolute;left:-24px;top:-9px;color:var(--accent);background:var(--paper);display:block;height:14px}
.tl-ph .card .ptr svg{display:block}
.tl-ph .cnt{display:flex;align-items:center;justify-content:space-between;font:600 16px/1 var(--fc);font-variant-numeric:tabular-nums;color:var(--ink2)}
.tl-ph .stem{font:600 22px/1.3 var(--fr);letter-spacing:-.005em;margin:14px 0 16px}
.tl-ph .tl-opts{gap:10px}
.tl-ph .tl-opt{min-height:56px;padding:15px 14px;font-size:17px;line-height:1.35}
.tl-ph .free{position:relative;margin-left:-1px;padding:20px 0 20px 22px;font-size:16px;line-height:1.4;color:var(--ink2)}
.tl-ph .free::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:repeating-linear-gradient(to bottom,var(--accent) 0 4px,var(--paper) 4px 8px)}
.tl-ph .end{position:relative;height:0}
.tl-ph .end .mk{position:absolute;left:-7px;top:-8px;width:16px;height:16px;border-radius:50%;background:var(--paper);color:var(--ink3)}
.tl-ph .end .mk svg{display:block}
.tl-ph .foot{padding:22px 16px 0 44px}
.tl-ph .foot .tl-b{height:48px;width:100%;font-size:18px}

/* ---------- style sheet ---------- */
.tl-ss{padding:28px 40px 40px;min-height:0}
.tl-ss>h1{font:700 30px/1.1 var(--fc)}
.tl-ss>.idea{font-size:17px;color:var(--ink2);margin-top:4px}
.tl-ss .g{display:grid;grid-template-columns:420px 1fr;column-gap:44px;margin-top:22px}
.tl-ss section{border-top:2px solid var(--ink);padding-top:10px;margin-bottom:24px}
.tl-ss section>h2{font:600 13px/1.2 var(--fc);letter-spacing:.09em;text-transform:uppercase;margin-bottom:12px}
.tl-ss .ty{display:grid;grid-template-columns:1fr auto;align-items:baseline;column-gap:12px;row-gap:6px}
.tl-ss .ty .m{font:500 13px/1.2 var(--fc);color:var(--ink2);white-space:nowrap;font-variant-numeric:tabular-nums}
.tl-ss .fam{font:500 14px/1.2 var(--fc);color:var(--ink2);grid-column:1 / -1;margin-top:8px}
.tl-ss .sw{display:grid;grid-template-columns:repeat(4,1fr);gap:12px 16px}
.tl-ss .sw div{display:grid;grid-template-columns:36px 1fr;column-gap:10px;align-items:center}
.tl-ss .sw i{display:block;width:36px;height:36px;border:1px solid var(--line2);border-radius:3px}
.tl-ss .sw b{display:block;font:600 15px/1.2 var(--fc);font-variant-numeric:tabular-nums}
.tl-ss .sw span{display:block;font:500 13px/1.25 var(--fc);color:var(--ink2)}
.tl-ss .ics{display:grid;grid-template-columns:repeat(7,1fr);gap:12px 8px}
.tl-ss .ics div{display:flex;align-items:center;gap:8px;font:500 14px/1.2 var(--fc);color:var(--ink2)}
.tl-ss .ics svg{color:var(--ink)}
.tl-ss .ics .a svg{color:var(--accent)}
.tl-ss .row{display:flex;flex-wrap:wrap;gap:12px 14px;align-items:center}
.tl-ss .cap{font:500 13px/1.2 var(--fc);color:var(--ink2);margin:12px 0 6px}
.tl-ss .cap:first-of-type{margin-top:0}
.tl-ss .two{display:grid;grid-template-columns:1fr 1fr;gap:8px 12px}
.tl-ss .surf{background:var(--surface);border:1px solid var(--line);border-radius:4px;padding:14px 16px}
.tl-ss .marks{display:grid;grid-template-columns:repeat(4,1fr);gap:10px 12px}
.tl-ss .marks div{display:flex;align-items:center;gap:8px;font:500 15px/1.2 var(--fc)}
.tl-ss .tl-menu{margin-left:16px}
.tl-ss .tl-sure{margin:0;padding:0;border:0}
.tl-ss .strip{position:relative;height:150px;--sx:116px}
`;

  LOOK.designs.push({
    id: "timeline",
    name: "Timeline",
    idea: "Your day is the interface: a strip of time is the spine of every screen, and everything hangs off it at the moment it belongs to.",
    fonts: ["https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&family=Source+Sans+3:wght@400;600&display=swap"],
    axes: {
      composition: "A strip of time is the spine of every screen: the day down the left of Today, the seven days across Week and Progress, and the session's own stops down the left of Learn and Practise. The thing to do now hangs off the strip on the accent line, so the eye lands where the pointer is.",
      menu: "There is no bar or rail: the five places are five stops on one thin line at the head of the strip, with the place you are in drawn as the filled stop. It is the same mark the rest of the screen uses, so the menu reads as part of the timetable.",
      density: "Medium to high, kept in order by the axis: times sit in one column, everything starts on the spine, and small labels (13 to 16 px) only name things. What is read stays at 16 px or more, and the Learn text is 18 px in a narrow column.",
      numbers: "As time and quantity along a line: sessions and ideas as ticks in fives, the score as a line carried by the week's days, study time as a ring by module and the weekly target as a ruler. Figures are tabular and aligned in columns, and no number is shown as a grade.",
      shape: "Compact and thin: 1 px hairlines, 3 to 4 px corners, fine tick marks and a module's colour only ever as a 4 px edge. It should feel like a printed timetable, precise but light.",
      type: "Barlow Semi Condensed, a narrow sans with aligned figures, for times, labels, titles and buttons, and Source Sans 3 for anything read as a sentence. The narrow face keeps the time column tidy; the wider one keeps reading comfortable.",
      colour: "Off-white paper, white for what is open, grey ink, and one cobalt accent used only for now and the next action. Teal, plum and amber mark HCI, STAT and HIST as edges; right and wrong picks are told apart by a mark, a word and a solid or dashed edge in ink, never by red.",
      icons: "One family of small markers that sit on the line: a dot for a stop passed, a ring for one ahead, a pointer for now, a diamond for a study block, a tick-in-dot for done. No pictures, so a mark always means a place in time.",
      motion: "The now pointer slides slowly down the day and the accent line moves with it. Finishing a stop slides the open card along the strip to the next one, and a moved study block glides to its new time; nothing blinks or counts down.",
    },
    css,
    screens: {
      today(d) {
        const t = d.today, H = 84, h0 = 9, h1 = 16, now = 13.25;
        const y = (h) => Math.round((h - h0) * H);
        let tk = "";
        for (let h = h0; h <= h1; h += 0.5) tk += `<i class="tl-tk${h % 1 ? " min" : ""}" style="top:${y(h)}px"></i>`;
        const lecs = t.lectures.map((l) => {
          const [a, b] = l.time.split("–");
          return `<div class="tl-ev tl-lec ${mod(l._module)}" style="top:${y(hm(a))}px;height:${y(hm(b)) - y(hm(a))}px"><span class="tl-t">${esc(l.time)}</span><span class="wh">${esc(l.what)}</span><span class="st">${ic("dot", 14)}${esc(l.state)}</span><button type="button" class="tl-b quiet sm">${esc(l.action)}</button></div>`;
        }).join("");
        const bs = hm(t.block.when), dur = +((/(\d+)\s*min/.exec(t.block.what) || [0, 50])[1]) / 60;
        const stat = (s) => `<div class="tl-stat"><span class="n">${esc(s.n)}</span><div><span class="l">${esc(s.label)}</span>${ticks(+s.n, +s.n)}</div></div>`;
        const nRev = parseInt(t.revisit.title, 10) || 0;
        return `<div class="tl tl-today">${head(d, "Today")}
<main class="tl-page">
  <div class="tl-hello"><h1>${esc(t.greeting)}</h1></div>
  <div class="tl-cols">
    <section aria-label="Your day">
      <div class="tl-dayhead"><span class="tl-lab">${esc(t.lecturesTitle)}</span><span class="date">${esc(t.date)}</span></div>
      <div class="tl-day" style="height:${y(h1)}px">
        <i class="tl-spine"></i>${tk}
        ${lecs}
        <article class="tl-ev tl-hero ${mod(t.hero._module)}" style="top:${y(now)}px;height:${y(bs) - y(now) - 14}px">
          <span class="ptr">${ic("now", 16)}</span>
          <div class="main"><p class="eb">${esc(t.hero.eyebrow)}</p><h2>${esc(t.hero.title)}</h2><p class="tx">${esc(t.hero.text)}</p></div>
          <div class="side">${mini(t.hero._done, t.hero._total, null)}<a href="#" class="tl-b go">${esc(t.hero.cta)}${ic("arrow", 16)}</a></div>
        </article>
        <article class="tl-ev tl-blk ${mod(t.block._module)}" style="top:${y(bs)}px;height:${Math.round(dur * H)}px">
          <span class="tl-t">${esc(t.block.when)}</span>
          <div class="main"><p class="l1">${ic("diamond", 12)}<span>${esc(t.block.title)}</span><span class="wh">${esc(t.block.what)}</span></p><p class="step">${esc(t.block.step)}</p></div>
          <a href="#" class="tl-b text sm">${esc(t.block.alt)}</a><a href="#" class="tl-b line sm">${esc(t.block.cta)}</a>
        </article>
      </div>
    </section>
    <aside class="tl-side">
      <section class="tl-sec"><h2 class="tl-lab">${esc(t.week.title)}</h2>${t.week.stats.map(stat).join("")}</section>
      <section class="tl-sec tl-rev"><h2>${esc(t.revisit.title)}</h2><div class="marks">${Array.from({ length: nRev }, () => ic("ring", 14)).join("")}</div><p>${esc(t.revisit.text)}</p></section>
      <div class="foot"><a href="#" class="tl-b quiet sm">${esc(t.appearance)}</a></div>
    </aside>
  </div>
</main></div>`;
      },

      learn(d) {
        const L = d.learn, m = /^(.*?) · (.*?) → (.*)$/.exec(L.where);
        const stops = m ? [
          { y: 20, kind: "done" },
          { y: 64, kind: "here", label: `<b>${esc(m[1])}</b><span> · </span><span>${esc(m[2])}</span>` },
          { y: 166, kind: "ahead", label: `<span> → ${esc(m[3])}</span>` },
          { y: 232, kind: "ahead", tail: 12 },
        ] : [{ y: 20, kind: "done" }, { y: 64, kind: "here", label: esc(L.where) }];
        return `<div class="tl tl-learn">${shead(d, L.mode, L.title, `<span class="time">${ic("tick", 14)}${esc(L.time)}</span>`, L.stop)}
<div class="tl-ses">
  ${rail(stops)}
  <main>
    <div class="tl-rowa"><button type="button" class="tl-b text sm">${esc(L.earlier)}</button><div class="tools">${L.tools.map((x) => `<button type="button" class="tl-b quiet sm">${esc(x)}</button>`).join("")}</div></div>
    <article class="tl-open">
      <div class="tl-pane tl-read">
        ${L.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        <div class="tl-chips">${L.chips.map((c) => `<button type="button" class="tl-chip">${ic("square", 14)}${esc(c)}</button>`).join("")}</div>
        <div class="tl-say"><div class="in">${esc(L.say)}</div><button type="button" class="tl-b quiet">${esc(L.send)}</button></div>
      </div>
      <div class="tl-pane">
        <div class="tl-checklab">${ic("diamond", 12)}<h2 class="tl-lab">${esc(L.label)}</h2></div>
        <p class="tl-q">${esc(L.question)}</p>
        <div class="tl-opts">${L.options.map((o) => opt(o)).join("")}${opt(L.dontKnow, { cls: "dk", icon: "ring" })}</div>
      </div>
    </article>
  </main>
</div></div>`;
      },

      question(d) {
        const q = d.question;
        const stops = [];
        for (let i = 1; i <= q._of; i++) stops.push(i < q._n ? { y: 20, kind: "done" } : i === q._n ? { y: 64, kind: "here", label: `<b>${esc(q.count)}</b>` } : { y: 64 + 68 + (i - q._n - 1) * 48, kind: "ahead" });
        return `<div class="tl tl-question">${shead(d, q.mode, q.title, "", q.stop)}
<div class="tl-ses">
  ${rail(stops)}
  <main>
    <div class="tl-rowa"><p class="goal">${esc(q.goal)}</p></div>
    <article class="tl-open">
      <div class="tl-pane">
        <h2 class="tl-stem">${esc(q.stem)}</h2>
        <p class="tl-src">${ic("square", 14)}${esc(q.source)}</p>
        <div class="tl-opts">${q.options.map((o) => opt(o)).join("")}${opt(q.dontKnow, { cls: "dk" })}</div>
        <fieldset class="tl-sure"><legend>${esc(q.sure)}</legend><div class="scale">${q.sureOptions.map((s) => `<button type="button" class="s"><span class="mk">${ic("ring", 20)}</span><span>${esc(s)}</span></button>`).join("")}</div></fieldset>
        <div class="tl-acts"><button type="button" class="tl-b quiet">${esc(q.showMe)}</button><button type="button" class="tl-b go">${esc(q.check)}${ic("arrow", 16)}</button></div>
      </div>
      <aside class="tl-pane">
        <p class="tl-lab num">${esc(q.slide.page)}</p>
        <div class="tl-slide"><h2>${esc(q.slide.title)}</h2><ul>${q.slide.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>
      </aside>
    </article>
  </main>
</div></div>`;
      },

      feedback(d) {
        const f = d.feedback;
        const stops = [];
        let lastY = 64;
        for (let i = 1; i <= f._of; i++) {
          if (i < f._n) stops.push({ y: 20, kind: "done" });
          else if (i === f._n) stops.push({ y: 64, kind: "here", label: `<b>${esc(f.count)}</b>` });
          else { lastY = 64 + 68 + (i - f._n - 1) * 48; stops.push({ y: lastY, kind: "ahead" }); }
        }
        stops.push({ y: lastY + 72, kind: "loop", label: esc(f.later), tail: 80 });
        const st = { answer: { cls: "is-answer", icon: "check" }, miss: { cls: "is-miss", icon: "pick" }, plain: { cls: "is-plain", icon: "ring" } };
        return `<div class="tl tl-feedback">${shead(d, f.mode, f.title, "", f.stop)}
<div class="tl-ses">
  ${rail(stops)}
  <main>
    <div class="tl-rowa"></div>
    <article class="tl-open tl-fb">
      <div class="tl-pane">
        <p class="tl-lab tl-fbhead">${esc(f.head)}</p>
        <h2 class="tl-stem">${esc(f.stem)}</h2>
        <div class="tl-opts">${f.options.map((o) => opt(o.text, { cls: st[o._state].cls, icon: st[o._state].icon, tag: o.tag })).join("")}</div>
      </div>
      <div class="tl-pane">
        <p class="tl-verdict">${ic("half", 22)}<span>${esc(f.verdict)}</span></p>
        <p class="tl-why">${esc(f.why)}</p>
        <button type="button" class="tl-chip">${ic("square", 14)}${esc(f.chip)}</button>
        <div class="tl-next"><button type="button" class="tl-b go">${esc(f.next)}${ic("arrow", 16)}</button></div>
      </div>
    </article>
  </main>
</div></div>`;
      },

      progress(d) {
        const p = d.progress;
        const W = 722, Hh = 226, L = 40, R = 40, T = 12, B = 44, base = Hh - B;
        const xs = (i) => Math.round((L + (i * (W - L - R)) / (p.days.length - 1)) * 10) / 10;
        const lo = 125, hi = 305;
        const ys = (v) => Math.round((T + ((hi - v) / (hi - lo)) * (base - T - 16)) * 10) / 10;
        const today = p._you.reduce((a, v, i) => (v != null ? i : a), 0);
        const pts = p._you.map((v, i) => (v == null ? null : [xs(i), ys(v)])).filter(Boolean);
        let g = "";
        p.days.forEach((day, i) => {
          g += `<path d="M${xs(i)} ${T}V${base}" class="grid"/>`;
        });
        g += `<path d="M${xs(0)} ${ys(p._pace[0])}L${xs(6)} ${ys(p._pace[6])}" class="pace"/>`;
        p._pace.forEach((v, i) => { g += `<path d="M${xs(i) - 4} ${ys(v)}h8" class="pacetk"/>`; });
        g += `<path d="M${xs(today)} ${ys(p._you[today])}V${base}" class="nowln"/>`;
        g += `<path d="M${pts.map((q) => q.join(" ")).join("L")}" class="you"/>`;
        pts.forEach((q, i) => { g += i === today ? `<circle cx="${q[0]}" cy="${q[1]}" r="7" class="nowpt"/><circle cx="${q[0]}" cy="${q[1]}" r="2.7" fill="#fff"/>` : `<circle cx="${q[0]}" cy="${q[1]}" r="4" class="pt"/>`; });
        g += `<path d="M${L - 24} ${base}H${W - R + 24}" class="axis"/>`;
        p.days.forEach((day, i) => {
          g += i < today ? `<circle cx="${xs(i)}" cy="${base}" r="4" class="dpast"/>` : i === today ? `<path d="M${xs(i) - 6} ${base + 13}L${xs(i)} ${base + 3}L${xs(i) + 6} ${base + 13}Z" class="nowpt"/>` : `<circle cx="${xs(i)}" cy="${base}" r="4.25" class="dahead"/>`;
          g += `<text x="${xs(i)}" y="${base + (i === today ? 33 : 28)}" class="${i === today ? "on" : ""}">${esc(day)}</text>`;
        });
        const sec = /(\d+)\D+(\d+)/.exec(p.secured) || [0, 0, 0];
        // the ring: this week's study time by module
        const r = 50, C = 2 * Math.PI * r;
        let acc = 0;
        const arcs = p.from.map((f) => { const len = f._share * C; const a = `<circle cx="62" cy="62" r="${r}" fill="none" stroke="var(--${String(f._module).toLowerCase()})" stroke-width="11" stroke-dasharray="${Math.max(len - 3, 1).toFixed(1)} ${(C - Math.max(len - 3, 1)).toFixed(1)}" stroke-dashoffset="${(-acc).toFixed(1)}" transform="rotate(-90 62 62)"/>`; acc += len; return a; }).join("");
        let rt = "";
        for (let i = 0; i < 24; i++) { const a = (i / 24) * 2 * Math.PI, r1 = 38, r2 = i % 6 === 0 ? 32 : 35; rt += `<path d="M${(62 + Math.sin(a) * r1).toFixed(1)} ${(62 - Math.cos(a) * r1).toFixed(1)}L${(62 + Math.sin(a) * r2).toFixed(1)} ${(62 - Math.cos(a) * r2).toFixed(1)}" stroke="var(--line2)" stroke-width="1"/>`; }
        const dnum = (s) => { const mm = /^(\d+)\s/.exec(s); return mm ? +mm[1] : 99; };
        const ms = [...p.milestones].sort((a, b) => (b._earned - a._earned) || (dnum(a.when) - dnum(b.when)));
        return `<div class="tl tl-progress">${head(d, "Progress")}
<main class="tl-page">
  <div class="tl-title"><div><p class="tl-lab">${esc(p.eyebrow)}</p><h1>${esc(p.title)}</h1></div></div>
  <div class="tl-pgrid">
    <div>
      <section class="tl-panel tl-score">
        <div class="top">
          <div><h2 class="tl-lab">${esc(p.scoreLabel)}</h2><p class="big">${esc(p.score)}</p></div>
          <div class="facts"><p class="gain">${esc(p.gain)}</p><p class="sec">${ticks(+sec[2], +sec[1])}<span>${esc(p.secured)}</span></p></div>
          <div class="tl-ranges" role="group">${p.ranges.map((x, i) => `<button type="button" class="${i === 0 ? "on" : ""}"${i === 0 ? ' aria-pressed="true"' : ""}><span class="mk">${ic(i === 0 ? "stop" : "ring", 16)}</span><span>${esc(x)}</span></button>`).join("")}</div>
        </div>
        <svg class="tl-chart" width="${W}" height="${Hh}" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Your score across the week">${g}</svg>
        <div class="tl-legend"><span><svg width="34" height="12" viewBox="0 0 34 12" aria-hidden="true"><path d="M1 6H33" stroke="var(--ink)" stroke-width="2.5"/><circle cx="17" cy="6" r="4" fill="var(--ink)"/></svg>${esc(p.legendYou)}</span><span><svg width="34" height="12" viewBox="0 0 34 12" aria-hidden="true"><path d="M1 6H33" stroke="var(--ink3)" stroke-width="1.5" stroke-dasharray="5 5"/></svg>${esc(p.legendPace)}</span></div>
      </section>
      <section class="tl-panel tl-gaps" style="margin-top:20px"><h2 class="tl-lab">${esc(p.gapsTitle)}</h2><ul>${p.gaps.map((x) => `<li class="${mod(x._module)}"><span class="idea">${esc(x.idea)}</span><span class="where">${esc(x.where)}</span><span class="count">${ic("loop", 14)}${esc(x.count)}</span></li>`).join("")}</ul></section>
    </div>
    <div>
      <section class="tl-panel tl-att ${mod("HIST")}"><h2 class="tl-lab">${esc(p.attentionTitle)}</h2><p>${esc(p.attention.text)}</p><a href="#" class="tl-b go"><span>${esc(p.attention.cta)}</span>${ic("arrow", 16)}</a></section>
      <section class="tl-panel tl-from"><h2 class="tl-lab">${esc(p.fromTitle)}</h2>
        <div class="body"><svg width="124" height="124" viewBox="0 0 124 124" aria-hidden="true" focusable="false">${rt}${arcs}</svg>
        <div>${p.from.map((f) => `<div class="row ${mod(f._module)}"><span class="nm">${esc(f.name)}</span><span class="fig"><span>${esc(f.time)}</span><b>${esc(f.points)}</b></span></div>`).join("")}</div></div>
      </section>
    </div>
    <section class="tl-miles"><h2 class="tl-lab">${esc(p.milestonesTitle)}</h2><ol>${ms.map((x) => `<li class="${x._earned ? "got" : "todo"}"><span class="mk">${ic(x._earned ? "check" : "ring", 20)}</span><span class="nm">${esc(x.name)}</span><span class="wn">${esc(x.when)}</span></li>`).join("")}</ol></section>
  </div>
</main></div>`;
      },

      week(d) {
        const w = d.week, h0 = 9, h1 = 17, PH = 60, now = 13.25;
        const y = (h) => Math.round((h - h0) * PH);
        const kept = /(\d+)\s*h\s*(\d+)?/.exec(w.kept) || [0, 0, 0], tgt = /(\d+)\s*h/.exec(w.target) || [0, 5];
        const frac = Math.min(1, (+kept[1] + (+kept[2] || 0) / 60) / +tgt[1]);
        const MW = 200;
        let mt = `<path d="M4 10H${MW - 4}" stroke="var(--line2)" stroke-width="2"/>`;
        for (let i = 0; i <= +tgt[1]; i++) { const x = 4 + (i * (MW - 8)) / +tgt[1]; mt += `<path d="M${x} 5V15" stroke="var(--line2)" stroke-width="1"/>`; }
        const kx = 4 + frac * (MW - 8);
        mt += `<path d="M4 10H${kx}" stroke="var(--ink)" stroke-width="4"/><circle cx="${kx}" cy="10" r="5" fill="var(--ink)"/><circle cx="${MW - 6}" cy="10" r="4.5" fill="var(--paper)" stroke="var(--ink3)" stroke-width="1.5"/>`;
        let hrs = "";
        for (let h = h0; h <= h1; h++) hrs += `<span style="top:${y(h)}px">${String(h).padStart(2, "0")}:00</span>`;
        const marks = { done: "check", today: "diamond", proposed: "diamondOpen", accepted: "diamond" };
        const cols = w.days.map((day, i) => {
          const lec = w.lectures.filter((x) => x._day === i).map((x) => `<div class="tl-it lec ${mod(x._module)}" style="top:${y(x._start) + 1}px;height:${y(x._end) - y(x._start) - 1}px"><div class="r1"><span>${esc(x.time)}</span></div><div class="wh">${esc(x.what)}</div></div>`).join("");
          const com = w.commitments.filter((x) => x._day === i).map((x) => `<div class="tl-it com" style="top:${y(x._start) + 1}px;height:${y(x._end) - y(x._start) - 1}px"><div class="in"><div class="r1"><span>${esc(x.time)}</span></div><div class="wh">${ic("square", 12)}${esc(x.what)}</div></div></div>`).join("");
          const blk = w.blocks.filter((x) => x._day === i).map((x) => {
            const long = x._status === "proposed";
            return `<div class="tl-it blk ${x._status} ${mod(x._module)}" style="top:${y(x._start) + 1}px;height:${Math.round((50 / 60) * PH) - 1}px"><div class="r1"><span>${esc(x.time)}</span>${long ? "" : `<span class="nt">${x._status === "done" ? ic("check", 12) : ""}${esc(x.note)}</span>`}</div><div class="wh">${ic(x._status === "done" ? "diamond" : marks[x._status], 12)}${esc(x.what)}</div>${long ? `<span class="below">${esc(x.note)}</span>` : ""}</div>`;
          }).join("");
          return `<div class="col${i === w._today ? " on" : ""}" style="height:${y(h1)}px">${lec}${com}${blk}${i === w._today ? `<div class="tl-nowln" style="top:${y(now) - 1}px">${ic("now", 14)}</div>` : ""}</div>`;
        }).join("");
        return `<div class="tl tl-week">${head(d, "Week")}
<main class="tl-page">
  <div class="tl-wtitle"><div><p class="tl-lab">${esc(w.eyebrow)}</p><h1>${esc(w.title)}</h1></div><p class="range">${esc(w.range)}</p>
    <div class="tl-meter"><span>${esc(w.kept)}</span><svg width="${MW}" height="20" viewBox="0 0 ${MW} 20" aria-hidden="true" focusable="false">${mt}</svg><span class="tg">${esc(w.target)}</span></div>
    <a href="#" class="tl-b go">${esc(w.plan)}${ic("arrow", 16)}</a>
  </div>
  <div class="tl-wk tl-wk-head"><div></div>${w.days.map((day, i) => `<div class="d${i === w._today ? " on" : ""}"><span>${esc(day)}</span><span class="mk">${ic(i < w._today ? "dot" : i === w._today ? "here" : "ring", i === w._today ? 20 : 16)}</span></div>`).join("")}</div>
  <div class="tl-wk tl-wk-body"><div class="hrs">${hrs}</div>${cols}</div>
  <p class="tl-hint">${ic("diamond", 12)}${esc(w.hint)}</p>
</main></div>`;
      },

      phone(d) {
        const p = d.phone;
        return `<div class="tl tl-ph">
<header class="top"><span class="tl-brand">${ic("now", 14)}<span>${esc(p.brand)}</span></span></header>
<main class="day">
  <div class="lec m-hci">${ic("dot", 14)}<span>${esc(p.where)}</span></div>
  <article class="card m-hci">
    <span class="ptr">${ic("now", 14)}</span>
    <div class="cnt"><span>${esc(p.count)}</span>${mini(p._n - 1, p._of, p._n - 1)}</div>
    <h1 class="stem">${esc(p.stem)}</h1>
    <div class="tl-opts">${p.options.map((o) => opt(o)).join("")}</div>
  </article>
  <p class="free">${esc(p.why)}</p>
  <div class="end"><span class="mk">${ic("ring", 16)}</span></div>
</main>
<div class="foot"><button type="button" class="tl-b quiet">${esc(p.later)}</button></div>
</div>`;
      },
    },

    styleSheet(d) {
      const sw = (hex, name, use) => `<div><i style="background:${hex}"></i><p><b>${name} ${hex}</b><span>${use}</span></p></div>`;
      const icn = (n, label, a) => `<div class="${a ? "a" : ""}">${ic(n, 20)}<span>${label}</span></div>`;
      return `<div class="tl tl-ss">
<h1>Timeline</h1><p class="idea">${esc(this.idea)}</p>
<div class="g">
  <div>
    <section><h2>Type</h2>
      <div class="ty">
        <p class="fam">Barlow Semi Condensed: times, labels, titles, buttons (figures aligned)</p>
        <span style="font:600 30px/1.1 var(--fc)">Good afternoon</span><span class="m">30 / 600 page title</span>
        <span style="font:600 21px/1.2 var(--fc)">HCI · Mental models</span><span class="m">21 / 600 title</span>
        <span style="font:600 18px/1.2 var(--fc)">STAT · Lecture</span><span class="m">18 / 600 item</span>
        <span class="num" style="font-weight:500;font-size:16px">09:00–10:00 &nbsp; 15:00 &nbsp; 1 h 40 min</span><span class="m">16 / 500 time</span>
        <span class="tl-lab">Next study block</span><span class="m">13 / 600 caps label</span>
        <p class="fam">Source Sans 3: anything read as a sentence</p>
        <span style="font:600 23px/1.25 var(--fr)">What does a p-value tell you?</span><span class="m">23 / 600 question</span>
        <span style="font:400 18px/1.5 var(--fr)">A mental model is the picture a person holds of how something works.</span><span class="m">18 / 400 reading</span>
        <span style="font:400 16px/1.4 var(--fr)">Pick up any time. Nothing is marked missed.</span><span class="m">16 / 400 body</span>
      </div>
    </section>
    <section><h2>Markers (one family, drawn on the line)</h2>
      <div class="ics" style="grid-template-columns:repeat(3,1fr)">
        ${icn("dot", "dot: passed, ended")}${icn("ring", "ring: a stop ahead")}${icn("stop", "stop: you are here (menu)")}
        ${icn("now", "pointer: now", 1)}${icn("here", "here: the open stop", 1)}${icn("arrow", "arrow: go on")}
        ${icn("diamond", "diamond: study block")}${icn("diamondOpen", "open diamond: suggested")}${icn("square", "square: fixed, a slide")}
        ${icn("check", "check: done, the answer")}${icn("pick", "pick: your pick")}${icn("half", "half: not quite")}
        ${icn("loop", "loop: comes back")}${icn("tick", "tick: one unit")}
      </div>
    </section>
    <section><h2>Quantity</h2>
      <div class="row" style="gap:18px 22px">${ticks(40, 14)}<span class="num" style="font-weight:500;color:var(--ink2)">ticks in fives</span>${mini(2, 4, null)}<span class="num" style="font-weight:500;color:var(--ink2)">stops in a card</span></div>
    </section>
  </div>
  <div>
    <section><h2>Colour</h2>
      <div class="sw">
        ${sw("#F4F3EF", "Paper", "page")}${sw("#FFFFFF", "Surface", "what is open")}${sw("#1B1F24", "Ink", "text, marks")}${sw("#4A515B", "Ink 2", "labels, times")}
        ${sw("#636A74", "Ink 3", "quiet marks")}${sw("#B3AFA4", "Tick", "spine, ticks")}${sw("#DAD7CE", "Hairline", "edges, grid")}${sw("#2346D9", "Accent", "now, next action")}
        ${sw("#0B9C8F", "HCI", "module edge")}${sw("#A83E96", "STAT", "module edge")}${sw("#C9821A", "HIST", "module edge")}${sw("#FAF9F6", "Tint", "side pane")}
      </div>
    </section>
    <section><h2>The menu: five stops at the head of the strip</h2>
      <nav class="tl-menu" aria-label="Sample">${d.menu.map((m, i) => `<a href="#" class="${i === 0 ? "on" : ""}"><span class="mk">${ic(i === 0 ? "stop" : "ring", 18)}</span><span>${esc(m)}</span></a>`).join("")}</nav>
    </section>
    <section><h2>Buttons</h2>
      <div class="row">
        <span class="tl-b go">Continue${ic("arrow", 16)}</span><span class="tl-b go is-hover">Hover${ic("arrow", 16)}</span><span class="tl-b go is-focus">Focus${ic("arrow", 16)}</span>
        <span class="tl-b line sm">Learn this</span><span class="tl-b quiet sm">I wasn't there</span><span class="tl-b quiet sm is-hover">Hover</span><span class="tl-b text sm">Practise instead</span>
        <span class="tl-chip">${ic("square", 14)}Slide 14</span>
      </div>
    </section>
    <section><h2>Answer option</h2>
      <div class="surf"><div class="two">
        ${opt("Not chosen yet")}${opt("Chosen", { cls: "sel", icon: "pick" })}
        ${opt("The answer", { cls: "is-answer", icon: "check", tag: "Answer" })}${opt("A pick that was not it", { cls: "is-miss", icon: "pick", tag: "Your pick" })}
        ${opt("I don't know", { cls: "dk" })}${opt("Hover", { cls: "is-hover" })}
      </div></div>
    </section>
    <section><h2>How sure are you: four stops on a line</h2>
      <div class="surf"><div class="tl-sure"><div class="scale">${d.question.sureOptions.map((s, i) => `<button type="button" class="s${i === 2 ? " on" : ""}"><span class="mk">${ic(i === 2 ? "here" : "ring", 20)}</span><span>${esc(s)}</span></button>`).join("")}</div></div></div>
    </section>
    <section><h2>Status: always a mark and a word</h2>
      <div class="marks">
        <div>${ic("dot", 16)}ended</div><div>${ic("check", 16)}done</div><div style="color:var(--accent)">${ic("now", 16)}<span style="color:var(--ink)">now</span></div><div>${ic("diamond", 16)}accepted</div>
        <div>${ic("diamondOpen", 16)}suggested</div><div>${ic("check", 16)}Answer</div><div>${ic("pick", 16)}Your pick</div><div>${ic("half", 16)}Not quite</div>
      </div>
    </section>
  </div>
</div>
</div>`;
    },
  });
})();
