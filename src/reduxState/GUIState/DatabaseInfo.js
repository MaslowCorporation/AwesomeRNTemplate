// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "GUIState";

// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // l'index actuel visionné
  currentIndex: "INTEGER",

  // identifiant unique
  uniqueId: "TEXT",

  // montre ou pas le GUI
  showGUI: "INTEGER",

  // les réponses, sous forme de string JSON
  answers: "TEXT",

  // les réponses PERSISTANTES !!!, sous forme de string JSON
  answersPersistent: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE

  // identifiant unique
  uniqueId: "GUIState",

  // l'index actuel
  currentIndex: 0,

  // montre ou pas le GUI
  showGUI: Constants.false,

  // les réponses, sous forme de string JSON
  answers: "{}",

  // les réponses PERSISTANTES !!!, sous forme de string JSON
  answersPersistent: "{}"
};
