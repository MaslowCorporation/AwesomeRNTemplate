/**
 *
 * @param {*} itemIndex, index de litem
 * @param {*} chosenOneIndex, index de litem actuellement visible à lécran.
 *
 * @returns si litem est litem actuellement visible à lécran.
 */
export const itemIsTheChosenOne = (itemIndex, chosenOneIndex) => {
  //;
  return itemIndex === chosenOneIndex;
};
