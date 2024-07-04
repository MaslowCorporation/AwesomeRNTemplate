import { AddAPIKeySubpageDB } from "./AddAPIKeySubpageDB.js";

/**
 *
 * @param {*} answers
 *
 * si succès, retour a la liste, et modifie le shizzle
 */
export function onItemCreationSuccess(answers, route) {
  AddAPIKeySubpageDB({ answers, route });
}
