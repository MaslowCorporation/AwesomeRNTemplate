import { GetToolbox } from "./GetToolbox";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetToolbox().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
