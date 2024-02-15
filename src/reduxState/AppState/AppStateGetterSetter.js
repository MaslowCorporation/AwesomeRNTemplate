/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestAppState } from "./GettersSetters/GetFreshestAppState";
import { GetAppState } from "./GettersSetters/GetAppState";
import { GetFreshestAppStateFromGroup } from "./GettersSetters/GetFreshestAppStateFromGroup";
import { GetAppStateFromGroup } from "./GettersSetters/GetAppStateFromGroup";
import { GetFreshestAppStateFirstRow } from "./GettersSetters/GetFreshestAppStateFirstRow";
import { GetAppStateFirstRow } from "./GettersSetters/GetAppStateFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitAppState } from "./GettersSetters/InitAppState";
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
export const SqliteReduxAppState = {
  dbName: 'AppState',

  // Getters.
  //
  // Récupèrent des données venant dune base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestAppState,
  GetAppState,
  GetFreshestAppStateFromGroup,
  GetAppStateFromGroup,
  GetFreshestAppStateFirstRow,
  GetAppStateFirstRow,
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
  InitAppState,
  UpdateSpecificRowsFromDB,
  ResetState,
};
