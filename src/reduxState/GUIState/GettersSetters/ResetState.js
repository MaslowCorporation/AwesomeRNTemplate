import { defaultValues } from "../DatabaseInfo";
import { AddRowToDatabase } from "./AddRowToDatabase";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";
import { GetGUIState } from "./GetGUIState";
import { SqliteReduxGUIState } from "../GUIStateGetterSetter";
import { Constants } from "src/constants/Constants";

/**
 * remet le state à zéro
 */
export const ResetState = async (hardReset) => {


  const rows = GetGUIState();

  // si le state de GetUserInput n'existe pas déja....
  if (rows.length == 0) {
    // ajoute les rows par défaut
    await AddRowToDatabase({
      row: defaultValues,
    });
  }
  else if (hardReset) {
    await UpdateSpecificRowsFromDB({
      row: defaultValues,
      rowName: "uniqueId",
      rowValue: "GUIState",
      onSuccess: (data) => {
        //console.log(`state de GUIState reset avec succès`);
      },
    });
  }
  // sinon remet le state a 0
  else {
    const GUIState = rows[0]

    await UpdateSpecificRowsFromDB({
      row: {
        ...GUIState, // le state actuel
        currentIndex: 0,

        // montre ou pas le GUI
        showGUI: Constants.false,
        answers: "{}"
      },
      rowName: "uniqueId",
      rowValue: "GUIState",
      onSuccess: (data) => {
        //console.log(`state de GUIState reset avec succès`);
      },
    });
  }
};
