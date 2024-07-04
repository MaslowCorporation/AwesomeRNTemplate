import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} qtyItems
 * @param {*} properSnapToIntervalAndOffset
 * @param {*} horizontal
 * @param {*} dataListStyle
 * @param {*} event
 *
 * La callback datteignage de fin de liste ditems.
 */
export function handleEndOfListCallback({
  qtyItems,
  properSnapToIntervalAndOffset,
  horizontal,
  dataListStyle,
  event,
}) {
  /**
   * The X (or offsetLeft position)
   * and Y (or the offsetTop position)
   * are both in pixels.
   *
   * In simple words,
   * they are the distance
   * from the left and top edges
   * of an element to the left
   * and top edges of the viewport,
   * respectively:
   */
  // la largeur ou hauteur totale de la FlatList,
  // selon direction du scroll (hauteur si vertical, largeur si horizontal)
  const totalFlatlistSize = qtyItems * properSnapToIntervalAndOffset;

  // la distance,
  // partant du bord en haut à droite de lécran,
  // et le bord en haut à droite du dernier item de la liste de données.
  const maxListOffset = totalFlatlistSize - properSnapToIntervalAndOffset;

  // la distance,
  // partant du bord en haut à droite de lécran,
  // et le bord en haut à droite de litem  visible à actuellement à lécran, dans la liste de données.
  const currentOffset =
    horizontal === false
      ? event.nativeEvent.contentOffset.y
      : event.nativeEvent.contentOffset.x;

  // si litem visible actuellement à lécran se trouve actuellement
  // a la meme position que le tout dernier item de la liste de données,
  // alors on run la callback de fin de liste pushed on.
  if (currentOffset >= maxListOffset) {
    RunIfPossible({
      func: dataListStyle.onListEndPushed,
      args: null,
    });
  }
}
