export function extractDataFromQuestions(questions) {
  let answers = {};

  for (var i = 0; i < questions.length; i++) {
    //or check with: if (b.length > i) { assignment }
    answers[questions[i]?.name] = GetAnswerObject(questions[i]);
  }
  return answers;
}

export function GetAnswerObject(question) {
  return {
    id: question?.id,
    name: question?.name,
    value: question?.value,
  };
}
