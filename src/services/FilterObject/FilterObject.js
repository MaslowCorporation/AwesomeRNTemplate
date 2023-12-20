/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} obj, l'objet à filtrer.
 *
 * @param {*} condition, fonction de filtrage de key.
 *
 * @returns Cette fonction permet de filter un objet, selon la valeur de sa/ses keys
 */
const FilterObject = ({ obj, condition }) => {
  /* PLOP_INJECT_CODE */

  if (obj == null) return;

  /**
   * les noms des keys de l'objet
   */
  const objKeyNames = Object.keys(obj);

  //console.log(`object keys before filtering: ${objKeyNames}`);

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

  //console.log(`object keys after filtering: ${keysAfterFiltering}`);

  return filteredObj;
};

export { FilterObject };
