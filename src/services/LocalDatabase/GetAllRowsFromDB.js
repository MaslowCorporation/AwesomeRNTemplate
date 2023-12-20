import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet d'obtenir toute les chose dans la base de données.
 * 
 
GetAllRowsFromDB({
  dbName: "funga",
  rowNamesAndTypes: {
    name: "TEXT",
    age: "INTEGER",
    moyenneBac: "REAL",
  },
  onSuccess: (rows) => {
    /*console.log(`Voici les données: ${rows}`);
  },
  onError: (e) => {
    /*console.log("Erreur durant récup de données.");
  },
});

 * 
 */
const GetAllRowsFromDB = ({
  dbName,
  rowNamesAndTypes,
  onSuccess,
  onError,
  debugMode,
}) => {
  /** Ceci permet de retourner le futur résultat de la requête */
  return new Promise((resolve, reject) => {
    _GetAllRowsFromDB({
      dbName,
      rowNamesAndTypes,
      onSuccess,
      onError,
      debugMode,
      resolve,
      reject,
    });
  });
};

/** le processus */
const _GetAllRowsFromDB = ({
  dbName,
  rowNamesAndTypes,
  onSuccess,
  onError,
  debugMode,
  resolve,
  reject,
}) => {
  const db = InitLocalDatabase({
    dbName: dbName,
    rowNamesAndTypes: rowNamesAndTypes,
    debugMode: debugMode,
  });

  db.transaction((tx) => {
    // passing sql query and parameters:null
    tx.executeSql(
      `SELECT * FROM ${dbName}`,
      null,
      // success callback which sends two things:
      // Transaction object and ResultSet Object
      (txObj, { rows: { _array } }) => {
        resolve(_array);
        RunIfPossible({ func: onSuccess, args: _array });
      },

      // failure callback which sends two things Transaction object and Error
      (txObj, error) => {
        reject(error);
        RunIfPossible({ func: onError, args: error });
      }
    );
  });
};

export { GetAllRowsFromDB };
