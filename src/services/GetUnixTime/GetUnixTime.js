/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @returns Cette fonction permet dobtenir le unix time
 */
const GetUnixTime = () => {
  /* PLOP_INJECT_CODE */

  const time = Math.floor(Date.now() / 1000);

  //

  return time;
};

export { GetUnixTime };
