import { View } from "react-native";
import { PlaceholderStyle } from "./PlaceholderStyle";
import { React, memo } from "react";

/**
 *
 * @param {*} dataListItemHeight, la hauteur de lUI de litem.
 *
 * @param {*} dataListItemWidth, la largeur de lUI de litem.
 *
 * @param {*} backgroundColor, la couleur darrière plan
 * de lécran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns du vide plein.
 */
const EmptyPlaceholder = ({
  dataListItemHeight,
  dataListItemWidth,
  backgroundColor,
}) => {
  const placeholderStyle = PlaceholderStyle(
    dataListItemHeight,
    dataListItemWidth,
    backgroundColor
  );

  return <View style={placeholderStyle}></View>;
};

const MemoizedEmptyPlaceholder = memo(EmptyPlaceholder);

export { MemoizedEmptyPlaceholder };
