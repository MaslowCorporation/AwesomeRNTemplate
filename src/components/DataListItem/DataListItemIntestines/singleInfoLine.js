import React from "react";
import { styles } from "../DataListItem.style.js";
import { View } from "react-native";
import { infoIconOrNada } from "./infoIconOrNada";
import { infoTextOrNada } from "./infoTextOrNada";

/**
 *
 * @param {*} itemInfo, les infos de l'item stocké dans DB
 *
 * @returns une ligne de icone + info, en dessous du nom de l'item.
 */

export const singleInfoLine = (itemStyle, itemInfo, key) => {
  return (
    <View key={key} style={styles.infoIconAndDescription}>
      {/* l'icone de la description, ou rien */}
      {infoIconOrNada(itemInfo)}
      {/* le texte de description/info/etc...., ou rien */}
      {infoTextOrNada(itemStyle, itemInfo)}
    </View>
  );
};
