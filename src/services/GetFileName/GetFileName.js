/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} path,
 * le path du fichier
 *
 * @returns le blob, si possible, ou null
 *
 * Cette fonction permet d'obtenir le nom de fichier,
 * à partir d'un path
 */
const GetFileName = async (path) => {
  /* PLOP_INJECT_CODE */

  try {
    // eslint-disable-next-line no-useless-escape
    const filename = path.replace(/^.*[\\\/]/, "");

    return filename;
  } catch (e) {
    return null;
  }
};

export { GetFileName };
