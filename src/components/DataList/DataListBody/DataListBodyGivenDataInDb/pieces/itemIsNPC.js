import { NumberIsBetween } from "src/services/NumberIsBetween/NumberIsBetween";
import { itemIsTheChosenOne } from "./itemIsTheChosenOne";

/**
 *
 * @param {*} itemIndex, index de litem
 * @param {*} chosenOneIndex, index de litem actuellement visible à lécran.
 * @param {*} howManyNPCSOnEachSide, combien de PNJ entourent le chosen one actuellement visible à lécran ?
 *
 * @returns si litem est un PNJ, ou pas ?
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
