# Behaviour change and notification design (T20)

Status: **v2, 18 Nov 2026.** Owner: KAYZ. Rubric criteria 6 (solution appropriateness) and 7 (domain understanding).

**What changed in v2:**
- **Week 8 models adopted.** The Week 8 slides ("Models of Behaviour Change", Canvas) set out ten models. Section 2.4 maps each one to our evidence and says which we use and which we decline. Transtheoretical stages stay rejected, with the lecture's own framing.
- **Interview evidence added.** INT-01 to INT-06 now sit beside the questionnaire and autoethnography in the diagnosis and the rules.
- **The 16 Nov sync decisions are built in:**
  - one app, with the phone getting students started and the laptop doing the learning;
  - a notification that is itself a single multiple-choice question;
  - a Sunday checklist;
  - calendar blocks;
  - optional leaderboards.

  R-1 and N-1 are rewritten for the single-question notification. R-8 (device roles) and N-5 (Sunday checklist) are new. R-6 now records the leaderboard tension.
- **The phone lock is still undecided** (`../meetings/lock-decision-brief.md`, X-8). This document gives notification rules for a block either way, and takes no side on the lock.

Everything below is built from our own findings, from literature verified on 8 Nov, and from the Week 8 slides.

Every finding ID is indexed in `../research/findings-register.md`. Literature IDs are `LIT-n` and are listed at the end.

---

## 1. Why this matters

The brief's hard requirements, as recorded in `../PLAN.md`:

> proactive as well as reactive; intervenes rather than just informing; uses external data or sensors plus user input; UX is central; follows UCD.

Three of those five land on this document. "Proactive as well as reactive" and "intervenes rather than just informing" are both claims about **when the system acts and what it asks the student to do**, which is a behaviour-change problem before it is an interface problem. "Uses external data or sensors plus user input" decides what a notification is allowed to know, and Q-10 has already fixed the answer.

This also has to carry criterion 6. A proactive app that interrupts people is the part of our design most likely to read as an unexplained feature, so every rule below cites the finding that forced it.

---

## 2. Frameworks

Three, chosen because each answers a different question our evidence raises. Each is applied to our data below it, and none is summarised for its own sake.

### 2.1 Fogg's Behaviour Model (LIT-1): where to put the prompt

Fogg's model holds that a behaviour happens when motivation, ability and a prompt occur at the same moment, and that a prompt only works where motivation and ability are already sufficient. Fogg's own design guidance is that **ability is the more reliable lever**, because raising motivation is slow and unreliable while making a behaviour easier is something a designer controls.

**Applied to us.** Q-8 says 19 of 22 welcome an unprompted quiz in a free gap, so motivation to study is not our bottleneck. Q-1 and AFF-A say the bottleneck is getting into a session. In Fogg's terms, our students sit high on motivation and low on ability at the moment of starting, which is exactly the case where a prompt pays and where the work goes into lowering the cost of the first step. AE2-P15 is the clean demonstration: a participant with the competence to answer correctly still quit, because the cost of continuing was high and no amount of motivation fixed that.

This is also why our prompt is not a reminder. A reminder raises salience and leaves ability untouched. Our notification has to arrive carrying the session with it.

*Note on terminology:* the 2009 paper calls the third element a trigger; Fogg later renamed it a prompt, and published summaries differ on the acronym. This document says prompt and avoids the acronym.

### 2.2 COM-B and the Behaviour Change Wheel (LIT-2): which lever we are pulling

Michie, van Stralen and West hold that behaviour sits at the centre of three conditions, capability, opportunity and motivation, and that an intervention works by changing one or more of them. The wheel then maps those onto nine intervention functions.

**Applied to us.** Diagnosing our problem through COM-B separates three things our findings keep tangling together.

| COM-B condition | What our data says | Design response |
|---|---|---|
| **Capability** (psychological) | Students know how to study. Q-3 says understanding is the rarest problem, picked by 1 of 22. The gap is in planning and self-regulation: Q-11 shows sessions failing with no goal set, and AE2-P15 shows competence without continuation | Do not teach study skills. Remove the planning step by supplying the goal |
| **Opportunity** (physical) | Free gaps exist and are visible in the timetable. Q-10 allows us to read it. AFF-F wants content organised by course week | Sense the gap and act inside it. This is the "external data" the brief requires |
| **Motivation** (reflective and automatic) | Already present. Q-8: 19 of 22 welcome the nudge. AE2-10 is a student who wanted to learn and still judged the tool unhelpful at starting | Do not spend design effort here. Protect it instead, by not annoying people into switching off (Q-9) |

The honest reading is that our intervention is almost entirely **capability and opportunity**, and that the wheel's motivational functions (incentivisation, coercion) are ones we deliberately decline. That decision is in section 6.

### 2.3 Implementation intentions (LIT-3): the shape of the prompt itself

Gollwitzer distinguishes a goal intention, which names an endpoint, from an implementation intention, which specifies when, where and how the goal will be pursued, in the form "Whenever situation x arises, I will initiate the goal-directed response y". The plan delegates control of the response to an anticipated situational cue.

**Applied to us.** Our students already hold the goal intention: Q-8 and AE2-P3 both show them naming what they want help with. What is missing is the if-then. Q-11's failures read as goal intentions with no implementation intention attached, including the respondent who had "no goal for the session" and spent an hour rewriting notes.

A timetable-triggered notification **is** an implementation intention, formed by the system on the student's behalf and executed by the system, so the student never has to remember it. "When your 13:00 lecture ends and your next two hours are free, start five questions on what was just taught" is Gollwitzer's structure with the situational cue supplied by sensing. This is the clearest theoretical justification we have for the whole proactive mechanism, and it is what separates our design from a planner that asks the student to form the plan themselves (`../research/existing-solutions.md`: Tiimo and Notion both score ◐ or ✗ on starting).

### 2.4 The Week 8 models, applied (new in v2)

The Week 8 slides present ten models of behaviour change. LIT-1 to LIT-3 already cover three of them. The table takes all ten against our evidence. It cites the slides as the source. Primary references for the new seven belong in the literature review (T09, KAYZ), which gives them LIT IDs; they are not added here, to keep the numbering in one place.

| Model (Wk 8) | Core idea | What our evidence says | Used for |
|---|---|---|---|
| **COM-B** | Behaviour needs capability, opportunity and motivation | Section 2.2. Capability and opportunity are the gaps, not motivation (Q-3, Q-8, INT-05-a) | **Used:** the diagnosis |
| **Fogg Behaviour Model (B=MAP)** | Motivation, ability and a prompt at the same moment. Prompts succeed above the action line and fail below it | Section 2.1. Our students sit high on motivation and low on ability at the moment of starting (Q-8, Q-1, INT-03-a) | **Used:** where the prompt goes, and why it must lower cost |
| **Transtheoretical model** | Stages of change, from pre-contemplation to maintenance, with relapse | Built for readiness that develops over months. Our students are already at preparation or action (Q-8, INT-05-a). Relapse is still useful: INT-01-i shows a punished lapse ending use altogether | **Not used as a model.** Relapse only, through R-6 (forgiving return) |
| **Dual process theory** | A fast, impulsive, associative system and a slow, rational one. Most behaviour runs on the fast one | The phone pull is fast-system behaviour (INT-03-b, INT-04-b, AFF-M). Deciding to study is slow-system work, and it loses (INT-02-d) | **Used:** the single-question notification makes studying the fast, easy option. Tapping an answer needs no plan (R-1, N-1) |
| **Goal setting theory** | Goals work when they have clarity, challenge, commitment, feedback, and complexity kept achievable | Sessions fail with no goal set (Q-11). Students want the "tiniest step" (INT-04-e). Too many resources paralyse (INT-02-b, AFF-K) | **Used:** every session states one clear goal (clarity), starts at the edge of ability (challenge), shows the answer straight away (feedback), and opens on a first step small enough to be achievable (complexity). R-4 |
| **Social cognitive theory** | Behaviour comes from personal, behavioural and environmental factors acting on each other | Place commits people (AFF-J: INT-03-d, INT-05-b, INT-06-d). Friends derail sessions (INT-03-e, INT-06-c) | **Used:** environment is a lever in its own right. The calendar block names a place, and the sketch's "where are you?" prompt is the proposal (R-9) |
| **Bounded rationality** | People satisfice: they take a good-enough option under uncertainty, using heuristics | Too many resources and no order make studying an "insurmountable task" (INT-01-e, INT-02-b) | **Used:** the app chooses the next step, so the student never has to search for it (R-4, F concept in T10) |
| **Prospect theory** | Losses feel larger than equal gains, and value is judged against a reference point | Streaks work by threatening a loss. That is exactly what made INT-01 abandon Anki, with 2,000+ lapsed cards (INT-01-i) | **Used to decline:** no streaks, no "overdue" counts (R-6). The same reasoning puts leaderboards under test, not by default |
| **Theory of planned behaviour** | Attitude, subjective norm and perceived behavioural control form intention, which drives behaviour | Attitude is positive (Q-8). Perceived control is low at the start (INT-04-e). Subjective norm cuts both ways: social pressure put INT-02 off (INT-02-a), and friends derail sessions | **Used:** raise perceived control with a small first step. Treat norm-based features (leaderboards, study pacts) as risky and test them (R-6) |
| **Implementation intentions** | "If this cue, then that response" | Section 2.3. Students hold the goal but not the if-then (Q-11) | **Used:** the timetable supplies the cue (N-1); the Sunday checklist lets the student set their own if-then for the week (N-5) |

**What the lecture adds to v1.** Dual process theory and goal setting theory explain why the single-question notification works better than a "time to study" reminder. A reminder asks the slow system to make a decision. A question asks the fast system to tap an answer, and the first step is done before the student has decided anything. Prospect theory gives the formal reason R-6 refuses streaks.

### Frameworks considered and not used
- **Transtheoretical "stages of change"** is not used as a model (see 2.4). It describes readiness that develops over months. Our problem is a single moment inside a day, and Q-8 shows readiness is already there.
- **Gamification, streaks and points** were considered and dropped. Our anti-persona work (`personas.md`) and AFF-D both say the reward has to be the learning, and prospect theory (2.4) explains why loss-framed mechanics backfire. **Leaderboards are the exception the 16 Nov sync kept, as optional.** R-6 says how we handle them.

---

## 3. Diagnosis

Putting the three together gives one sentence: **our students are motivated, capable of studying, and stuck at the start, so the intervention belongs at the moment of starting and its job is to lower cost.**

| Finding | What it tells us | Which framework reads it |
|---|---|---|
| Q-1, Q-2, Q-11, AFF-A (convergence C-1) | Starting and sustaining are the top problems, and bad sessions fail at the start | Fogg: low ability at the moment of action |
| Q-8 (19/22 welcome a nudge) | Motivation is not the bottleneck | Fogg, COM-B: motivation is sufficient |
| Q-9 (1-2 a day before switching off) | Attention is the scarce resource, and we can exhaust it | LIT-4, LIT-5: disruption and discontinuation |
| Q-10 (timetable 21/22, slides 19/22, location 3/22) | The permitted sensing set | COM-B: physical opportunity |
| Q-11, AE2-P1, AE2-1 | A session with no stated goal fails; a blank opening screen is a cost | Gollwitzer: the missing if-then |
| AE2-P14, AE2-P15, AE2-10 | Cost accumulates and people quit even when able | Fogg: ability is the lever |
| Q-4 (drift inside 20 minutes), AFF-C | Whatever we start has to be short | Fogg: shorter is more able |
| INT-01-a, INT-03-a, INT-04-a, INT-05-a, INT-06-a (5 of 6) | Starting is the barrier, and it is worst when nothing is urgent | Fogg, COM-B: the non-urgent week is where the prompt has to work |
| INT-02-d, INT-03-b, INT-04-b, INT-05-d, INT-06-c (5 of 6), AFF-M | The phone is the main pull | Dual process: the fast system wins unless studying is the easier option |
| INT-04-e, INT-01-e, INT-02-b, AFF-K | The missing first step, and too many resources | Goal setting, bounded rationality: supply one clear, achievable step |
| INT-04-f, INT-05-g, INT-06-g | The post-lecture quiz is welcome if single and well timed | Fogg, LIT-4: one prompt at a breakpoint |
| INT-03-c, INT-05-h | Fixed timers break flow; blocks must be adjustable | LIT-10, LIT-11: the student sets the strictness |
| INT-01-i, INT-02-a | Punishing progress and social pressure drive people away | Prospect theory, theory of planned behaviour: no loss framing, norms with care |

**The one thing this diagnosis rules out.** We are not building motivation features. No streaks, no points and no guilt. Q-8 says the motivation is there, and Q-9 says our real risk is spending the goodwill we already have. *v2 note:* the 16 Nov sync kept leaderboards as an optional feature. This diagnosis does not support them, so R-6 sends them to testing, off by default.

---

## 4. Notification design rules

Each rule cites the findings that force it and the literature that supports it. These are the rules Jiven's hi-fi (T21) and Lekan's heuristic checklist (T22) should both be able to check against.

**R-1. One or two notifications a day, hard cap, default one. The default notification is itself the first question.**
*v2:* the 16 Nov sync made the notification a single multiple-choice question that can be answered from the lock screen. That keeps us inside the budget, because a prompt that is already the first step doesn't need a follow-up. INT-05-g: "really, really great" if limited to one notification. INT-04-f and INT-06-g want it timed to when they're receptive, and are put off by it otherwise. **Interface limit:** Android shows at most three action buttons on an expanded notification, so the question is three-option on the phone. That's a platform constraint, not a teaching choice (`../research/ui-research-lofi.md`).
Q-9: 15 of 22 switch off beyond 1-2 a day; nobody chose "none", so the budget is real and non-zero. LIT-5 found perceived disruption varies with the ongoing task's type, completion level and complexity, which we cannot always sense, so the safe move is to send few. LIT-4 adds the consequence of getting it wrong: badly timed interruptions were rated less respectful, and loss of attributed respect is linked to users discontinuing an application.

**R-2. Timetable and lecture materials only. Never location.**
Q-10: location was acceptable to 3 of 22, against 21 for timetable and 19 for slides and recordings. This is a user-set limit, not a technical one, and it is also the brief's "external data" requirement satisfied inside what students permit. Caution from X-5 in the findings register: Q-5 says 11 of 22 do not watch recordings at all, so **slides and the timetable are the dependable sources and recordings are not**.

**R-3. Fire at a breakpoint, such as the minutes just after a lecture ends.**
LIT-4 is the direct support. Adamczyk and Bailey found that interrupting at predicted best points produced significantly less annoyance, frustration and time pressure, required less mental effort, and was rated more respectful of the primary task, against both random and worst timings. **State the limit honestly:** in that study the timing did not produce a main effect on time on task, so the evidence is about how the interruption feels and how the application is judged. For us that is the relevant outcome, because Q-9 says feeling is what makes people switch notifications off. Q-8's scenario already put the nudge in a free gap, and 19 of 22 welcomed it there.

**R-4. Every notification opens straight into a session with its goal already stated.**
AE2-P1: a welcome screen that removes objections and gives no reason to start. AE2-1: six setup steps before the first question. Q-11: sessions failed with no goal set. Gollwitzer (LIT-3) requires the response to be specified, not just cued, so the notification has to name the behaviour and the tap has to deliver it. No blank page, no menu, no settings. The first question is on screen when the session opens.

**R-5. Snooze and resume, and never lose a session to an interruption.**
AFF-B: three of eight Q12 failures were a friend, a co-worker or a spilt drink. AE2-P12 and AE2-P8: students want to defer and switch, not commit. A snooze is also our safety valve against R-1, because a deferred notification is not a spent one.

**R-6. No streak punishment, and no guilt.**
AFF-D and Q-6 say the reward is the learning. The anti-persona in `personas.md` exists to stop us building engagement mechanics. AE2-P14 is the direct warning: a participant describing himself as "fidgety and anxious" trying to get through a setup flow. Adding loss-framed streaks to that is a harm, and it also risks the motivation COM-B says we already have. *v2:* INT-01-i is the interview version: a lapse of 17 days produced 2,000+ overdue cards, and he stopped. Prospect theory (2.4) is the mechanism, because a streak is a loss waiting to happen.

**Leaderboards (kept as optional at the 16 Nov sync).** They pull against this rule. A leaderboard is a subjective norm (theory of planned behaviour), and our only interview evidence on social comparison is negative: INT-02-a felt social pressure and missing out. The existing-solutions review shows both directions in the market: Seneca invites students to "compete with your friends", while Memrise says it "is not a gamified flashcard app". **Proposed by KAYZ for group review:** leaderboards are off by default, switched on in Settings, and tested in T18 as a variable. If testers who switch them on start more sessions and nobody reports pressure, they stay.

**R-7. Show what the app knows and why it is here.**
AFF-H is new in affinity v1.1 and it is about opacity: AE2-2 (a wait with no progress), AE2-4 (work the student could not account for), AE2-7 (a notation never introduced). A proactive app that appears unbidden has to answer "why now" in the notification itself. AE2-P13 shows this working: the demo labelling on sample calendar data was noticed unprompted and accepted.

**R-8. The phone starts, the laptop teaches (new in v2, from the 16 Nov sync).**
Every phone notification ends in one of two places. One is a single answered question. The other is a handover to the laptop session, which opens on the next question. Learning sessions do not run on the phone, because the phone is the distraction (AFF-M: 5 of 6). LIT-6 found that a phone in reach costs attention even when idle. **What this rule does not claim:** no participant was asked where they want to learn, so device roles are an inference from the distraction evidence. T16's QOC compares this split against all-on-phone and all-on-laptop (16 Nov action), and T18 tests the handover.

**R-9. The block names a place (proposal, new in v2).**
Place is a commitment device for 4 of 6 (AFF-J). Social cognitive theory treats environment as a cause of behaviour, not a backdrop. When a block starts, the app asks where the student is, and suggests a quieter spot or putting the phone out of reach. It never senses location (R-2). **Proposed by KAYZ for group review.** It comes from the rough sketch (`../prototype/sketch/`), and the 16 Nov sync did not discuss it.

---

## 5. Five concrete notification designs

Wording is given exactly and every line is under 90 characters, because Android and iOS both truncate around there and a truncated prompt breaks R-4.

### N-1. The post-lecture gap (primary, Tayo's flow)
- **Trigger.** A timetabled lecture ends, and the timetable shows 45 minutes or more free.
- **Timing.** 5 minutes after the end time, once per day maximum.
- **Wording (v2, the notification is the question).** Title: `HCI just finished. One question:` Body: the question, under 90 characters. Three answer buttons (R-1).
- **On answer.** The answer is marked on the lock screen with a one-line explanation. Then one choice: `4 more on your laptop` (hands over to the session, R-8) or `Done for now`. Either way the first step has happened.
- **v1 wording, kept as the fallback** if a question can't be written short enough: `HCI just finished. 5 questions on it, about 10 minutes?`, opening the session with question 1 on screen.
- **Evidence.** Q-8 (19/22 welcome exactly this scenario), Q-1, Q-10, AFF-A, AFF-F, LIT-1 (prompt at high ability), LIT-3 (the if-then), LIT-4 (fires at a breakpoint).
- **Scenario.** This is S-1 in `personas.md`.

### N-2. The resurfaced miss (spaced, inside the same budget)
- **Trigger.** An item missed in an earlier session is due for retest, and a free gap exists.
- **Timing.** Only if N-1 has not fired today. Never two in a day without a snooze having been used.
- **Wording.** `The one you missed on Tuesday. 3 questions, about 4 minutes.`
- **On tap.** Opens a short retest of the missed items only.
- **Evidence.** AFF-E, AE-6, AE-2, AE-8 (retesting weak spots fixed most misses), Q-6, R-1.
- **Honest flag.** AFF-E is single-method (C-6 in the register), so this design is the least well-evidenced of the four and should be the first cut if the hi-fi scope tightens.

### N-3. The missed lecture, an offer the student can ignore (Maya's flow)
- **Trigger.** A timetabled lecture was not attended and its slides are available. Fires at most once per week.
- **Timing.** Evening, at a time the student has previously opened the app, never during a timetabled commitment.
- **Wording.** `Missed Tuesday's lecture? Here it is in three 5-minute pieces.`
- **On tap.** Opens the first piece, with the other two visible and skippable.
- **Evidence.** Q-4 (7/22 attended no lectures in the fortnight), Q-5 (recordings are not the channel, so this is slides), AFF-C (one piece at a time), AE-5, scenario S-2 in `personas.md`.
- **Why it is offered and not pushed.** Q-5 and X-5 say we cannot assume the material is rich for that student, and a weekly cap keeps R-1 intact.

### N-4. The snooze return
- **Trigger.** The student snoozed a notification.
- **Timing.** At the next free gap they chose, or the next day at the same point in their timetable.
- **Wording.** `Picking up where you left off. 4 questions left, about 6 minutes.`
- **On tap.** Resumes the exact question the session stopped on.
- **Evidence.** AFF-B, AE2-P12, AE2-P8, R-5. AE2-P8 is the reason the time estimate is on the notification and the length was never fixed in advance.

### N-5. The Sunday checklist (new in v2, from the 16 Nov sync)
- **Trigger.** Sunday evening, at a time the student chose in onboarding. Once a week.
- **Wording.** `Next week: 3 lectures, 2 free gaps. Set your study blocks?`
- **On tap.** A checklist of next week's lectures, with suggested blocks in free gaps. The student ticks, moves or removes each one. Ticking a block sets the cue for N-1 and the calendar block.
- **Evidence.** INT-05-h plans in weeks and needs to move blocks, and INT-03-d plans the day the night before. LIT-3: the student forms the if-then themselves, which is the strongest version of an implementation intention. LIT-10: the student chooses. Goal setting theory: commitment comes from setting the goal yourself.
- **Budget.** N-5 counts as Sunday's one notification.

**What is deliberately absent.** No "you haven't studied in 3 days". No streak broken message. No notification that exists only to bring the student back into the app. Each of the five carries either a session with a stated goal (R-4) or, for N-5, the plan that sets those sessions up.

---

## 6. Risks and ethics

**Over-nudging.** Our whole mechanism depends on a budget we have one number for (Q-9, n = 22, self-reported in the abstract and never measured in use). If the real tolerance is lower, every design above is too aggressive. LIT-4's finding that poorly timed interruptions are judged disrespectful, and that this is linked to discontinuing use, is the mechanism by which we would lose users without ever seeing it in a usability test. **Mitigation:** default to one a day, measure switch-off in T23, treat any opt-out as a failed design, never as a user preference.

**Dark patterns.** A proactive app that opens straight into a task is, structurally, the same machinery as an engagement loop. The difference is what it is pointed at. We decline incentivisation and coercion from the Behaviour Change Wheel (LIT-2) on purpose, and that decision should be visible in the deck, because a marker is entitled to ask why a study app needs notifications at all. Our answer is Q-1 and C-1, and it has to stay our answer.

**The anxiety in AE2-P14.** The participant described himself as fidgety and anxious while working through an onboarding flow, and then described the people who finish such flows as "the people that will do this will have no problem with studying". A nudging app aimed at students who struggle to start can make that worse: a notification is a demand, and an unmet demand accumulates. **Mitigation:** snooze is always one tap and never asks why, nothing is ever marked overdue, and no notification references a previous notification the student ignored.

**Sensing and consent.** Reading a timetable is reading a student's day. Q-10 gives permission and permission is not a free hand. The app should show what it read and when (R-7), and deleting that data should be one action, following the pattern Rahul's spike already uses (`../onboarding/README.md` describes a delete-all-my-data control).

**The neurodivergence trap.** Q-12 found no clear difference at n = 22. It would be easy to justify aggressive nudging as an accessibility feature for ADHD students. Our data does not support a separate mode and `personas.md` already says so, so behaviour-change intensity is a per-person setting and never a diagnosis-shaped default.

---

## 7. Limitations

- **The Week 8 models are cited from the slides, not from primary sources.** Their references go into the literature review (T09, KAYZ), which will give them LIT IDs. Until then, section 2.4 rests on the lecture's own summaries.
- **The literature review is still in progress.** T09 is now owned by KAYZ (16 Nov sync). LIT-1 to LIT-5 were found and verified for this document alone. They are not a systematic review, and there is no claim that they are the strongest five.
- **The single-question notification is untested** and depends on writing good three-option questions under 90 characters. If that proves hard for some content, N-1 falls back to its v1 wording.
- **The phone and laptop roles (R-8) are inferred,** not asked. See R-8.
- **The notification budget rests on one self-report question** (Q-9) from 22 people who were imagining an app, not using one. Stated tolerance and actual tolerance are different measurements.
- **LIT-4 is a desktop laboratory study** from 2004, with tasks that are not studying. LIT-5 is mobile and in the wild, and it found that disruption depends on task type, completion level and complexity, which we can only partly sense from a timetable. Neither was run on students between lectures.
- **None of these designs has been tested.** The wordings are drafts. T18 and T23 are where they get evaluated, and R-1's cap is the first thing to check.
- **The four designs assume the timetable is accurate and machine-readable.** We have not established how Birmingham's timetable can be accessed, and a sensing design that cannot sense is a prototype limitation to declare at the viva.

---

## Literature (LIT-n)

All five verified against primary sources on 8 Nov 2026: author, year, venue and the specific claim used.

| ID | Source | Used for | Verified |
|---|---|---|---|
| **LIT-1** | Fogg, B. J. (2009). A behavior model for persuasive design. *Proceedings of the 4th International Conference on Persuasive Technology (Persuasive '09)*. DOI 10.1145/1541948.1541999 | Behaviour needs motivation, ability and a prompt at the same moment; ability is the more reliable lever | ACM DOI record and the Stanford Behavior Design Lab's own page |
| **LIT-2** | Michie, S., van Stralen, M. M., & West, R. (2011). The behaviour change wheel: a new method for characterising and designing behaviour change interventions. *Implementation Science*, 6:42. DOI 10.1186/1748-5908-6-42 | COM-B: capability, opportunity, motivation; nine intervention functions | PubMed Central record PMC3096582 |
| **LIT-3** | Gollwitzer, P. M. (1999). Implementation intentions: strong effects of simple plans. *American Psychologist*, 54(7), 493-503. DOI 10.1037/0003-066X.54.7.493 | Goal intentions against implementation intentions; the "whenever situation x arises, I will initiate response y" form | Author's own repository copy at the University of Konstanz |
| **LIT-4** | Adamczyk, P. D., & Bailey, B. P. (2004). If not now, when? The effects of interruption at different moments within task execution. *CHI '04*, Vienna, 271-278 | Best-point interruptions produced less annoyance, frustration, time pressure and mental effort, and were rated more respectful. **No main effect on time on task** | Full paper text read directly |
| **LIT-5** | Mehrotra, A., Pejovic, V., Vermeulen, J., Hendley, R., & Musolesi, M. (2016). My phone and me: understanding people's receptivity to mobile notifications. *CHI '16*, 1021-1032 | Response time and perceived disruption vary with presentation, alert type, sender-recipient relationship and the ongoing task's type, completion level and complexity; even useful content can disrupt | Full paper text read directly |

**Nothing was dropped as unverifiable.** All five candidate sources checked out.

**Numbering note (v2).** T20 holds LIT-1 to LIT-5, and `../research/literature-phones.md` holds LIT-6 to LIT-12. The literature review (T09) starts at LIT-13.

*LIT-5 note:* three of its five authors were at the University of Birmingham at the time of publication, including the lead author and Robert Hendley. Worth a line in the deck.
