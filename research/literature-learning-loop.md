# Literature: the learning loop (probe, learn, check, predict)

Status: DRAFT v0.1, 23 Nov 2026. Owner: Jiven, for KAYZ to review. Rubric criteria 6 and 7 (domain understanding).

**What this covers.** The hi-fi teaches with the LearnHarness engine (design log, 10 Nov: "keep LearnHarness's learning engine and cut its setup and overhead"). The engine runs a fixed loop. Until now our literature backs one part of it: retrieval (LIT-16, LIT-17, from 2006 and 2013). This review backs the whole loop with recent sources, explains the memory mechanisms underneath, and tests the claim that the loop beats what students already use.

This review adds **LIT-24 to LIT-31**. Every source was checked on 23 Nov 2026 against its Europe PMC or Crossref record (authors, year, venue, abstract).

## The loop in one table
| Step | What the engine does | Source in the build |
|---|---|---|
| **Probe** | Asks short questions to find what the student already holds and what they want to reach | LearnHarness `docs/teaching-methodology.md` §1, §10.1 |
| **Learn** | Teaches one reasoning step at a time, each attached to something the student already holds | §5, §7b |
| **Check** | After every step, a graded question that shows whether the step landed. A miss is repaired before moving on | §9; question `role: "check"` |
| **Predict** | Just before a step is taught, asks the student to guess what comes next | question `role: "predict"` |

The hi-fi adds a confidence rating and a "why" field to each question (v0.1 spec J1, from AE2-5 and AE2-8), and resurfaces missed questions later (N-2).

## The two headline papers

These are the two to put on the poster and the deck. One shows the loop's core mechanism works in real classrooms. The other shows why an answer-giving AI, the tool students already reach for, is not a substitute.

### 1. Yang et al. (2021): quizzing works in real classrooms (LIT-24)
Yang, C., Luo, L., Vadillo, M. A., Yu, R. & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: a systematic and meta-analytic review. *Psychological Bulletin*, 147(4), 399-435. doi:10.1037/bul0000309

- **What they did.** A systematic review and meta-analysis of **222 classroom studies** covering **48,478 students**. Classroom only, not the laboratory.
- **What they found.** Quizzing "raises student academic achievement to a medium extent (g = 0.499)", compared with restudying and other strategies such as concept mapping. The size of the benefit depends on, among other things, "provision of corrective feedback" and "number of test repetitions".
- **Why it matters for us.** This is the evidence for **check**. It is newer and far larger than LIT-16, and it is from classrooms like ours. The two moderators it names are both built in: every check gives corrective feedback, and missed questions come back (N-2). Their framing fits our design exactly: a test is "not only an assessment of learning but also an assessment for learning".

### 2. Bastani et al. (2025): AI without guardrails harms learning (LIT-25)
Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö. & Mariman, R. (2025). Generative AI without guardrails can harm learning: evidence from high school mathematics. *PNAS*, 122(26), e2422633122. doi:10.1073/pnas.2422633122

- **What they did.** A field experiment with nearly 1,000 high-school maths students. One group had a tutor that "mimics a standard ChatGPT interface" (GPT Base). A second had a tutor "with prompts designed to safeguard learning" (GPT Tutor). A third had no AI.
- **What they found.** With the AI available, grades rose: 48% for GPT Base, 127% for GPT Tutor. Once it was taken away, GPT Base students did **17% worse than students who never had it**. Students used it "as a 'crutch'". The safeguards in GPT Tutor "largely mitigated" that harm.
- **Why it matters for us.** This is the strongest answer to AE2-11 ("a general assistant could do the same") and to Q-6 (students use chatbots most). A plain chatbot gives the answer, so the student never retrieves anything. Our loop never hands over an answer before the student has committed to one. That is the guardrail Bastani et al. tested.

## The rest of the loop

| ID | Source | What it found | Step | Against our findings | Label |
|---|---|---|---|---|---|
| **LIT-26** | Pan & Carpenter (2023). Prequestioning and pretesting effects: a review of empirical research, theoretical perspectives, and implications for educational practice. *Educational Psychology Review*, 35, 97. doi:10.1007/s10648-023-09814-5 | Testing students on material they have not learned yet "can benefit learning if there is an opportunity to study the correct answers afterwards". It works "despite many erroneous responses", with text, video and lectures, and the evidence covers memory and transfer. The size varies with procedure | Predict, Probe | AE2-9: being questioned before being taught "read as being tested". The mechanism works; how it is framed decides how it feels | Supports, and complicates |
| **LIT-27** | Metcalfe (2017). Learning from errors. *Annual Review of Psychology*, 68, 465-489. doi:10.1146/annurev-psych-010416-044022 | "Errorful learning followed by corrective feedback is beneficial." Errors made with high confidence are "corrected more readily than low-confidence errors". Feedback that analyses "the reasoning leading up to the mistake" is crucial | Check, Predict | AE2-5 and AE2-6: the confidence rating caught a wrong answer given at 30%. The "why" field (AE2-8) is the reasoning the feedback can address | Supports |
| **LIT-28** | Kestin, Miller, Klales, Milbourne & Ponti (2025). AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. *Scientific Reports*, 15, 17458. doi:10.1038/s41598-025-97652-6 | A randomised controlled trial with Harvard physics students. An AI tutor built on the same teaching best practices as the class: students "learn significantly more in less time" than in an active-learning class, and "feel more engaged and more motivated" | The whole loop | X-9: half our interviewees distrust AI. This is evidence that a well-designed AI tutor can teach, not just answer | Supports, one course only |

## How the brain forms memories, and where the loop fits

In plain terms, a memory goes through three stages:

1. **Encoding.** New information is first held by the hippocampus. It is fragile at this point.
2. **Consolidation.** Over time, and especially during sleep, the memory is moved into the neocortex and linked with what is already there. That is what makes it last.
3. **Retrieval.** Every recall reactivates the memory and its links, and changes it.

Three recent reviews show how the loop works with that process.

| ID | Source | The mechanism | Step it explains |
|---|---|---|---|
| **LIT-29** | Antony, Ferreira, Norman & Wimber (2017). Retrieval as a fast route to memory consolidation. *Trends in Cognitive Sciences*, 21(8), 573-576. doi:10.1016/j.tics.2017.05.001 | "Retrieval acts as a rapid consolidation event". Recall reactivates the memory and its associations, building lasting hippocampal-neocortical links. The authors compare it to the consolidation that happens offline, in sleep. Restudying does not reactivate the links in the same way | **Check.** It is why answering beats rereading (Q-6). Co-author Wimber was at the University of Birmingham when it was written |
| **LIT-30** | Rouhani, Niv, Frank & Schwabe (2023). Multiple routes to enhanced memory for emotionally relevant events. *Trends in Cognitive Sciences*, 27(9), 867-882. doi:10.1016/j.tics.2023.06.006 | "Memories are strengthened by the extent to which outcomes deviate from expectations, that is, by prediction errors". This route has "a distinct neural signature" | **Predict.** A guess sets an expectation. The answer that follows creates a prediction error, and the brain prioritises that moment for memory |
| **LIT-31** | Gilboa & Marlatte (2017). Neurobiology of schemas and schema-mediated memory. *Trends in Cognitive Sciences*, 21(8), 618-631. doi:10.1016/j.tics.2017.04.013 | Schemas, the structures of what a person already knows, "enhance or distort mnemonic processing from the outset" and "accelerate neocortical integration". This is supported by the ventromedial prefrontal cortex, the hippocampus and the angular gyrus | **Probe and Learn.** New knowledge attached to what is already held integrates faster, so the engine first finds what is held (probe) and then adds one step to it (learn) |

## Why the loop and not what students use now
`existing-solutions.md` sorts the market into column groups. Read against this review:

| What students use | What it does | What the literature says it misses |
|---|---|---|
| Rereading, highlighting, summarising (Q-6) | Re-exposure | Rated low utility (LIT-17). No retrieval, so no fast consolidation (LIT-29) |
| A general chatbot | Gives the answer | Performance goes up while the tool is there and down after it is taken away (LIT-25) |
| Flashcards: Anki, Quizlet | Retrieval and spacing | Strong on retrieval (LIT-24), but it does not teach. The student builds the cards, and a card does not find what they already hold (LIT-31) |
| AI study modes | Questioning, on request | Close to our loop, but only if the student turns it on and keeps it on. Bastani et al. found the guardrail is what protects learning (LIT-25) |
| **The LockedIn loop** | Probe, learn one step, check, predict, with feedback, confidence and resurfaced misses | Puts the strongest mechanisms in one session: retrieval (LIT-24, LIT-29), pretesting (LIT-26, LIT-30), feedback on confident errors (LIT-27) and building on what is held (LIT-31). The guardrail is always on (LIT-25) |

**The claim we can make:** every step of the loop rests on a mechanism with strong, recent evidence, and the loop withholds answers, which is the design feature that separated a helpful AI tutor from a harmful one (LIT-25).

**The claim we cannot make yet:** that LockedIn itself teaches better than any of these tools. No study has tested our product. The hi-fi user test (27 Nov) is where we gather our own evidence, and the deck should present it as an early signal, not proof.

## What it means for the design
1. **Keep every check, with feedback.** Corrective feedback is one of the moderators Yang et al. found (LIT-24). A check with no explanation wastes half its value.
2. **Keep the confidence rating.** It is what makes hypercorrection visible: a confident wrong answer is the most valuable moment in a session (LIT-27, AE2-6).
3. **Frame predict questions as guesses.** Pretesting works even when most answers are wrong (LIT-26), but AE2-9 shows it can feel like an exam. The wording should say "have a guess" and never mark a predict question as failed.
4. **Never show the answer before the student commits.** This is the guardrail (LIT-25). It also gives us an honest reply to "why not just use ChatGPT?" (AE2-11, X-9).
5. **Show progress over the week.** The benefit of retrieval arrives later (LIT-16), so the student will not feel it straight away (AFF-H).

## Limitations
- This is a targeted review, not a systematic search. It looked for support for a loop we had already chosen, so it may miss counter-evidence.
- Bastani et al. (LIT-25) studied high-school maths in one country, while generative AI was still new. Kestin et al. (LIT-28) studied one course, and the tutor was built by the course's own instructors.
- Pan & Carpenter (LIT-26) say the size of the pretesting effect "may vary due to differences in procedure", and that best practice for education still needs research.
- LIT-29, LIT-30 and LIT-31 are reviews of mechanism, mostly from laboratory studies. They explain why the loop should work. They do not show that it works at the scale of a semester.
- Antony et al. (LIT-29) is a proposal with testable predictions, not a settled result.
- The summaries quote each paper's abstract. The full texts were not read.

## Sources checked 23 Nov 2026
- Yang et al. 2021: Europe PMC record, PubMed 33683913.
- Bastani et al. 2025: Europe PMC record; PNAS e2422633122.
- Pan & Carpenter 2023: Crossref record for doi 10.1007/s10648-023-09814-5 (Springer, open access).
- Metcalfe 2017: Europe PMC record, PubMed 27648988.
- Kestin et al. 2025: Europe PMC record; Scientific Reports 15, 17458.
- Antony et al. 2017: Europe PMC record, PubMed 28583416.
- Rouhani et al. 2023: Europe PMC record.
- Gilboa & Marlatte 2017: Europe PMC record.
