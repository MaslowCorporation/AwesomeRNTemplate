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

    answers[question.name].value = input;
  } else {

    const answer = GetAnswerObject(question.name);

    answers[question.name] = answer;
    answers[question.name].value = input;
  }

  //

  // stocke les réponses dans le state
  SqliteReduxGUIState.SetAnswers({ answers, persistenceID });
}
