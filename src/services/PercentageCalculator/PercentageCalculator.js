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
const PercentageCalculator = ({ sent, total }) => {
  /* PLOP_INJECT_CODE */

  // le pourcentage de contenu DL (de 0 à 100)
  const progress = (sent / total) * 100;

  return progress;
};

export { PercentageCalculator };
