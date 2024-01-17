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
 * Cette fonction permet d'ajouter une chose dans la base de données.
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
    /*console.log("Ajout de données réussi !");
  },
  onError: (e) => {
    /*console.log("Erreur durant ajout de données.");
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
const _AddRowToDatabase = ({
  dbName,
  row,
  rowNamesAndTypes,
  onSuccess,
  onError,
  resolve,
  reject,
}) => {
  const db = InitLocalDatabase({
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
        resolve(row);

        RunIfPossible({ func: onSuccess, args: row });
      },
      (txObj, error) => {
        reject(error);
        RunIfPossible({ func: onError, args: error });
      }
    );
  });
};

export { AddRowToDatabase };
