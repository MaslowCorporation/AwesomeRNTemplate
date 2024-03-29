import { GetTestPageState } from "./GetTestPageState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetTestPageState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
