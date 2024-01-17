import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";
import { GetAnswerObject } from "./extractDataFromQuestions";

export function storeInputToQuestions({
  question,
  questions,
  setQuestions,
  input,
  persistenceID
}) {

  // les réponse actuelles aux questions du QCM
  const answers = SqliteReduxGUIState.GetAnswers(persistenceID);

  const answer = answers[question.name];

  // ajoute la valeur actuelle dans answers
  if (answer) {
    //console.log(`This answer already exists, update it: ${JSON.stringify(answer, null, 2)}`);

    answers[question.name].value = input;
  } else {
    //console.log(`This answer doesn't exists, create it: ${JSON.stringify(question, null, 2)}`);

    const answer = GetAnswerObject(question.name);

    answers[question.name] = answer;
    answers[question.name].value = input;
  }

  //console.log(`Answers: ${JSON.stringify(answers)}`);
  //console.log(`We're storing the answer for UI named ${question.name}`);

  // stocke les réponses dans le state
  SqliteReduxGUIState.SetAnswers({ answers, persistenceID });
}
