import { GetFreshestTestPage } from "./GetFreshestTestPage";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestTestPage().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
