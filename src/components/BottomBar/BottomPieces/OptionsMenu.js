import { BottomBar as AllahBottomBar, Menu } from "react-native-paper";
import { openMenuIfNeeded } from "./openMenuIfNeeded";
import { menuChoices } from "./menuChoices";

// nécessaire
import React from "react";

export const OptionsMenu = (props) => {
  return (
    <Menu
      visible={props.visible}
      onDismiss={props.closeMenu}
      anchor={
        <AllahBottomBar.Action
          icon="dots-vertical"
          onPress={() => {
            openMenuIfNeeded(props.bottomBarStyle, props.openMenu);
          }}
          color={props.bottomBarStyle.bottomBarContentColor}
        />
      }
    >
      {menuChoices(
        props.bottomBarStyle.bottomBarOptionMenuList,
        props.bottomBarStyle.bottomBarFont
      )}
    </Menu>
  );
};
