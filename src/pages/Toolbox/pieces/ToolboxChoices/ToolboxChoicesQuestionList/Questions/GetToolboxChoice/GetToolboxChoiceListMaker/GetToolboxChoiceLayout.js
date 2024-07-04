import {
  GetToolboxChoiceChoices,
  GetToolboxChoiceChoicesActions,
  GetToolboxChoiceChoicesUI,
} from "../GetToolboxChoiceChoices/GetToolboxChoiceChoices";

/**
 * Le design d'1 choix
 */
export function GetToolboxChoiceLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisGetToolboxChoice = GetToolboxChoiceChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: GetToolboxChoiceChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisGetToolboxChoice,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisGetToolboxChoice,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      GetToolboxChoiceChoicesActions[choice]({
        choice: thisGetToolboxChoice,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
