import { Image } from "react-native";
import { setChoiceInChoices as setChoiceInChoicesState } from "./setChoiceInChoices";
import { setChoiceMadeInQuestionsList } from "./setChoiceMadeInQuestionsList";

// bon ou pas icones
const greenCheck = require("assets/images/green.png");

export const greenCheckUri = Image.resolveAssetSource(greenCheck).uri;

/**
 *
 * @param {*} index, lindex du choix dans la liste de choix, choices
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
 *
 * @returns exécute la callback de modification de state de QCM
 */
export const setNewestChoiceClickedOn = (
  choicesState,
  choixData,
  setChoicesState,
  question,
  GUIState,
  setGUIState,
  index,
  persistenceID,
) => {
  // stocke la liste de choix mise à jour
  setChoiceInChoicesState({ choicesState, choixData, setChoicesState, index });

  // stocke le choix fait, dans la liste d' UI,
  // pour plus tard
  setChoiceMadeInQuestionsList(choixData, question, GUIState, setGUIState, persistenceID);
};
