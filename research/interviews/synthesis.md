# Interview synthesis: INT-01 to INT-06 (T07)

Status: v1, 14 Nov 2026. Owner: KAYZ. Interviews by Jishnu (INT-01, INT-02) and KAYZ (INT-03 to INT-06). Rubric criteria 3 (data produced), 4 (data to design) and 7 (domain understanding).

Every finding ID below is indexed in [`../findings-register.md`](../findings-register.md). The individual INT files remain the authority on what each participant said.

## Why synthesise, and why across both interviewers

Six semi-structured interviews produced 50 findings. Read one at a time they are six stories. The question the group has to answer is which of those stories repeat, so this document counts them. A theme that appears in one interview is a hypothesis. A theme in five of six is something the design can rest on.

We synthesised across both interviewers deliberately, despite their different note styles. Splitting by interviewer would have given two sets of three, which is too few to count anything. The cost is in the limitations below, and it is real: INT-01 and INT-02 are written from the interviewer's own notes, while INT-03 to INT-06 come from AI summaries of recordings.

## Who was interviewed

| ID | Interviewer | Year and subject | ND | Format |
|---|---|---|---|---|
| **INT-01** | Jishnu | Year 3, Computer Science | Yes | In person, interviewer's notes, no transcript |
| **INT-02** | Jishnu | Year 4, MSc Computational Finance | No | Online, consent given and no recording made, interviewer's notes |
| **INT-03** | KAYZ | Postgraduate, law conversion | Not recorded | Online, recorded, Notion AI summary |
| **INT-04** | KAYZ | Postgraduate, maths and philosophy | Not recorded | Online, recorded, Notion AI summary |
| **INT-05** | KAYZ | Year 3, Medicine | Not recorded | Online, Notion AI summary |
| **INT-06** | KAYZ | Year 2, International Business | Not recorded | Online, recorded, Notion AI summary |

Six subjects, no two the same. Years 2, 3, 4 and three postgraduates. One participant has a recorded neurodivergence; four have no ND status recorded at all, which is a gap in our own method and is listed in the limitations.

---

## Themes

### T-1. Starting is the barrier, and it is worst when nothing is urgent
**5 of 6** name starting as the hard part: INT-01-a, INT-03-a, INT-04-a, INT-05-a, INT-06-a.

The clearest statement is **INT-05-a**: asked whether an app should teach them to study or tell them when to study, they chose the second, because they have "no desire to do it" and no skills gap. **INT-03-a** calls it a "mental block" filled with YouTube, Instagram, games and chores. **INT-06-a** waited about a week between deciding to study and starting.

**Urgency is what removes it.** **INT-04-a** studied all day the moment an exam was close, and the gap between deciding and starting was short "because of the deadline". **INT-01-a** is the same mechanism inverted: being on time takes away the reason to work ahead, so his effort only rises once he has fallen behind.

**INT-02** is the exception, and it sharpens the theme. Starting is not his problem; long-term consistency is (**INT-02-c**). He still said he always thinks he should have started earlier (**INT-02-d**).

**Why this matters.** The app's moment is the non-urgent week, which is exactly the week a student has least reason to open it.

### T-2. The phone is the main pull, with one counter-case
**5 of 6** name the phone or social media without being led there: INT-02-d, INT-03-b, INT-04-b, INT-05-d, INT-06-c.

**INT-04-b**: the phone is "always right next to me" and "almost always" pulls them off track. **INT-03-b**: breaks roughly every 50 minutes turn into about 20 minutes of scrolling, and putting the phone away helps but they "sometimes still just do it". **INT-06-c**: a library session with a friend became chatting and doom scrolling.

**The counter-case is INT-01-b, and it sets a design constraint.** He manages attention through his surroundings, not apps: laptop and phone away in lectures, the library because the walk there commits him. He then deliberately **leaves phone notifications uncleared as a standing reminder**. A lock that clears or suppresses notifications would remove the one mechanism he relies on.

### T-3. Place is a commitment device, and the library is the device
**4 of 6**: INT-01-b, INT-03-d, INT-05-b, INT-06-d.

**INT-05-b** is the strongest version: going to the library mattered "even if they did no work". **INT-01-b** describes the walk there and the dread of the walk home as what keeps him in the seat. **INT-03-d** moved from home to the library because home was too comfortable and full of family interruptions.

**Place also carries the risk.** **INT-03-e** and **INT-06-c** both lost a session to friends on campus or in the library. The same move that commits you puts you next to people.

### T-4. The post-lecture quiz is welcome, if it is single and well timed
**3 of 6 were asked and answered,** and all three were conditionally positive: INT-04-f, INT-05-g, INT-06-g.

**INT-05-g** would find it "really, really great" **if limited to one notification**, and said repeated reminders would "get on my nerves". **INT-04-f** was positive but said it would be annoying "if I don't want to do it", and asked to schedule it or have it timed to when they are receptive. **INT-06-g** found it useful because it covers the lecture, then said they would put it off ("I'm just lazy to be honest").

**2 of 6 have no answer on record:** INT-02 (the question does not appear in the notes) and INT-03 (audio was lost on this question). **INT-01** gives a conditional negative through INT-01-a: an offer made while he is up to date has nothing to work with.

### T-5. The phone lock is the most contested idea we have, and nobody gave it an unconditional yes
**5 of 6** touched it, in five different ways.

| ID | Position | What it demands of the design |
|---|---|---|
| **INT-04-g** | Would keep it on for urgent work and might switch it off for non-urgent | The lock is weakest exactly when T-1 says it is needed |
| **INT-06-h** | Would not use it. If already focused the phone does not matter; if unfocused, everything distracts | The barrier is getting focused, and a lock does not create focus |
| **INT-03-c** | Dropped Pomodoro because a timer broke their flow mid question set | Fixed 25 and 5 cycles are wrong for some work |
| **INT-05-h** | Would use it **only** if the times could be adjusted, because their schedule fluctuates | Blocks must be movable week by week |
| **INT-01-b** | Relies on uncleared notifications as a reminder | A lock would hide his cue to study |

**This is the single most important result in the six interviews.** The lock was the mechanism at the centre of the study-block concept, and no participant endorsed it as specified.

### T-6. Shown versus asked depends on the subject or the interest, every time
**4 of 4 who were asked the conditional question said it depends:** INT-03-g, INT-04-h, INT-05-f, INT-06-i. The axis differs: interest (INT-03-g), subject (INT-04-h, INT-06-i), and whether there is a set goal (INT-05-f).

**INT-04-h** and **INT-06-i** both split on maths against a humanities subject, and they split in opposite directions. INT-04 wants to be shown in maths and to ask questions in philosophy. INT-06 wants guiding questions in maths and to be told first in language-based subjects. The rule is personal, not disciplinary.

The remaining two gave a preference without a condition: **INT-01** wants an explanation when he clicks a card he does not understand, and **INT-02-g** wants visual cues with audio.

**This closes X-1.** Q-7 found a population split 10 to 8. The interviews say the split is also inside each student, which is why both modes stay and why the choice belongs to the student at the moment of use.

### T-7. The first step is the thing that cannot be found
**3 of 6**: INT-04-e, INT-01-e, INT-02-b.

**INT-04-e** calls breaking a task down their biggest struggle and asked for an AI that could split a known objective into actionable steps, "even just the very, very first, tiniest step". **INT-01-e** has no roadmap and no order in his lecture material, which turns studying into an "insurmountable task". **INT-02-b** describes decision paralysis across too many resources, "picking option 37 out of 200", with no streamlined path.

Three different degrees, three different words, one problem: a student who wants to start and cannot see where.

### T-8. Trust in AI is split down the middle
**2 of 6 distrust it:** **INT-01-g** does not trust LLMs as a base source of truth and wants every summary linked to the exact slide or moment in the recording. **INT-02-i** does not go to LLMs first, prefers human and forum sources, and calls himself old-fashioned.

**2 of 6 use it daily:** **INT-03-f** uses AI twice a session, a summary first and AI-written multiple-choice questions at the end. **INT-06-e** uses a notebook-style AI app as their main tool and has never stopped using it.

**2 of 6 did not say** (INT-04, INT-05).

This matters because the hi-fi keeps LearnHarness, which is an AI tutor. Half our interview sample would need convincing.

### T-9. Progress systems are what make people quit, and visible progress can itself be the exit
**2 of 6 on the mechanism,** and they fail in opposite directions.

**INT-01-i** almost abandoned his flashcard app: cards unreviewed for 17 days were marked not completed, more than 2,000 lapsed, and recovery would have meant over 100 cards a day. He wants progress recoverable after a break, "like the gym", and says the system "can't be vindictive".

**INT-02-c** is the inverse. He has no trouble starting and keeping going for a month or two, and **once he sees progress he stops chasing**. For him a progress display is a finish line.

**The one app nobody abandoned** is **INT-06-e**: upload the material, the quiz is generated. Compare **INT-02-i**, who calls flashcards a gimmick because of the time spent making them, and would use them if they were provided.

---

## What this confirms

**The 10 Nov decision to focus on starting is correct, and the interviews are stronger evidence for it than the questionnaire was.**

Q-1 said 13 of 22 hit "getting started" weekly or more, and 7 of 22 would pick it if an app could fix one thing. AFF-A clustered it. Convergence C-1 in the findings register rested on four methods. T-1 now adds six people describing it in their own words, and INT-05-a states the design problem more precisely than anything we had written ourselves: a student who knows how to study and does not start.

It also confirms AFF-B, the social derailment cluster: INT-03-e and INT-06-c are two more sessions lost to friends, and Q-11 had three.

---

## What this changes

**Proposed by KAYZ for group review. None of these is decided.**

| # | Change | Driven by | Replaces |
|---|---|---|---|
| 1 | **The lock is opt-in with adjustable strictness.** No fixed 25 and 5 cycle | INT-04-g, INT-06-h, INT-03-c, INT-01-b, and LIT-10 and LIT-11 already said flexible blocking works best | The fixed Pomodoro lock in the 10 Nov concept |
| 2 | **Blocks are adjustable week by week** | INT-05-h, and AE2-P8 and AE-11 said the same from the autoethnography | Two fixed weekly times |
| 3 | **One nudge, never repeated** | INT-05-g ("one notification"), INT-04-f (timing), Q-9 (1 to 2 a day) | Any retry or reminder chain |
| 4 | **The first screen of a block shows the tiniest first step** | INT-04-e, INT-01-e, INT-02-b, and Goblin Tools already does this (`../existing-solutions.md`) | A blank session start, which AE2-P1 already failed on |
| 5 | **Progress is forgiving after a gap** | INT-01-i, and INT-02-c says a progress bar can be an exit, so it should point at what is next | Any streak or lapse mechanic |
| 6 | **Every AI explanation links back to its source slide** | INT-01-g, INT-02-i, and INT-01-h on searching Panopto | Unsourced AI summaries |

**The uncomfortable one is change 1.** The lock was the centre of the study-block concept and T-5 shows nobody wanted it as specified. Two readings are available and the group should pick between them and not split the difference: either the lock becomes a setting inside a design about starting, or the concept was wrong and the effort goes somewhere else. **INT-06-h** is the argument for the second: a locked phone does not create focus.

---

## Limitations

- **n = 6, and two interviewers with different note styles.** INT-01 and INT-02 are written from the interviewer's own notes with no recording. INT-03 to INT-06 are AI summaries of recordings. The two halves are not the same kind of evidence, and counts that mix them are rougher than they look.
- **Several quotes come from AI summaries and have not been checked against the transcripts.** Every INT file says so at the top. Nothing quoted here should reach the deck before that check.
- **Audio was lost on INT-03's last two questions,** the post-lecture quiz and where the phone was. That is why T-4 counts 3 of 6 and not 4.
- **INT-05's recording may have started after the conversation did.** Consent and quote accuracy both need checking against the transcript.
- **INT-01 partly became co-design.** The interviewer and participant designed interface ideas together, against the guide's instruction not to describe our design until section 5. The interface ideas in INT-01-d, INT-01-e and INT-01-f are one participant's suggestions, not evidence of a need.
- **ND status is recorded for only 2 of 6.** One yes, one no, four not recorded. We cannot say anything about neurodivergent students from this sample, which is a problem for a design that names them in its brief. Q-12 already found no clear difference at n = 22, and these interviews neither support nor challenge that.
- **Convenience sample.** All six were recruited through the group's own networks, and two share a discipline with their interviewer. Subjects are spread but the recruitment is not.
- **Sections 5 and 5b were not reached in every interview,** so the two questions that test our actual concept have the thinnest data in the set. T-4 and T-5 rest on three and five answers respectively.
