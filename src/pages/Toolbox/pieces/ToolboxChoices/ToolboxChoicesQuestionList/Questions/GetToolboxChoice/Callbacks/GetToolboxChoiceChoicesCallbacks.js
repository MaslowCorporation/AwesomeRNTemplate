/**
 * Les différents actions à effectuer, selon valeur de choix.
 *
 * N.B.: Tout Ceci est à considérer comme un template copiable/collable,
 * et réutilisable ailleurs, si nécessaire.
 * alors copie colle le selon besoins.
 *
 **/

import { GetToolboxChoiceChoices } from "../GetToolboxChoiceChoices/GetToolboxChoiceChoices";

export const GetToolboxChoiceChoicesCallbacks = {
  /* PLOP_INJECT_CHOICE_CALLBACK */
  Arduino: (data) => { },
  BackupDB: (data) => { },
  ChatGPT: (data) => { },
  Todos: (data) => { },

};

/**
 *
 * @param {*} value, le choix fait par luser
 *
 * @returns ...... , fournie via callback
 */

export const GetToolboxChoiceChoiceValue = (value) => {
  // le nom de key du choix effectué
  const choiceKeyName = GetToolboxChoiceChoiceKey(value);

  // le style correspondant
  const choiceCallbackValue = GetToolboxChoiceChoicesCallbacks[choiceKeyName]();

  return choiceCallbackValue;
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le nom du key selon valeur de choix
 */
export const GetToolboxChoiceChoiceKey = (choice) => {
  var object = GetToolboxChoiceChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return keyName;
};
