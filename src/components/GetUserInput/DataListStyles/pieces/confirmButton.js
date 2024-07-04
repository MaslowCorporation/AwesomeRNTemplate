
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { GetAnswers } from "./GetAnswers";

/**
 *
 * @param {*} props
 *
 * @returns les données de créa du bouton valider
 */
export function confirmButton({ props, GUIState, setGUIState, }) {
  return {
    iconName: "check-bold",
    onIconClicked: () => {

      // les réponse actuelles aux UI du QCM
      const answers = GetAnswers({ persistenceID: props.persistenceID, GUIState });

      // lindex de la question a lécran
      const currentIndex = GUIState.currentIndex;

      // vérifie que les réponses fournies répondent aux cahier de charges
      const answersChecks = GUIState.questions.map((question) => {
        const valid = question.checkInput({
          input: answers[question.name]?.value,
          answers,
          answer: answers[question.name],
          answerIndex: currentIndex,
        });

        //} valid ?: ${valid}`)

        return valid;
      });

      // si ya erreur quelque part, ceci sera égal à 0 ou +
      const firstErrorIndex = answersChecks.findIndex((answer) => {
        return answer === false;
      });


      // si cest le cas...
      if (firstErrorIndex > -1) {
        const msg = GUIState.questions[firstErrorIndex]?.errMsg({
          answers: answers,
          answer: answers[GUIState.questions[firstErrorIndex]?.name],
          answerIndex: firstErrorIndex,
        });

        // ...on exécute la callback derreur avec le message derreur et lindex de la question fautive
        RunIfPossible({
          func: props.onError,
          args: {
            errMsg: msg,
            errAnswerIndex: firstErrorIndex,
            answers: answers,
          },
        });
      } else {
        // si tout va bien, pas derreur, exécute la callback de succès
        RunIfPossible({
          func: props.onSuccess,
          args: answers,
        });
      }
    },
  };
}
