/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @returns Cette fonction permet d'obtenir le unix time
 */
const GetUnixTime = () => {
  /* PLOP_INJECT_CODE */

  const time = Math.floor(Date.now() / 1000);

  //console.log(`Unix time: ${time}`);

  return time;
};

export { GetUnixTime };
