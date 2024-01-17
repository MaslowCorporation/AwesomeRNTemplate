/* PLOP_INJECT_IMPORT */
import { IsPrimitive } from "src/services/IsPrimitive/IsPrimitive";
import { FilterObject } from "src/services/FilterObject/FilterObject";
//import React from "react";
const _ = require("lodash");

/**
 *
 * @param {*} obj1, un objet
 * @param {*} obj2, un objet
 * @param {*} prettyPrint, on pretty print, ou pas les objets, et l'outcome ?
 *
 * @returns un booléen (true si l'un des props (primitive only) de l'objet à changé, ou false si rien n'a changé)
 *
 * Cette fonction permet de savoir
 * si un objet à changé, ou pas.
 */
const DidObjectChange = ({ obj1, obj2, prettyPrint }) => {
  /* PLOP_INJECT_CODE */
  const filteredObj1 = FilterObject({
    obj: obj1,
    condition: (key, value) => {
      return IsPrimitive(value);
    },
  });

  const filteredObj2 = FilterObject({
    obj: obj2,
    condition: (key, value) => {
      return IsPrimitive(value);
    },
  });

  const didItChange = !_.isEqual(filteredObj1, filteredObj2);
  /*const didItChange = !(
    JSON.stringify(filteredObj1) === JSON.stringify(filteredObj2)
  );*/

  if (prettyPrint) {
    console.log(JSON.stringify(filteredObj1, undefined, 2));
    console.log(JSON.stringify(filteredObj2, undefined, 2));
    console.log(`Les données d'item ont t'elles changé ?: ${didItChange}`);
  }

  return didItChange;
};

export { DidObjectChange };
