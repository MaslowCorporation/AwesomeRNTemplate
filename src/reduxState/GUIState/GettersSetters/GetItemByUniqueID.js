


import { GetGUIState } from "./GetGUIState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetGUIState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
