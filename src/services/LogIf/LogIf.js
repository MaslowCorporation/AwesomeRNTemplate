/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} condition, callback qui return true si on print, false autrement.
 *
 * @param {*} str, le text à logger
 *
 * @returns
 *
 * Cette fonction permet de console.log
 * un string sous certaines conditions.
 */
const LogIf = ({ condition, str }) => {
  /* PLOP_INJECT_CODE */

  if (condition()) {
    console.log(str);
  }
};

export { LogIf };
