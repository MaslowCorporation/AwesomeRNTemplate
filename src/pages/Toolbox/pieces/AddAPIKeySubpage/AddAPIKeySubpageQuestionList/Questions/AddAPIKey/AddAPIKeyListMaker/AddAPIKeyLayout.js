import {
  AddAPIKeyChoices,
  AddAPIKeyChoicesActions,
  AddAPIKeyChoicesUI,
} from "../AddAPIKeyChoices/AddAPIKeyChoices";

/**
 * Le design d'1 choix
 */
export function AddAPIKeyLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisAddAPIKey = AddAPIKeyChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: AddAPIKeyChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisAddAPIKey,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisAddAPIKey,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      AddAPIKeyChoicesActions[choice]({
        choice: thisAddAPIKey,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
