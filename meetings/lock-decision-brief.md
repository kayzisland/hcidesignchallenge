# Decision brief: does the phone lock stay in the T17 lo-fi?

Prepared by KAYZ, 14 Nov 2026. **A proposal for the group, not a decision.** Nothing here changes `../design-log.md` until the group agrees it.

Every ID is indexed in [`../research/findings-register.md`](../research/findings-register.md). The counts come from [`../research/interviews/synthesis.md`](../research/interviews/synthesis.md).

## The question

On 10 Nov the group decided that most of the build effort goes on getting students to start, through **study blocks, nudges and app locking**. The six interviews ran on 6 to 12 Nov and were synthesised on 14 Nov.

**Of the five participants who were asked about the lock, none endorsed it as specified.** That is T-5 in the synthesis and **X-8** in the findings register.

The decision to focus on starting is confirmed and stronger than before. The lock as the mechanism for it is the thing in question. T17 builds two or three lo-fi alternatives, so the question is concrete: **does one of them contain a phone lock?**

## What the evidence says, before the options

### Our own participants are against it
| ID | What they said | Why it bites |
|---|---|---|
| **INT-04-g** | Would keep a lock on for urgent work and switch it off for non-urgent | **INT-04-a** says urgency already solves starting. The lock would be on when it is not needed and off when it is |
| **INT-06-h** | Would not use it. If already focused the phone does not matter; if they cannot focus, everything is a distraction | A lock removes a distraction. It does not create focus |
| **INT-04-d** | Removing the phone would help, but they would "probably find another way" | The mechanism is circumventable by the person it is for |
| **INT-03-c** | Dropped Pomodoro because the timer broke their flow mid question set | Rules out the fixed 25 and 5 cycle specifically |
| **INT-01-b** | Leaves phone notifications uncleared as his standing reminder to study | A lock would hide his cue |

Our own autoethnography says the same from a different direction: **AE2-P8** rejected fixed session lengths and took "choose each time", and **AE-11** says study happens in planned blocks **and** in spontaneous bursts. That is **X-7**.

### The literature and our own behavioural data are for it
- **AFF-M settles the premise.** Five of six named the phone or social media unprompted (INT-02-d, INT-03-b, INT-04-b, INT-05-d, INT-06-c). **X-6 is resolved.** The phone is the distraction.
- **LIT-6:** nearly 800 participants, and the mere presence of a phone reduced available cognitive capacity even when it was silent, face down or off. The cost does not require the student to pick it up.
- **LIT-7:** 263 students on task about 65% of a 15-minute session, with focus slipping after about two minutes.
- **LIT-9:** meta-analysis over 8,679 students, a moderate positive link between problematic smartphone use and procrastination.
- **LIT-10 is the one that matters most here.** 280 students chose their own device-use goals and their own self-control tools. **At one to three months, 95% were still using at least one,** and they picked very different combinations. That is behaviour over months, and it disagrees with what our six predicted about themselves.
- **LIT-11:** blocking works, carries a cost, and should be flexible and matched to each person's own definition of distraction.

### The two things that decide this

**First, X-8 lives inside one participant.** **INT-06-b** said what would help them start is "absence of distraction", naming notifications, tidying and opening the curtains. **INT-06-h** is the same person refusing the lock. They want the outcome and reject the mechanism. No amount of further interviewing resolves that, because both answers are sincere.

**Second, every interview answer about the lock is a prediction, and our own data already shows predictions failing.**
- **Q-8** says 19 of 22 welcome an unprompted quiz. **Q-9** says most switch notifications off beyond one or two a day. Stated enthusiasm and stated tolerance already disagree inside our own questionnaire.
- **AE2-P15** is a participant answering a practice question correctly and quitting anyway. What he predicted about himself and what he did came apart inside one session.
- **AFF-J is the strongest single argument for testing the lock.** Four of six participants already lock themselves, physically and by choice. **INT-05-b** went to the library and it mattered "even if they did no work". **INT-01-b** stays because of the walk there and the dread of the walk home. Students impose friction on themselves deliberately. They just do not currently do it with an app.

So the honest position is that we have **stated preference against** and **revealed behaviour for**, and an interview cannot settle which one holds.

---

## Option 1: Drop the lock

**In practice.** T17's alternatives explore starting with no locking at all: nudges, blocks, a stated first step, resumable sessions.

**The case against.** We would be dropping a mechanism on one round of stated preference, against a meta-analysis of 8,679 students and a field study where 95% of 280 students kept using self-control tools for months. AFF-J says four of our own six already self-impose friction, so the behaviour exists and we would be declining to serve it. Under criterion 5 this is the opposite of wide design-space exploration: it narrows the space after one data source, and it was our own concept, which looks like flinching. We also lose the only mechanism that addresses AFF-M, the cluster the interviews most firmly established.

**The case for.** It is honest about what our users said, and it moves the whole T17 budget onto AFF-K, the missing first step, which has three independent participants behind it and nothing against it. It is the cheapest option and T17 is already past its plan date.

**Rubric.** Helps **4** (acting on findings) and **6** (nothing unexplained). **Risks 5** (narrowing the design space on one source) and **risks 8** (we would have no test of our own central assumption).

## Option 2: Keep the lock as one lo-fi alternative, tested against one without it

**In practice.** Jishnu builds two alternatives for T17. **A:** starting without a lock, leading on the stated first step (AFF-K) and the single nudge (AFF-F). **B:** the same flow with an opt-in, student-set lock during a block. T18 runs both with five users on the same tasks, and T16's QOC compares them on evidence from T18, not on opinion.

**The case against.** It costs a second alternative when T16 and T17 are already past their plan dates and T18 is days away. Worse, **a paper or Figma lo-fi cannot test the thing in question.** You cannot simulate the pull of a real phone on paper, so T18 would measure whether students *choose* the lock and how they *set* it, and not whether it works. That is a real limit and it has to be declared. There is also a risk of splitting Jishnu's effort so that neither alternative is good enough to test properly.

**The case for.** It is the only option that treats X-8 as a question, and the only one that does not settle it by preference. We have stated preference against and field evidence for, and a usability test with set tasks is the instrument built for exactly that disagreement. It keeps the design space open, which is criterion 5, and it produces data either way, which is criterion 3. If five users decline the lock in a non-urgent scenario, we drop it at T19 with evidence and a clean story for the deck. If they take it and set it, we keep it and we know how strict they chose. Under criterion 8, testing your own assumption and reporting the result beats defending it or abandoning it.

## Option 3: Keep the lock as an opt-in setting, off by default, and do not test it

**In practice.** The lock stays in the design as a setting inside a product about starting. T17 explores starting, and the lock is specified but never a lo-fi alternative.

**The case against.** It is the option that avoids the decision. The lock survives into the hi-fi without a single piece of evidence that anyone would turn it on, which is precisely what criterion 8 asks about. INT-04-g and INT-06-h would sit unanswered in the register while the feature ships. It also contradicts criterion 6: a feature nobody tested is an unexplained feature with a settings toggle on it.

**The case for.** It is honest to LIT-10 and LIT-11, which both say the student should choose the strictness, and off by default is the design they imply. It costs nothing in T17 and keeps the build focused on the start layer.

---

## KAYZ's proposed position

**Proposed by KAYZ for group review. Not a decision.**

**Take option 2, with the lock as the second alternative and the stated first step as the first.**

The reason is that X-8 is a factual question and we are three days from the instrument that answers it. Stated preference says drop it. Revealed behaviour, in LIT-10 and in our own AFF-J, says students impose friction on themselves by choice and keep doing it for months. Those cannot both be right about our users, and six interviews cannot tell us which is. Five users with set tasks can.

Option 1 settles the question by taking one side of it, and does so on the weaker kind of evidence. Option 3 settles nothing and carries the feature into the hi-fi untested, which is the single thing criterion 8 punishes.

**Alternative A should lead on AFF-K,** the missing first step. INT-04-e asked for "the very, very first, tiniest step", INT-01-e called unordered material an "insurmountable task", and INT-02-b was paralysed across 200 resources. Three participants, three degrees, nothing against it, and it is the cheapest thing on the affinity diagram to build. Whatever happens to the lock, that alternative earns its place.

**Declare the limit in the deck.** A lo-fi cannot test whether a lock defeats a real phone. T18 tests whether students adopt it and how they configure it. Whether it works needs T23 or longer, and saying so is worth more than pretending otherwise.

### What T18 needs to measure for this to settle anything

The task has to put the student in the situation the evidence says is hardest: **a free hour with nothing due** (INT-04-a, AFF-I).

| Question | Observation |
|---|---|
| Do they turn the lock on at all, unprompted, when it is optional? | The decisive one. If nobody opts in, option 1 wins on evidence |
| How strict do they set it, and do they set a break? | LIT-10 and LIT-11 say self-chosen strictness is what makes blocking stick. INT-03-c says a fixed cycle fails |
| Time from opening to the first question | Compares both alternatives on AFF-A and AE2-1 directly |
| Do they move or cancel the block when offered? | Tests INT-05-h and X-7, whether adjustable blocks are used as such |
| What do they say the lock is for, in their own words? | INT-06-h's objection is that a lock cannot create focus. If users repeat it unprompted, that is a second source |

### What would change my mind

If Jishnu says two alternatives cannot both be built well before T18, build one. In that case take option 1 and put everything into AFF-K, because a single well-made alternative that tests the best-evidenced finding beats two thin ones that test nothing. The constraint is Jishnu's to state, and it decides this.

---

## Decision

*To be completed by the group.*

| | |
|---|---|
| **Option chosen** | |
| **Reasons** | |
| **What T17 builds** | |
| **Conditions or review date** | |
| **Decided by** | |
| **Goes into `../design-log.md` as** | |
