// eslint-disable-next-line no-unused-vars
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "AppState";


// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // ...........
  maslowAPIKey: "TEXT",

  // identifiant unique
  uniqueId: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE


  // identifiant unique
  uniqueId: "AppState",
};

/* ******************************************* */
