


import { GetFreshestGUIState } from "./GetFreshestGUIState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestGUIState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
