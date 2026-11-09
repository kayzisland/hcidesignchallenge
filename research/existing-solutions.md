# Existing solutions review (T08)

Status: v1.1, 9 Nov 2026. Owners: KAYZ (Rahul to add theory links). Rubric criteria 6 (solution appropriateness) and 7 (domain understanding).

**Changes in v1.1 (9 Nov).** Added app blockers, which v1 missed entirely. Opal and Flora are scored below and their features were checked against the developers' own pages on 9 Nov 2026. This matters now because the study-block concept proposed for the 10 Nov sync is, mechanically, an app blocker with a lesson inside it (`../meetings/2026-11-10-sync.md`), and the phone literature went in the same day (`literature-phones.md`, LIT-6 to LIT-12).

**Forest was rescored in the same pass, and v1 had it wrong.** v1 described it as a timer that grows a tree and scored it ✗ on proactivity. Checking the developer's own page shows two blocking features v1 missed: **Deep Focus**, which blocks everything off an allowlist while a session runs and cannot be switched off part way, and **Time Guard**, which schedules app blocks outside sessions. Time Guard acts without the app being opened, so **Forest moves from ✗ to ◐ on P**. It stays at ◐ and not ✓ because Time Guard is free for a single app or site, several need the paid tier, and it blocks apps without ever starting a study session. The score changed because the evidence changed, and the old score is recorded here so the deck can show the correction.

## Why we used this method
A competitive review is an investigative technique. It shows what students already use and where those tools stop, which stops us from rebuilding a product that already exists. That risk is real: Q9 shows AI chatbots, flashcards and planners are already in daily use (`questionnaire-results.md`, Q-6). We chose a desk review over hands-on usability testing of each product, because we have five weeks and one group, and our testing budget belongs to our own lo-fi and hi-fi prototypes. The cost is that we're judging features, not real use. That's logged in the limitations below.

## The lens
Each tool is scored against our evidence, not against a generic feature list.

| Code | Need | Evidence |
|---|---|---|
| **S** | Helps a student *start* a session | Q-1, Q-11 |
| **F** | Helps them *stay focused* | Q-2, Q-4 |
| **R** | Active recall: practice questions, self-explanation | Q-6, AE theme 2 |
| **M** | Lets the student choose the mode (shown vs questioned) | Q-7 |
| **P** | Proactive: acts before being opened, at a sensible moment | Q-8, the brief |
| **C** | Uses *course* context: timetable, lecture slides | Q-10 |
| **B** | Respects a notification budget of 1-2 a day | Q-9 |

✓ does it well · ◐ partly or with effort · ✗ doesn't

## The tools

| Tool | What it is | S | F | R | M | P | C | B |
|---|---|---|---|---|---|---|---|---|
| **ChatGPT Study Mode / Gemini Guided Learning / Claude learning mode** | General AI assistants with a tutoring mode that asks questions and guides step by step instead of giving the answer | ✗ | ✗ | ◐ | ◐ | ✗ | ◐ | ✓ |
| **Anki** | Free spaced-repetition flashcards; FSRS scheduling | ✗ | ◐ | ✓ | ✗ | ◐ | ✗ | ✓ |
| **Quizlet (Learn, AI features)** | Flashcards and adaptive quiz rounds; generates sets from notes | ✗ | ◐ | ✓ | ✗ | ◐ | ◐ | ◐ |
| **Tiimo** | Visual day planner built for ADHD and autistic users; timers, routines, AI planning | ✓ | ✓ | ✗ | ✗ | ✓ | ◐ | ◐ |
| **Goblin Tools (Magic ToDo)** | Breaks a task into small steps with a "spiciness" level; built for neurodivergent users | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| **Forest** | Focus timer where a tree grows during a session and dies if you open another app. Deep Focus blocks everything off your allowlist while a session runs and cannot be switched off mid-session. Time Guard schedules app blocks outside sessions. Plant Together syncs a session with friends, and if one gives up every tree dies | ◐ | ✓ | ✗ | ✗ | ◐ | ✗ | ✓ |
| **Opal** | Screen-time blocker. Rules block chosen apps and websites at set times of day across the week; a Focus Timer locks you in for a set length; Hard Mode cannot be switched off; breaks ask you to name the app, write your intention and set a timer | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ |
| **Flora** | Focus timer where a virtual tree grows while you stay off blocked apps and dies if you leave. Friends can plant together, there is a to-do list, and an opt-in paid service plants a real tree | ◐ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ |
| **Focusmate** | Video co-working sessions with a stranger (body doubling) | ✓ | ✓ | ✗ | ✗ | ◐ | ✗ | ✓ |
| **Notion / calendars** | General planning and notes | ◐ | ✗ | ✗ | ✗ | ◐ | ◐ | ✓ |
| **Canvas + Panopto** | The university's own course site and lecture recordings | ✗ | ✗ | ◐ | ✗ | ◐ | ✓ | ◐ |
| **LearnHarness** (our base) | Open-source AI tutor: probes what the learner knows, teaches by questioning, practises with retrieval, logs errors | ✗ | ✗ | ✓ | ◐ | ✗ | ◐ | ✓ |

### Notes per family
- **AI study modes** are the most-used tool in our sample (15/22 use a chatbot) and the least trusted (2/22 rate it best, Q-6). They wait to be asked, know nothing about the timetable unless pasted in, and take the student's prompt as the plan. They're strong at explaining, which is the problem students report *least* (Q-3).
- **Flashcard tools** are the evidence-backed recall tools (spaced repetition, retrieval practice) and score well on R. They don't help anyone start, and the cards come detached from the lecture that day unless the student builds them. Building them is effort, so it gets put off (Q-1 again).
- **Planners and ND tools** (Tiimo, Goblin Tools) are the only ones aimed at *starting*: tiny first steps, visual time, routines. They have no idea what you're studying, and they never test you.
- **Focus tools** (Forest, Flora, Focusmate) fix the middle of a session through commitment, blocking and social presence. Forest and Flora share one mechanic: a tree grows while you stay off other apps and dies if you leave. Forest is the stricter of the two and documents how: Deep Focus blocks everything off an allowlist and cannot be switched off part way through a session, so the lock enforces the commitment the dying tree only symbolises. Flora's page never says how its blocking works. Focusmate uses another person instead of a lock. Q-11 is a caution across all three: in our sample, social settings derailed sessions as often as they rescued them, so Plant Together and Focusmate carry a risk our own data has seen.
- **App blockers** (Opal, and Forest's Time Guard) are the only family besides planners that scores on starting, and Opal is the only tool in this whole table that scores both S and P without being a planner. It does it by scheduling: a rule fires at a set time of day and blocks the apps, in Opal's own words "so you don't have to remember". That is an implementation intention executed by software (LIT-3), which is the same mechanism our design claims. Forest reaches the same idea from the other direction with Time Guard, scheduling blocks outside sessions, which is why its P score moved to ◐. **Every one of them is blind to what the student is studying.** None knows the timetable, none has seen a lecture slide, and none asks a single question, so R, M and C are empty across the family. LIT-10 and LIT-11 also warn that blocking works best when the student picks the strictness and keeps an override, which Opal's Hard Mode and Forest's un-cancellable Deep Focus both deliberately remove.
- **The boundary between "timer" and "blocker" has gone.** Forest ships scheduled blocking, Opal ships a timer, and both enforce an allowlist. The useful distinction for us is no longer which category a tool belongs to. It is whether the tool knows what the student is supposed to be learning, and none of them does.
- **Canvas and Panopto** hold the course context (C) that every other tool lacks. They're passive archives: nothing reaches out, nothing tests.
- **LearnHarness** gives us a working engine for R and M (probe, question, retrieve, error log). It doesn't solve S, F, P or C. Those are exactly what our data says matter most.

## The gap
No tool does all three of these:
1. **Get the student started at the right moment.** Use the timetable to spot a free gap after a lecture and offer one short session with a defined goal (S, P, C; Q-1, Q-8, Q-10).
2. **Make that session active recall on what was just taught.** Practice questions drawn from that day's slides, in the mode the student prefers (R, M, C; Q-6, Q-7).
3. **Do it inside a strict attention budget.** Short sessions, 1-2 nudges a day (F, B; Q-4, Q-9).

Every existing tool covers one column group: planners do S/P, blockers do S/F/P through scheduling and locking, flashcards do R, AI modes do R/M on request, Canvas holds C. **Our design's claim is the combination,** with LearnHarness as the R/M engine and our work on S, P, C and B.

**Blockers are the closest thing to our start layer, and they stop exactly where we begin.** Opal will clear the student's phone at 14:00 on a Tuesday. It has no idea there was a lecture at 13:00, it cannot put that lecture's material in front of them, and when the block lifts nothing has been learned. A blocker removes the alternative to studying. It never supplies the studying. That distance is the design's whole claim, and it is now evidenced on both sides: Q-1 and AFF-A say students need the start, Q-6 and AFF-D say the session has to be active recall, and the blockers do the first and none of the second.

## What we borrow, and from whom
| From | Borrow | For |
|---|---|---|
| Goblin Tools | Breaking a task into tiny steps; a granularity control | The first 60 seconds of a session (S) |
| Tiimo | Visual time and gentle routines | Session length and progress display (F) |
| Anki / FSRS | Spaced resurfacing of missed items | The error log feeds later sessions (R) |
| AI study modes | Questioning before telling | The LearnHarness question flow (R, M) |
| Forest | A visible commitment for a fixed short block, and Deep Focus: an allowlist that holds for the whole session and cannot be cancelled part way | The in-session focus cue (F), and the lock inside a study block (S, F). Forest is the proof that the lock mechanic ships on a phone today |
| Opal | Blocks that fire on a weekly schedule, and breaks that ask you to name the app and write your intention before opening it | Study blocks that arrive without being remembered (S, P), and the 5-minute break inside a block |

## What we avoid
- **Opening on a blank chat box.** AI study modes do this, and it puts the planning load on the student (Q-11: "not at all intentional about what I wanted to achieve").
- **Notification spam.** Over 1-2 a day, two thirds of our sample switch off (Q-9).
- **Location tracking.** Only 3/22 would allow it (Q-10).
- **A separate "ND mode".** Our data doesn't support it (Q-12). The ND tools' best ideas (tiny steps, visual time) help everyone.

## Limitations
- This is a desk review of features from product pages and public write-ups, checked 8 Nov 2026, and 9 Nov 2026 for Opal and Flora. We didn't run usability tests on these products.
- **Claims we dropped as unverified.** Third-party reviews said Opal has preset blocking categories, that its breaks are capped at five minutes, and that an Android version exists. None of those appears in Opal's own description, which says "Only for iPhone", so none is used above. Flora's page does not say how its blocking works, so the table says what it does and not how. One review called Forest's blocking "soft", and another said Forest is a timer and not a blocker; both are contradicted by the developer's own page, which says Deep Focus cannot be turned off mid-session, so neither is used. No pricing is quoted for any of the three, because the figures in circulation disagree. Where a feature is gated behind a paid tier and that gating changes a score, it is stated.
- **Forest's v1 score was wrong and we found it ourselves.** This is a reminder that the rest of this table is still v1 judgement from product pages. A second group member should rescore the whole thing independently, and Forest is the evidence that it matters.
- Scores are our judgement against our lens. A second group member should rescore the table independently and we'll compare.
- Pricing and feature sets change quickly. Treat the table as a snapshot.

## Sources
- [Pearson: Gemini Guided Learning and ChatGPT Study Mode](https://pearson.com/international-schools/international-schools-blog/2026/02/what-is-gemini_s-guided-learning-and-chatgpts-study-mode-.html)
- [TechCrunch: Google's Guided Learning in Gemini](https://techcrunch.com/2025/08/06/google-takes-on-chatgpts-study-mode-with-new-guided-learning-tool-in-gemini/)
- [VentureBeat: Claude learning modes for students](https://venturebeat.com/ai/anthropic-takes-on-openai-and-google-with-new-claude-ai-features-designed-for-students-and-developers/)
- [Tiimo: AI planning](https://www.tiimoapp.com/product/ai-planning)
- [Warwick Library: Magic ToDo (Goblin Tools)](https://warwick.ac.uk/services/library/using/productivity-tools/magic-todo-gobin-tools)
- [ADD.org: ADHD tools for adults](https://add.org/adhd-tools-for-adults/)
- [Anki vs Quizlet comparison, 2026](https://dev.to/brainrash_edu/brainrash-vs-quizlet-vs-anki-honest-comparison-2026-1mh)
- [AI spaced-repetition apps deep dive, 2026](https://www.youngju.dev/blog/culture/2026-05-16-ai-spaced-repetition-memory-apps-2026-anki-ankihub-remnote-supermemo-quizlet-ai-mochi-cards-brainscape-classcard-memrise-deep-dive.en)
- [Forest: Deep Focus, Time Guard and Plant Together](https://forestapp.cc/) (checked 9 Nov 2026)
- [Opal: Focus Sessions, Focus Rules and Hard Mode](https://opalapp.com/focus-sessions) (checked 9 Nov 2026)
- [Opal: Screen Time Control, App Store listing](https://apps.apple.com/us/app/opal-screen-time-control/id1497465230) (checked 9 Nov 2026, developer's own description)
- [Flora: green focus](https://flora.appfinca.com/) (checked 9 Nov 2026)
- LearnHarness: github.com/amosblomqvist/learnharness (docs/teaching-methodology.md)
