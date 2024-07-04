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
const SecondsToHHMMSS = (seconds) => {
  /* PLOP_INJECT_CODE */



  if (seconds < 3600) {
    return new Date(seconds * 1000).toISOString().substring(14, 19);
  } else {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  }
};

export { SecondsToHHMMSS };
