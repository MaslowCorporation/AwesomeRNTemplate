/* PLOP_INJECT_IMPORT */
import { React, useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Menu, Divider } from "react-native-paper";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { Icon } from "@rneui/base";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * un objet props {} contenant:
 *
 * @param {*}
 *
 * @returns le ...
 */
const IconList = (props) => {
  /* PLOP_INJECT_CODE */

  /**
   * permet douvrir/fermer le menu
   */
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  return (
    <Menu
      style={{ marginBottom: 150 }}
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity
          style={{
            height: props.height ?? 50,
            width: props.width ?? 50,
            justifyContent: "center",
          }}
          onPress={() => {
            SoundPlayer({ sound: props.clickSound });

            openMenuIfNeeded(props.iconChoicesList, openMenu);
          }}
        >

          <Icon
            type={"material-community"}
            name={props.name}
            color={props.color}
            size={props.size}
            containerStyle={[{
              backgroundColor: props.backgroundColor,
              borderWidth: 2, // Adjust the width to your preference
              borderColor: props.borderColor ?? "transparent", // Adjust the color to your preference
              borderRadius: 50, // Adjust the radius to make it rounded
            }]}
          />
        </TouchableOpacity>
      }
    >
      {menuChoices({
        iconChoicesList: props.iconChoicesList,
        font: props.font,
        clickSound: props.clickSound,
        closeMenu,
      })}
    </Menu>
  );
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.

    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);
};

/**
 *
 * @param {*} appbarStyle
 * @param {*} openMenu
 *
 * on ouvre le menu seulement si besoin
 */
export const openMenuIfNeeded = (iconChoicesList, openMenu) => {
  if (iconChoicesList != null && iconChoicesList.length > 0) {
    openMenu();
  }
};

/**
 *
 * @param {*} iconChoicesList
 *
 * @param {*} font
 *
 * @returns la liste de choix individuels de menu, ou rien
 */
export const menuChoices = ({
  iconChoicesList,
  font,
  clickSound,
  closeMenu,
}) => {
  if (iconChoicesList != null && iconChoicesList.length > 0) {
    return iconChoicesList.map((option, i) => {
      return (
        <View key={i}>
          <Menu.Item
            onPress={() => {
              SoundPlayer({ sound: clickSound });

              closeMenu();

              RunIfPossible({ func: option.onOptionClicked });
            }}
            title={option.optionName}
            titleStyle={{ fontFamily: font }}
          />
          <Divider />
        </View>
      );
    });
  } else {
    return null;
  }
};

export { IconList };
