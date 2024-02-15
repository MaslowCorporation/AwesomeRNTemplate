import React from 'react';
import { styles } from '../DataListItem.style.js';
import { Text } from 'react-native';

/**
 *
 * @param {*} itemStyle, les infos de style de la vignette
 *
 * @returns le nom de litem. si existant
 */
export const itemNameIfNameExists = itemStyle => {
  if (itemStyle?.itemName != null) {
    return (
      <Text
        style={[
          styles?.itemName,
          { color: itemStyle?.contentColor, fontFamily: itemStyle?.contentFont },
        ]}>
        {itemStyle.itemName}
      </Text>
    );
  } else {
    return null;
  }
};
