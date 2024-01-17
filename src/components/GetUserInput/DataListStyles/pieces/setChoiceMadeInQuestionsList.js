import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";
import { GetAnswerObject } from "./extractDataFromQuestions";

/**
 *
 * @param {*} choiceChosen
 * @param {*} question
 * @param {*} questions
 * @param {*} setQuestions
 *
 * Stocke le choix fait dans la liste de questions, et de réponses
 */
export const setChoiceMadeInQuestionsList = (
  choiceChosen,
  question,
  questions,
  setQuestions,
  persistenceID
) => {
  // l'index de la question en cours de réponsage
  // dans la liste de questions horizontale
  const questionIndex = questions.findIndex((questionInList) => {
    return questionInList.id === question.id;
  });

  // la question en cours de réponsage
  const questionEnCours = questions[questionIndex];

  // les réponses actuelles aux questions du QCM. stockées dans le state GUIState
  const answers = SqliteReduxGUIState.GetAnswers(persistenceID);

  const answer = answers[questionEnCours.name];

  // ajoute la valeur actuelle dans answers
  if (answer) {
    //console.log(`This answer already exists, update it: ${JSON.stringify(answer, null, 2)}`);

    answers[questionEnCours.name].value = choiceChosen.choiceValue;
  } else {
    //console.log(`This answer doesn't exists, create it: ${JSON.stringify(question, null, 2)}`);

    const answer = GetAnswerObject(questionEnCours.name);

    answers[questionEnCours.name] = answer;
    answers[questionEnCours.name].value = choiceChosen.choiceValue;
  }


  SqliteReduxGUIState.SetAnswers({ answers, persistenceID });
};
