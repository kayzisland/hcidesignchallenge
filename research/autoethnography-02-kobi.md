# Autoethnography 02: using our own prototypes

Researcher and participant: Kobi (KAYZ). Status: v1, 8 Nov 2026, open for the group to challenge.

This file has two parts. Part 1 is a first-contact walkthrough of Rahul's onboarding prototype (`AE2-Pn`). Part 2 is the LearnHarness study sessions for Game Theory Basics (`AE2-n`), with one session logged so far and more added as they happen.

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

A design that treats onboarding as a cost to be minimised, and that learns a student's preferences from their first few real sessions with no questions up front, would be the opposite of what is here. Build it as a lo-fi alternative and put both through the QOC at T16. Neither answer should be assumed.

## Limitations

- **One participant, and a compromised one.** I wrote the questionnaire analysis the same day. I knew Q-1 before I opened the prototype, so I was primed to notice starting cost and may have gone looking for it.
- **First contact only, one sitting.** I ended the first game myself and stopped at the dashboard, so "Try a Different Way" and the dashboard proper are unseen. Anything past the reveal is untested.
- **The viewport was 533px wide,** which gives the narrow single-column layout. Rahul designed for desktop, so some of the "too many screens" and density reactions may be an artefact of the pane I happened to walk it in, and they need rechecking at full width before anyone acts on them.
- **One walkthrough cannot separate "too many questions" from "too many questions today".** Mood, time of day, and the fact that I had been working on this project since the morning are all uncontrolled.
- **This is not the usability test.** Lekan's test (T18, T23) uses set tasks with five users and will answer different questions. Where the two disagree, the test wins on anything task-related.
- **The prototype is a spike merged on 1 Nov,** built before the questionnaire closed. Criticising it for not matching findings that did not exist yet would be unfair, and none of the above is meant that way.

## Part 2: LearnHarness, Game Theory Basics (session 1)

### How this session ran

- **What was studied.** Game Theory Basics, eight units from normal form through to evolutionary stability. I wrote the material myself before the session and extracted it into LearnHarness, which built a knowledge graph from it. The session reached Unit 3, pure Nash equilibrium.
- **Prior knowledge.** Close to none. A few YouTube videos and no formal teaching in the subject.
- **Setup before the first question.** Clone and install, switch to Node 22 because the system Node is 18, update the Claude Code CLI from 2.1.250 to 2.1.319 to clear the tool's minimum, enable the External CLI opt-in, choose a model, extract my own material.
- **How it was recorded.** Spoken aloud during and immediately after the session, then transcribed and structured. The wording in "What I felt" is mine.
- **Date.** 8 November 2026.

### Log

| ID | What I tried | What happened | What I felt | Design implication | Relates to |
|---|---|---|---|---|---|
| **AE2-1** | Set the tool up before any teaching could start | Six steps between deciding to learn and the first question | "The setup is kind of long. I had to go to Claude Code, then I had to do the CLI, then I had to adjust the model, and then after that, I had to supply my own materials for it to teach me" | Same shape as AE2-P14, from a different tool, on the same day. Both put a long setup in front of the thing the student came for | Q-1, AFF-A, AE2-P14 |
| **AE2-2** | Started the session and waited while it compiled and rendered | A pause before any output | "The wait is a little bit long." Seconds later: "Okay, we started. Maybe the wait isn't too long then" | I overestimated the wait and corrected myself the moment it ended, the same way I overestimated the onboarding at 60 questions. With no progress signal, perceived cost runs ahead of real cost | Q-1, AE2-P14 |
| **AE2-3** | Looked at the interface for the first time | A chat composer with a knowledge-graph panel | "This seems like Claude just with a shell, but we'll see how it goes" | The first read of the product was that it is a wrapper. That judgement formed before any teaching and it held to the end of the session | Rubric 6 |
| **AE2-4** | Watched it work before the first question arrived | Visible reading and searching steps | "It's doing a lot of reading and a lot of finding, which is confusing to me since I already gave it all the material" | Agent work shown without saying what it is for reads as waste. I had just supplied the material and could not see what was being searched | AFF-C |
| **AE2-5** | Received the first item: a Nash equilibrium problem with a confidence rating and a thinking box | Multiple choice, a confidence slider, then a free-text field for my reasoning | "This is really good. I really, really like this. It really breaks it down" | The clearest delight of the session, and structurally it is cheap. Asking for confidence and reasoning alongside the answer turns a right-or-wrong record into something teachable | Q-6, AE-3 |
| **AE2-6** | Answered "find every pure Nash equilibrium", naming several cells | Wrong. The answer was a single cell | "Nah, bro" | I rated my confidence at 30% and was still wrong. The rating caught uncertainty that the answer alone would have hidden | Q-6 |
| **AE2-7** | Read the feedback on that answer | It named the equilibrium as "MC" | "Only MC, right? What is MC?" | The convention of naming a cell by its row and column letters had not been introduced. The feedback was correct and unreadable at once, so the correction did not land | AFF-C, Q-3 |
| **AE2-8** | Filled in the thinking field | Typed what I understood a Nash equilibrium to be and why I was unsure | Engaged, no friction | This is where the tool gets its picture of the learner. It worked on me and I used it properly without being prompted to | AE-3, Q-6 |
| **AE2-9** | Carried on through further probes | More questions, more confidence ratings, still no explanation | "What it didn't do was explain. It just threw me into a bunch of questions asking my confidence on some things, but I'm not confident at it at all. I think this is just the probing process. But there wasn't learning. I just got thrown straight into the deep end, which is a good or bad thing depending on who you are. I don't know, honestly" | The measure phase is correct by the tool's own design and it reads as a test. Being assessed before being taught is a motivational problem even where it is pedagogically sound | Q-1, Q-3, AFF-A |
| **AE2-10** | Stopped and summed up | Several answers correct, starting from near-zero knowledge | "I do feel like I'm learning. I do actually think this is a good tool. But I don't think it's fixing the problem of how we start learning" | The headline. It teaches well and does nothing about getting a student to begin. That gap is exactly what Q-1 and Q-2 identify and exactly what our design claims to close | Q-1, Q-2, AFF-A |
| **AE2-11** | Asked what it does that a general assistant does not | Nothing in the session required a separate application | "I could just use AI for this. This could be a skill in Claude. I don't see it doing anything that Claude couldn't do, mainly because it is powered by Claude" | A direct challenge to the group's decision of 28 Oct to build the hi-fi on LearnHarness. It has to be answered in the deck | Rubric 6, Rubric 8, design-log 28 Oct |

### Themes

1. **It teaches, and it does nothing about starting** (AE2-1, AE2-9, AE2-10). The thing the tool is good at sits behind a setup cost, and the thing our questionnaire says students need most is the part it leaves untouched.
2. **Measuring before teaching is pedagogically right and motivationally wrong** (AE2-5, AE2-6, AE2-9). The probing is the tool working as designed. It still felt like an exam before a lesson, and I could not tell whether I liked it.
3. **Confidence and reasoning capture is the cheapest good idea here** (AE2-5, AE2-8). Two extra fields next to an answer, and they changed what the session could do with my mistakes.
4. **Unexplained machinery and unexplained notation break trust the same way** (AE2-4, AE2-7). Searching I could not account for, then a cell name I had never been taught. Both small, both left me outside the process.
5. **The base itself is in question** (AE2-3, AE2-11). The wrapper judgement formed in the first ten seconds and the session gave me nothing to overturn it.

### Design implications (candidate requirements, to be tested)

| # | Implication | Grounds | Tested by |
|---|---|---|---|
| 9 | Teach something in the first minute. Measurement can be folded into the teaching itself | AE2-9, AE2-10 | Lo-fi alternatives (T17), hi-fi test (T23) |
| 10 | Keep the confidence rating and the thinking field. Put them next to the answer, not after it | AE2-5, AE2-8 | Hi-fi test (T23) |
| 11 | Say what background work is for while it runs, or hide it | AE2-4 | Hi-fi test (T23) |
| 12 | Never use a notation in feedback that the lesson has not introduced | AE2-7 | Heuristic checklist (T22) |
| 13 | Show progress during any wait over about two seconds | AE2-2 | Hi-fi test (T23) |
| 14 | The hi-fi must justify being an application at all, with a single prompt as the benchmark | AE2-3, AE2-11 | QOC (T16), deck |

### What this means for the hi-fi build (for Jiven)

Three things are worth taking directly: the confidence rating, the thinking field, and the way the two sit beside a single question (AE2-5, AE2-8). They are cheap to build and they are the only part of the session that produced unprompted enthusiasm.

One thing has to change. LearnHarness opens by measuring, and from a standing start that reads as a test (AE2-9). Our design leads on getting a student into a session (Q-1, Q-2, AFF-A), so the measure phase has to be folded into the teaching. Putting it in front failed here. A first question that teaches something while it measures would satisfy both.

**AE2-11 is a problem for the group, not a note for Jiven.** The claim is that nothing observed needed a separate application, and that it could be a skill inside a general assistant. One session is not enough to settle that, and the knowledge graph carrying across sessions is the main thing LearnHarness claims that a single prompt cannot do, which this session did not test. The honest position for the deck is that the base was chosen on 28 Oct for its teaching engine, that the engine does work, and that the case for the wrapper is still open. Rubric 8 asks for honest self-criticism. This is the strongest piece of it we have.

### Limitations

- **One session, one unit.** It reached Unit 3 of eight and stopped inside the measure phase. The teach, practise and graph phases are largely unobserved, and the graph carrying knowledge between sessions is untested. That is LearnHarness's central claim.
- **I am primed.** I walked the onboarding prototype and wrote up AE2-P the same day, where setup cost was the headline. Finding the same theme again hours later may be convergence, and it may be me carrying a frame from one tool to the next. The interviews are the test.
- **Near-zero prior knowledge of game theory,** so I cannot judge whether the teaching was accurate, only whether it worked on me.
- **I wrote the material.** The lesson quality depends on a source document I produced, so the tool is not being judged on its own content.
- **The setup was not a normal user's setup.** It ran from source on a dev server with a CLI provider, which is not how a student would meet this product. The shipped desktop app may be far shorter to start.
- **AE2-11 is a judgement, not a measurement.** It is worth recording and it is not evidence.

## Where this goes next

- AE2-P14, AE2-P15, AE2-1, AE2-9 and AE2-10 go onto the affinity diagram as v2 notes, alongside the interview findings. Four of them say the same thing about starting cost from two different tools.
- The interviews this week add a question about abandoning a study tool, which tests that claim on people who are not me.
- Design implications 1 to 6 go to Jishnu for the lo-fi alternatives (T17) and into the QOC at T16, so that the short-onboarding and long-onboarding options get compared on evidence. Neither gets assumed.
- Implications 7, 8, 10, 11, 12 and 13 go to Jiven as things to keep or fix in the hi-fi.
- Implication 9 and AE2-11 go to the whole group. One changes the shape of the first session, the other asks whether the base was the right call. Both belong on the agenda before the hi-fi build starts at T21.
