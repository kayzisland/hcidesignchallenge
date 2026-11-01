export type QType = 'single' | 'multi' | 'search' | 'theme';
export type Anim = 'pop' | 'wave' | 'flip' | 'spin' | 'pulse' | 'bounce' | 'grow';

export interface OptionDef {
  id: string;
  label: string;
  icon: string;
  anim?: Anim;
  /** choosing this clears the other options (e.g. "Not sure yet") */
  exclusive?: boolean;
  /** shows an optional free-text box */
  allowsText?: boolean;
}

export interface QuestionDef {
  id: string;
  stage: 1 | 2 | 3 | 4;
  title: string;
  help: string;
  type: QType;
  options: OptionDef[];
}

export interface StageDef {
  id: 1 | 2 | 3 | 4;
  name: string;
  tagline: string;
  intro: string;
  done: string;
  emoji: string;
}

export const STAGES: StageDef[] = [
  { id: 1, name: 'Getting to know you', tagline: 'Stage 1 of 4', intro: 'Hi! I’m Pip. Let’s start with what you’d like help with. There are no wrong answers, and you can skip anything.', done: 'Lovely — I’ve got a feel for what you’re after!', emoji: '🌱' },
  { id: 2, name: 'Your study preferences', tagline: 'Stage 2 of 4', intro: 'Now let’s build your study space together. Pick what appeals — watch the preview change as you go.', done: 'Your study space is taking shape!', emoji: '🧩' },
  { id: 3, name: 'Making it comfortable', tagline: 'Stage 3 of 4', intro: 'Let’s make this space feel right for you. Everything you choose here changes the app straight away.', done: 'Done! The space now feels more like yours.', emoji: '🎛️' },
  { id: 4, name: 'Study support', tagline: 'Stage 4 of 4', intro: 'Last stage. Tell me how much nudging you’d like. Nothing here is switched on without your say-so.', done: 'All set. Thanks for sharing that!', emoji: '🔔' },
];

export const SUBJECTS = [
  'Accounting & Finance', 'Aerospace Engineering', 'Ancient History', 'Archaeology', 'Biochemistry', 'Biological Sciences', 'Biomedical Science',
  'Business Management', 'Chemical Engineering', 'Chemistry', 'Civil Engineering', 'Classics', 'Computer Science', 'Creative Writing', 'Dentistry',
  'Drama', 'Economics', 'Education', 'Electrical Engineering', 'English Literature', 'Environmental Science', 'Film Studies', 'Fine Art',
  'Geography', 'Geology', 'History', 'International Relations', 'Law', 'Linguistics', 'Mathematics', 'Mechanical Engineering', 'Medicine',
  'Modern Languages', 'Music', 'Natural Sciences', 'Nursing', 'Pharmacy', 'Philosophy', 'Physics', 'Physiotherapy', 'Politics', 'Psychology',
  'Social Policy', 'Sociology', 'Sport & Exercise Sciences', 'Theology', 'Veterinary Science',
];

export const QUESTIONS: QuestionDef[] = [
  {
    id: 'q1', stage: 1, type: 'search', title: 'What are you studying?', help: 'Start typing to search, or type your own. Skip if you prefer.',
    options: [],
  },
  {
    id: 'q2', stage: 1, type: 'multi', title: 'What would you most like help with?', help: 'Choose as many as you like.',
    options: [
      { id: 'lectures', label: 'Understanding lectures', icon: '🎧', anim: 'wave' },
      { id: 'exams', label: 'Remembering information for exams', icon: '🧠', anim: 'pulse' },
      { id: 'focus', label: 'Staying focused', icon: '🎯', anim: 'bounce' },
      { id: 'workload', label: 'Managing workload', icon: '🗂️', anim: 'pop' },
      { id: 'start', label: 'Getting started with studying', icon: '🚀', anim: 'bounce' },
      { id: 'breakdown', label: 'Breaking down difficult topics', icon: '🧩', anim: 'spin' },
      { id: 'other', label: 'Something else', icon: '✨', anim: 'pop', allowsText: true },
      { id: 'unsure', label: 'Not sure yet', icon: '🤷', anim: 'pop', exclusive: true },
    ],
  },
  {
    id: 'q3', stage: 1, type: 'multi', title: 'What do you find most difficult about studying?', help: 'Choose as many as you like.',
    options: [
      { id: 'long', label: 'Long lectures', icon: '⏳', anim: 'pulse' },
      { id: 'text', label: 'Large amounts of written information', icon: '📚', anim: 'pop' },
      { id: 'where', label: 'Knowing where to start', icon: '🧭', anim: 'spin' },
      { id: 'remember', label: 'Remembering information', icon: '🧠', anim: 'pulse' },
      { id: 'engaged', label: 'Staying engaged', icon: '🔋', anim: 'bounce' },
      { id: 'complex', label: 'Complicated explanations', icon: '🌀', anim: 'spin' },
      { id: 'overwhelm', label: 'Feeling overwhelmed by workload', icon: '🌊', anim: 'wave' },
      { id: 'nothing', label: 'Nothing in particular', icon: '😌', anim: 'pop', exclusive: true },
      { id: 'other', label: 'Other', icon: '✨', anim: 'pop', allowsText: true },
    ],
  },
  {
    id: 'q4', stage: 1, type: 'single', title: 'How much guidance would you like?', help: 'Pick the closest fit — you can change this any time.',
    options: [
      { id: 'walk', label: 'Walk me through everything', icon: '🧑‍🤝‍🧑', anim: 'bounce' },
      { id: 'plan', label: 'Give me a plan and let me work', icon: '🗺️', anim: 'pop' },
      { id: 'explore', label: 'Let me explore independently', icon: '🧗', anim: 'bounce' },
      { id: 'unsure', label: 'I’m not sure yet', icon: '🤷', anim: 'pop' },
    ],
  },
  {
    id: 'q5', stage: 2, type: 'multi', title: 'How would you like to explore a new topic?', help: 'Choose as many as you like — tap one to preview it.',
    options: [
      { id: 'written', label: 'Short written explanation', icon: '📝', anim: 'pop' },
      { id: 'diagram', label: 'Visual diagram', icon: '🕸️', anim: 'spin' },
      { id: 'audio', label: 'Audio explanation', icon: '🔊', anim: 'wave' },
      { id: 'worked', label: 'Worked example', icon: '🪜', anim: 'bounce' },
      { id: 'interactive', label: 'Interactive activity', icon: '🎮', anim: 'bounce' },
      { id: 'practice', label: 'Practice questions', icon: '✏️', anim: 'pop' },
      { id: 'anything', label: 'Happy to try anything', icon: '🌈', anim: 'pop', exclusive: true },
    ],
  },
  {
    id: 'q6', stage: 2, type: 'multi', title: 'Which revision activities do you find useful?', help: 'Choose as many as you like.',
    options: [
      { id: 'flashcards', label: 'Flashcards', icon: '🃏', anim: 'flip' },
      { id: 'quizzes', label: 'Multiple-choice quizzes', icon: '✅', anim: 'pop' },
      { id: 'explaining', label: 'Explaining concepts', icon: '🗣️', anim: 'wave' },
      { id: 'steps', label: 'Step-by-step examples', icon: '🪜', anim: 'bounce' },
      { id: 'mindmaps', label: 'Mind maps', icon: '🕸️', anim: 'spin' },
      { id: 'listening', label: 'Listening to explanations', icon: '🎧', anim: 'wave' },
      { id: 'summaries', label: 'Reading summaries', icon: '📖', anim: 'pop' },
      { id: 'notyet', label: 'Haven’t found what works yet', icon: '🔍', anim: 'pop', exclusive: true },
    ],
  },
  {
    id: 'q7', stage: 2, type: 'single', title: 'What is your preferred study session length?', help: 'Watch the session timeline resize.',
    options: [
      { id: '5', label: '5 minutes', icon: '⚡', anim: 'pop' },
      { id: '10', label: '10 minutes', icon: '🌱', anim: 'pop' },
      { id: '15', label: '15 minutes', icon: '🌿', anim: 'pop' },
      { id: '25', label: '25 minutes', icon: '🌳', anim: 'pop' },
      { id: 'choose', label: 'Choose each time', icon: '🎚️', anim: 'pop' },
    ],
  },
  {
    id: 'q8', stage: 2, type: 'single', title: 'What should happen when you get an answer wrong?', help: 'Wrong answers are just information — how should I respond?',
    options: [
      { id: 'hint', label: 'Give me a hint', icon: '💡', anim: 'pulse' },
      { id: 'steps', label: 'Explain it step by step', icon: '🪜', anim: 'bounce' },
      { id: 'similar', label: 'Show a similar example', icon: '👯', anim: 'pop' },
      { id: 'later', label: 'Let me revisit it later', icon: '🔖', anim: 'pop' },
      { id: 'ask', label: 'Ask me each time', icon: '❓', anim: 'pop' },
    ],
  },
  {
    id: 'q9', stage: 3, type: 'theme', title: 'Which theme would you like?', help: 'Tap a preview — it applies straight away.',
    options: [
      { id: 'light', label: 'Soft light', icon: '☀️' },
      { id: 'muted', label: 'Neutral', icon: '🌫️' },
      { id: 'dark', label: 'Dark', icon: '🌙' },
      { id: 'contrast', label: 'High contrast', icon: '◐' },
      { id: 'system', label: 'Follow device settings', icon: '💻' },
      { id: 'custom', label: 'Customise', icon: '🎨' },
    ],
  },
  {
    id: 'q10', stage: 3, type: 'multi', title: 'What would make studying more comfortable?', help: 'Each choice changes the app immediately.',
    options: [
      { id: 'largetext', label: 'Larger text', icon: '🔠', anim: 'grow' },
      { id: 'spacing', label: 'Increased line spacing', icon: '↕️', anim: 'grow' },
      { id: 'reducemotion', label: 'Reduced animations', icon: '🧘', anim: 'pop' },
      { id: 'fewer', label: 'Fewer elements on screen', icon: '🧹', anim: 'pop' },
      { id: 'captions', label: 'Captions', icon: '💬', anim: 'pop' },
      { id: 'audiospeed', label: 'Adjustable audio speed', icon: '🎚️', anim: 'wave' },
      { id: 'cbcues', label: 'Colour-blind-friendly indicators', icon: '🔷', anim: 'pop' },
      { id: 'keyboard', label: 'Screen reader or keyboard support', icon: '⌨️', anim: 'pop' },
      { id: 'none', label: 'No changes needed', icon: '👍', anim: 'pop', exclusive: true },
      { id: 'other', label: 'Other', icon: '✨', anim: 'pop', allowsText: true },
    ],
  },
  {
    id: 'q11', stage: 3, type: 'single', title: 'How should information appear?', help: 'This changes how explanations are shown.',
    options: [
      { id: 'step', label: 'One small section at a time', icon: '🔍', anim: 'pop' },
      { id: 'scroll', label: 'A scrollable page', icon: '📜', anim: 'pop' },
      { id: 'outline', label: 'An outline with expandable sections', icon: '🗂️', anim: 'pop' },
      { id: 'switch', label: 'Let me switch', icon: '🔀', anim: 'spin' },
    ],
  },
  {
    id: 'q12', stage: 4, type: 'single', title: 'Would you like the app to suggest when to study?', help: 'Nothing is sent anywhere in this prototype.',
    options: [
      { id: 'suggest', label: 'Suggest sessions when I have time', icon: '🕰️', anim: 'pulse' },
      { id: 'deadlines', label: 'Remind me about upcoming deadlines', icon: '📅', anim: 'pop' },
      { id: 'mine', label: 'Only use reminders I set', icon: '🔔', anim: 'pop' },
      { id: 'none', label: 'No suggestions', icon: '🤫', anim: 'pop' },
    ],
  },
  {
    id: 'q13', stage: 4, type: 'single', title: 'How often would you like suggestions?', help: 'You can change this later.',
    options: [
      { id: 'daily', label: 'Once a day at most', icon: '1️⃣', anim: 'pop' },
      { id: 'weekly', label: 'A few times a week', icon: '📆', anim: 'pop' },
      { id: 'deadline', label: 'Only around important deadlines', icon: '⏰', anim: 'pop' },
      { id: 'custom', label: 'Customise', icon: '🎛️', anim: 'pop' },
      { id: 'none', label: 'No suggestions', icon: '🤫', anim: 'pop' },
    ],
  },
  {
    id: 'q14', stage: 4, type: 'single', title: 'Would you like to connect an academic calendar?', help: 'Demonstration only: choosing “Connect” loads sample dates — no real university data is accessed.',
    options: [
      { id: 'connect', label: 'Connect my calendar (demo)', icon: '🗓️', anim: 'flip' },
      { id: 'notnow', label: 'Not now', icon: '⏭️', anim: 'pop' },
    ],
  },
  {
    id: 'q15', stage: 4, type: 'single', title: 'Would you like to discover more about how you learn?', help: 'Four short, pressure-free games. They are informal activities — not an IQ test or a diagnosis.',
    options: [
      { id: 'play', label: 'Let’s play!', icon: '🎮', anim: 'bounce' },
      { id: 'later', label: 'Maybe later', icon: '🕒', anim: 'pop' },
      { id: 'skip', label: 'Skip for now', icon: '⏭️', anim: 'pop' },
    ],
  },
];

export const QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q])) as Record<string, QuestionDef>;
export const labelOf = (qid: string, optionId: string) => QUESTION_BY_ID[qid]?.options.find((o) => o.id === optionId)?.label ?? optionId;

/** Sample calendar entries shown for the clearly-labelled demo connection (Q14). */
export const DEMO_CALENDAR = [
  { when: 'Mon 10:00', what: 'Lecture (sample)' },
  { when: 'Wed 14:00', what: 'Seminar (sample)' },
  { when: 'Fri 17:00', what: 'Essay deadline (sample)' },
];
