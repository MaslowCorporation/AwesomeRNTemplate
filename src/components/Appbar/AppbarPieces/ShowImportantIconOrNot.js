import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";
import { ClickableIcon } from "./ClickableIcon";

// nécessaire
import React from "react";

/**
 *
 * @param {*} un objet contenant: {
  showAppbar: true,
  appbarTitle: "",
  appbarFont: "",
  appbarIcon: "", // des icones venant de https://materialdesignicons.com/
  appbarBackgroundColor: "",
  appbarElevation: 5,
  appbarContentColor: "",
  onAppbarTitleClicked: () => {},
  onAppbarIconClicked: () => {},
  appbarOptionMenuList: [
    {optionName: "", onOptionClicked: () => {}},
    {...}
  ],
}
 
 *
 *
 * @returns une appbar (optionnel) avec bouton
 * Précédent, un titre, une icone importante, et un menu doptions.
 */
export const ShowImportantIconOrNot = (props) => {
  if (props.appbarStyle.showAppbarIcon === true) {
    return (
      <ClickableIcon
        backgroundColor={props.appbarStyle.appbarContentBackgroundColor}
        borderColor={props.appbarStyle.appbarContentBorderColor}
        name={props.appbarStyle.appbarIcon}
        size={props.appbarStyle.appbarIconSize}
        width={props.appbarStyle.appbarIconWidth}
        height={props.appbarStyle.appbarIconHeight}
        color={props.appbarStyle.appbarContentColor}
        onPress={() => {
          SoundPlayer({ sound: props.appbarStyle.clickSound });

          RunIfPossible({ func: props.appbarStyle.onAppbarIconClicked });
        }}
      />
    );
  } else {
    return null;
  }
};
