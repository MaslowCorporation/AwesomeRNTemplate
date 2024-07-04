import React from 'react';
import { styles } from '../DataListItem.style.js';
import { ActivityIndicator, View } from 'react-native';
import { Card } from '@rneui/themed';

/**
 *
 * @param {*} itemStyle, les infos de style de la vignette
 *
 * @returns le thumbnail ditem, si existant
 */
export const thumbnailPicIfUrlExists = itemStyle => {
  if (itemStyle?.thumbUrl != null || itemStyle?.thumbPath != null) {
    return (
      <View style={styles?.itemContainerThumbnail}>
        <Card.Image
          style={styles?.itemThumbnail}
          source={{
            uri: itemStyle?.thumbUrl || itemStyle?.thumbPath,
          }}
          PlaceholderContent={<ActivityIndicator />}
          transition={true}
        />
      </View>
    );
  } else {
    return null;
  }
};
