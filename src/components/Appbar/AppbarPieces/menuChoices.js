import { View } from "react-native";
import { Menu, Divider } from "react-native-paper";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// nécessaire
import React from "react";

/**
 *
 * @param {*} appbarOptionMenuList
 *
 * @param {*} appbarFont
 *
 * @returns la liste de choix individuels de menu, ou rien
 */
export const menuChoices = (appbarOptionMenuList, appbarFont) => {
  if (appbarOptionMenuList != null && appbarOptionMenuList.length > 0) {
    return appbarOptionMenuList.map((option, i) => {
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
            titleStyle={{ fontFamily: appbarFont }}
          />
          <Divider />
        </View>
      );
    });
  } else {
    return null;
  }
};
