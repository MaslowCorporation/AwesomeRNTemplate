/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} value,
 *
 * @returns true si primitif, false autrement
 *
 * Cette fonction permet de savoir si une valeur est primitive.
 */
const IsPrimitive = (value) => {
  if (value === null) {
    return true;
  }

  if (typeof value == "object" || typeof value == "function") {
    return false;
  } else {
    return true;
  }
};

export { IsPrimitive };
