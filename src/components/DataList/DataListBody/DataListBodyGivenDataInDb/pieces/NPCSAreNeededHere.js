import { itemIsNPC } from "./itemIsNPC";

/**
 *
 * @param {*} dataListStyle, styles/callbacks de l'UI de l'item
 * @param {*} index, index de l'item
 * @param {*} chosenOneIndex, index de l'item actuellement visible à l'écran
 *
 * @returns est ce que cet item est un PNJ ou pas ?
 */
export function NPCSAreNeededHere({ dataListStyle, index, chosenOneIndex }) {
  return (
    dataListStyle.renderOnlyItemOnScreen === true &&
    itemIsNPC(index, chosenOneIndex, dataListStyle.howManyNPCSOnEachSide)
  );
}
