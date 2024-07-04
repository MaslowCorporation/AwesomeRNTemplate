import { GetFreshestToolbox } from "./GetFreshestToolbox";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestToolbox().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
