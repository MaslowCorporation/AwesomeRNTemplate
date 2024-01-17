/* PLOP_INJECT_IMPORT */

import { LogIf } from "../LogIf/LogIf";

import ReactNativeBlobUtil from "react-native-blob-util";

/**
 *
 * @param {*} filePath
 *
 * @param {*} printInfo
 *
 * Supprime un fichier, ou dossier, si existant
 */
export function DeleteFileOrFolder({ filePath, printInfo }) {
  ReactNativeBlobUtil.fs
    .exists(filePath)
    .then((itExists) => {
      if (itExists) {
        ReactNativeBlobUtil.fs
          .unlink(filePath)
          .then(() => {
            LogIf({
              condition: () => printInfo,
              str: `Suppression de ${filePath} effectuée avec succès !!`,
            });
          })
          .catch((err) => {});
      }
    })
    .catch(() => {});
}
