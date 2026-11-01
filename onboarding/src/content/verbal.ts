import type { Level, Question } from '../engine/types';

/**
 * Authored verbal-reasoning questions. Add new items here — each needs a unique id, a level (1–8),
 * a passage (array of sentences), options, the index of the correct option, two hints and an explanation.
 */
interface VerbalSpec {
  level: Level;
  n: number;
  kind: string;
  passage: string[];
  stem: string;
  options: string[];
  correct: number;
  hints: [string, string];
  explanation: string;
}

const SPECS: VerbalSpec[] = [
  {
    level: 1, n: 1, kind: 'explicit-information',
    passage: ['The library opens at 8 a.m. on weekdays.', 'On Saturdays it opens at 10 a.m. and closes at 4 p.m.', 'It is closed on Sundays.'],
    stem: 'On which day does the library open at 10 a.m.?',
    options: ['Weekdays', 'Saturday', 'Sunday', 'Every day'], correct: 1,
    hints: ['Scan the passage for “10 a.m.”.', 'Look at the second sentence.'],
    explanation: 'The second sentence says that on Saturdays the library opens at 10 a.m.',
  },
  {
    level: 1, n: 2, kind: 'explicit-information',
    passage: ['Maya booked a study room for Tuesday.', 'She chose a room with a whiteboard because she wanted to sketch diagrams.', 'Her friend Ola will join her after lunch.'],
    stem: 'Why did Maya choose a room with a whiteboard?',
    options: ['Ola asked for one', 'It was the cheapest room', 'She wanted to sketch diagrams', 'It was closest to the café'], correct: 2,
    hints: ['The reason is given directly in the passage.', 'Find the word “because”.'],
    explanation: 'The passage states she chose it “because she wanted to sketch diagrams”.',
  },
  {
    level: 2, n: 1, kind: 'explicit-information',
    passage: ['Octopuses have three hearts.', 'Two pump blood through the gills, and the third pumps blood to the rest of the body.', 'When an octopus swims, the heart serving the body stops beating, which is why they often prefer to crawl.'],
    stem: 'According to the passage, what happens to the body heart when an octopus swims?',
    options: ['It beats faster', 'It stops beating', 'It pumps blood to the gills', 'It splits into two'], correct: 1,
    hints: ['Look at the final sentence.', 'The passage says it “stops beating”.'],
    explanation: 'The last sentence says the heart serving the body stops beating while the octopus swims.',
  },
  {
    level: 2, n: 2, kind: 'explicit-information',
    passage: ['The campus café introduced a reusable-cup discount in January.', 'By March, the number of disposable cups used each week had fallen by about a third.', 'The café manager said more students now bring their own cups.'],
    stem: 'Which statement is directly stated in the passage?',
    options: ['The discount made every student buy a cup', 'Disposable cup use fell by about a third by March', 'The café lost money on the discount', 'Reusable cups are cheaper than disposable ones'], correct: 1,
    hints: ['Look for a claim that appears in the passage word-for-word (or nearly).', 'Check the second sentence.'],
    explanation: 'Only the second option is stated. The others add details (every student, lost money, cheaper) that the passage never mentions.',
  },
  {
    level: 3, n: 1, kind: 'reasonable-conclusion',
    passage: ['A group of students tried revising their course content across several days.', 'In a follow-up quiz one week later, the group remembered more information than another group who completed all their revision in one sitting.', 'The study did not investigate longer-term results.'],
    stem: 'Which conclusion can we reasonably make?',
    options: [
      'Spaced revision always works better for everyone.',
      'The benefits were proven to last several months.',
      'Spreading revision over several days was associated with better results after one week.',
      'Revising in one sitting never helps.',
    ], correct: 2,
    hints: ['Watch for absolute words such as “always”, “proven” and “never”.', 'Which option only claims what the study actually measured?'],
    explanation: 'The study only compared results after one week, so the cautious conclusion is that spaced revision was associated with better one-week results. The others over-generalise.',
  },
  {
    level: 3, n: 2, kind: 'inference',
    passage: ['Jon always cycles to campus when it is dry.', 'Today, Jon arrived on foot and his bag was soaked.', 'Jon does not own a car.'],
    stem: 'What can most reasonably be inferred?',
    options: ['Jon’s bicycle is broken', 'Jon dislikes cycling', 'It was probably wet today', 'Jon walks to campus every day'], correct: 2,
    hints: ['What does Jon do when it is dry? What did he do today?', 'A soaked bag is a clue about the weather.'],
    explanation: 'He cycles when it is dry, today he walked, and his bag was soaked — so wet weather is the best-supported inference. A broken bike is possible but nothing in the passage points to it.',
  },
  {
    level: 4, n: 1, kind: 'assumption',
    passage: ['A university introduced optional 10-minute movement breaks into 90-minute seminars.', 'Students in seminars with breaks reported higher engagement in the end-of-term survey.', 'Students chose which seminars to attend.'],
    stem: 'To conclude that the breaks caused the higher engagement, which assumption is needed?',
    options: [
      'Students who chose seminars with breaks were not already more engaged beforehand.',
      'Seminars with breaks were shorter overall.',
      'Every student took the breaks.',
      'Engagement cannot be measured by surveys.',
    ], correct: 0,
    hints: ['Because students chose their seminars, what other explanation is possible?', 'Think about who might choose a seminar with breaks.'],
    explanation: 'If more-engaged students chose those seminars, the higher engagement might not come from the breaks. The causal claim assumes the groups were comparable to begin with.',
  },
  {
    level: 4, n: 2, kind: 'valid-deduction',
    passage: ['Every module that includes a group project has a high attendance rate.', 'Module X has a high attendance rate.'],
    stem: 'Which conclusion is logically valid?',
    options: [
      'Module X includes a group project.',
      'Module X might include a group project, but the statements do not establish it.',
      'Module X does not include a group project.',
      'Every module with high attendance includes a group project.',
    ], correct: 1,
    hints: ['The first sentence runs one way: group project → high attendance.', 'Does high attendance have to come from a group project?'],
    explanation: 'The rule says group projects lead to high attendance, not the reverse. High attendance could have other causes, so nothing definite follows about Module X.',
  },
  {
    level: 5, n: 1, kind: 'evaluating-argument',
    passage: ['A survey of 2,000 students found that those who studied with background music scored on average 6% higher in exams.', 'The researchers concluded that background music improves exam performance and recommended it for all students.', 'However, students volunteered for the music condition, and those who volunteered reported being more confident in their study skills.'],
    stem: 'What is the main weakness in the researchers’ conclusion?',
    options: [
      'Volunteers may differ in confidence, so music may not be what caused the higher scores.',
      'The sample was too large to be reliable.',
      'A 6% difference can never matter.',
      'Music is always distracting.',
    ], correct: 0,
    hints: ['Focus on the last sentence — why does it matter that students volunteered?', 'Look for another possible reason for higher scores.'],
    explanation: 'Self-selection is a confounder: more confident students may both choose music and score higher. A large sample does not fix that.',
  },
  {
    level: 5, n: 2, kind: 'correlation-causation',
    passage: ['A policy adviser argues: “Cities with more ice-cream sales also have more drownings, so regulating ice-cream sales would improve water safety.”'],
    stem: 'Which response most directly exposes the flaw in the argument?',
    options: [
      'Hot weather could increase both ice-cream sales and swimming.',
      'Ice cream is not very healthy.',
      'Drownings are statistically rare.',
      'Ice-cream sellers pay business taxes.',
    ], correct: 0,
    hints: ['Two things rising together does not mean one causes the other.', 'Is there a third factor that could drive both?'],
    explanation: 'This is a correlation–causation error with a likely common cause (warm weather). The other responses do not address the causal reasoning.',
  },
  {
    level: 6, n: 1, kind: 'weakening-evidence',
    passage: ['A study of 120 final-year students found that those who attended optional revision workshops achieved higher exam marks than those who did not.', 'Of the workshop attendees, 85% had submitted every piece of coursework on time, compared with 40% of non-attendees.', 'The authors state: “Workshops raise exam marks.”'],
    stem: 'Which additional finding would most weaken the authors’ statement?',
    options: [
      'Workshop attendees already had higher coursework marks before the workshops began.',
      'Each workshop lasted 90 minutes.',
      'The workshop leader was popular with students.',
      'Some non-attendees also scored highly.',
    ], correct: 0,
    hints: ['Which option offers an alternative explanation for the higher marks?', 'The second sentence hints that the groups differed before the workshops.'],
    explanation: 'If attendees were already stronger, their higher marks may not result from the workshops. “Some non-attendees scored highly” barely weakens a claim about averages.',
  },
  {
    level: 6, n: 2, kind: 'logical-gap',
    passage: ['All tutors trained in the new feedback method reported saving time.', 'Some tutors who reported saving time also reduced the number of comments on each piece of work.', 'Therefore, the new feedback method saves time by reducing the number of comments.'],
    stem: 'What is the flaw in the final sentence?',
    options: [
      'It goes beyond the premises: some tutors reducing comments does not show that this is how the method saves time.',
      'It contradicts the first sentence.',
      'It relies on only a few tutors.',
      'It assumes tutors enjoy the method.',
    ], correct: 0,
    hints: ['Compare what the premises say with the mechanism the conclusion claims.', 'The word “some” matters — which tutors are being described?'],
    explanation: 'The premises do not link “reduced comments” to the trained tutors specifically or show it is the mechanism. The conclusion claims more than the evidence supports.',
  },
  {
    level: 7, n: 1, kind: 'conditional-claims',
    passage: ['Claim: If a module is assessed only by exam, then students who struggle with timed conditions are disadvantaged.', 'Fact 1: Module P is assessed by a mix of coursework and an exam.', 'Fact 2: Some students in Module P found the timed exam difficult.'],
    stem: 'Which statement follows logically from the claim and facts?',
    options: [
      'Module P disadvantages students who struggle with timed conditions.',
      'The claim does not say anything about modules that are not exam-only, so no conclusion about disadvantage in Module P follows from it.',
      'The claim must be false.',
      'Module P should be assessed only by exam.',
    ], correct: 1,
    hints: ['Check whether the “if” condition is met for Module P.', 'The claim applies to modules assessed *only* by exam.'],
    explanation: 'Module P is not exam-only, so the condition is not triggered. The claim neither says Module P is disadvantageous nor that it is not.',
  },
  {
    level: 7, n: 2, kind: 'conflicting-evidence',
    passage: ['Study A (40 students, laboratory): handwriting notes led to better conceptual recall than typing.', 'Study B (900 students, real lectures): no difference between handwriting and typing in final exam scores.', 'Study C (60 students): typists wrote more words, while handwriters wrote more summary statements.'],
    stem: 'Which summary is the most cautious and well-supported?',
    options: [
      'Handwriting clearly improves learning.',
      'Typing is better because typists record more.',
      'Evidence is mixed: a small lab study suggests a recall advantage for handwriting, but a much larger real-lecture study found no exam difference, so no firm conclusion is justified.',
      'The studies agree that there is no difference.',
    ], correct: 2,
    hints: ['Compare the study sizes and settings.', 'Which option acknowledges that the findings conflict?'],
    explanation: 'The studies point in different directions and differ in size and setting. A cautious summary reports the mixed evidence rather than picking a winner.',
  },
  {
    level: 8, n: 1, kind: 'multi-premise-deduction',
    passage: ['Premise 1: Every student who completed the diagnostic and attended the workshop improved their mark.', 'Premise 2: No student who skipped the workshop completed the follow-up task.', 'Premise 3: Priya completed the follow-up task.', 'Premise 4: Some students who completed the diagnostic did not improve their mark.'],
    stem: 'Which statement must be true?',
    options: ['Priya improved her mark.', 'Priya attended the workshop.', 'Priya completed the diagnostic.', 'Priya did not complete the diagnostic.'], correct: 1,
    hints: ['Use Premises 2 and 3 together first.', 'If nobody who skipped the workshop did the follow-up, what does that say about someone who did?'],
    explanation: 'Premise 2 means anyone who completed the follow-up attended the workshop; Priya completed it. Nothing is said about Priya and the diagnostic, so improvement cannot be concluded.',
  },
  {
    level: 8, n: 2, kind: 'argument-structure',
    passage: ['Argument: “Most successful students report using flashcards. Therefore flashcards make students successful. The university now provides free flashcard software, so student success will rise.”'],
    stem: 'Which statement identifies what must also be true for the final prediction to follow from the argument’s reasoning?',
    options: [
      'Flashcard use actually causes success (rather than merely accompanying it), and students given the software will use flashcards in the way successful students do.',
      'Flashcards are inexpensive to make.',
      'Success can be measured by exam marks.',
      'Students enjoy using software more than paper.',
    ], correct: 0,
    hints: ['The argument makes two leaps: from “reported use” to “causes success”, then to “new software will raise success”.', 'Which option covers both leaps?'],
    explanation: 'The prediction needs a causal link and that the new users will replicate the behaviour of those who are already successful. The other options are not required for the logic.',
  },
];

export const AUTHORED_VERBAL: Question[] = SPECS.map((s) => {
  const options = s.options.map((label, i) => ({ id: 'abcdef'[i], label }));
  return {
    id: `ver-a${s.level}-${s.n}`,
    category: 'verbal',
    level: s.level,
    kind: s.kind,
    stem: s.stem,
    passage: s.passage,
    options,
    correctId: options[s.correct].id,
    hints: [...s.hints],
    explanation: s.explanation,
  };
});

/** "Explain it in your own words" bonus activity — transparent, rule-based feedback only. */
export const EXPLAIN_ACTIVITY = {
  title: 'Bonus clue: say it your way',
  concept: 'Confirmation bias is the tendency to notice and remember information that supports what we already believe, while overlooking evidence that contradicts it.',
  prompt: 'In your own words, explain what confirmation bias is — and give a short example if you can.',
  keyPoints: [
    { label: 'Mentions noticing or favouring information that supports existing beliefs', words: ['support', 'agree', 'already believe', 'existing belief', 'favour', 'favor', 'confirm', 'what they think', 'what we think'] },
    { label: 'Mentions ignoring or overlooking contradicting information', words: ['ignore', 'overlook', 'dismiss', 'contradict', 'against', 'opposite', 'disagree', 'miss'] },
    { label: 'Gives an example', words: ['example', 'for instance', 'e.g', 'such as', 'like when', 'imagine'] },
  ],
};
