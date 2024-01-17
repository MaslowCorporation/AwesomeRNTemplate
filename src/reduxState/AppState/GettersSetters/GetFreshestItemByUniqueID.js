import { GetFreshestAppState } from "./GetFreshestAppState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestAppState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
