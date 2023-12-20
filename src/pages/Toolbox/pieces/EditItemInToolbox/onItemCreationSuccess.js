import { EditItemInToolboxDB } from "./EditItemInToolboxDB";

/**
 *
 * @param {*} answers
 *
 * si succès, retour a la liste, et modifie le shizzle
 */
export function onItemCreationSuccess(answers) {
  EditItemInToolboxDB({ answers });
}
