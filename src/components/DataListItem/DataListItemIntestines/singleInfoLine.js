import React from "react";
import { styles } from "../DataListItem.style.js";
import { View } from "react-native";
import { infoIconOrNada } from "./infoIconOrNada";
import { infoTextOrNada } from "./infoTextOrNada";

/**
 *
 * @param {*} itemInfo, les infos de litem stocké dans DB
 *
 * @returns une ligne de icone + info, en dessous du nom de litem.
 */

export const singleInfoLine = (itemStyle, itemInfo, key) => {
  return (
    <View key={key} style={styles.infoIconAndDescription}>
      {/* licone de la description, ou rien */}
      {infoIconOrNada(itemInfo)}
      {/* le texte de description/info/etc...., ou rien */}
      {infoTextOrNada(itemStyle, itemInfo)}
    </View>
  );
};
