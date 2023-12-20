/*import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export function PhotoViewer({ imgURI, backgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imgURI }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center vertically
    borderWidth: 2,
    borderColor: 'black',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally and vertically
  },
  image: {
    //width: '75%',
    width: '100%',
    height: '100%',
    aspectRatio: 1080 / 1920,
  },
});
*/

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const PhotoViewer = ({ imgURI, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image
        source={{ uri: imgURI }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    flex: 1, // This allows the image to expand to fill its parent container
  },
});


