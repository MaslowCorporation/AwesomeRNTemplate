import * as SQLite from "expo-sqlite";

/**
 *
 * @param {*} dbName, le nom de la base de données qu'on veut créer/utiliser
 *
 * @param {*} rowNamesAndTypes, les noms et types (type SQLITE, soit TEXT ou NUMBER) des valeurs
 * stockées dans chaque row individuel.
 * par ex: {name: "TEXT", age: "INTEGER", }
 *
 * @returns une instance de la base de données,
 * qui permet entre autre un accès CRUD à la base de données.
 *
 * Cette fonction permet
 * d'initialiser (créer/init) la base de données sqlite.
 */
export const InitLocalDatabase = ({ dbName, rowNamesAndTypes, debugMode }) => {
  if (debugMode == true) {
    const db = CreateDBIfNotExisting(dbName, rowNamesAndTypes);

    AddRowsForGoodMeasure({ dbName, rowNamesAndTypes });

    return db;
  } else {
    return CreateDBIfNotExisting(dbName, rowNamesAndTypes);
  }
};

/**
 *
 * @returns la base de données.
 */
const AddRowsForGoodMeasure = ({ dbName, rowNamesAndTypes }) => {
  const db = SQLite.openDatabase(`${dbName}.db`);

  db.transaction((tx) => {
    Object.entries(rowNamesAndTypes).map(([key, value]) => {
      const request = `ALTER TABLE ${dbName} ADD COLUMN ${key} ${value}`;

      tx.executeSql(
        request,
        [],
        (txObj, resultSet) => {},
        (txObj, error) => {}
      );
    });
  });

  return db;
};

const CreateDBIfNotExisting = (dbName, rowNamesAndTypes) => {
  const db = SQLite.openDatabase(`${dbName}.db`);

  /*console.log(
    `dbname=${dbName} rownameandtype=${JSON.stringify(rowNamesAndTypes)}`
  );*/

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
      (txObj, resultSet) => {},
      (txObj, error) => {}
    );
  });

  return db;
};
