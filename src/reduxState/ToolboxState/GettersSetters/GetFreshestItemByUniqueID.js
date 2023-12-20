import { GetFreshestToolboxState } from "./GetFreshestToolboxState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestToolboxState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
