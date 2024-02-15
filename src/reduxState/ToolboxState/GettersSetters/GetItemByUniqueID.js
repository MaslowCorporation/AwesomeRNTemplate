import { GetToolboxState } from "./GetToolboxState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetToolboxState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
