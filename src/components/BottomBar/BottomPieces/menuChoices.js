import { View } from "react-native";
import { Menu, Divider } from "react-native-paper";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// nécessaire
import React from "react";

/**
 *
 * @param {*} bottomBarOptionMenuList
 *
 * @param {*} bottomBarFont
 *
 * @returns la liste de choix individuels de menu, ou rien
 */
export const menuChoices = (bottomBarOptionMenuList, bottomBarFont) => {
  if (bottomBarOptionMenuList != null && bottomBarOptionMenuList.length > 0) {
    return bottomBarOptionMenuList.map((option, i) => {
      return (
        <View key={i}>
          <Menu.Item
            onPress={() => {
              RunIfPossible({
                func: option.onOptionClicked,
                args: null,
              });
            }}
            title={option.optionName}
            titleStyle={{ fontFamily: bottomBarFont }}
          />
          <Divider />
        </View>
      );
    });
  } else {
    return null;
  }
};
