import { View } from "react-native";
import { PlaceholderStyle } from "./PlaceholderStyle";
import { React, memo } from "react";

/**
 *
 * @param {*} dataListItemHeight, la hauteur de l'UI de l'item.
 *
 * @param {*} dataListItemWidth, la largeur de l'UI de l'item.
 *
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
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
