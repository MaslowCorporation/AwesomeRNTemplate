import { itemIsTheChosenOne } from "./itemIsTheChosenOne";
import { itemIsNPC } from "./itemIsNPC";

/**
 *
 * @param {*} dataListStyle, styles/callbacks de lUI de litem
 * @param {*} index, index de litem
 * @param {*} chosenOneIndex, index de litem actuellement visible à lécran
 *
 * @returns est ce que cet item est juste du vide a remplir ?
 */
export function itemIsEmptyPlaceholder({
  dataListStyle,
  index,
  chosenOneIndex,
}) {
  return (
    dataListStyle.renderOnlyItemOnScreen === true &&
    !itemIsTheChosenOne(index, chosenOneIndex) &&
    !itemIsNPC(index, chosenOneIndex, dataListStyle.howManyNPCSOnEachSide)
  );
}
