/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} item
 * @param {*} index
 *
 * @returns createur de key ditem de Flatlist
 */
const KeyExtractor = (item, index) => {
  if (Object.prototype.hasOwnProperty.call(item, "uniqueId")) {
    return item.uniqueId;
  } else {
    return index.toString();
  }
};

export { KeyExtractor };
