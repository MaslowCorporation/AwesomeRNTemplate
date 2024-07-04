import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { greenCheckUri, setNewestChoiceClickedOn } from "./getChoiceStyle";

/**
 *
 * @param {*} contentAndBorderColor, la couleur du contenu du QCM
 *
 * @param {*} backgroundColor, couleur darrière plan du QCM
 *
 * @param {*} contentFont, design du text de QCM
 *
 * @param {*} choixData, données rpzt le choix du QCM
 *
 * @param {*} choicesState, le state du QCM
 *
 * @param {*} setChoicesState, modifie le state du QCM
 *
 * @param {*} question, les données du QCM en entier
 *
 * @param {*} GUIState, les données de toutes les UI de GetUserInput
 *
 * @param {*} setGUIState, modifie les données de toutes les UI de GetUserInput
 *
 * @param {*} clickSound, bruit de clic sur choix QCM
 *
 * @returns style + callbacks dun choix de QCM
 */
export const getChoiceStyle = ({
  contentAndBorderColor,
  backgroundColor,
  contentFont,
  choixData,
  choicesState,
  setChoicesState,
  question,
  GUIState, setGUIState,
  clickSound,
  index,
  persistenceID,
}) => {
  return {
    contentColor: contentAndBorderColor,
    backgroundColor: backgroundColor,
    contentFont: contentFont,
    thumbUrl: null,
    thumbPath: null,
    itemName: choixData.choiceDescription,
    itemsInfos: [
      // un green checkmark si cest litem choisi, ou rien
      {
        infoIconUrl: null,
        infoIconPath: choixData.greenCheckmark == true ? greenCheckUri : null,
        infoTxt: "",
      },
    ],
    // son optionel quand clic sur choix
    clickSound: clickSound,

    // callback quand lutilisateur clique sur le choix
    onItemClicked: (choixData) => {
      // exécute la callback de choix  si besoin
      RunIfPossible({ func: choixData.onChoiceClicked });

      // exécute la callback de modification de state de QCM
      setNewestChoiceClickedOn(
        choicesState,
        choixData,
        setChoicesState,
        question,
        GUIState,
        setGUIState,
        index,
        persistenceID
      );
    },
    onItemLongPress: (choixData) => { },
  };
};
