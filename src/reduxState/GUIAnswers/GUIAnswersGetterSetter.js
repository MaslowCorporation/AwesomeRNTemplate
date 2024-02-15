/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestGUIAnswers } from "./GettersSetters/GetFreshestGUIAnswers";
import { GetGUIAnswers } from "./GettersSetters/GetGUIAnswers";
import { GetFreshestGUIAnswersFromGroup } from "./GettersSetters/GetFreshestGUIAnswersFromGroup";
import { GetGUIAnswersFromGroup } from "./GettersSetters/GetGUIAnswersFromGroup";
import { GetFreshestGUIAnswersFirstRow } from "./GettersSetters/GetFreshestGUIAnswersFirstRow";
import { GetGUIAnswersFirstRow } from "./GettersSetters/GetGUIAnswersFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitGUIAnswers } from "./GettersSetters/InitGUIAnswers";
import { GetSpecificRowsFromDB } from "./GettersSetters/GetSpecificRowsFromDB";
import { UpdateSpecificRowsFromDB } from "./GettersSetters/UpdateSpecificRowsFromDB";
import { ResetState } from "./GettersSetters/ResetState";
import { GetItemByUniqueID } from "./GettersSetters/GetItemByUniqueID";
import { GetFreshestItemByUniqueID } from "./GettersSetters/GetFreshestItemByUniqueID";

/**
 * Ceci nous permet un accès CRUD à base données,
 *
 * et aussi du refresh UI
 *
 * (Via SQLITE et Redux)
 */
export const SqliteReduxGUIAnswers = {
  // Getters.
  //
  // Récupèrent des données venant dune base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestGUIAnswers,
  GetGUIAnswers,
  GetFreshestGUIAnswersFromGroup,
  GetGUIAnswersFromGroup,
  GetFreshestGUIAnswersFirstRow,
  GetGUIAnswersFirstRow,
  GetItemByUniqueID,
  GetFreshestItemByUniqueID,

  // ze spéciale ones
  GetAllRowsFromDB,
  GetSpecificRowsFromDB,

  // Setters.
  //
  // (Ajoute/Modifie/Supprime des données venant dune base de données)
  AddRowToDatabase,
  DeleteSpecificRowsFromDB,
  InitGUIAnswers,
  UpdateSpecificRowsFromDB,
  ResetState,

  dbName: 'GUIAnswers',
};
