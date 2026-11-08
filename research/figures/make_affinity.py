#!/usr/bin/env python3
"""Build the T13 affinity diagram figure.

Usage:
    pip install matplotlib
    python3 make_affinity.py            # writes affinity-v1.1.png
    python3 make_affinity.py v2         # writes affinity-v2.png

Edit CLUSTERS below and run again. After the interviews (T07), add the
INT-0n-x notes to the clusters they belong to, open new clusters only where
at least three notes share something no existing cluster says, and build v2.

Layout: one column per cluster, a coloured header, pale sticky notes beneath,
and the two super-groups labelled along the bottom. Note text is wrapped to
the column width and every box is sized to its content, so nothing clips.
"""

import sys
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

# --- content ---------------------------------------------------------------
# "counter" marks a note that cuts against its cluster's claim. Keeping those
# visible is the point: a cluster that only holds agreeing notes is a guess.

CLUSTERS = [
    dict(id="AFF-A", name="I can't get going", colour="#1f5fae", group=0, notes=[
        'Q12: "Just couldn\'t get started"',
        'Q12: "Didn\'t get started soon enough"',
        'Q12: "Left it and ordered food"',
        "Q12: No clear goal, an hour rewriting notes",
        "AE-11: Study happens in set blocks plus urgent bursts",
        "AE2-P1: Welcome screen gave no reason to start",
        "AE2-P2: Priced the whole flow, judged it too high",
        "AE2-P3: Picked the four problems the survey ranks top",
        'AE2-P14: 15 questions felt like 60, "harder than actual studying"',
        "AE2-P15: Got the practice item right, quit anyway",
        "AE2-1: Six setup steps before the first question",
        "AE2-10: Teaches well, does nothing about starting",
    ]),
    dict(id="AFF-B", name="The setting derails me", colour="#c8471f", group=0, notes=[
        'Q12: "Studied with too many friends"',
        'Q12: "Was working with someone"',
        "Q12: A spilt drink ended it",
        "AE-1: Taking notes pulled attention off the lecture",
    ]),
    dict(id="AFF-C", name="Too much at once", colour="#1a7a4c", group=0, notes=[
        "AE-5: Seeing the whole plan was overwhelming",
        'AE-7: A heavy session, "a tad lost", so I switched mode',
        "Q12: Didn't understand, gave up, came back days later",
        "AE2-P6: Attention gone by the end of stage 1 of 4",
        "AE2-P12: Wanted to switch display mode later",
        "AE2-P16: The reveal screen had too much on it at once",
    ]),
    dict(id="AFF-G", name="Why are you asking me this?", colour="#0f6f7a", group=0, notes=[
        "AE2-P4: Every option applied, so ticking them said nothing",
        "AE2-P9: Couldn't predict how I'd want a wrong answer handled",
        "AE2-P11: Comfort settings asked before I'd seen any content",
        "AE2-9: Questions and confidence ratings, no explanation yet",
        ("counter", "AE2-P5: A question that split people was welcome"),
        ("counter", "AE2-P10: The theme changed the app as I answered"),
    ]),
    dict(id="AFF-D", name="I learn when I produce the answer", colour="#9a7000", group=1, notes=[
        "AE-3: Concepts I argued my way to stuck",
        "AE-4: Hints that gave the answer killed the learning",
        "AE-8: Retesting weak spots fixed most misses",
        "Q-6: Practice and explaining rated best",
        "AE2-P7: Practice questions missing from the revision list",
        "AE2-5: Confidence and reasoning fields beside the question",
        "AE2-8: Used the thinking field without being prompted",
    ]),
    dict(id="AFF-E", name="Mistakes repeat", colour="#b83a63", group=1, notes=[
        "AE-6: Same error came back twice",
        "AE-2: Misses from a test fed review",
        "AE2-6: 30% confidence on an answer that was wrong",
    ]),
    dict(id="AFF-F", name="Fit my week, nudge me gently", colour="#4a3fa8", group=1, notes=[
        "AE-9: Material split by week felt manageable",
        "AE-10: Slides and recording weren't there when I needed them",
        "Q-8: 19/22 welcome a quiz in a free gap",
        "Q-9: Most accept 1-2 notifications a day",
        'AE2-P8: Fixed session lengths didn\'t fit, chose "each time"',
        "AE2-P13: Nudge questions landed, demo data was labelled",
    ]),
    dict(id="AFF-H", name="I can't tell what it's doing", colour="#8a5a2b", group=1, notes=[
        "AE2-2: A wait with nothing showing progress",
        "AE2-4: Reading and searching I couldn't account for",
        'AE2-7: Feedback used "MC" before I\'d been taught it',
    ]),
]

GROUPS = ["Getting into a session", "Inside a session, and between sessions"]

TITLE = ("T13 affinity diagram v1.1: questionnaire open answers (Q12), questionnaire findings, "
         "AE-01 and the AE-02 notes. Interview notes are added in v2.")

# --- layout (inches; 1 data unit = 1 inch) ---------------------------------
COL_W, COL_GAP = 2.45, 0.20
MARGIN_X, MARGIN_TOP, MARGIN_BOT = 0.30, 0.30, 0.95
HEADER_H, HEADER_GAP = 0.78, 0.22
NOTE_GAP, NOTE_PAD_X, NOTE_PAD_Y = 0.13, 0.14, 0.13
TITLE_FS, HEAD_FS, NOTE_FS, GROUP_FS = 13, 12.5, 10.0, 12.5
BG = "#faf9f5"


def tint(hex_colour, amount):
    """Mix a colour towards white. amount 0 = unchanged, 1 = white."""
    r, g, b = (int(hex_colour[i:i + 2], 16) for i in (1, 3, 5))
    mix = lambda c: int(round(c + (255 - c) * amount))
    return "#{:02x}{:02x}{:02x}".format(mix(r), mix(g), mix(b))


_MEAS_FIG = plt.figure(figsize=(1, 1), dpi=200)
_MEAS_AX = _MEAS_FIG.add_axes([0, 0, 1, 1])
_MEAS_REND = _MEAS_FIG.canvas.get_renderer()


def text_width(s, fontsize, weight="normal"):
    """Measured width of s in inches, using the real font metrics."""
    if not s:
        return 0.0
    t = _MEAS_AX.text(0, 0, s, fontsize=fontsize, fontweight=weight)
    w = t.get_window_extent(renderer=_MEAS_REND).width / _MEAS_FIG.dpi
    t.remove()
    return w


def wrap(text, fontsize, width_in, weight="normal"):
    """Greedy wrap against measured widths, so nothing overflows its box.

    A single word wider than the column is split rather than left to overflow.
    """
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if text_width(trial, fontsize, weight) <= width_in or not current:
            if not current and text_width(word, fontsize, weight) > width_in:
                piece = ""
                for ch in word:
                    if text_width(piece + ch, fontsize, weight) > width_in and piece:
                        lines.append(piece)
                        piece = ch
                    else:
                        piece += ch
                current = piece
                continue
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


def line_h(fontsize):
    return 1.34 * fontsize / 72.0


def normalise(note):
    return note if isinstance(note, tuple) else (None, note)


def build(outfile):
    inner_w = COL_W - 2 * NOTE_PAD_X

    # Measure every column first, so the figure is sized to its content.
    columns = []
    for c in CLUSTERS:
        head_lines = wrap(f"{c['id']}  {c['name']}", HEAD_FS, COL_W - 0.34, weight="bold")
        notes = []
        for kind, text in (normalise(n) for n in c["notes"]):
            label = ("Counter: " + text) if kind == "counter" else text
            lines = wrap(label, NOTE_FS, inner_w)
            notes.append((kind, lines, len(lines) * line_h(NOTE_FS) + 2 * NOTE_PAD_Y))
        columns.append(dict(cluster=c, head_lines=head_lines, notes=notes))

    header_h = max(HEADER_H, max(len(col["head_lines"]) for col in columns) * line_h(HEAD_FS) + 0.30)
    body_h = max(sum(h for _, _, h in col["notes"]) + NOTE_GAP * (len(col["notes"]) - 1)
                 for col in columns)

    fig_w = 2 * MARGIN_X + len(CLUSTERS) * COL_W + (len(CLUSTERS) - 1) * COL_GAP
    title_h = len(wrap(TITLE, TITLE_FS, fig_w - 2 * MARGIN_X)) * line_h(TITLE_FS) + 0.22
    fig_h = MARGIN_TOP + title_h + header_h + HEADER_GAP + body_h + MARGIN_BOT

    fig = plt.figure(figsize=(fig_w, fig_h), dpi=200)
    fig.patch.set_facecolor(BG)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, fig_w)
    ax.set_ylim(0, fig_h)
    ax.axis("off")

    ax.text(MARGIN_X, fig_h - MARGIN_TOP, "\n".join(wrap(TITLE, TITLE_FS, fig_w - 2 * MARGIN_X)),
            fontsize=TITLE_FS, va="top", ha="left", color="#17202a", linespacing=1.34)

    top = fig_h - MARGIN_TOP - title_h

    def box(x, y, w, h, fc, ec="none", lw=0, r=0.055):
        ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle=f"round,pad=0,rounding_size={r}",
                                    facecolor=fc, edgecolor=ec, linewidth=lw, mutation_aspect=1))

    for i, col in enumerate(columns):
        c = col["cluster"]
        x = MARGIN_X + i * (COL_W + COL_GAP)

        box(x, top - header_h, COL_W, header_h, c["colour"])
        ax.text(x + COL_W / 2, top - header_h / 2, "\n".join(col["head_lines"]),
                fontsize=HEAD_FS, fontweight="bold", color="white",
                ha="center", va="center", linespacing=1.34)

        y = top - header_h - HEADER_GAP
        for kind, lines, h in col["notes"]:
            fill = tint(c["colour"], 0.90 if kind == "counter" else 0.84)
            edge = c["colour"] if kind == "counter" else "none"
            box(x, y - h, COL_W, h, fill, ec=edge, lw=1.1 if kind == "counter" else 0, r=0.045)
            ax.text(x + NOTE_PAD_X, y - NOTE_PAD_Y, "\n".join(lines), fontsize=NOTE_FS,
                    color="#17202a", ha="left", va="top", linespacing=1.34)
            y -= h + NOTE_GAP

    # Super-group rules and labels along the bottom.
    rule_y = MARGIN_BOT - 0.26
    for g, label in enumerate(GROUPS):
        members = [i for i, col in enumerate(columns) if col["cluster"]["group"] == g]
        x0 = MARGIN_X + members[0] * (COL_W + COL_GAP)
        x1 = MARGIN_X + members[-1] * (COL_W + COL_GAP) + COL_W
        ax.plot([x0, x1], [rule_y, rule_y], color="#3a434d", linewidth=1.6, solid_capstyle="butt")
        ids = ", ".join(columns[i]["cluster"]["id"].split("-")[1] for i in members)
        ax.text(x0, rule_y - 0.30, f"{label}  ({ids})", fontsize=GROUP_FS,
                color="#3a434d", ha="left", va="center")

    fig.savefig(outfile, facecolor=BG)
    print(f"wrote {outfile}  ({fig_w * 200:.0f} x {fig_h * 200:.0f} px)")


if __name__ == "__main__":
    version = sys.argv[1] if len(sys.argv) > 1 else "v1.1"
    build(f"affinity-{version}.png")
