import { View } from "react-native";
import { Constants } from "src/constants/Constants";
import { React, memo } from "react";

/**
 *
 * @param {*} item, litem à transformer en UI
 *
 * @param {*} index, lindex de  litem à transformer en UI
 *
 * @param {*} dataListStyle, styles/callbacks, a appliquer a litem.
 *
 * @param {*} dataListItemHeight, la hauteur de lUI de litem.
 *
 * @param {*} dataListItemWidth, la largeur de lUI de litem.
 *
 * @returns le chosen one, lélu des dieux, chaussée aux moiiiiiiiiines.
 */
const ChosenOne = ({
  dataListItemHeight,
  dataListItemWidth,
  dataListStyle,
  item,
  index,
}) => {
  /*
  Styles de container n°1, de litem individuel
  */

  // Taille originale de litem, centré
  // eslint-disable-next-line no-unused-vars
  const originalHeightCentered = {
    height: dataListItemHeight,
    width: dataListItemWidth,
    backgroundColor: Constants.defaultBackgroundColor,
    alignSelf: "center",
  };

  // Taille originale de litem, prend toute la hauteur, centré
  // eslint-disable-next-line no-unused-vars
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
