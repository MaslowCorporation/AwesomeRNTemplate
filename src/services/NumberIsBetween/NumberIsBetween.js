/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de savoir si un nombre est situé entre start et end (inclus)
 */
const NumberIsBetween = ({ number, start, end }) => {
  return number >= start && number <= end;
};

export { NumberIsBetween };
