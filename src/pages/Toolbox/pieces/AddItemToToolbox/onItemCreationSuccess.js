import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { GoToToolboxList } from "../NavHelpers/GoToToolboxList";
import { AddItemToDB } from "./AddItemToDB";

/**
 * @param {*} answers
 *
 * si données valides,
 * on retourne vers la liste de données.
 * et on ajoute les données dans la base de données.
 */
export function onItemCreationSuccess(answers) {
  GoToToolboxList();

  const uniqueId = GetUniqueID();

  AddItemToDB(answers, uniqueId);
}
