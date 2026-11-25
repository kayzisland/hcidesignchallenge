# Test results template: lo-fi (T18) and hi-fi (T23)

Draft, 26 Nov 2026. For Jishnu and Lekan to fill. Built to match `prototype/lofi/lofi-test-plan.md` (measures, IDs P01 to P05, the deciding question) so nothing is recorded twice.

- Lo-fi findings: **LF-1, LF-2 …** → `test/lofi-results.md` (T18, changes at T19)
- Hi-fi findings: **HF-1, HF-2 …** → `test/hifi-results.md` (T23, changes at T24)
- Record only what happened. A blank cell stays blank. No estimated, merged or "augmented" data.

---

## 1. Session log

| ID | Date, time | In person / online | Facilitator | Note-taker | Subject area | STEM / non-STEM | Consent | Notes on the session (tech issues, interruptions) |
|---|---|---|---|---|---|---|---|---|
| P01 | | | | | | | yes | |
| P02 | | | | | | | yes | **Technical issue: describe exactly what failed and which tasks it touched** |
| P03 | | | | | | | yes | |
| P04 | | | | | | | yes | |
| P05 | | | | | | | yes | |

Names never appear here. The name-to-ID list lives somewhere else and is deleted after the write-up.

---

## 2. Per participant (copy this block for each)

### P0_

**Version shown first:** A / B

| | Task 1: after the lecture | Task 2: Thursday's block | Task 3: first time |
|---|---|---|---|
| Finished? (alone / with help / stuck, and where) | | | |
| Time on task (from the log) | | | time to first question: |
| Hesitations or confusion (screen + what happened) | | | |
| Think-aloud quotes worth keeping | | | |
| A/B preference (A / B / Neither) and why | lock-screen answer (A) vs tap to open (B): | "where are you?" (A) vs no question (B): | question first (A) vs ChatGPT first (B): |
| "Ask after" answers | | | |

**Phone / laptop / depends:** ____ · **Why, in their words:** ____
**Tapped "4 more on your laptop"?** yes / no (recorded, not part of the rule)
**Found Settings when asked (task 3)?** yes / no / not asked
**SUS score** (hi-fi only, 0 to 100): ____
**Anything else they said:**

---

## 3. The deciding question: scoring the QOC rule

Rule agreed by Jishnu and KAYZ on 24 Nov, before testing (`ideate/qoc-device-split.md`). Score it before discussing anything else.

| ID | Answer (phone / laptop / depends) | Session affected by the tech issue? |
|---|---|---|
| P01 | | |
| P02 | | |
| P03 | | |
| P04 | | |
| P05 | | |
| **Laptop count** | **__ of __** | |

**Outcome (tick one):**

- [ ] 3 or more of 5 said laptop (3 of 4 if one dropped out). **The split stays.** The phone starts, the laptop teaches.
- [ ] Anything else: mostly phone, mostly depends, or a tie. **Switch to O5 at T19.** The phone still starts, and the student chooses where to carry on.

**If P02's answer was affected by the tech issue,** report the count both ways ("3 of 5; 3 of 4 without P02") and say which one the group acts on, and why. Decide that before looking at which way it tips the result.

---

## 4. A/B tallies

Report counts, never percentages, with 5 people.

| Choice | A | B | Neither | Decision |
|---|---|---|---|---|
| Task 1: answer on the lock screen (A) vs tap to open (B) | | | | |
| Task 2: block asks "where are you?" (A) vs doesn't (B) | | | | |
| Task 3: one question first (A) vs connect ChatGPT first (B) | | | | |

Task 3 matters for honest criticism: V-3 puts the AI sign-in first. If testers preferred A, that is the evidence for changing it. If they were fine with B (they "would be happy to connect with AI agents"), the poster's honest criticism line can say the sign-in held up in testing.

---

## 5. Findings

| ID | What we saw | Testers | How bad (blocks / slows / cosmetic) | Proposed change | Acted on? Why or why not |
|---|---|---|---|---|---|
| LF-1 | | | | | |
| LF-2 | | | | | |
| LF-3 | | | | | |

A problem only one tester hit can be about that tester. Write down the reason a finding was or wasn't acted on: this is criterion 4.

---

## 6. What changes, and where it lands

One row per finding that causes a change. Each row is also an entry in `design-log.md` (date, decision, evidence, alternatives, who decided).

| Finding | Design change | When | Feature chain it updates | Chain row it fills |
|---|---|---|---|---|
| LF- | | T19 (lo-fi) / T24 (hi-fi) | 1 Calendar blocking / 2 Reminders / 3 App blocking / 4 Engine | "Lo-fi test" or "Hi-fi test" in `deck/feature-chains.md` |

The four chains and the question each one needs answered:

| Chain | Lo-fi (T18) answers | Hi-fi (T23) answers |
|---|---|---|
| 1. Calendar blocking | Did they accept the suggested week, or move and remove blocks? | Would they keep the blocks; is moving one easy? |
| 2. Reminders | A/B on lock screen vs tap; the phone/laptop/depends count | Would they answer on the lock screen, and at what time of day? |
| 3. App blocking | Gentle or Firm: which felt helpful, which annoying? | Would they turn it on, at what strictness? |
| 4. The engine | Is "4 more on your laptop" understood without help? | Did they learn something; taught or tested? |

---

## 7. Limitations (goes in the write-up, the deck and the poster)

- **Technical issue in session 2** likely skewed some answers. Name the tasks it affected and whether P02 is counted.
- **Convenience sample.** Testers came through our own networks, so they are not representative of the student population. Say how many were STEM.
- **Testers know us.** Friends tend to be kind about a prototype. Expect praise to run high and criticism to run low.
- **The lo-fi is not the product.** No real notifications, AI or blocking; phone and laptop on one screen. The test answers understanding and preference, never effectiveness.
- **Small n.** Five testers find usability problems; they can't prove a preference. Report counts and call them early signals.
- **Online sessions** (if any): the tester chose how far to go into the second version, so some A/B comparisons may be uneven.

---

## 8. Where each result goes

| Result | Poster slot | Deck slot |
|---|---|---|
| Laptop count and outcome (split stays / O5) | 05 Test: the dashed pill "x of 5 picked the laptop" | QOC slide: outcome of the overturn rule; viva "Why phone, why laptop, why both?" answer, point 3 |
| A/B tallies | Hero chips stay; one line under 05 Test if space allows | Lo-fi section: one slide, three rows of counts |
| Top 2 or 3 LF findings and the change each caused | "Four decisions" panel: the "Effect of each" pill becomes one result line per decision | Each feature-chain slide (slides 62 to 71): fill the "Lo-fi test" row |
| SUS, task success, quotes (hi-fi) | 05 Test: the dashed pill "Usability score (SUS) · task success · quotes" | Each feature-chain slide: fill the "Hi-fi test" row and the "Effect" link |
| Limitations | Footer: "Limitations" (replace "Results are early signals" with the real caveats once in) | Evaluation slide and honest criticism |
| Design changes (T19, T24) | Prototype panel: "What changed on the way" gains the test-driven change | Design-evolution slide; `design-log.md` rows referenced by ID |

When a dashed pill on the poster is filled, it turns solid. Every number on the poster must match `test/lofi-results.md` or `test/hifi-results.md` exactly.
