# Behaviour change and notification design (T20)

Status: **v1, 8 Nov 2026.** Owner: KAYZ. Rubric criteria 6 (solution appropriateness) and 7 (domain understanding).

**This is v1 and it will be revised.** The Week 8 lecture on heuristics and behaviour change arrives on 16 Nov, and T20 is due Fri 20 Nov. Everything below is built from our own findings and from literature verified on 8 Nov. Where the lecture introduces a framework or a term the module expects us to use, v2 adopts it and says what changed.

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

### Frameworks considered and not used
- **Transtheoretical "stages of change"** was considered and dropped. It models readiness to change a health behaviour over months. Our problem is a single moment inside a day, and Q-8 shows readiness is already there.
- **Gamification, streaks and points** were considered and dropped. Our anti-persona work (`personas.md`) and AFF-D both say the reward has to be the learning. Section 6 says more.

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

**The one thing this diagnosis rules out.** We are not building motivation features. No streaks, no points, no leaderboards, no guilt. Q-8 says the motivation is there and Q-9 says our real risk is spending the goodwill we already have.

---

## 4. Notification design rules

Each rule cites the findings that force it and the literature that supports it. These are the rules Jiven's hi-fi (T21) and Lekan's heuristic checklist (T22) should both be able to check against.

**R-1. One or two notifications a day, hard cap, default one.**
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
AFF-D and Q-6 say the reward is the learning. The anti-persona in `personas.md` exists to stop us building engagement mechanics. AE2-P14 is the direct warning: a participant describing himself as "fidgety and anxious" trying to get through a setup flow. Adding loss-framed streaks to that is a harm, and it also risks the motivation COM-B says we already have.

**R-7. Show what the app knows and why it is here.**
AFF-H is new in affinity v1.1 and it is about opacity: AE2-2 (a wait with no progress), AE2-4 (work the student could not account for), AE2-7 (a notation never introduced). A proactive app that appears unbidden has to answer "why now" in the notification itself. AE2-P13 shows this working: the demo labelling on sample calendar data was noticed unprompted and accepted.

---

## 5. Four concrete notification designs

Wording is given exactly and every line is under 90 characters, because Android and iOS both truncate around there and a truncated prompt breaks R-4.

### N-1. The post-lecture gap (primary, Tayo's flow)
- **Trigger.** A timetabled lecture ends, and the timetable shows 45 minutes or more free.
- **Timing.** 5 minutes after the end time, once per day maximum.
- **Wording.** `HCI just finished. 5 questions on it, about 10 minutes?`
- **On tap.** Opens the session. Goal line visible ("5 questions on mental models, about 10 minutes"), question 1 already on screen.
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

**What is deliberately absent.** No "you haven't studied in 3 days". No streak broken message. No notification that exists only to bring the student back into the app. Every one of the four carries a session with a stated goal, which is R-4.

---

## 6. Risks and ethics

**Over-nudging.** Our whole mechanism depends on a budget we have one number for (Q-9, n = 22, self-reported in the abstract and never measured in use). If the real tolerance is lower, every design above is too aggressive. LIT-4's finding that poorly timed interruptions are judged disrespectful, and that this is linked to discontinuing use, is the mechanism by which we would lose users without ever seeing it in a usability test. **Mitigation:** default to one a day, measure switch-off in T23, treat any opt-out as a failed design rather than a user preference.

**Dark patterns.** A proactive app that opens straight into a task is, structurally, the same machinery as an engagement loop. The difference is what it is pointed at. We decline incentivisation and coercion from the Behaviour Change Wheel (LIT-2) on purpose, and that decision should be visible in the deck, because a marker is entitled to ask why a study app needs notifications at all. Our answer is Q-1 and C-1, and it has to stay our answer.

**The anxiety in AE2-P14.** The participant described himself as fidgety and anxious while working through an onboarding flow, and then described the people who finish such flows as "the people that will do this will have no problem with studying". A nudging app aimed at students who struggle to start can make that worse: a notification is a demand, and an unmet demand accumulates. **Mitigation:** snooze is always one tap and never asks why, nothing is ever marked overdue, and no notification references a previous notification the student ignored.

**Sensing and consent.** Reading a timetable is reading a student's day. Q-10 gives permission and permission is not a free hand. The app should show what it read and when (R-7), and deleting that data should be one action, following the pattern Rahul's spike already uses (`../onboarding/README.md` describes a delete-all-my-data control).

**The neurodivergence trap.** Q-12 found no clear difference at n = 22. It would be easy to justify aggressive nudging as an accessibility feature for ADHD students. Our data does not support a separate mode and `personas.md` already says so, so behaviour-change intensity is a per-person setting and never a diagnosis-shaped default.

---

## 7. Limitations

- **This is v1, written before the Week 8 lecture** on 16 Nov. The module may expect specific frameworks or vocabulary that are not here, and v2 adopts them.
- **No literature review underneath it.** T09 (`research/literature.md`, Rahul) is overdue, so the five sources below were found and verified for this document alone. They are not a systematic review and there is no claim that they are the strongest five.
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

**Numbering note, proposed by KAYZ for group review.** T20 has taken LIT-1 to LIT-5. T09 (Rahul) also produces LIT-n IDs and has not landed yet. To avoid a collision, **T09 should start at LIT-6.** If Rahul has already numbered from LIT-1, these five renumber instead, because his is the larger set.

*LIT-5 note:* three of its five authors were at the University of Birmingham at the time of publication, including the lead author and Robert Hendley. Worth a line in the deck.
