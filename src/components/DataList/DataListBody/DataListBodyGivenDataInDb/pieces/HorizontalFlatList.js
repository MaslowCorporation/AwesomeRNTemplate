import { React } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { KeyExtractor } from "src/services/KeyExtractor/KeyExtractor";
import { styles } from "../../DataListBody.style";
import { MemoizedDataListItem } from "./memoDataListItem";

/**
 *
 * @param {*} dataItems
 * @param {*} renderDataListItem
 * @param {*} dataListStyle
 *
 * @returns la liste de données horizontale.
 */
export const HorizontalFlatList = ({
  dataItems,
  renderDataListItem,
  dataListStyle,
}) => {
  const userStyle = StyleSheet.create({
    styles: {
      borderColor: dataListStyle.contentColor,
    },
  });

  return (
    <SafeAreaView style={[styles.verticalFlatListStyle, userStyle.styles]}>
      <FlatList
        data={dataItems}
        // fix: On set la quantité maximum
        // ditems à créer dans la FlatList
        // (pas trop, pas trop peu, goldilocks)
        maxToRenderPerBatch={5}
        // fix
        removeClippedSubviews={true}
        renderItem={({ item, index }) => {
          return (
            <MemoizedDataListItem
              item={item}
              index={index}
              renderDataListItem={renderDataListItem}
            />
          );
        }}
        keyExtractor={KeyExtractor}
        horizontal={true}
      />
    </SafeAreaView>
  );
};
