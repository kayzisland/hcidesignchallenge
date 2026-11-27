# Literature: a map of ideas that shows progress

Status: DRAFT v0.1, 27 Nov 2026. Owner: Jiven, for KAYZ to review. Rubric criteria 6 (solution appropriateness), 7 (domain understanding) and 8 (justification).

**What this covers.** In the hi-fi, each lecture has a concept map: the lecture's ideas as boxes, with arrows for "builds on". Each idea shows how the student stands on it. v3.0 redraws that map in the Blocks look. Nothing in our research so far explains why the map exists, why it shows progress, or why it is coloured as it is. This note asks three questions and answers each from our own research first, then from published research, then gives what argues against it.

1. Why draw a lecture as a map at all, and why is it in the Library?
2. Why show progress on it, and does that help motivation and learning?
3. Why a mint bar for progress and lilac for "To revisit"?

Section 4 takes the Week 8 models of behaviour change. Section 5 explains where Mermaid comes in.

**How it was checked.** The searches were run on 27 Nov 2026 with an AI assistant. The last column of the source table (section 8) says what was read for each source: the paper, the abstract, or only a secondary summary. Numbers come from the source named. Section 6 lists what could not be confirmed and what was looked for and not found.

**The IDs LIT-32 to LIT-70 are proposed.** They follow the precedent of `literature-learning-loop.md`. They are KAYZ's to index in the register or renumber.

---

## The design in question

| Part | What it is (v3.0, design decisions V-33, V-82, V-84 in the build repo) |
|---|---|
| **The map** | Rows of blocks. An idea sits one row below everything it builds on. On a narrow screen it becomes one column in study order |
| **Where** | In the Library, on each lecture's page. Every idea is a button that opens its slides and its questions |
| **Four states** | Secured, Getting there, To revisit, Not yet. Each has a shape and a word as well as a colour |
| **Mint** | Secured fills the block with mint. Getting there is a mint bar on the block's edge. It shows a state, not a percentage |
| **Lilac** | To revisit. There is no red anywhere, no streak, no "overdue", no comparison with other students |
| **Who makes it** | The AI writes the ideas and links from the student's slides. The student does not build the map |

---

## The answers in short

**1. The map.** Supported, modestly. Students who study a ready-made map remember a little more than students who study text or a list (about 0.3 to 0.4 of a standard deviation), and the gain is in the central ideas and for students new to the topic (LIT-32, LIT-33, LIT-35). Two of our six interviewees asked for this in their own words (INT-01-e, INT-02-g). **The weak point:** as a clickable menu the evidence is null (LIT-32), and no tester has ever seen our map.

**2. Progress on the map.** Supported, with a condition. Monitoring progress towards a goal helps people reach it (d = 0.40, LIT-44), and feedback helps most when it is about the task and says what to do next (LIT-45, LIT-46). The condition: a display by itself does not raise achievement (LIT-52). Ours passes only because each block is also the way into practice on that idea. **The weak point:** one interviewee stops once he sees progress (INT-02-c), and visible slow progress puts people off (LIT-50).

**3. Mint and lilac.** Supported by our own testers and by accessibility, not by a colour study. Two of the three look-test testers in the repo found a loud "wrong" screen upsetting. Mint and lilac stay far apart for red-green colour-blind students, which red and green do not. **The weak point:** the well-known finding that red harms test performance did not survive a 2020 meta-analysis (LIT-60). "No red" should not rest on it.

---

## 1. Why draw a lecture as a map?

### Our own research

- **INT-01-e (Strong).** Lecture material "comes with no order". He "can't tell what to do first or how topics relate", which makes studying an "insurmountable task". He wants "a roadmap with an order".
- **INT-01-f.** He also wants to reach any piece of information directly. "Product becomes redundant if you have to get to it in a roundabout way." This is why each idea is a button.
- **INT-02-g (Single-source).** "Visual cues help him a lot… even random squares and arrows on a page." Symbol-heavy pages make him switch off.
- **Q-7.** 8 of 22 lean towards being shown first, 10 towards being questioned. A picture of the lecture serves the eight without forcing it on the ten.
- **AFF-K.** "I don't know where to start from": three interviewees, three degrees.
- **T10 sketches.** The group drew this idea three ways before the hi-fi existed: S-21 "Topic relationship map", S-18 "Guided roadmap" and S-54 "Metro map", each scored against INT-01-e (5.0, 5.0 and 4.0 of 10).
- **Week 4 slides (The Human in HCI).** A mental model is "an internal model of the relationships and structures between external, real world things". A map draws that model on the page. Nielsen's sixth heuristic is recognition over recall.

**Against, from our own data.** AE-5: "Seeing everything at once would have overwhelmed me. I worked one question at a time." One participant, about a teaching plan, but it is the same risk.

**Never tested.** The lo-fi (T18) had no map. The look test showed no map. The map has been seen by the team only.

### Published research

- **Studying a ready-made map beats studying text, by a small margin (LIT-32).** Nesbit and Adesope pooled 55 studies and 5,818 students. Maps that students *studied* beat text (0.39, 29 comparisons) and beat outlines or lists (0.28, 10 comparisons). Maps that students *built* did better (0.82). A later meta-analysis of 142 comparisons agrees: g = 0.43 for studying, 0.72 for building (LIT-33).
- **Who gains, and what they gain.** Students "recall more central ideas when they learn from a knowledge map", and those with low verbal ability or low prior knowledge "often benefit the most" (LIT-35). That fits a student meeting a lecture for the first time.
- **Why a diagram can beat sentences.** A diagram groups related information "by location", so the reader searches less (LIT-34). This is a theory paper with no participants.
- **A map given to you is a fair choice.** In three experiments, students given an organiser did as well or better on transfer than students who built their own, and the fewest organisers gave the largest gain (LIT-38).
- **Rows, top to bottom, help beginners.** In two experiments, students with low prior knowledge recalled more and felt less lost with a hierarchical map than with a network (LIT-36, LIT-37). The samples are small: 44 and 24.
- **A map teaches structure more than content.** A structured overview gave no better recall of each page, but "significantly better acquisition of knowledge of structure" (LIT-39).
- **Fewer crossings.** After path length, "the two most important factors are continuity and edge crossings" for reading a graph (LIT-40). This backs straight links and a slot for each link that skips a row.

### What argues against it

- **As a clickable menu, a map is no better than a list (LIT-32).** Six studies of hyperlinked maps gave an effect of 0.02: "absent for hyperlinked maps". This is the direct test of our use, and it is null.
- **Answering questions beats mapping.** Students who practised retrieval remembered more a week later than students who drew a concept map with the text open (0.67 against 0.45; LIT-41). They *built* maps; ours is given. The point stands: the map does not replace Practise.
- **It may hinder students who already know the topic** (LIT-42).
- **The AI's map may be wrong.** In one study, 84% of the concepts an AI pulled out of a text were correct. Its 14 participants reported 31.5% less mental effort with the map, and spent 22.6% longer (LIT-43). No study was found that tests whether an AI-written map helps learning.
- **Simpler views are preferred for showing mastery** (LIT-54, LIT-55). See section 2.

### What this means

- The honest claim for the deck: **the map shows how a lecture's ideas depend on each other, for students who are new to it.** It is a picture of structure, not a study method and not a better menu.
- The one-column list must stay as good as the map. The evidence says the list will do the menu's job equally well.
- "Seven or eight ideas" has no source. The Week 4 "7 ± 2" slide is about holding a list in short-term memory. No study gives a size limit for a map. "Map shock" is a named problem in the literature, but no experiment on map size was found.

---

## 2. Why show progress on it?

### Our own research

- **INT-01-i (Strong).** He tracks progress "by week, page and lecture". He nearly gave up his flashcard app when 2,000 cards lapsed. "Progress system can't be vindictive/ overly penalising." It must be recoverable, "like the gym".
- **INT-02-c (Contested).** "Once he sees progress he stops chasing." The interview note concludes: "Progress displays need to point to what comes next, not just celebrate what's done." Sketch S-23, "Forward-pointing progress", came from this.
- **C-5 (single method).** "Perceived cost runs ahead of real cost when nothing shows progress."
- **Literature review, implication 3.** The benefit of quizzing is delayed (LIT-16), "so progress over the week must be visible".
- **Lo-fi test, LF-14.** "I personally don't like leaving things undone" (P03). "I like to have completed a set before I start a new set" (P04). The Week 4 slides call this closure.
- **Look test.** The three testers in the repo split on how progress should be drawn. V01 liked Blocks' progress: "not just a mundane graph". V02 chose Blocks and liked the "Needs attention" box because "it adds pressure". V04 found Blocks' progress "info overload", could not read the pie chart, and wanted "bars and numbers". V01 and V02 both praised the weekly target bar.
- **Design log, 23 Nov.** "Finished sessions show no score; they name the topics coming back" (R-6, LIT-23, INT-01-i). A state per idea follows that decision: it names ideas and gives no mark.

### Published research

- **Monitoring progress helps people reach goals (LIT-44).** 138 studies, 19,951 people: d = 0.40. The effect was larger when progress was physically recorded or made public. Most of the studies are about health.
- **Feedback helps on average, and often harms (LIT-45).** 607 effects: d = 0.41, but over a third of feedback interventions made performance worse. Feedback works less well "as attention moves up the hierarchy closer to the self and away from the task".
- **Feedback with information beats praise or blame (LIT-46).** 435 studies: d = 0.48 overall, 0.99 for high-information feedback, 0.24 for reinforcement or punishment. 17% of effects were negative.
- **Feedback about competence supports motivation; rewards can undermine it (LIT-47).** 128 studies: positive feedback raised free-choice behaviour (d = 0.33), tangible rewards that depended on the task lowered it.
- **People speed up as the end comes into view (LIT-48), and a head start helps (LIT-49).** Both come from loyalty cards, not from learning. No independent replication of the head-start effect was found.
- **Skill meters in tutoring software.** In two classroom experiments (302 school pupils), a display of skill bars improved learning in the first, and in the second only when pupils shared control of what to do next (LIT-56, read from summaries only).

### What argues against it

- **A dashboard by itself does not raise achievement (LIT-52).** 38 studies: "negligible or small effects" on achievement. The build repo already cites this (V-36).
- **Visible slow progress puts people off (LIT-50, LIT-51).** In a web survey of 3,179 people, break-off was 12.7% with no indicator and 21.8% when early progress looked slow. A meta-analysis of 32 experiments found the same pattern. A new lecture opens as a screen of "Not yet".
- **Measuring can turn an activity into work (LIT-57).** Six experiments: measurement raised output but "can undermine intrinsic motivation".
- **A highlighted break in a run lowers engagement (LIT-58),** less so if it can be repaired. A block that goes from mint back to lilac is a small version of this.
- **INT-02-c:** seeing progress is his cue to stop.
- **Students prefer the simplest view of their mastery.** Given skill meters, a list, a hierarchy and a concept map, students "showed clear preferences towards simpler representations" (LIT-55). A review of 64 papers says the same (LIT-54). That review also found comparison with peers is widely used to motivate, which runs against our choice. Other reviews find it is "not perceived positively by all learners" and fosters "competition between learners rather than knowledge mastery" (LIT-53).

### What this means

- **The state must lead somewhere.** The evidence supports a state that is about the idea and opens the next action. It does not support a state that only reports. Each block being a button is what earns the display its place.
- **The states describe the idea, never the student.** "To revisit" is about the idea. LIT-45 is the reason to keep it that way.
- **Two risks to test:** a first view that is all "Not yet", and a block that turns from mint to lilac.

---

## 3. Why a mint bar, and why lilac for "To revisit"?

### Our own research

- **Look test, the wrong-answer screen.** V01 on Blocks' large yellow "Not quite": "I felt quite upset looking at this." V04 said it would anger him by the third wrong answer, and asked for "light colours, and the same colours for right and wrong". V02 disagreed: the large box "adds pressure and makes what you learn from your mistake more memorable". So two of the three testers in the repo found a loud "wrong" upsetting, and one liked it.
- **Another tester (Pharmacy) asked for no red on wrong answers.** That session is in Jiven's summary only and is not in the repo yet.
- **R-6 and INT-01-i.** No loss framing, nothing "overdue". Red on a map is how overdue looks.
- **Week 4 slides.** "Red-green colour blindness 8% males, 0.5% females."

### Published research

- **Colour must not be the only signal (LIT-61).** WCAG 1.4.1: "Color is not used as the only visual means of conveying information." This is why each state has a shape and a word.
- **Red and test performance: do not rely on it.** Six experiments found that seeing red before a test "impairs performance" (LIT-59). A meta-analysis of 67 effects found d = −0.34, and nothing left after correcting for publication bias. It "casts doubt on the existence of a robust color-priming effect" (LIT-60).
- **A part-filled bar.** The nearest evidence is the head-start effect (LIT-49): people given some progress at the start are more likely to finish. It is from car-wash cards.
- **No study was found** that compares a state (four words) with a percentage, or lilac with red.

### A check we ran ourselves

Mint (`#7BE0AE`) and lilac (`#CDBEFF`) were put through a standard simulation of colour-blindness (Machado et al. 2009, full severity). The figure is the distance between the two colours in CIELAB; bigger is easier to tell apart.

| Seen by | Mint and lilac | A typical red and green |
|---|---|---|
| Typical colour vision | 74 | 107 |
| No red cones (protanopia) | 52 | 19 |
| No green cones (deuteranopia) | 42 | 22 |

- Mint and lilac stay clearly apart for red-green colour-blind students. Red and green nearly merge.
- **Mint and lilac are almost the same lightness** (contrast 1.06 to 1). In greyscale they look the same. So the shape and the word are doing real work, as LIT-61 requires.
- Ink text reads at 10.5 to 1 on mint and 9.9 to 1 on lilac.
- This is a simulation. No colour-blind student has tested it.

### What this means

The case for lilac, in the order of its strength: our testers' reaction to a loud "wrong"; no loss framing (R-6); it survives red-green colour-blindness; it is never the only signal. The red-and-performance studies are not part of the case.

---

## 4. The Week 8 models of behaviour change

T20 (`../define/behaviour-change.md`, section 2.4) took the ten models against the notification. This table takes the same ten against the progress map. It is our reading, for the group to review.

| Model (Wk 8) | What the progress map is, in that model | What the model warns |
|---|---|---|
| **COM-B** (LIT-2) | Psychological capability: knowing what you know. The gap in our data is planning, not ability (Q-11) | Our students already have the motivation (Q-8). The map should not try to add it |
| **Fogg** (LIT-1) | The map is not a prompt. A lilac block raises ability: one tap starts practice on that idea | A display nobody opens starts nothing. The notification is still the prompt |
| **Transtheoretical** | Not used, as in T20. Relapse only: a lapsed idea comes back as lilac, never as "overdue" | The states describe ideas, not the student's readiness |
| **Dual process** | A colour, a shape and a word are read at a glance. Working out what to revise from 40 slides is slow thinking | — |
| **Goal setting** (LIT-21) | Goals need feedback. "Secured" is a clear goal for each idea, and the block shows the distance to it | A goal that looks out of reach lowers commitment: the all-"Not yet" first view |
| **Social cognitive** | A Secured block is a record of having done it. Bandura calls this "performance accomplishments", a source of self-efficacy (LIT-64). Low self-efficacy is one of the strong predictors of procrastination (LIT-13) | — |
| **Bounded rationality** | The lilac blocks are the short list. The student does not search for what to do next (INT-02-b) | — |
| **Prospect theory** (LIT-23) | Nothing is lost by not studying: no streak, no countdown, no red | A block that turns from mint to lilac is a loss. It needs the way back to be one tap |
| **Planned behaviour** (LIT-22) | Perceived control: a few named ideas feel doable, a whole module does not (INT-04-e) | No social norm is used. No comparison with others |
| **Implementation intentions** (LIT-3) | Not used. The map is not an if-then plan. The week's blocks are | — |

**In the vocabulary of behaviour change techniques (LIT-62).** The states are 2.7 *Feedback on outcome(s) of behavior*. A lilac block is 1.6 *Discrepancy between current behavior and goal*, followed by 8.1 *Behavioral practice/rehearsal*. It is not 2.3 *Self-monitoring of behavior*: that needs the person to record, and LockedIn records for them. In diet and exercise programmes, monitoring worked better when combined with another goal technique (0.42 against 0.26; LIT-63). That is the same condition as section 2: the display needs the action.

**What HCI found building trackers.**

- **Do not punish.** "The user should not receive a reward nor a punishment, but his/her interest should be sustained." A display that showed sad fish for inactivity "sometimes resulted in reduced use" (LIT-66).
- **Lapsing is normal.** People stop tracking and come back. "Seeing historical data (and potential failures surfaced) may be demotivating for someone looking to resume" (LIT-67). This is INT-01-i in a model.
- **Reflection must lead to action** (LIT-68): problems early in the chain carry through to the end.
- **People glance.** Over ten months, 256 users' use of an activity tracker "was dominated by glances - brief, 5-sec sessions", with little interest in history (LIT-69). The map has to be readable in that time.

**The critique to state in the deck (LIT-70).** Matching a finished design to theories afterwards is a known pitfall in HCI: "picking only some constructs from a theory", and treating guidelines from single studies "as 'requirements' when they should be thought of as design hypotheses". Our models and labels describe the design. They do not show it works. The hi-fi test does that.

---

## 5. Where Mermaid comes in

**What it is.** Mermaid is "a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions". You write `A --> B` and it draws two boxes and an arrow.

**Why it is in LockedIn.** It came with LearnHarness. The engine's tutor already writes its teaching plan as a Mermaid graph, and the engine checks that graph before using it. The hi-fi used the same format for a lecture's concept map (V-6 in the build repo, citing INT-02-g, INT-01-e and Q-7). Three practical reasons:

- An AI can write it as plain text, and a program can check it.
- It was already in the engine, so the map and the plan share one format.
- The AI describes the ideas and links; it never has to draw.

**No research backs Mermaid itself.** No study of Mermaid with learners was found. The research in section 1 is about maps of boxes and arrows, whatever draws them.

**Why LockedIn now draws the map itself (V-33, V-84).** Jiven's own lecture maps came out as "a massive directed graph, quite messy". Mermaid still holds the data. LockedIn does the drawing.

- **The change is not "rows instead of a tangle".** The Mermaid version in the app (11.17) already places boxes in layers. What changed is control: one block size, every block a button with its state and slides, a slot for each link that skips a row, a list when the screen is narrow, and the app's own colours.
- **The layout is a tested rule:** no overlaps, no link through a block, every link drawn, the same drawing every time. This is the build's answer to LIT-40.
- Jiven chose rows of blocks over one column and over restyled Mermaid on 27 Nov, after seeing his own maps drawn each way.

---

## 6. Limits

- **No user has seen the map.** Everything in section 1 is evidence for maps in general. The first evidence for ours is the hi-fi test on 30 Nov.
- **The primary evidence for the map is two interviewees** (INT-01-e, INT-02-g) and a questionnaire split (Q-7). INT-02-g is single-source.
- **Most of the published studies are short laboratory sessions,** tested by recall soon after. The map studies with the right layout have 24 to 47 participants.
- **The progress evidence is mostly about health goals** (LIT-44, LIT-63) and loyalty cards (LIT-48, LIT-49). The tutoring evidence is school pupils (LIT-56).
- **This note was written after the design.** Section 4's critique applies to it.
- **Not covered:** the score, the trend line and the milestones on the Progress page.

**A correction owed elsewhere.** `literature-learning-loop.md` and the register say of LIT-24 that quizzing raises achievement by g = 0.499 "compared with restudying and other strategies such as concept mapping". Read from the paper on 27 Nov: 0.499 is the overall figure. Against restudying it is 0.330. Against other elaborative strategies (concept mapping, note-making, summarising) it is 0.095, with a confidence interval of −0.005 to 0.194 and p = .062, from 41 effects. So LIT-24 does not show that quizzing beats concept mapping in the classroom. LIT-41 does show it, in the laboratory.

**Could not be confirmed from the source,** so no ID is given:

- Purchase (1997), *Graph Drawing '97*: crossings as the most important aesthetic. Seen in a search extract only.
- Potelle & Rouet (2003), *Int. J. Human-Computer Studies* 58(3): a hierarchical map helped low-knowledge readers. Abstract seen on a mirror only.
- Mitrovic & Martin (2007), *IJAIED* 17: skill meters helped less able students. Repository snippet only.
- Hanus & Fox (2015), *Computers & Education* 80: badges and a leaderboard lowered motivation. Catalogue record only.
- Hattie & Timperley (2007): the average effect of 0.79 is reported second-hand.

**Looked for and not found:** a study of a prerequisite map with mastery shown on it; an evaluation of Khan Academy's knowledge map; a size limit for maps; a comparison of a state with a percentage; lilac against red; streaks or loss aversion in a learning setting; any field study of a progress display for study procrastination.

---

## 7. Questions the hi-fi test could ask (proposals)

These are for Lekan and the group to accept or drop. Each one tests a weak point above.

1. **Can they read it?** Show the map alone: "Which idea would you do next?" Timed, as in the look test.
2. **Map or list?** Show the same lecture as the map and as the one-column list. Which would they use, and why? (LIT-32, LIT-55)
3. **What does lilac mean?** Ask before telling them.
4. **The first view.** How does a lecture that is all "Not yet" feel? (LIT-50)
5. **A block that goes back.** Show an idea that was mint and is now lilac. How does that feel? (LIT-58, INT-01-i)
6. **After progress.** When most blocks are mint, what would they do next? (INT-02-c)

---

## 8. Sources

"Read" says what the claim was checked against: **Paper** (the text or its tables), **Abstract**, or **Summary** (a secondary source).

### Maps

| ID | Source | What it found | Read |
|---|---|---|---|
| **LIT-32** | Nesbit & Adesope (2006). Learning with concept and knowledge maps: a meta-analysis. *Review of Educational Research*, 76(3), 413-448 | 55 studies, 5,818 students. Overall 0.60. Maps studied: 0.39 against text (29 comparisons), 0.28 against outlines or lists (10). Maps built: 0.82. Hyperlinked maps: 0.02 (6 studies), "absent for hyperlinked maps" | Paper |
| **LIT-33** | Schroeder, Nesbit, Anguiano & Adesope (2018). Studying and constructing concept maps: a meta-analysis. *Educational Psychology Review*, 30(2), 431-455. doi:10.1007/s10648-017-9403-9 | 142 comparisons, 11,814 students. g = 0.58 overall, 0.72 for building, 0.43 for studying | Abstract |
| **LIT-34** | Larkin & Simon (1987). Why a diagram is (sometimes) worth ten thousand words. *Cognitive Science*, 11, 65-99 | Diagrams index information by location, which cuts search. Theory with computer models, no participants | Paper |
| **LIT-35** | O'Donnell, Dansereau & Hall (2002). Knowledge maps as scaffolds for cognitive processing. *Educational Psychology Review*, 14(1), 71-86. doi:10.1023/A:1013132527007 | Review. Students recall more central ideas from a map; low verbal ability or low prior knowledge often benefit most | Abstract |
| **LIT-36** | Amadieu, Tricot & Mariné (2009). Prior knowledge in learning from a non-linear electronic document. *Computers in Human Behavior*, 25(2), 381-388 | 44 students. With low prior knowledge, a hierarchical structure gave better recall and less disorientation. High prior knowledge did better with a network | Abstract |
| **LIT-37** | Amadieu, van Gog, Paas, Tricot & Mariné (2009). Effects of prior knowledge and concept-map structure on disorientation, cognitive load, and learning. *Learning and Instruction*, 19(5), 376-386 | 24 students. Low-knowledge learners gained more and were less lost with a hierarchical map | Paper (preprint) |
| **LIT-38** | Stull & Mayer (2007). Learning by doing versus learning by viewing. *Journal of Educational Psychology*, 99(4), 808-820 | Three experiments. Organisers provided by the author gave equal or better transfer than ones students built (d = 0.24 not significant, 0.43, 0.84) | Abstract |
| **LIT-39** | de Jong & van der Hulst (2002). The effects of graphical overviews on knowledge acquisition in hypertext. *Journal of Computer Assisted Learning*, 18(2), 219-231 | A structured overview gave better knowledge of structure, not better recall of content | Abstract |
| **LIT-40** | Ware, Purchase, Colpoys & McGill (2002). Cognitive measurements of graph aesthetics. *Information Visualization*, 1(2), 103-110 | After path length, continuity and edge crossings matter most for reading a graph | Abstract |
| **LIT-41** | Karpicke & Blunt (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science*, 331(6018), 772-775 | Experiment 1, 80 students: 0.67 for retrieval against 0.45 for building a map (d = 1.50). Experiment 2, 120 students: d = 1.07 | Paper |
| **LIT-42** | Kalyuga, Ayres, Chandler & Sweller (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23-31 | Help that works for novices can lose its effect, or harm, with experienced learners | Abstract |
| **LIT-43** | Han & Choi (2025). Beyond linear digital reading: an LLM-powered concept mapping approach for reducing cognitive load. *BEA 2025*, 805-817. doi:10.18653/v1/2025.bea-1.58 | An AI extracted concepts from texts in ten disciplines with 83.62% precision. 14 participants: 31.5% lower perceived cognitive load with the map, 22.6% more time. No learning measure | Abstract |

### Progress and feedback

| ID | Source | What it found | Read |
|---|---|---|---|
| **LIT-44** | Harkin et al. (2016). Does monitoring goal progress promote goal attainment? *Psychological Bulletin*, 142(2), 198-229. doi:10.1037/bul0000025 | 138 studies, 19,951 people. d = 0.40. Larger when progress is recorded or public. Mostly health | Abstract |
| **LIT-45** | Kluger & DeNisi (1996). The effects of feedback interventions on performance. *Psychological Bulletin*, 119(2), 254-284 | 607 effects. d = 0.41, and over a third lowered performance. Weaker as attention moves from the task to the self | Abstract |
| **LIT-46** | Wisniewski, Zierer & Hattie (2020). The power of feedback revisited. *Frontiers in Psychology*, 10, 3087. doi:10.3389/fpsyg.2019.03087 | 435 studies. d = 0.48. High-information feedback 0.99; reinforcement or punishment 0.24. 17% negative | Abstract |
| **LIT-47** | Deci, Koestner & Ryan (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin*, 125(6), 627-668 | 128 studies. Positive feedback raised free-choice behaviour (d = 0.33). Tangible task-dependent rewards lowered it | Abstract |
| **LIT-48** | Kivetz, Urminsky & Zheng (2006). The goal-gradient hypothesis resurrected. *Journal of Marketing Research*, 43(1), 39-58 | Customers bought more often as a free coffee came nearer. "The illusion of progress" speeds people up | Abstract |
| **LIT-49** | Nunes & Drèze (2006). The endowed progress effect. *Journal of Consumer Research*, 32(4), 504-512 | A head start "increases the likelihood of task completion and decreases completion time". No replication found | Abstract |
| **LIT-50** | Conrad, Couper, Tourangeau & Peytchev (2010). The impact of progress indicators on task completion. *Interacting with Computers*, 22(5), 417-427 | 3,179 people. Break-off 12.7% with none, 21.8% when progress started slow, 11.3% when it started fast | Paper |
| **LIT-51** | Villar, Callegaro & Yang (2013). Where am I? *Social Science Computer Review*, 31(6), 744-762 | 32 experiments. A steady indicator does not cut drop-out; slow early progress raises it | Abstract |
| **LIT-52** | Kaliisa et al. (2024). Have learning analytics dashboards lived up to the hype? *LAK '24*. doi:10.1145/3636555.3636884 | 38 studies. "Negligible or small effects" on achievement; more on taking part | Abstract |
| **LIT-53** | Jivet, Scheffel, Drachsler & Specht (2017). Awareness is not enough. *EC-TEL 2017*, LNCS 10474, 82-96; and Jivet et al. (2018), *LAK '18*, 31-40 | Dashboards "foster competition between learners rather than knowledge mastery". Peer comparison "was not perceived positively by all learners" | Abstract |
| **LIT-54** | Hooshyar et al. (2020). Open learner models in supporting self-regulated learning in higher education. *Computers & Education*, 154, 103878 | 64 articles. "A simple inspectable OLM is more preferred." Comparison is widely used to motivate | Abstract |
| **LIT-55** | Duan, Mitrovic & Churcher (2010). Evaluating the effectiveness of multiple open student models. *ICCE 2010* | Skill meters, a list, a hierarchy and a concept map compared. Students "showed clear preferences towards simpler representations" | Abstract |
| **LIT-56** | Long & Aleven (2017). Enhancing learning outcomes through self-regulated learning support with an Open Learner Model. *User Modeling and User-Adapted Interaction*, 27(1), 55-88 | 302 pupils, grades 7 and 8. Skill bars improved learning in one experiment; in the other only with shared control | Summary |
| **LIT-57** | Etkin (2016). The hidden cost of personal quantification. *Journal of Consumer Research*, 42(6), 967-984 | Six experiments. Measurement raises output but "can undermine intrinsic motivation" | Abstract |
| **LIT-58** | Silverman & Barasch (2023). On or off track: how (broken) streaks affect consumer decisions. *Journal of Consumer Research*, 49(6), 1095-1117 | Seven studies. A highlighted broken streak lowers later engagement, less if it can be repaired | Abstract |

### Colour

| ID | Source | What it found | Read |
|---|---|---|---|
| **LIT-59** | Elliot, Maier, Moller, Friedman & Meinhardt (2007). Color and psychological functioning: the effect of red on performance attainment. *JEP: General*, 136(1), 154-168 | Six experiments. Brief red before a test "impairs performance" | Abstract |
| **LIT-60** | Gnambs (2020). Limited evidence for the effect of red color on cognitive performance: a meta-analysis. *Psychonomic Bulletin & Review*, 27(6), 1374-1382 | 67 effects. d = −0.34, and none after correcting for publication bias | Abstract |
| **LIT-61** | W3C. WCAG 2.2, Success Criterion 1.4.1 Use of Color (Level A) | "Color is not used as the only visual means of conveying information" | Paper (the standard's text) |

### Behaviour change and HCI

| ID | Source | What it found | Read |
|---|---|---|---|
| **LIT-62** | Michie et al. (2013). The behavior change technique taxonomy (v1) of 93 hierarchically clustered techniques. *Annals of Behavioral Medicine*, 46(1), 81-95 | The agreed names: 1.6, 2.2, 2.3, 2.7, 8.1, 8.7 and the rest | Paper |
| **LIT-63** | Michie, Abraham, Whittington, McAteer & Gupta (2009). Effective techniques in healthy eating and physical activity interventions. *Health Psychology*, 28(6), 690-701 | 122 evaluations, 44,747 people. Self-monitoring with another control-theory technique: 0.42 against 0.26 | Abstract |
| **LIT-64** | Bandura (1977). Self-efficacy: toward a unifying theory of behavioral change. *Psychological Review*, 84(2), 191-215 | Four sources of self-efficacy; "performance accomplishments" is the first | Abstract |
| **LIT-65** | Carver & Scheier (1982). Control theory. *Psychological Bulletin*, 92(1), 111-135 | Behaviour as a feedback loop that reduces the gap between where you are and the goal | Abstract |
| **LIT-66** | Consolvo, McDonald & Landay (2009). Theory-driven design strategies for technologies that support behavior change in everyday life. *CHI 2009*, 405-414 | Eight strategies. Positive: no reward and no punishment. Punishing displays "sometimes resulted in reduced use" | Paper |
| **LIT-67** | Epstein, Ping, Fogarty & Munson (2015). A lived informatics model of personal informatics. *UbiComp '15*, 731-742 | Lapsing and resuming are normal stages. History can demotivate someone returning | Paper |
| **LIT-68** | Li, Dey & Forlizzi (2010). A stage-based model of personal informatics systems. *CHI 2010*, 557-566 | Five stages from preparation to action; "barriers cascade to later stages" | Paper |
| **LIT-69** | Gouveia, Karapanos & Hassenzahl (2015). How do we engage with activity trackers? *UbiComp '15*, 1305-1316 | 256 users over ten months. Use "was dominated by glances - brief, 5-sec sessions" | Abstract |
| **LIT-70** | Hekler, Klasnja, Froehlich & Buman (2013). Mind the theoretical gap. *CHI 2013*, 3307-3316 | Pitfalls of using behaviour theory in HCI; guidelines are "design hypotheses", not requirements | Paper |

Already in the register and used here: LIT-1 (Fogg), LIT-2 (COM-B), LIT-3 (implementation intentions), LIT-13 (Steel), LIT-16 (Roediger & Karpicke), LIT-21 (goal setting), LIT-22 (planned behaviour), LIT-23 (prospect theory), LIT-24 (Yang et al.).

The colour-blindness simulation in section 3 uses Machado, Oliveira & Fernandes (2009), *IEEE Transactions on Visualization and Computer Graphics*, 15(6), 1291-1298. It is a method, not a finding, so it has no ID.
