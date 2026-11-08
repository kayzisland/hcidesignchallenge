# Autoethnography 01: studying a final-year module from the inside

Researcher and participant: Kobi (KAYZ). Period: 28 Sep to 29 Oct 2026 (Weeks 1-5 of HCI). Status: v1, open for the group to challenge.

## Why we used this method
Week 3 taught autoethnography as self-observation, with the researcher as the participant. Its strength is inside access to motives, feelings and what happens moment to moment. Its limit is that one researcher isn't the user group, so it **complements** other methods and never replaces them. That's how we use it here. Every finding below becomes a hypothesis, which the questionnaire (`questionnaire-v2.md`) and the observation fieldwork then test on other students.

We follow O'Kane's structure: log real use in context, group the log into themes, and turn each theme into a design implication.

## How the data was gathered
- **Context.** A final-year Birmingham CS student taking HCI. Mon 15:00-17:00 lecture, Mon 08:00-12:00 deep work block, Canvas materials, 3 MCQ class tests.
- **Data sources.** Dated study-session logs kept while studying with an AI study assistant, the Anki decks and their error logs, MCQ practice scores, and notes taken in lectures.
- **What was recorded.** What I was trying to do, what got in the way, how I reacted, and what changed afterwards.
- **What was not recorded.** Private or health information. Only behaviour during study is logged.

## Log (selected entries)

| ID | Date | What happened | What I did next |
|---|---|---|---|
| AE-1 | 19 Oct | Wk 4 lecture moved fast. I tried to take rough notes and listen at the same time. My notes were weak, and writing them pulled my attention off the lecture. | I stopped taking notes and gave the lecture my full attention. The notes were rebuilt afterwards from the slides. |
| AE-2 | 19 Oct | Class test 1 at the start of the lecture: 13/15. | The two misses were logged and fed into review. |
| AE-3 | 20-25 Oct | Learned Weeks 1-4 through question-led dialogue: I made a claim, got a counter-example, was wrong, then rebuilt it. Concepts I argued my way to (usability goals, the design loop, contexts of use) stuck. | I asked for this as my default way to learn. |
| AE-4 | 21 Oct | The assistant started hinting at the answer inside its questions. I noticed the struggle had gone, and with it the learning. | I asked for open probing questions instead of leading prompts. |
| AE-5 | 20 Oct | I asked for the full teaching plan to stay hidden. Seeing everything at once would have overwhelmed me. | I worked one question at a time. |
| AE-6 | 21-25 Oct | The same mistake came back twice: calling a failing function "utility" when it's "effectiveness". | It was logged as a repeat trap in a consolidation deck for the review week. |
| AE-7 | 26 Oct | Building a QOC matrix in the middle of a dialogue, the session got too heavy: "a tad lost". | I switched to MCQ practice before the class test. |
| AE-8 | 26 Oct | MCQ practice: 17/20, then 15/20 on new topics, then 19/20 on a retest of my weak spots. One fact (Tuckman's order) failed twice before it held. | Each miss became a card. Retesting the weak spots fixed most of them. |
| AE-9 | 7-27 Oct | Each week's Anki cards went into their own deck. I asked for cards only for lectures I'd already attended. | Review stayed small and tied to what I'd actually seen. |
| AE-10 | 27 Oct | Slides embedded in my notes wouldn't load, and the lecture recording wasn't up yet when I wanted to review. | I fell back on links to the original source. |
| AE-11 | Weeks 1-5 | My study happens in fixed deep work blocks plus spontaneous sessions when something's urgent. | Plans had to fit both kinds of session. |

## Themes
1. **Capture competes with attention** (AE-1, AE-10). Taking notes in a fast lecture costs understanding. Students want to be present in the room and have the material reliably afterwards.
2. **Learning sticks when I generate the answer** (AE-3, AE-4, AE-8). Being questioned until I work it out, and being tested, beat being told. A hint that gives the answer away kills the effect.
3. **Load has a ceiling, and seeing the whole plan pushes past it** (AE-5, AE-7). One step at a time works. When it gets too heavy, switching mode keeps me going where stopping would not.
4. **Errors are the most valuable data** (AE-2, AE-6, AE-8). Repeat mistakes are predictable. Retesting weak spots works better than rereading.
5. **Structure that mirrors the course lowers friction** (AE-9, AE-11). Material split by week and tied to what I've attended feels manageable. Study happens in short planned blocks and urgent bursts.

## Design implications (candidate requirements, to be tested)

| Theme | Implication | Tested by |
|---|---|---|
| 1 | Capture lecture material automatically and release it right after the lecture, so the student can stay present | Q4, Q5, Q6, observation |
| 2 | Teach by questioning and retrieval by default. Hints come in steps and never hand over the answer early | Q9, Q10, Q11 |
| 3 | Show one step at a time. Offer a lighter mode when the student is overloaded | Q7, Q12, observation |
| 4 | Track misses, resurface repeat errors, retest weak spots | Q7 ("remembering", "knowing whether I've understood"), Q9 |
| 5 | Organise content by course week. Nudge proactively into free time between lectures | Q13, Q14, Q15 |

## Limitations
- **One participant.** I'm not "the student"; Week 1's "you are not the user" applies. These are hypotheses, not findings.
- **The researcher wrote the log**, so bias is likely. The questionnaire and the observation are there to challenge it.
- **The study used an AI assistant.** Its behaviour shaped some entries (AE-4, AE-5, AE-7). That's useful, because our hi-fi will also question students, but students who don't use AI may differ.
- **Five weeks, one module.** Exam season will likely look different.

## Where this goes next
- Each theme is tested by the questionnaire items listed above.
- The observation sessions look for themes 1 and 3 in other students.
- Findings that hold become requirements. Findings that fail are logged and dropped. The deck shows both (rubric criteria 3 and 4).
