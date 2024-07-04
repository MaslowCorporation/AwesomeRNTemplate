/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestToolbox } from "./GettersSetters/GetFreshestToolbox";
import { GetToolbox } from "./GettersSetters/GetToolbox";
import { GetFreshestToolboxFromGroup } from "./GettersSetters/GetFreshestToolboxFromGroup";
import { GetToolboxFromGroup } from "./GettersSetters/GetToolboxFromGroup";
import { GetFreshestToolboxFirstRow } from "./GettersSetters/GetFreshestToolboxFirstRow";
import { GetToolboxFirstRow } from "./GettersSetters/GetToolboxFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitToolbox } from "./GettersSetters/InitToolbox";
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
export const SqliteReduxToolbox = {
  dbName: 'Toolbox',

  // Getters.
  //
  // Récupèrent des données venant dune base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestToolbox,
  GetToolbox,
  GetFreshestToolboxFromGroup,
  GetToolboxFromGroup,
  GetFreshestToolboxFirstRow,
  GetToolboxFirstRow,
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
  InitToolbox,
  UpdateSpecificRowsFromDB,
  ResetState,
};
