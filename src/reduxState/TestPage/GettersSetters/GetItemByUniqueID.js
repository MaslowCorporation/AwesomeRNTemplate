import { GetTestPage } from "./GetTestPage";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetTestPage().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
