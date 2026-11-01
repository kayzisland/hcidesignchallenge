export interface FormatTopic {
  id: string;
  title: string;
  steps: { title: string; text: string; icon: string }[];
  questions: { q: string; options: string[]; correct: number }[];
}

export const FORMAT_TOPICS: FormatTopic[] = [
  {
    id: 'heatpump', title: 'How a heat pump works',
    steps: [
      { icon: '❄️', title: 'Collect', text: 'A liquid refrigerant flows through coils outside and absorbs heat from the air, even when it feels cold.' },
      { icon: '🔥', title: 'Compress', text: 'A compressor squeezes the refrigerant, which makes it much hotter.' },
      { icon: '🏠', title: 'Release', text: 'The hot refrigerant passes through coils inside, giving its heat to your home.' },
      { icon: '🔁', title: 'Repeat', text: 'The refrigerant expands, cools down and goes back outside to collect more heat.' },
    ],
    questions: [
      { q: 'What does the compressor do to the refrigerant?', options: ['Makes it hotter', 'Makes it colder', 'Turns it into air'], correct: 0 },
      { q: 'Where does the heat come from first?', options: ['Inside the home', 'The outside air', 'The compressor motor'], correct: 1 },
    ],
  },
  {
    id: 'headphones', title: 'How noise-cancelling headphones work',
    steps: [
      { icon: '🎤', title: 'Listen', text: 'Tiny microphones on the headphones pick up the sounds around you.' },
      { icon: '🧮', title: 'Calculate', text: 'A chip works out the shape of that sound wave.' },
      { icon: '🔄', title: 'Flip', text: 'It plays back an opposite wave, so the peaks of one line up with the dips of the other.' },
      { icon: '🤫', title: 'Cancel', text: 'The two waves cancel out, so you hear much less of the steady background noise.' },
    ],
    questions: [
      { q: 'What does the chip play through the speakers?', options: ['A louder copy of the noise', 'An opposite sound wave', 'Silence only'], correct: 1 },
      { q: 'What picks up the surrounding sounds?', options: ['Tiny microphones', 'The ear cushions', 'The battery'], correct: 0 },
    ],
  },
  {
    id: 'sourdough', title: 'How a sourdough starter works',
    steps: [
      { icon: '🥣', title: 'Mix', text: 'Flour and water are mixed. Wild yeast and friendly bacteria from the flour and air begin to grow.' },
      { icon: '🍽️', title: 'Feed', text: 'Each day you add fresh flour and water, which gives the microbes new food.' },
      { icon: '🫧', title: 'Bubble', text: 'The yeast makes carbon dioxide gas, so the starter fills with bubbles and rises.' },
      { icon: '🍞', title: 'Bake', text: 'A bubbly starter added to dough makes it rise and gives it a tangy flavour.' },
    ],
    questions: [
      { q: 'What makes the starter bubble?', options: ['Salt', 'Gas made by yeast', 'Heat from the oven'], correct: 1 },
      { q: 'Why do you feed the starter?', options: ['To give microbes new food', 'To make it colder', 'To remove the bacteria'], correct: 0 },
    ],
  },
];
