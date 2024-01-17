/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RequestStoragePermission } from "../RequestStoragePermission/RequestStoragePermission";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { _DownloadFromURL } from "./_DownloadFromURL";

/**
 *
 * @param {*} url
 * @param {*} headers
 * @param {*} outputPath
 * @param {*} onSuccess
 * @param {*} onError
 * @param {*} onProgress
 *
 * Cete fonctionn permet de télécharger du contenu venant d'une URL
 */
const DownloadFromUrl = async ({
  url,
  outputPath,
  onSuccess,
  onError,
  onProgress,
}) => {
  /* PLOP_INJECT_CODE */
  return new Promise((resolve, reject) => {

    // demande permission de stockage (android)
    RequestStoragePermission({
      onYes: async () => {
        // si le fichier existe déja, supprime le
        _DownloadFromURL({
          url,
          outputPath,
          onSuccess,
          onError,
          onProgress,
          resolve,
          reject,
        });
      },
      onNo: () => {
        reject(null);

        RunIfPossible({
          func: onError,
          args: "Permission Denied! You need to give storage permission to download the file",
        });
      },
    });

  })
};

export { DownloadFromUrl };
