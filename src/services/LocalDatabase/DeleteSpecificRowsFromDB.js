import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet de supprimer un ou plusieurs rows
 * (selon rowName et rowValue)
 * , dans la base de données.
 *
 
DeleteSpecificRowsFromDB({
  dbName: "funga",
  rowName: "name",
  rowValue: "zz",
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
const DeleteSpecificRowsFromDB = ({
  dbName,
  rowName,
  rowValue,
  rowNamesAndTypes,
  onSuccess,
  onError,
}) => {
  /** Ceci permet de retourner le futur résultat de la requête */
  return new Promise((resolve, reject) => {
    _DeleteSpecificRowsFromDB({
      dbName,
      rowName,
      rowValue,
      rowNamesAndTypes,
      onSuccess,
      onError,
      resolve,
      reject,
    });
  });
};

/** le processus */
const _DeleteSpecificRowsFromDB = async ({
  dbName,
  rowName,
  rowValue,
  rowNamesAndTypes,
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
      `DELETE FROM ${dbName} WHERE ${rowName} = ?`,
      [rowValue],
      // success callback which sends two things:
      // Transaction object and ResultSet Object
      (txObj, resultSet) => {


        RunIfPossible({ func: onSuccess, args: resultSet.rowsAffected });

        resolve(resultSet.rowsAffected);
      },

      // failure callback which sends two things Transaction object and Error
      (txObj, error) => {


        RunIfPossible({ func: onError, args: error });

        reject(error);
      }
    );
  });
};

export { DeleteSpecificRowsFromDB };
