import { itemIsTheChosenOne } from "./itemIsTheChosenOne";
import { itemIsNPC } from "./itemIsNPC";

/**
 *
 * @param {*} dataListStyle, styles/callbacks de l'UI de l'item
 * @param {*} index, index de l'item
 * @param {*} chosenOneIndex, index de l'item actuellement visible à l'écran
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
