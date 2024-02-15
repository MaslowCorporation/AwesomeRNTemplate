/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} obj, lobjet à filtrer.
 *
 * @param {*} condition, fonction de filtrage de key.
 *
 * @returns Cette fonction permet de filter un objet, selon la valeur de sa/ses keys
 */
const FilterObject = ({ obj, condition }) => {
  /* PLOP_INJECT_CODE */

  if (obj == null) return;

  /**
   * les noms des keys de lobjet
   */
  const objKeyNames = Object.keys(obj);

  //

  /** crée un nouvel objet fitré, selon callback condition */
  let filteredObj = {};
  let keysAfterFiltering = [];

  objKeyNames.forEach((keyName) => {
    const keyValue = obj[keyName];

    if (condition(keyName, keyValue) == true) {
      filteredObj[keyName] = keyValue;
      keysAfterFiltering.push(keyName);
    }
  });

  //

  return filteredObj;
};

export { FilterObject };
