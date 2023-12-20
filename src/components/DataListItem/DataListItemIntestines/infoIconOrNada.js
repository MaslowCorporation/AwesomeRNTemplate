import React from "react";
import { styles } from "../DataListItem.style.js";
import { Image } from "react-native";

/**
 *
 * @param {*} itemStyle, les infos de style de la vignette
 *
 * @returns l'icone d' info, si existant
 */

export const infoIconOrNada = (itemInfo) => {
  if (itemInfo?.infoIconPath != null || itemInfo?.infoIconUrl != null) {
    return (
      itemInfo?.infoIconPath && (
        <Image
          style={styles.infoIcon}
          resizeMode="cover"
          source={{
            uri: itemInfo.infoIconPath || itemInfo.infoIconUrl,
          }}
        />
      )
    );
  } else {
    return null;
  }
};
