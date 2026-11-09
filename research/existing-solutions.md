# Existing solutions review (T08)

Status: v1.1, 9 Nov 2026. Owners: KAYZ (Rahul to add theory links). Rubric criteria 6 (solution appropriateness) and 7 (domain understanding).

**Changes in v1.1 (9 Nov).** Added app blockers, which v1 missed entirely. Opal and Flora are scored below and their features were checked against the developers' own pages on 9 Nov 2026. This matters now because the study-block concept proposed for the 10 Nov sync is, mechanically, an app blocker with a lesson inside it (`../meetings/2026-11-10-sync.md`), and the phone literature went in the same day (`literature-phones.md`, LIT-6 to LIT-12).

**Finding Forest's score was wrong set off a full rescore of the table.** Every tool has now been checked against the developer's own pages, or marked as unverifiable. Four scores changed and three rows could not be re-verified at all. The whole audit is in "The rescore" below, kept in the document on purpose: a table that was wrong once and got corrected is better evidence of process than a table that was always right (rubric criteria 5 and 8).

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
| **Anki** | Free spaced-repetition flashcards. FSRS is available as an **optional** scheduler, turned on in deck options; the default remains the legacy SM-2 algorithm. The mobile apps can give one daily review reminder at a time you set; the desktop app has none | ✗ | ◐ | ✓ | ✗ | ◐ | ✗ | ✓ |
| **Quizlet (Learn, AI features)** | Flashcards and adaptive quiz rounds; generates sets from notes. **Not re-verified:** quizlet.com refuses automated requests, so this row is still v1 judgement | ✗ | ◐ | ✓ | ✗ | ◐ | ◐ | ◐ |
| **Tiimo** | Visual planner built with ADHD and autism in mind. AI makes step-by-step plans with time estimates, plus a focus timer. Widgets and Live Activities show what is next without opening the app. Its page states no notifications and no external calendar sync | ✓ | ✓ | ✗ | ✗ | ◐ | ✗ | ◐ |
| **Goblin Tools (Magic ToDo)** | Breaks a task into small steps; built for neurodivergent users. Also ships Taskmaster, which walks you through one task at a time, and Professor, which explains things. No reminders, no calendar, nothing that tests you | ✓ | ◐ | ✗ | ✗ | ✗ | ✗ | ✓ |
| **Forest** | Focus timer where a tree grows during a session and dies if you open another app. Deep Focus blocks everything off your allowlist while a session runs and cannot be switched off mid-session. Time Guard schedules app blocks outside sessions. Plant Together syncs a session with friends, and if one gives up every tree dies | ◐ | ✓ | ✗ | ✗ | ◐ | ✗ | ✓ |
| **Opal** | Screen-time blocker. Rules block chosen apps and websites at set times of day across the week; a Focus Timer locks you in for a set length; Hard Mode cannot be switched off; breaks ask you to name the app, write your intention and set a timer | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ |
| **Flora** | Focus timer where a virtual tree grows while you stay off blocked apps and dies if you leave. Friends can plant together, there is a to-do list, and an opt-in paid service plants a real tree | ◐ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ |
| **Focusmate** | Video co-working sessions with a stranger (body doubling) | ✓ | ✓ | ✗ | ✗ | ◐ | ✗ | ✓ |
| **Notion / calendars** | General planning and notes. Notion reminders fire at a set date and time by push and email, and **recurring reminders do not exist**, so a weekly study block cannot be set as a repeating prompt | ◐ | ✗ | ✗ | ✗ | ◐ | ◐ | ✓ |
| **Canvas + Panopto** | The university's own course site and lecture recordings. Canvas holds course content, a course calendar and quizzes students complete. Panopto captions and indexes recordings so every spoken word is searchable. **Canvas student notification settings could not be re-verified**, so P and B stay v1 judgement | ✗ | ✗ | ◐ | ✗ | ◐ | ✓ | ◐ |
| **LearnHarness** (our base) | Open-source AI tutor: probes what the learner knows, teaches by questioning, practises with retrieval, logs errors. **The only row scored from first-hand use** (AE2-1 to AE2-11), not from a product page | ✗ | ✗ | ✓ | ◐ | ✗ | ◐ | ✓ |

### The rescore (9 Nov)

v1 scored all twelve rows from product pages read at a glance. Finding Forest's P score wrong prompted a recheck of every row against the developer's own documentation.

**Scores that changed.**

| Tool | Cell | v1 | v1.1 | Why |
|---|---|---|---|---|
| Forest | P | ✗ | ◐ | Time Guard schedules app blocks outside sessions, so it acts without being opened. It stays at ◐ because it is free for one app or site only and it never starts a study session |
| Tiimo | P | ✓ | ◐ | Tiimo's own page states no notifications. It has widgets and Live Activities that show what is next without opening the app, which is weaker than acting on you |
| Tiimo | C | ◐ | ✗ | Its page states no external calendar sync. The sync it describes is between your own devices, so it never sees a university timetable |
| Goblin Tools | F | ✗ | ◐ | Taskmaster, which walks you through one task at a time, was not in v1 |

**One description corrected.** v1 said Anki uses "FSRS scheduling". FSRS is an **optional** scheduler turned on in deck options, and the default is still the legacy SM-2 algorithm. Anki's P ◐ also needed justifying: the desktop app has no reminders at all, and the mobile apps can give one daily review reminder at a time the user sets.

**Three rows that could not be re-verified, and are flagged as such in the table.**

| Row | Why | What we did |
|---|---|---|
| Quizlet | quizlet.com refuses automated requests on every path tried | Kept the v1 score, marked unverified. Third-party reviews claim Learn mode has moved behind a paywall and that Quizlet has acquired an AI note-taking tool. Neither is used, because neither is first-party |
| Canvas student notifications | The Canvas student notification guide returned 404, and Instructure's marketing page states deadline reminders for **parents** only | Kept P ◐ and B ◐ as v1 judgement, flagged in the row |
| The three AI study modes | OpenAI's study-mode page refuses automated requests, and no current official documentation was reachable for any of the three | Scores unchanged and still correct in substance: all three are modes the user turns on, none has reminders. The evidence is 2025 press coverage, not 2026 official docs |

**What the rescore did not change.** Focusmate, Notion, Canvas's C and R, and LearnHarness all held. Two of those are now better evidenced: Focusmate books a session of 25, 50 or 75 minutes with a live partner you must stay on camera for, and sends a calendar invite; LearnHarness is the only row in the table scored from first-hand use (AE2-1 to AE2-11), not from a product page.

**The most useful thing the rescore turned up** has nothing to do with scores. **Notion has no recurring reminders.** They are on its roadmap and they do not exist. Notion is the planning tool a large share of students already use, and it cannot set a repeating weekly study prompt. The study-block concept proposed for the 10 Nov sync depends on exactly that, so this is a gap in the tool students already have, not just in the ones they do not.

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
- **Forest's v1 score was wrong and we found it ourselves,** which is why the whole table was rechecked on 9 Nov. Four scores changed and three rows could not be verified at all. See "The rescore". A second group member should still score the table independently, because every judgement here is one person's reading of a product page, and the Forest error shows what that is worth.
- **Scores are feature presence, not quality.** A ✓ means the tool does the thing, with no claim about how well. We have used exactly one of these twelve (LearnHarness, AE2-1 to AE2-11) and it scored ✓ on recall while a session with it concluded that it does nothing about starting (AE2-10). That gap between a tick and an experience is the honest limit of this whole method.
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
- [Anki: what it does](https://apps.ankiweb.net/) and [deck options, including FSRS](https://docs.ankiweb.net/deck-options.html) (checked 9 Nov 2026)
- [Tiimo](https://www.tiimoapp.com/) (checked 9 Nov 2026)
- [Goblin Tools](https://goblin.tools/) (checked 9 Nov 2026)
- [Focusmate](https://www.focusmate.com/) (checked 9 Nov 2026)
- [Notion: reminders](https://www.notion.com/help/reminders) (checked 9 Nov 2026)
- [Canvas](https://www.instructure.com/canvas) and [Panopto features](https://www.panopto.com/features/) (checked 9 Nov 2026)
- [Forest: Deep Focus, Time Guard and Plant Together](https://forestapp.cc/) (checked 9 Nov 2026)
- [Opal: Focus Sessions, Focus Rules and Hard Mode](https://opalapp.com/focus-sessions) (checked 9 Nov 2026)
- [Opal: Screen Time Control, App Store listing](https://apps.apple.com/us/app/opal-screen-time-control/id1497465230) (checked 9 Nov 2026, developer's own description)
- [Flora: green focus](https://flora.appfinca.com/) (checked 9 Nov 2026)
- LearnHarness: github.com/amosblomqvist/learnharness (docs/teaching-methodology.md)
