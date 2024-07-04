import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet dobtenir le(s) row(s) ayant un certain rowName, dans la base de données.
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
    /*;
  },
  onError: (e) => {
    /*;
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
const _GetSpecificRowsFromDB = async ({
  dbName,
  rowNamesAndTypes,
  rowName,
  rowValue,
  onSuccess,
  onError,
  resolve,
  reject,
}) => {
  const db = await InitLocalDatabase({
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

export { GetSpecificRowsFromDB };
