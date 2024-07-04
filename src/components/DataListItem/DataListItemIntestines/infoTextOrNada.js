import React from "react";
import { styles } from "../DataListItem.style.js";
import { Text } from "react-native";

/**
 *
 * @param {*} itemStyle, les infos de style de la vignette
 *
 * @returns le texte d' info, si existant
 */

export const infoTextOrNada = (itemStyle, itemInfo) => {
  if (itemInfo?.infoTxt != null) {
    return (
      <Text
        style={[
          styles.infoDescription,
          { color: itemStyle.contentColor, fontFamily: itemStyle.contentFont },
        ]}
      >
        {itemInfo.infoTxt}
      </Text>
    );
  } else {
    return null;
  }
};
