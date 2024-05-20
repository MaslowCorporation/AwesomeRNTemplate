
import { GetAnswers } from "./GetAnswers";
import { SetAnswers } from "./SetAnswers";
import { GetAnswerObject } from "./extractDataFromQuestions";

/**
 *
 * @param {*} choiceChosen
 * @param {*} question
 * @param {*} GUIState
 * @param {*} setGUIState
 *
 * Stocke le choix fait dans la liste d' UI, et de réponses
 */
export const setChoiceMadeInQuestionsList = (
  choiceChosen,
  question,
  GUIState, setGUIState,
  persistenceID
) => {
  // lindex de la question en cours de réponsage
  // dans la liste d' UI horizontale
  const questionIndex = GUIState.questions.findIndex((questionInList) => {
    return questionInList.id === question.id;
  });

  // la question en cours de réponsage
  const questionEnCours = GUIState.questions[questionIndex];

  // les réponses actuelles aux UI du QCM. stockées dans le state GUIState
  const answers = GetAnswers({ persistenceID, GUIState });

  const answer = answers[questionEnCours.name];

  // ajoute la valeur actuelle dans answers
  if (answer) {
    answers[questionEnCours.name].value = choiceChosen.choiceValue;
  } else {
    const answer = GetAnswerObject(questionEnCours.name);

    answers[questionEnCours.name] = answer;
    answers[questionEnCours.name].value = choiceChosen.choiceValue;
  }


  SetAnswers({ answers, GUIState, setGUIState, persistenceID });
};
