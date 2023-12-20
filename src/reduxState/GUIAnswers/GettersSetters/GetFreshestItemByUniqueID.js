import { GetFreshestGUIAnswers } from "./GetFreshestGUIAnswers";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestGUIAnswers().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
