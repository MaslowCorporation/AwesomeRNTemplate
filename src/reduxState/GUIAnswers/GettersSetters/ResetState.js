import { defaultValues } from "../DatabaseInfo";
import { AddRowToDatabase } from "./AddRowToDatabase";
import { GetGUIAnswers } from "./GetGUIAnswers";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";

/**
 * remet le state par défaut, si déja existant.
 *
 * ajoute le state par défaut, si pas de state existant
 */
export const ResetState = async () => {
  const rows = GetGUIAnswers();

  // si le state nexiste pas déja....
  if (rows.length == 0) {
    // ajoute le state par défaut
    await AddRowToDatabase({
      row: defaultValues,
    });
  }

  // sinon on fait rien....
  // ou alors si tu as un truc spécifique
  // à faire, alors fais le ;-)
  else {
    //
  }
};
