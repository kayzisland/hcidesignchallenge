# LockedIn lo-fi test: change log

Nov 23, 2026 · @Jishnu

## Version 0: KAYZ's rough sketch (14 Nov)

The lo-fi grew out of KAYZ's `prototype/sketch/lockedin-sketch.html`: a nine-screen phone wireframe he labelled "one alternative among Jishnu's T17 lo-fis". Its flow, much of its wording and its research annotations carried straight into version 1.

**What carried over**

| Element | In KAYZ's sketch | In the lo-fi |
| --- | --- | --- |
| Flow | First taste, three setup questions, week, nudge, block start, session, break, done, settings | Same order, split across tasks 1 to 3 |
| First taste | One question with no account; "Took 30 seconds. Want this after every lecture?" | Version A of the first run, same wording |
| Setup | Three taps: timetable, energy time, strictness | Same three questions |
| Week | Two suggested blocks; a moved block stays outlined | Same, made fully interactive in version 2 |
| Block start | "Where are you?" chips (Library, Desk, Bed, Café, On the move); tiny first step; three focus levels | Same chips and first step; focus renamed |
| Session | Confidence, reasoning box, "Show me first", source slide, numbered progress dots | Same elements, moved to the laptop |
| Break and done | Breaks at the end of a set; one buzz when it's over; apps back before the summary; no streak | Same wording and rules |

**What changed, and why**

| Change | Why |
| --- | --- |
| Learning moved from the phone to the laptop, with a handover | The sketch predates the 16 Nov phone/laptop split (R-8) |
| The nudge became the first question, not "10 minutes on this morning's lecture?" | T20 v2 (N-1) |
| A/B switches added at three choices | Answers the sketch's own open question: "which screens become alternatives in Jishnu's lo-fi?" |
| Focus levels Off / Quiet / Locked became Off / Gentle / Firm, shown as a shield when an app is opened | Matches Jiven's block API (off / gentle / firm) |
| The sketch's Personas, Scenarios, Syllabus map and Design rationale tabs were not carried over | The lo-fi is a test instrument; those tabs stay in the sketch and `define/personas.md` |
| The Settings screen was not carried over | Out of scope for Wednesday's tasks so far; still F5 in the timeline |

Both files stay in the repo: KAYZ's sketch in `prototype/sketch/`, the test build in `prototype/lofi/`.

## Version 1: the first build:

Version 1 turned KAYZ's rough sketch, storyboards 1, 3 and 4 and the T10 v2 sketches into one clickable page with a facilitator panel.

| Part | What it contained | Built from |
| --- | --- | --- |
| Task 1: after the lecture | Lock-screen nudge after 3 s; question 1; "4 more on your laptop" or "Done for now"; laptop session at Q2 with reasoning box, confidence slider, Hint, Show me first and slide panel; Leave for now and resume; break offer; done screen | Storyboard 1; S-13, S-70, S-03, S-04, S-69; R-1, R-5, R-8, N-1 |
| Task 2: Thursday's block | Block notification; block start with goal, first step and Off / Gentle / Firm; focus screen; fake home screen; gentle and firm shields on Instagram | Storyboard 3; S-67, S-68, S-47; R-9, X-8, LIT-10, LIT-11 |
| Task 3: first time | Version A: one question, then 3-tap setup. Version B: connect ChatGPT, pretend sign-in, modules, then a question. Both end on the week | Storyboard 4; S-62, S-65; 10 Nov decision; V-3 |
| A/B switches | Phone nudge: answer on the lock screen (R-1, N-1) vs tap to open (V-11). Block start: asks "where are you?" (R-9) vs doesn't (O-4). First run: question first (10 Nov) vs ChatGPT first (V-3) | Where Kobi's research and Jiven's v0.1 spec disagree |
| Facilitator panel | Participant ID with odd/even version order, task scripts (read aloud, watch for, ask after), preference buttons, timestamped click log with copy and two-tap reset | Lekan's test plan needs (T18) |
| Content | Eight Lecture 7 (mental models) questions with hints, worked examples and slide numbers, written for the test | Sample content, not real slides |

One fix landed before the first share: the three lock-screen answer buttons cut off "Past experience", so their text now wraps.

## Every change, newest first

Each row is one change. "Trigger" says who found the problem; "Type" says what backs the change.

| Ver. | Change | Trigger | Evidence | Type |
| --- | --- | --- | --- | --- |
| 11 | On phones, the active task card sits directly above the app screen, so instructions and app are visible together | AI walkthrough of User mode | Nielsen: recognition rather than recall; AFF-C | Heuristic |
| 11 | Start scrolls to the app; a finished task scrolls to the next step (it was 140 px below a 390 px phone screen) | AI walkthrough of User mode | Nielsen: visibility of system status; AE2-P1 | Heuristic |
| 11 | Finish message says where the next step is: "just above the phone" or "on the right" | AI walkthrough of User mode | Visibility of system status | Heuristic |
| 11 | "I'm stuck, or I've finished" split into I've finished / I'm stuck / Restart; each run's outcome recorded in the results | AI walkthrough of User mode | Rubric criterion 3 (task success data) | Test tooling |
| 11 | "Which way did you prefer?" now reminds testers what differed, in neutral words | AI walkthrough of User mode | Recognition rather than recall | Heuristic |
| 11 | Second run asks testers to go only as far as the part that's different | AI walkthrough of User mode | AE2-P14; AFF-C | Research-backed |
| 11 | Copy button resets to "Copy my results" when comments change | AI walkthrough of User mode | Visibility of system status | Bug fix |
| 11 | Friend-facing header; developer toggle moved to a small link at the bottom | AI walkthrough of User mode | Dev anti-persona; test validity | Designer judgement |
| 11 | Task scenarios in Atkinson Hyperlegible instead of the handwritten font | AI walkthrough of User mode | Q-12; Maya persona; S-66 | Research-backed |
| 11 | "Waiting for a notification…" on task 1's lock screen before the nudge | AI walkthrough of User mode | Visibility of system status | Heuristic |
| 10 | "Restart this task" and two-tap "Start over" (fresh anonymous ID and version order) | Jishnu: no way to reset | Nielsen: user control and freedom | Heuristic |
| 9 | New User mode (default): welcome, three tasks in sequence, second way, preference, skip-ahead hour, comments, copy results, anonymous IDs, random version order | Jishnu: share with friends | Informal pilot; test validity | Test tooling |
| 9 | Facilitator view kept as Developer mode, reached by a link or `#dev` | Jishnu: share with friends | — | Test tooling |
| 8 | Fake ChatGPT sign-in prefilled with a read-only demo account | AI walkthrough | Ethics plan; Jiven's O-6 | Research-backed |
| 8 | Setup energy answer sets block times; the week explains why | AI walkthrough | AFF-G | Research-backed |
| 8 | Setup questions are single-choice; Done needs energy and strictness | AI walkthrough | Nielsen: error prevention | Bug fix |
| 8 | Laptop done screen shows no score; names topics back on Friday | AI walkthrough | R-6; LIT-23; INT-01-i; S-03 | Research-backed |
| 8 | Every home-screen app responds; WhatsApp always allowed; LockedIn icon returns to the block | AI walkthrough | INT-01-b; S-68; Nielsen | Research-backed |
| 8 | "Open on my laptop" on the block screen opens the block session at question 1 | AI walkthrough | R-8; UI research Q3 | Research-backed |
| 8 | Break screen: take a break and come back, 3 more questions (q6 to q8 added), or finish | AI walkthrough | INT-03-c; AE2-P8 | Research-backed |
| 8 | Submit with no answer shows "Pick an answer first" | AI walkthrough | Visibility of system status; AE2-2 | Heuristic |
| 8 | Firm shield with no reason shows "Type a few words first" | AI walkthrough | Nielsen: help users recognise errors | Heuristic |
| 8 | "Leave for now" became a full button next to Submit | AI walkthrough | AFF-B; user control and freedom | Heuristic |
| 8 | Confidence is four taps with none preselected; a skipped rating logs as "none" | AI walkthrough | AE2-5; AE2-8 | Research-backed |
| 8 | Focus shows Off selected by default | AI walkthrough | X-8; LIT-10; visibility | Research-backed |
| 8 | First run says "a sample question", not "this week's lecture" | AI walkthrough | R-7; AFF-H; Jiven's O-3 | Research-backed |
| 8 | A wrong first answer gets "Every question helps, even a wrong one" | AI walkthrough | LIT-14; AE2-P15 | Research-backed |
| 8 | "Use an API key" became "Use another AI account"; model wording removed | AI walkthrough | Dev anti-persona; AE2-1 | Research-backed |
| 8 | Laptop message explains question 1's result instead of a stray dot | AI walkthrough | AFF-H | Research-backed |
| 8 | "9 lectures this week" only appears once a timetable is chosen | AI walkthrough | R-7 | Research-backed |
| 8 | "An hour later" moved from the tester's screen to the facilitator panel | AI walkthrough | Test validity | Test tooling |
| 7 | After "Study now", Bed and Café go straight to focus and Take the first step / Not now; place buttons removed, one tip line kept | Jishnu walkthrough | No user evidence; R-9 tip kept | Designer judgement |
| 6 | "Not now" became a visible button; Undo on the week became a button | Jishnu walkthrough (missed the link) | Nielsen: user control and freedom | Heuristic |
| 5 | Bed and Café ask "Study now or later?" first; Later goes straight to rescheduling | Jishnu walkthrough | INT-04-f; INT-06-g; INT-05-g; Q-9 | Research-backed |
| 5 | Library, Desk and version B get "Not now", so both versions can reschedule | Jishnu walkthrough | Fair A/B comparison | Test tooling |
| 5 | On the move: "Another one" or "Save the rest for later"; five phone questions; all five ends the block | Jishnu walkthrough | No user evidence; tension with R-8 | Designer judgement |
| 4 | Block outcome follows the tester's choices: place, now or later, and focus level change the screens and Instagram's behaviour | Jishnu: every choice led to the same screen | R-9; X-8; LIT-10 | Research-backed |
| 3 | Every task ends on a clear "Task finished" screen; task end logged automatically; disabled buttons look disabled | Jishnu: Done button did nothing | Visibility of system status | Heuristic |
| 2 | Week blocks can be opened, moved to a free gap, removed with Undo, or added; a moved block keeps a "moved" label | Jishnu: blocks couldn't be moved | S-16; N-5; INT-05-h; LIT-18; change blindness (Wk 4) | Research-backed |
| 1 | Lock-screen answer buttons wrap instead of cutting off text | AI browser test | — | Bug fix |

## What backs the changes

Nearly half of the 40 changes rest on findings from our own research; only 3 are pure designer judgement, and those are the ones Wednesday must test.

| Type | Changes | What it means for the deck |
| --- | --- | --- |
| Research-backed | 18 | The prototype now matches a finding it previously contradicted. Cite the finding ID; the walkthrough is only what caught it |
| Heuristic | 11 | Standard usability fixes (Nielsen, Shneiderman). Belongs in Lekan's heuristic evaluation (T22), not in "data changed the design" |
| Test tooling | 5 | Changes to how the test runs or what it records, not to LockedIn's design |
| Bug fix | 3 | The prototype didn't do what it was meant to |
| Designer judgement | 3 | No user evidence yet: removing the place buttons after Study now, "Another one" on the move, and the friend-facing header. Log them as judgement and test them |

Four changes fixed places where the prototype contradicted our own rules: the setup answers changing nothing (AFF-G), a score on the done screen (R-6), no handover in the block (R-8), and breaks that ended the session (INT-03-c).

## Rows to add to design-log.md

These are the LockedIn design decisions, not the test tooling or bug fixes. Paste them into `design-log.md` as they stand; each says plainly whether user evidence exists yet.

| Date | Decision | Evidence (finding IDs) | Alternatives considered | Decided by |
| --- | --- | --- | --- | --- |
| 23 Nov 2026 | Block start asks "study now or later?" before anything else when the student is in bed or a café; "Later" goes straight to rescheduling, and every block start offers "Not now" | INT-04-f, INT-06-g, INT-05-g, Q-9. Prompted by a team walkthrough of the lo-fi | Always open the block; offer only "one question now" | Jishnu (walkthrough), to test 25 Nov |
| 23 Nov 2026 | After "Study now", no further choice of place; one short tip remains | Designer judgement (team walkthrough), no user evidence yet. R-9 kept as a tip only | Desk/bed and café/library buttons | Jishnu, to test 25 Nov |
| 23 Nov 2026 | On the move, the student can answer one question, keep going one at a time, or move the rest of the block | Designer judgement, no user evidence yet. Tension with R-8 (learning on the laptop) noted | One question then move only | Jishnu, to test 25 Nov |
| 23 Nov 2026 | The phone block offers "Open on my laptop", which opens the session at question 1 | R-8; UI research Q3 | Phone-only block screen | Team walkthrough, 23 Nov |
| 23 Nov 2026 | Finished sessions show no score; they name the topics coming back on Friday | R-6, LIT-23, INT-01-i; sketch S-03 | "x of 5 right" | Team walkthrough, 23 Nov |
| 23 Nov 2026 | Each setup answer visibly shapes the week (block times follow the energy answer) | AFF-G | Setup that only collects | Team walkthrough, 23 Nov |
| 23 Nov 2026 | Confidence is a four-option tap with nothing preselected | AE2-5, AE2-8 | Slider defaulting to the middle | Team walkthrough, 23 Nov |
| 23 Nov 2026 | Week blocks can be moved, removed (with undo) or added; a moved block keeps a visible label | S-16, N-5, INT-05-h, LIT-18; change blindness (Wk 4) | Fixed suggested blocks | Jishnu (walkthrough), to test 25 Nov |
| 23 Nov 2026 | The friends' run of the lo-fi is an informal pilot, not LF-n data | Testers know us and are unobserved; rubric criterion 3 asks for honest limitations | Count friends' results as test data | Jishnu |

## What Wednesday should test, and what the lo-fi can't show

The three A/B choices are still the main questions; the walkthrough changes add five more to watch for.

**The A/B choices**

1. Answer the nudge on the lock screen (R-1, N-1) or tap to open it (V-11)?
2. Does asking "where are you?" (R-9) change what testers do, compared with not asking (O-4)?
3. One question first (10 Nov decision) or connect ChatGPT first (V-3)?

**Also watch for**

- In bed or a café, do testers choose now or later? Do they read the tip?
- On the move, do they stop after one question or keep going?
- Do they accept the suggested week, or move and remove blocks?
- Gentle or firm: which feels helpful, which annoying?
- Is "4 more on your laptop" understood without help?

**Limitations**

- The Lecture 7 questions, hints and worked examples are sample content written for the test. Ideally Jiven swaps in real LearnHarness output first.
- Nothing is real: notifications, app blocking, AI and phone-to-laptop sync are all simulated on one page.
- Phone and laptop are drawn on the same screen, so the handover is not experienced across two devices.
- Every change was found by the team or an AI walkthrough, not by users. The three judgement calls in the table above may not survive testing.
- Friends' results are an informal pilot: they know us, and nobody observes them.

## How this was made

The lo-fi page and this log were drafted with an AI assistant (Claude) from the team's own documents; Jishnu reviewed and directed every change.

- **Sources used:** KAYZ's rough sketch, `prototype/sketch/lockedin-sketch.html` (version 0); storyboards 1, 3 and 4 and the T10 v2 sketches (Jishnu); the findings register, T20 behaviour-change v2, the UI research for the lo-fi and the T09 literature review (KAYZ); Jiven's v0.1 spec for the alternatives.
- **Walkthroughs:** versions 2 to 7 came from Jishnu clicking through the page. Versions 8 and 11 came from AI-run walkthroughs in a headless browser, which screenshotted every screen and checked each fix. These are team walkthroughs, not user data.
- **Declaration:** check the module's rules on AI use and declare it in the deck. Suggested wording: "The lo-fi was built with AI assistance from our sketches, storyboards and research; design decisions were made and reviewed by the team."
- **Files:** [LockedIn lo-fi test](https://claude.ai/artifact/5MwDqkADVRvqmLnsi8pHVH) (published page). In `kayzisland/hcidesignchallenge`, the HTML lives at `prototype/lofi/lockedin-lofi-test.html` and this log beside it as `prototype/lofi/CHANGELOG.md`.
