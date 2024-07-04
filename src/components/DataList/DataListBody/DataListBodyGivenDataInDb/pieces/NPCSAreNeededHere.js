import { itemIsNPC } from "./itemIsNPC";

/**
 *
 * @param {*} dataListStyle, styles/callbacks de lUI de litem
 * @param {*} index, index de litem
 * @param {*} chosenOneIndex, index de litem actuellement visible à lécran
 *
 * @returns est ce que cet item est un PNJ ou pas ?
 */
export function NPCSAreNeededHere({ dataListStyle, index, chosenOneIndex }) {
  return (
    dataListStyle.renderOnlyItemOnScreen === true &&
    itemIsNPC(index, chosenOneIndex, dataListStyle.howManyNPCSOnEachSide)
  );
}
