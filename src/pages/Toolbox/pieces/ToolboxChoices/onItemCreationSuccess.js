import { ToolboxChoicesDB } from "./ToolboxChoicesDB";

/**
 *
 * @param {*} answers
 *
 * si succès, retour a la liste, et modifie le shizzle
 */
export function onItemCreationSuccess(answers, route) {
  ToolboxChoicesDB({ answers, route });
}
