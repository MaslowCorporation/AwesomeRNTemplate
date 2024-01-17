import { NumberIsBetween } from "src/services/NumberIsBetween/NumberIsBetween";
import { itemIsTheChosenOne } from "./itemIsTheChosenOne";

/**
 *
 * @param {*} itemIndex, index de l'item
 * @param {*} chosenOneIndex, index de l'item actuellement visible à l'écran.
 * @param {*} howManyNPCSOnEachSide, combien de PNJ entourent le chosen one actuellement visible à l'écran ?
 *
 * @returns si l'item est un PNJ, ou pas ?
 */
export const itemIsNPC = (itemIndex, chosenOneIndex, howManyNPCSOnEachSide) => {
  return (
    NumberIsBetween({
      number: itemIndex,
      start: chosenOneIndex - howManyNPCSOnEachSide,
      end: chosenOneIndex + howManyNPCSOnEachSide,
    }) && !itemIsTheChosenOne(itemIndex, chosenOneIndex)
  );
};
