import * as SQLite from "expo-sqlite";
import { mapAsync } from "../MapAsync/MapAsync";

let databases = {};

/**
 *
 * @param {*} dbName, le nom de la base de données quon veut créer/utiliser
 *
 * @param {*} rowNamesAndTypes, les noms et types (type SQLITE, soit TEXT ou NUMBER) des valeurs
 * stockées dans chaque row individuel.
 * par ex: {name: "TEXT", age: "INTEGER", }
 *
 * @returns une instance de la base de données,
 * qui permet entre autre un accès CRUD à la base de données.
 *
 * Cette fonction permet
 * dinitialiser (créer/init) la base de données sqlite.
 */
export const InitLocalDatabase = async ({ dbName, rowNamesAndTypes, debugMode }) => {
  const existingDb = databases[dbName];

  if (!existingDb) {
    const db = await CreateDBIfNotExisting(dbName, rowNamesAndTypes);

    debugMode && await AddRowsForGoodMeasure({ db, dbName, rowNamesAndTypes });

    // store the shizzle
    databases[dbName] = db;

    return db;
  } else {
    return existingDb;
  }



};

/**
 *
 * @returns la base de données.
 */
const AddRowsForGoodMeasure = async ({ db, dbName, rowNamesAndTypes }) => {

  const addDone = await mapAsync(Object.entries(rowNamesAndTypes), (key_value_array, idx) => {
    const key = key_value_array[0]
    const value = key_value_array[1]

    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        const request = `ALTER TABLE ${dbName} ADD COLUMN ${key} ${value}`;

        tx.executeSql(
          request,
          [],
          (txObj, resultSet) => {
            resolve([dbName, key, value, true]);
          },
          (txObj, error) => {
            resolve([dbName, key, value, false]);
          }
        );

      });
    })
  });

  // console.log(JSON.stringify(addDone, null, 2))

  return addDone;
};

const CreateDBIfNotExisting = async (dbName, rowNamesAndTypes) => {
  return new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(`${dbName}.db`);


    // la partie de la requête SQL qui énumère
    // les différentes paires de key/value stockées dans un row
    const keyTypePairs = Object.entries(rowNamesAndTypes)
      .map(([key, value]) => {
        return `${key} ${value.toString()}`;
      })
      .join(", ");

    // la requête complete
    const sqlCreationRequest = `CREATE TABLE IF NOT EXISTS ${dbName} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${keyTypePairs})`;

    // Check if the table exists if not create it
    db.transaction((tx) => {
      tx.executeSql(
        sqlCreationRequest,
        [],
        (txObj, resultSet) => {
          resolve(db)
        },
        (txObj, error) => {
          resolve(db);
        }
      );
    });
  })


};
