/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestGUIState } from "./GettersSetters/GetFreshestGUIState";
import { GetGUIState } from "./GettersSetters/GetGUIState";
import { GetFreshestGUIStateFromGroup } from "./GettersSetters/GetFreshestGUIStateFromGroup";
import { GetGUIStateFromGroup } from "./GettersSetters/GetGUIStateFromGroup";
import { GetFreshestGUIStateFirstRow } from "./GettersSetters/GetFreshestGUIStateFirstRow";
import { GetGUIStateFirstRow } from "./GettersSetters/GetGUIStateFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitGUIState } from "./GettersSetters/InitGUIState";
import { GetSpecificRowsFromDB } from "./GettersSetters/GetSpecificRowsFromDB";
import { UpdateSpecificRowsFromDB } from "./GettersSetters/UpdateSpecificRowsFromDB";
import { ResetState } from "./GettersSetters/ResetState";
import { GetItemByUniqueID } from "./GettersSetters/GetItemByUniqueID";
import { GetFreshestItemByUniqueID } from "./GettersSetters/GetFreshestItemByUniqueID";
import { GetAnswers } from "./GettersSetters/GetAnswers";
import { SetAnswers } from "./GettersSetters/SetAnswers";

/**
 * Ceci nous permet un accès CRUD à base données,
 *
 * et aussi du refresh UI
 *
 * (Via SQLITE et Redux)
 */
export const SqliteReduxGUIState = {
  dbName: 'GUIState',
  // Getters.
  //
  // Récupèrent des données venant d'une base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestGUIState,
  GetGUIState,
  GetFreshestGUIStateFromGroup,
  GetGUIStateFromGroup,
  GetFreshestGUIStateFirstRow,
  GetGUIStateFirstRow,
  GetItemByUniqueID,
  GetFreshestItemByUniqueID,
  GetAnswers,

  // ze spéciale ones
  GetAllRowsFromDB,
  GetSpecificRowsFromDB,

  // Setters.
  //
  // (Ajoute/Modifie/Supprime des données venant d'une base de données)
  AddRowToDatabase,
  DeleteSpecificRowsFromDB,
  InitGUIState,
  UpdateSpecificRowsFromDB,
  ResetState,
  SetAnswers,
};
