/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestToolboxState } from "./GettersSetters/GetFreshestToolboxState";
import { GetToolboxState } from "./GettersSetters/GetToolboxState";
import { GetFreshestToolboxStateFromGroup } from "./GettersSetters/GetFreshestToolboxStateFromGroup";
import { GetToolboxStateFromGroup } from "./GettersSetters/GetToolboxStateFromGroup";
import { GetFreshestToolboxStateFirstRow } from "./GettersSetters/GetFreshestToolboxStateFirstRow";
import { GetToolboxStateFirstRow } from "./GettersSetters/GetToolboxStateFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitToolboxState } from "./GettersSetters/InitToolboxState";
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
export const SqliteReduxToolboxState = {
  dbName: 'ToolboxState',


  // Getters.
  //
  // Récupèrent des données venant dune base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestToolboxState,
  GetToolboxState,
  GetFreshestToolboxStateFromGroup,
  GetToolboxStateFromGroup,
  GetFreshestToolboxStateFirstRow,
  GetToolboxStateFirstRow,
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
  InitToolboxState,
  UpdateSpecificRowsFromDB,
  ResetState,
};
