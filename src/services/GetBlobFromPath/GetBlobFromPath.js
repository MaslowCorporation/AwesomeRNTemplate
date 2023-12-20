/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} path,
 * le path du fichier
 *
 * @returns le blob, si possible, ou null
 *
 * Cette fonction permet de blobifier un path
 */
const GetBlobFromPath = async (path) => {
  /* PLOP_INJECT_CODE */

  try {
    const response = await fetch(path);
    const content = await response.blob();

    return content;
  } catch (e) {
    return null;
  }
};

export { GetBlobFromPath };
