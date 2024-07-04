
import { GetAnswers } from "./GetAnswers";
import { SetAnswers } from "./SetAnswers";
import { GetAnswerObject } from "./extractDataFromQuestions";

export function storeInputToQuestions({
  question,
  GUIState, setGUIState,
  input,
  persistenceID
}) {

  // les réponse actuelles aux UI du QCM
  const answers = GetAnswers({ persistenceID, GUIState });

  const answer = answers[question.name];

  // ajoute la valeur actuelle dans answers
  if (answer) {

    answers[question.name].value = input;
  } else {


    const answer = GetAnswerObject(question.name);

    answers[question.name] = answer;
    answers[question.name].value = input;
  }



  // stocke les réponses dans le state
  SetAnswers({ answers, GUIState, setGUIState, persistenceID });
}
