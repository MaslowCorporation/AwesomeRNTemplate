/**
 *
 * @param {*} itemIndex, index de l'item
 * @param {*} chosenOneIndex, index de l'item actuellement visible à l'écran.
 *
 * @returns si l'item est l'item actuellement visible à l'écran.
 */
export const itemIsTheChosenOne = (itemIndex, chosenOneIndex) => {
  //console.log(``);
  return itemIndex === chosenOneIndex;
};
