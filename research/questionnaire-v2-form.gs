// Built the questionnaire v2 Google Form, 30 Oct 2026. Kept for method
// traceability (T02). The live form was edited after this script ran and
// collected email addresses at Q16, which this script does not do. See
// questionnaire-results.md (Ethics) and questionnaire-v2.md.

function buildQuestionnaireV2() {
  var form = FormApp.create('How students study (HCI research, anonymous)');
  form.setDescription("We're a group of HCI students at Birmingham designing an app to help students study. This questionnaire is anonymous: we don't collect names or emails. It takes about 5 minutes. You can skip any question or stop at any time. By continuing you agree to your answers being used in our coursework.");
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('Thank you. Your answers will shape what we build.');

  form.addSectionHeaderItem().setTitle('About you');
  form.addMultipleChoiceItem().setTitle('What year of study are you in?')
    .setChoiceValues(['1st year undergraduate', '2nd year undergraduate', '3rd year or above, undergraduate', 'Postgraduate']);
  form.addMultipleChoiceItem().setTitle('Which area is your degree in?')
    .setChoiceValues(['Science, technology, engineering or maths', 'Medicine, dentistry or health', 'Social sciences', 'Arts and humanities', 'Business or law', 'Other']);
  form.addMultipleChoiceItem().setTitle('Do you identify as neurodivergent (for example ADHD, autism, dyslexia)? (optional)')
    .setChoiceValues(['Yes', 'No', 'Not sure', 'Prefer not to say']);

  form.addPageBreakItem().setTitle('Lectures');
  form.addMultipleChoiceItem().setTitle('In the past two weeks, how many of your scheduled lectures did you attend in person?')
    .setChoiceValues(['All', 'Most', 'About half', 'A few', 'None']);
  form.addCheckboxItem().setTitle('When you watch a lecture recording, what do you usually do? (tick all that apply)')
    .setChoiceValues(['Watch at normal speed', 'Speed it up', 'Skip to the parts I need', 'Pause to take notes', 'Watch while doing something else', "I don't watch recordings"]);
  form.addMultipleChoiceItem().setTitle('In the last lecture you attended, roughly how long was it before your attention first drifted?')
    .setChoiceValues(['Under 10 minutes', '10-20 minutes', '20-40 minutes', 'Over 40 minutes', "It didn't drift", "I haven't attended one recently"]);

  form.addPageBreakItem().setTitle('Studying');
  form.addGridItem().setTitle('In the past two weeks, how often, if at all, has each of these been a problem for you?')
    .setRows(['Getting started on studying', "Staying focused once I've started", 'Planning what to study and when', 'Understanding new material', 'Remembering material later', "Knowing whether I've really understood something"])
    .setColumns(['Never', 'Once', '2-3 times', 'Weekly or more']);
  form.addMultipleChoiceItem().setTitle('If an app could help with only one of those, which would you choose?')
    .setChoiceValues(['Getting started', 'Staying focused', 'Planning', 'Understanding', 'Remembering', 'Checking my understanding', 'None of these']);
  var methods = ['Rereading notes or slides', 'Highlighting', 'Rewriting notes', 'Flashcards (e.g. Anki, Quizlet)', 'Practice questions or past papers', 'Explaining it to someone else', 'Asking an AI chatbot', 'Studying with others', 'Watching explainer videos'];
  form.addCheckboxItem().setTitle('Which of these, if any, did you use to study in the past two weeks? (tick all that apply)')
    .setChoiceValues(methods.concat(['None of these']));
  form.addMultipleChoiceItem().setTitle('Of the methods you use, which one helps you most?')
    .setChoiceValues(methods);
  form.addScaleItem().setTitle("When you're learning something difficult, which do you prefer?")
    .setBounds(1, 5).setLabels('Being shown the answer, then practising', 'Being asked questions until I work it out myself');
  form.addParagraphTextItem().setTitle('Think about the last time a study session went badly. What happened? (optional)');

  form.addPageBreakItem().setTitle('A proactive study app');
  form.addScaleItem().setTitle("How welcome or unwelcome would this be: a study app notices you have a free gap between lectures and suggests a short quiz on that morning's lecture, without you opening it?")
    .setBounds(1, 5).setLabels('Very unwelcome', 'Very welcome');
  form.addCheckboxItem().setTitle('Which of these, if any, would you let a study app use? (tick all that apply)')
    .setChoiceValues(['My timetable or calendar', 'My lecture slides and recordings', 'My location', 'My screen time or app usage', 'None of these']);
  form.addMultipleChoiceItem().setTitle('How many notifications a day from one study app would you accept before turning them off?')
    .setChoiceValues(['None', '1-2', '3-5', '6 or more']);
  form.addMultipleChoiceItem().setTitle('Would you take part in a 15-minute follow-up interview or a short study-session observation?')
    .setChoiceValues(['Yes (we will share a separate sign-up form, so this one stays anonymous)', 'No']);

  Logger.log('Edit: ' + form.getEditUrl());
  Logger.log('Share: ' + form.getPublishedUrl());
}
