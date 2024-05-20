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
 * @returns le PNJ, qui doit être la pour faire joli, ou en anticipation.
 */
const NPC = ({
  dataListItemHeight,
  dataListItemWidth,
  dataListStyle,
  item,
  index,
}) => {
  // Taille originale de litem, prend toute la hauteur, centré
  // eslint-disable-next-line no-unused-vars
  const fullHeightCentered = {
    height: "100%",
    width: dataListItemWidth,
    backgroundColor: Constants.defaultBackgroundColor,
    alignSelf: "center",
  };

  return (
    <View
      style={fullHeightCentered}
    >
      {dataListStyle.renderNPCDataListItem({
        item: item,
        index: index,
      })}
    </View>
  );
};

const MemoizedNPC = memo(NPC);

export { MemoizedNPC };
