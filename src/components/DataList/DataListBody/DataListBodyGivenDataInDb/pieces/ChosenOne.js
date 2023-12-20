import { View } from "react-native";
import { Constants } from "src/constants/Constants";
import { React, memo } from "react";

/**
 *
 * @param {*} item, l'item à transformer en UI
 *
 * @param {*} index, l'index de  l'item à transformer en UI
 *
 * @param {*} dataListStyle, styles/callbacks, a appliquer a l'item.
 *
 * @param {*} dataListItemHeight, la hauteur de l'UI de l'item.
 *
 * @param {*} dataListItemWidth, la largeur de l'UI de l'item.
 *
 * @returns le chosen one, l'élu des dieux, chaussée aux moiiiiiiiiines.
 */
const ChosenOne = ({
  dataListItemHeight,
  dataListItemWidth,
  dataListStyle,
  item,
  index,
}) => {
  /*
  Styles de container n°1, de l'item individuel
  */

  // Taille originale de l'item, centré
  // eslint-disable-next-line no-unused-vars
  const originalHeightCentered = {
    height: dataListItemHeight,
    width: dataListItemWidth,
    backgroundColor: Constants.defaultBackgroundColor,
    alignSelf: "center",
  };

  const fullHeightCentered = {
    height: "100%",
    width: dataListItemWidth,
    backgroundColor: Constants.defaultBackgroundColor,
    alignSelf: "center",
  };

  return (
    <View style={fullHeightCentered}>
      {dataListStyle.renderDataListItem({
        item: item,
        index: index,
      })}
    </View>
  );
};

const MemoizedChosenOne = memo(ChosenOne);

export { MemoizedChosenOne };
