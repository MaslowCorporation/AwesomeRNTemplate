/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const ReplaceFileExtension = ({ filePath, newExtension }) => {
  /* PLOP_INJECT_CODE */

  let pos = filePath.lastIndexOf(".");

  return (
    filePath.substr(0, pos < 0 ? filePath.length : pos) + `.${newExtension}`
  );
};

export { ReplaceFileExtension };
