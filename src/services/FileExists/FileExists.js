/* PLOP_INJECT_IMPORT */
//import React from "react";

import ReactNativeBlobUtil from "react-native-blob-util";
import { LogIf } from "../LogIf/LogIf";

/**
 *
 * @param {*} param1,
 *
 * @returns un Promise<bool>, le verdict
 *
 * Cette fonction permet de savoir si un fichier existe
 */
const FileExists = ({ path, debugPrint }) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      resolve(false)

      return
    }

    ReactNativeBlobUtil.fs
      .exists(path)
      .then((exist) => {
        LogIf({
          condition: () => debugPrint,
          str: `File ${path} exists ?: ${exist}`,
        });

        resolve(exist);
      })
      .catch(() => {
        LogIf({
          condition: () => debugPrint,
          str: `File ${path} exists ?: ${false}`,
        });

        reject(false);
      });
  });
};

export { FileExists };
