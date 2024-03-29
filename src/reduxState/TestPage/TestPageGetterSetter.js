/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestTestPage } from "./GettersSetters/GetFreshestTestPage";
import { GetTestPage } from "./GettersSetters/GetTestPage";
import { GetFreshestTestPageFromGroup } from "./GettersSetters/GetFreshestTestPageFromGroup";
import { GetTestPageFromGroup } from "./GettersSetters/GetTestPageFromGroup";
import { GetFreshestTestPageFirstRow } from "./GettersSetters/GetFreshestTestPageFirstRow";
import { GetTestPageFirstRow } from "./GettersSetters/GetTestPageFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitTestPage } from "./GettersSetters/InitTestPage";
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
export const SqliteReduxTestPage = {
  // Getters.
  //
  // Récupèrent des données venant dune base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestTestPage,
  GetTestPage,
  GetFreshestTestPageFromGroup,
  GetTestPageFromGroup,
  GetFreshestTestPageFirstRow,
  GetTestPageFirstRow,
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
  InitTestPage,
  UpdateSpecificRowsFromDB,
  ResetState,

  dbName: 'TestPage',
};
