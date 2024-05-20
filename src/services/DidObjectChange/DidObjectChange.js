/* PLOP_INJECT_IMPORT */
import { IsPrimitive } from "src/services/IsPrimitive/IsPrimitive";
import { FilterObject } from "src/services/FilterObject/FilterObject";
//import React from "react";
const _ = require("lodash");

/**
 *
 * @param {*} obj1, un objet
 * @param {*} obj2, un objet
 * @param {*} prettyPrint, on pretty print, ou pas les objets, et loutcome ?
 *
 * @returns un booléen (true si lun des props (primitive only) de lobjet à changé, ou false si rien na changé)
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



  return didItChange;
};

export { DidObjectChange };
