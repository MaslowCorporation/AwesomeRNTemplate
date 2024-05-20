import { GetFreshestTestPageState } from "./GetFreshestTestPageState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestTestPageState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
