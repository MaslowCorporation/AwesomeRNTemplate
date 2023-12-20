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
  const fullHeightCentered = {
    height: "100%",
    width: dataListItemWidth,
    backgroundColor: backgroundColor,
    alignSelf: "center",
  };

  return fullHeightCentered;
}
