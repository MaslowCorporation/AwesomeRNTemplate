import { Constants } from "src/constants/Constants";

/**
 *
 * @param {*} dataListItemHeight
 * @param {*} dataListItemWidth
 * @param {*} backgroundColor
 *
 * @returns le style à appliquer au placeholder.
 */
export function PlaceholderStyle(
  dataListItemHeight,
  dataListItemWidth,
  backgroundColor
) {
  // Taille originale de litem, prend toute la hauteur, centré
  // eslint-disable-next-line no-unused-vars
  const fullHeightCentered = {
    height: "100%",
    width: dataListItemWidth,
    backgroundColor: backgroundColor,
    alignSelf: "center",
  };

  return fullHeightCentered;
}
