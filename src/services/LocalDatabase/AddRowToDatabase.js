/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet dajouter une chose dans la base de données.
 * 
 * 
 * 
 
AddRowToDatabase({
  dbName: "funga",
  rowNamesAndTypes: {
    name: "TEXT",
    age: "INTEGER",
    moyenneBac: "REAL",
  },
  row: {
    name: "Pago",
    age: 66,
    moyenneBac: 10,
  },
  onSuccess: (row) => {
    /*;
  },
  onError: (e) => {
    /*;
  },
});

*/
const AddRowToDatabase = ({
  dbName,
  row,
  rowNamesAndTypes,
  onSuccess,
  onError,
}) => {
  /** Ceci permet de retourner le futur résultat de la requête */
  return new Promise((resolve, reject) => {
    _AddRowToDatabase({
      dbName,
      row,
      rowNamesAndTypes,
      onSuccess,
      onError,
      resolve,
      reject,
    });
  });
};

/** le processus */
const _AddRowToDatabase = async ({
  dbName,
  row,
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

  // la partie de la requête SQL qui énumère
  // les différentes key stockées dans un row
  const keys = Object.entries(row)
    .map(([key, value]) => {
      return key;
    })
    .join(", ");

  // un ? pour chaque key
  const qMarks = Object.entries(row)
    .map(([key, value]) => {
      return `?`;
    })
    .join(", ");

  // les valeurs des keys
  const keyValues = Object.entries(row).map(([key, value]) => {
    return value;
  });

  const fullRequest = `INSERT INTO ${dbName} (${keys}) values (${qMarks})`;

  db.transaction((tx) => {
    tx.executeSql(
      fullRequest,
      keyValues,
      (txObj, resultSet) => {


        RunIfPossible({ func: onSuccess, args: row });

        resolve(row);
      },
      (txObj, error) => {


        RunIfPossible({ func: onError, args: error });

        reject(error);

      }
    );
  });
};

export { AddRowToDatabase };
