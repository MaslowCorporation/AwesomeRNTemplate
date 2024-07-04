// eslint-disable-next-line no-unused-vars
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "GUIAnswers";


// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // ...........
  answers: "TEXT",

  // identifiant unique
  uniqueId: "TEXT",

  currentIndex: "INTEGER",
};
