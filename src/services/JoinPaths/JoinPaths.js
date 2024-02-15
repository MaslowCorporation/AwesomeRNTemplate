/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} args, 1 ou plusieurs strings
 *
 * @returns un gros path fusionné
 *
 * Cette fonction permet de joindre des paths ensemble pour former quun
 */
const JoinPaths = (...args) => {
  /* PLOP_INJECT_CODE */

  return args
    .map((part, i) => {
      if (i === 0) {
        // eslint-disable-next-line no-useless-escape
        return part.trim().replace(/[\/]*$/g, "");
      } else {
        // eslint-disable-next-line no-useless-escape
        return part.trim().replace(/(^[\/]*|[\/]*$)/g, "");
      }
    })
    .filter((x) => x.length)
    .join("/");
};

export { JoinPaths };
