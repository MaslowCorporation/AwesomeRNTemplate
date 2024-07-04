import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet dobtenir toute les chose dans la base de données.
 * 
 
GetAllRowsFromDB({
  dbName: "funga",
  rowNamesAndTypes: {
    name: "TEXT",
    age: "INTEGER",
    moyenneBac: "REAL",
  },
  onSuccess: (rows) => {
    /*;
  },
  onError: (e) => {
    /*;
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
const _GetAllRowsFromDB = async ({
  dbName,
  rowNamesAndTypes,
  onSuccess,
  onError,
  debugMode,
  resolve,
  reject,
}) => {
  const db = await InitLocalDatabase({
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


        RunIfPossible({ func: onSuccess, args: _array });

        resolve(_array);
      },

      // failure callback which sends two things Transaction object and Error
      (txObj, error) => {


        RunIfPossible({ func: onError, args: error });

        reject(error);

      }
    );
  });
};

export { GetAllRowsFromDB };
