import { React } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { KeyExtractor } from "src/services/KeyExtractor/KeyExtractor";
import { styles } from "../../DataListBody.style";
import { MemoizedDataListItem } from "./memoDataListItem";

/**
 *
 * @param {*} dataItems,
 * @param {*} renderDataListItem,
 * @param {*} dataListStyle
 * @param {*} importantData
 *
 * @returns la liste ditems (via FlatList)
 * selon le type de scroll quon veut.
 *
 */
export const VerticalFlatList = ({
  dataItems,
  renderDataListItem,
  dataListStyle,
  importantData,
}) => {
  const userStyle = StyleSheet.create({
    styles: {
      borderColor: dataListStyle.contentColor,
    },
  });

  const renderItem = ({ item, index }) => {
    return (
      <MemoizedDataListItem
        item={item}
        index={index}
        renderDataListItem={renderDataListItem}
        importantData={importantData}
      />
    );
  };

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
        renderItem={renderItem}
        keyExtractor={KeyExtractor}
      />
    </SafeAreaView>
  );
};
