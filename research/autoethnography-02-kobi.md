# Autoethnography 02: using our own prototypes

Researcher and participant: Kobi (KAYZ). Status: v1, 8 Nov 2026, open for the group to challenge.

This file has two parts. Part 1 is a first-contact walkthrough of Rahul's onboarding prototype (`AE2-P n`). Part 2 will be the LearnHarness study sessions for Game Theory Basics (`AE2-n`), added as those sessions happen.

## Why we used this method, and why it isn't the usability test

Week 3 taught autoethnography as self-observation with the researcher as the participant. Here it is pointed at our own build.

The alternative was to wait for Lekan's usability test (T18, T23: five users, set tasks, think-aloud). We are doing that too, and it answers a different question. A task-based test hands the participant a goal and asks them to reach it. That instruction supplies the motivation, which is precisely the thing that failed in this walkthrough. Nobody told me to finish the onboarding, so I was free to decide it wasn't worth finishing, and that decision is the data.

The limit is the usual one. One researcher is not the user group, so everything below is a hypothesis for the interviews and the lo-fi tests to confirm or kill.

## How the data was gathered

- **What was walked.** `onboarding/`, Rahul's hi-fi spike merged 1 Nov, at repo state `fec9b47`. Run locally on the Vite dev server at `localhost:5173`.
- **Starting state.** `localStorage` cleared immediately before the walk, so this was genuine first contact with no seeded preferences.
- **Viewport.** A 533px-wide browser pane. That gives the narrow single-column layout, not the desktop one.
- **How it was recorded.** Spoken aloud while walking through, in one sitting, then transcribed and structured. The wording in the "What I felt" column is mine.
- **Where it stopped.** I ended the first game myself and went to the profile reveal, then stopped at the dashboard. I did not reach "Try a Different Way".
- **What was not recorded.** Nothing about Rahul's code was changed. No defect list was kept; this is first impressions, not QA.

## Part 1: Onboarding prototype walkthrough

| ID | What I tried | What happened | What I felt | Design implication | Relates to |
|---|---|---|---|---|---|
| **AE2-P1** | Opened the welcome screen and read it | Pip introduces itself. Four reassurances, one button | Flat. "It looks all right. I'm not really moved by anything" | A welcome screen that removes objections still has to give a reason to start. Nothing here answers "why now" | Q-1, AFF-A |
| **AE2-P2** | Read "no right or wrong answers" and "skip anything you like" | Both registered | "It's not applying pressure, but it's not drawing me to do this. This seems kind of long to do. I low-key can't be bothered to do this right now to learn some stuff" | Removing pressure is not the same as creating pull. I priced the whole thing before answering a single question and judged it too expensive | Q-1, Q-2, AFF-A |
| **AE2-P3** | Typed my course, then answered what I'd like help with | Picked getting started, staying focused, managing workload, remembering for exams | No friction | The four I picked are the four our questionnaire ranks highest. The prototype and the data agree on the target problem | Q-1, Q-2 |
| **AE2-P4** | "What do you find most difficult about studying?", multi-select | Ticked six of the options | "This is just naming every gripe a student has. Every student would just tick every box here" | A multi-select of universally true problems collects no signal. Q8 of our own questionnaire exists because a forced single choice shows priority and frequency alone does not. The same lesson applies here and was not applied | Q-1, Q-8 |
| **AE2-P5** | "How much guidance would you like?" | Chose "give me a plan and let me work" | Approval. "This is good, because it helps people discern whether or not they want to be walked through everything or they want to explore things independently" | A question that genuinely splits the population earns its place. The direct contrast with P4 is the useful part | Q-7, AE-3 |
| **AE2-P6** | Finished stage 1 of 4 | "Stage complete" screen | "Too many screens. Too many screens. I'm already bored. My attention's already gone" | Attention was gone at the end of the first stage of four. Our own data puts lecture drift inside 20 minutes, and a lecture is more engaging than a form | Q-4, AFF-C |
| **AE2-P7** | "Which revision activities do you find useful?" | Picked multiple choice quizzes, flashcards, explaining concepts | "The most important revision activity, which is doing practice questions or solving problems, isn't here. Which I think is mad for a learning app, especially in onboarding" | Practice questions are absent from the option list. Q-6 rates generative methods highest of anything we measured, and the engine underneath this prototype is built on exactly that. The onboarding asks about revision and omits its own mechanism | Q-6, AE-8 |
| **AE2-P8** | "Preferred study session length" | Fixed options from 5 minutes up. Chose "choose each time" | "5, 10, even 15 minutes doesn't make sense. 25 minutes, does it really make sense? No. 25 minutes is one Pomodoro" | Fixed lengths assume a stable preference that I don't have. The escape option was the only honest answer available, which suggests it should be the default | Q-4, AE-11 |
| **AE2-P9** | "What should happen when you get an answer wrong?" | Hesitated, then chose "show me a similar example" | "I don't know. These options are confusing me" | This is the question a student is least able to answer about themselves in advance. It should be inferred from behaviour in the games, not asked before any content has been seen | Q-7, AFF-C |
| **AE2-P10** | Picked a theme in stage 3 | The whole app changed immediately. Soft light, neutral, high contrast, dark, follow device | "Oh, that is amazing. That makes it feel like home. That gives people sort of buy-in. I'm more bought into this process. And that's something small, just something with a theme" | The only moment of delight in the walkthrough, and the only question whose answer changed something visible on the spot. Every other question collected and gave nothing back | AFF-A, Q-8 |
| **AE2-P11** | "What would make studying more comfortable?" | Chose adjustable audio speed and fewer elements on screen | "These things are just so technical. This is not the right place to." Then: "Well, those are reasonable adjustments, to be fair. Maybe I'll take it back a little bit" | Accessibility options phrased as system settings, asked before the student has seen any content to apply them to. I argued myself round inside thirty seconds, which says the options are right and the moment is wrong | Q-7 |
| **AE2-P12** | "How should information appear?" | Chose one section at a time, then wanted the expandable outline as well | "Or let me switch" | Students want to change this later, not commit to it at onboarding | AFF-C, Q-7 |
| **AE2-P13** | Nudge and calendar questions in stage 4 | Chose deadline reminders a few times a week, then connected the demo calendar | "This is good for the nudges." Noticed unprompted that the dates were labelled as sample data | The nudge block landed, and the demo labelling was clear enough to spot without being told. This matches the strongest finding we have | Q-8, Q-9, Q-10 |
| **AE2-P14** | Reached the end of the onboarding questions | Four stages complete | "It's just too many questions. 15 questions 4 times, that's about 60 questions before you get onto the app. This is harder than actual studying. The people that will do this will have no problem with studying. But the people that can't make it through the questionnaire, like me, I'm fidgety and I'm anxious, trying to think of the perfect way to calibrate this app that doesn't exist" | The headline finding. The onboarding filters for the students who need the app least. See the note on the count below | Q-1, Q-2, Q-12, AFF-A |
| **AE2-P15** | Started Number Quest and did the practice item | Sequence 1, 3, 9, 27, 81. I worked out 243 and got it right | "Again, bro, 8 questions for this. I'm ending the game. I wouldn't do this for a learning app. I'm not doing all these games after I've answered all these questions" | I answered correctly and quit anyway. Competence was never the barrier. Accumulated cost was | Q-1, AFF-A |
| **AE2-P16** | Used "end game", went to the profile reveal | Active Explorer, with evidence, a radar chart and adjustable preference sliders | "It's good that they have an archetype, buy-in I guess. But there's just so much information, so much going on. The sliders are adjustable, which is good, so if they get your profile wrong they can sort it. Nah, this is too much" | The archetype buys attention back the way the theme picker did. The density on the same screen spends it again. The override sliders are the right instinct and should survive into the hi-fi | Q-7, Q-12 |

### A note on the question count (AE2-P14)

I said 60 questions. The build has 15, `q1` to `q15` in `src/data/onboarding.ts`, across four stages of 5, 4, 3 and 4. So the perceived length was four times the real length, and the stage structure is what inflated it.

The instinct was still close on the full flow. The adaptive engine caps each game at 12 questions (`maxQuestions`, `src/engine/adaptive.ts`), rising to 18 with "keep challenging me" on. There are four games. A student who completes everything to a finished profile answers up to 63 questions, and up to 87 on the extended cap.

Both halves are findings. A 15-question form reads as a 60-question form, and the real cost of the whole flow is roughly the number I felt before I had counted anything.

## Themes

1. **The flow selects against the student it was built for** (P2, P14, P15). Finishing a 15-question form and four games, to reach a study app, requires the executive function the app exists to support. The students who complete it are the students who were going to study anyway. This is the most serious thing in the walkthrough. Sequencing causes it, so no amount of work on the questions themselves will fix it.
2. **Questions that change something earn commitment. Questions that only collect spend it** (P10 against P4, P9, P11). One theme picker produced more goodwill than fourteen other questions combined, because it did something the moment it was answered.
3. **Option lists of universally true problems collect no signal** (P4, P7). When every option applies to every student, the answer carries no information, and the student notices they are doing pointless work. The same list also omitted practice questions, which is what our data rates highest.
4. **Control later beats accuracy now** (P8, P12, P16). Every time I was asked to commit to a preference, I wanted to defer or switch. The adjustable sliders at the end were valued for exactly this reason.

## Design implications (candidate requirements, to be tested)

| # | Implication | Grounds | Tested by |
|---|---|---|---|
| 1 | Cut onboarding to the smallest set that changes something visible, three or four questions, and let the rest be learned or set later | P2, P6, P14 | Lo-fi A/B against the current flow (T17, T18) |
| 2 | The first screen should do something before it asks anything | P1, P10 | Lo-fi alternatives (T17) |
| 3 | Put an activity before the questions, or make the games entirely optional and clearly skippable from the hub | P15, P16 | Lo-fi testing (T18), interviews |
| 4 | Replace multi-selects of universal problems with one forced choice | P4 | Already evidenced by Q-8's method note; confirm in lo-fi |
| 5 | Add practice questions and problem solving to the revision options | P7, Q-6 | Content fix, no test needed |
| 6 | Show that every preference is changeable later, during onboarding, so nothing feels like a commitment | P8, P12, P16 | Lo-fi testing (T18) |
| 7 | Keep the profile override sliders | P16 | Hi-fi test (T23) |
| 8 | Keep the theme picker and its live preview as they are | P10 | Hi-fi test (T23) |

## What this means for the hi-fi build (for Jiven)

The engine, the adaptive logic and the profile algorithm are not what failed here. The sequencing is. Three things carry straight into the LearnHarness build: the live theme preview (P10), the override sliders (P16) and the demo labelling on sample data (P13). One thing has to change before the hi-fi inherits it: the amount a student must spend before the app does anything for them.

A design that treats onboarding as a cost to be minimised, and that learns a student's preferences from their first few real sessions instead of asking for them up front, would be the opposite of what is here. Build it as a lo-fi alternative and put both through the QOC at T16. Neither answer should be assumed.

## Limitations

- **One participant, and a compromised one.** I wrote the questionnaire analysis the same day. I knew Q-1 before I opened the prototype, so I was primed to notice starting cost and may have gone looking for it.
- **First contact only, one sitting.** I ended the first game myself and stopped at the dashboard, so "Try a Different Way" and the dashboard proper are unseen. Anything past the reveal is untested.
- **The viewport was 533px wide,** which gives the narrow single-column layout. Rahul designed for desktop, so some of the "too many screens" and density reactions may be an artefact of the pane I happened to walk it in, and they need rechecking at full width before anyone acts on them.
- **One walkthrough cannot separate "too many questions" from "too many questions today".** Mood, time of day, and the fact that I had been working on this project since the morning are all uncontrolled.
- **This is not the usability test.** Lekan's test (T18, T23) uses set tasks with five users and will answer different questions. Where the two disagree, the test wins on anything task-related.
- **The prototype is a spike merged on 1 Nov,** built before the questionnaire closed. Criticising it for not matching findings that did not exist yet would be unfair, and none of the above is meant that way.

## Where this goes next

- P14 and P15 go onto the affinity diagram as v2 notes, alongside the interview findings.
- The interviews this week add a question about abandoning a study tool, which tests theme 1 on people who are not me.
- Design implications 1 to 6 go to Jishnu for the lo-fi alternatives (T17) and into the QOC at T16, so that the short-onboarding and long-onboarding options get compared on evidence. Neither gets assumed.
- Implications 7 and 8 go to Jiven as things to keep.
