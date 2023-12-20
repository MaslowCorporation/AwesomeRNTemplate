import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet d'obtenir le(s) row(s) ayant un certain rowName, dans la base de données.
 *
 
GetSpecificRowsFromDB({
  dbName: "funga",
  rowName: "age",
  rowValue: 28,
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
const GetSpecificRowsFromDB = ({
  dbName,
  rowNamesAndTypes,
  rowName,
  rowValue,
  onSuccess,
  onError,
}) => {
  /** Ceci permet de retourner le futur résultat de la requête */
  return new Promise((resolve, reject) => {
    _GetSpecificRowsFromDB({
      dbName,
      rowNamesAndTypes,
      rowName,
      rowValue,
      onSuccess,
      onError,
      resolve,
      reject,
    });
  });
};

/** le processus */
const _GetSpecificRowsFromDB = ({
  dbName,
  rowNamesAndTypes,
  rowName,
  rowValue,
  onSuccess,
  onError,
  resolve,
  reject,
}) => {
  const db = InitLocalDatabase({
    dbName: dbName,
    rowNamesAndTypes: rowNamesAndTypes,
  });

  db.transaction((tx) => {
    // passing sql query and parameters:null
    tx.executeSql(
      `SELECT * FROM ${dbName} WHERE ${rowName} = ?`,
      [rowValue],
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

export { GetSpecificRowsFromDB };
