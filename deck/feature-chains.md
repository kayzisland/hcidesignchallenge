# Dependency chains for the four core features (T38)

Status: skeleton v1, 24 Nov 2026. Owners: KAYZ, Rahul (23 Nov sync). Rubric criteria 4, 5 and 8.

**What this is.** The 23 Nov sync cut LockedIn to four core features and agreed that each one appears in the deck as one chain: a screenshot of the running system, what it does, why we built it, and its effect in testing. This file lists every link we already have, with its source, and marks the missing links. **Missing links tell Lekan what Friday's focus group has to answer.**

Every finding ID is indexed in `../research/findings-register.md` or `../research/affinity.md`.

## The links in each chain
1. **Research:** what we found (questionnaire, interviews, autoethnography).
2. **Literature:** what larger studies say.
3. **Decision:** when the group chose it, and over what.
4. **Ideate:** sketches, storyboards, QOC.
5. **Lo-fi:** how it appeared, and what changed.
6. **Lo-fi test (T18, Wed 25 Nov):** what testers did.
7. **Hi-fi:** the screenshot of the running system.
8. **Hi-fi test (T23, Fri 27 Nov):** its effect.

---

## 1. Calendar blocking (weekly study blocks)
| Link | What we have | Source |
|---|---|---|
| Research | Starting is the most common problem (Q-1). Students study in fixed blocks and bursts (AE-11). They'd declare study times only if they can move them (INT-05-h). A fixed timer broke one participant's flow (INT-03-c). Place commits people (AFF-J) | `questionnaire-results.md`, `interviews/` |
| Literature | If-then plans (LIT-3). A stable context becomes a habit cue (LIT-18). Habits take weeks to form, so we claim routine, not habit (LIT-12) | `literature-review.md` |
| Decision | Prioritised for the lo-fi, 16 Nov. KAYZ's proposals, 19 Nov: blocks keep a movable default anchor slot, with no penalty for a missed block. Kept in the core set, 23 Nov | `design-log.md` |
| Ideate | Sunday checklist (T20 N-5). Sketch screen 3, "Your week". Storyboard 3, Thursday's block | `behaviour-change.md`, `prototype/sketch/`, `define/storyboards/` |
| Lo-fi | Task 3 ends on the week. v2: blocks move, are removed with undo, or are added, and a moved block keeps a label. v8: the setup answers set the block times (AFF-G) | `prototype/lofi/CHANGELOG.md` |
| Lo-fi test | **Missing.** Watch: do testers accept the suggested week, or move and remove blocks? | T18 |
| Hi-fi build (v2.0) | The student sets a weekly target and the planner proposes blocks in free gaps. The Week page is a drag-and-drop timetable: blocks snap to 15 minutes, never land on a lecture, and each has a module. A block starts from its notification or a Start button; "Where are you?" was left out. A Sunday check-in, never "missed". Blocks publish as a calendar feed | hi-fi repo `lockedin-companion`, `docs/companion/DECISIONS.md` (V-5, V-7, V-37, V-44) |
| Hi-fi | **Missing:** screenshot | T33 |
| Hi-fi test | **Missing:** effect | T23 |

## 2. Reminders (the notification that is a question)
| Link | What we have | Source |
|---|---|---|
| Research | 19 of 22 welcome an unprompted quiz in a free gap (Q-8). One or two notifications a day, or they get switched off (Q-9). A post-lecture quiz is welcome if it's one notification (INT-05-g); annoying if it can't be timed (INT-04-f) | `questionnaire-results.md`, `interviews/` |
| Literature | Interrupting at a breakpoint costs less (LIT-4, LIT-5). Testing beats restudying (LIT-16, LIT-17), in real classrooms too (LIT-24). The first step has to feel good, so the student starts with a question they can answer (LIT-13, LIT-14) | `findings-register.md`, `literature-review.md`, `literature-learning-loop.md` |
| Decision | 16 Nov: one notification is itself a single multiple-choice question | `meetings/2026-11-16-sync.md` |
| Ideate | T20 R-1, R-3, N-1. Three answer buttons, the Android limit (UI research Q1). Sketch screen 4. Storyboard 1 | `behaviour-change.md`, `ui-research-lofi.md` |
| Lo-fi | Task 1: lock-screen question, then "4 more on your laptop" or "Done for now". A/B: answer on the lock screen vs tap to open (V-11) | `prototype/lofi/CHANGELOG.md` |
| Lo-fi test | **Missing.** A/B preference, and the phone-or-laptop answer that decides the device split | T18; `ideate/qoc-device-split.md` |
| Hi-fi build (v2.0) | The phone notification opens the question in one tap; web limits rule out answering on the lock screen, so the lo-fi A/B tests both. The question is the first Practise question. After it: "4 more on your laptop", or "Keep going here" on the phone (V-46, chosen before T18; see `../ideate/qoc-device-split.md`) | hi-fi repo, `DECISIONS.md` (V-11, V-40, V-46) |
| Hi-fi | **Missing:** screenshot | T33 |
| Hi-fi test | **Missing:** effect | T23 |

## 3. App blocking (the optional phone block)
| Link | What we have | Source |
|---|---|---|
| Research | 5 of 6 interviewees named the phone, unprompted (AFF-M). None of the 5 asked endorsed a fixed lock (X-8). One uses notifications as his cue (INT-01-b). One "would probably find another way" (INT-04-d) | `interviews/synthesis.md`, `findings-register.md` |
| Literature | A phone in reach costs attention (LIT-6). Problematic phone use goes with procrastination (LIT-9). Self-chosen tools are still used months later (LIT-10). Blocking works but has to be flexible (LIT-11) | `literature-phones.md` |
| Decision | Lock brief, 14 Nov. Optional and student-set: KAYZ's proposal, 19 Nov. Kept in the core set, 23 Nov | `meetings/lock-decision-brief.md`, `design-log.md` |
| Ideate | Real blocking needs Apple's Screen Time frameworks, so the prototypes simulate it (UI research Q2). QOC B3: only a phone option can block the phone | `ui-research-lofi.md`, `ideate/qoc-device-split.md` |
| Lo-fi | Task 2: Off, Gentle or Firm, with a shield on Instagram. v8: Off by default (X-8, LIT-10) | `prototype/lofi/CHANGELOG.md` |
| Lo-fi test | **Missing.** Gentle or firm: which feels helpful, which annoying? | T18 |
| Hi-fi build (v2.0) | **Removed in v2.0, pending a group decision.** No app blocking: a web app cannot see or stop another app opening, and the lock is unresolved in our research (X-8). The Off / Gentle / Firm rules stay on the server, unused. Earlier builds had an honest commitment screen (V-8) | hi-fi repo, `DECISIONS.md` (V-41, V-8) |
| Hi-fi | **Missing:** screenshot | T33 |
| Hi-fi test | **Missing:** effect | T23 |

**Hi-fi v2.0 (25 Nov):** app blocking is removed (V-41). The group decides at the 26 Nov standup whether chain 3 stays in the deck as a lo-fi idea the hi-fi left out, with V-41 as the reason, or is cut from the final design.

**Gap to close before the deck:** the group never logged a decision on the lock brief's options. The lo-fi effectively tests a student-chosen strictness. Log that in `design-log.md` once T18 is in.

## 4. The LearnHarness engine (the learning loop)
| Link | What we have | Source |
|---|---|---|
| Research | Generative methods are rated above passive ones (Q-6). Arguing it through stuck (AE-3). The engine taught well and did nothing for starting, after six setup steps (AE2-10, AE2-1). The confidence and "why" fields were the clearest delight (AE2-5, AE2-8). Half the interviewees distrust AI (X-9) | `autoethnography-01-kobi.md`, `autoethnography-02-kobi.md` |
| Literature | Quizzing in classrooms (LIT-24). AI without guardrails harms learning (LIT-25). Pretesting (LIT-26). Learning from confident errors (LIT-27). An AI tutor beat active learning (LIT-28). Retrieval, prediction error and schemas (LIT-29 to LIT-31) | `literature-learning-loop.md` |
| Decision | Build on LearnHarness, 28 Oct. Keep the engine, cut the setup, 10 Nov. The laptop teaches, 16 Nov (R-8) | `design-log.md` |
| Ideate | Device-split QOC v2: the split is the working choice; T18 decides between O1, O3 and O5 | `ideate/qoc-device-split.md` |
| Lo-fi | Laptop session: reasoning box, four-tap confidence, hint, "show me first", slide panel. v8: no score on the done screen (R-6) | `prototype/lofi/CHANGELOG.md` |
| Lo-fi test | **Missing.** Is "4 more on your laptop" understood without help? Where would testers rather learn? | T18 |
| Hi-fi build (v2.0) | LearnHarness runs the session in two modes: **Learn** (probe, learn, predict, check, on the laptop) and **Practise** (fast multiple choice with the slide beside it, four confidence taps, none preselected). Missed ideas come back. Learn stays on the laptop; Practise can continue on the phone (V-46) | hi-fi repo, `DECISIONS.md` (V-40, V-46, V-50, V-51) |
| Hi-fi | **Missing:** screenshot | T33 |
| Hi-fi test | **Missing:** effect. The learning-loop review says the deck can present this as an early signal, not proof | T23 |

---

## "Why phone, why laptop, why both?" (the viva answer)
Russell will ask this of every chain above. Our answer, with its sources:

1. **Why the phone starts.** The phone reaches the student anywhere, including the free gap where an unprompted question is welcome (Q-8; QOC B1, C1). It is also the distraction, so it is the only device where a block helps (AFF-M, LIT-6; QOC B3).
2. **Why the laptop teaches.** Place commits people (AFF-J), and the engine already teaches well there (AE2-10).
3. **Why both, and how we know.** This was a working choice on 16 Nov, with its weak point written down at the time (R-8: nobody was asked where they want to learn). The QOC compared it against all-on-phone, all-on-laptop, two apps and student-chooses (O5), using criteria from the module. Before testing, we wrote down the result that would overturn it. T18 tests it.
4. **Pairing.** In hi-fi v2.0 the phone pairs once. On an iPhone it pairs by a 6-digit code shown on the laptop; Android and desktop browsers can also scan a QR code (V-32). Pairing is the last of five setup steps, and the first is the ChatGPT sign-in (V-45). That partly reverses the 10 Nov "value before onboarding" decision, and the lo-fi first-run A/B tests exactly that (UI research Q3; AE2-1, AE2-P14). Lo-fi testers said they were happy to connect AI (group chat, 25 Nov), to be confirmed in the T18 write-up.

## What Friday's focus group has to answer (for Lekan, T31)
Every chain is missing the same two links: testing results and a screenshot. Tomorrow's lo-fi test fills link 6. Friday has to fill link 8 for each feature:

1. **Calendar blocking:** would they keep the suggested blocks, and does moving one feel easy?
2. **Reminders:** would they answer a question on the lock screen, and at what time of day?
3. **App blocking:** would they turn it on, and at what strictness?
4. **The engine:** did they learn something, and did it feel like being taught or being tested (AE2-9)?

## Three designer-judgement calls with no user evidence yet
From the lo-fi change log. They must be tested or labelled as judgement in the deck:
- no place buttons after "Study now";
- "Another one" on the move;
- the friend-facing header.
