import { Appbar as RNPaperAppbar } from "react-native-paper";
import { OptionsMenuOrNot } from "./OptionsMenu";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";
import { ClickableIcon } from "./ClickableIcon";
import { ClickableTextIcon } from "./ClickableTextIcon";
import { ShowImportantIconOrNot } from "./ShowImportantIconOrNot";

// nécessaire
import React from "react";

export const ReactNativePaperAppbar = (props) => {
  return (
    /* la barre entière */
    <RNPaperAppbar
      style={[
        {
          height: props.appbarStyle.appbarHeight,
          backgroundColor: props.appbarStyle.appbarBackgroundColor,
          elevation: props.appbarStyle.appbarElevation,
        },
        props.appbarStyle.appbarLayoutOverlaid === true
          ? {
            // utile pour style pizza
            // enlève pour style hamburger
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }
          : {},
      ]}
    >
      {/* le bouton retour arrière */}
      <ClickableIcon
        name={"arrow-left"}
        size={props.appbarStyle.appbarIconSize}
        width={props.appbarStyle.appbarIconWidth}
        height={props.appbarStyle.appbarIconHeight}
        color={props.appbarStyle.appbarContentColor}
        backgroundColor={props.appbarStyle.appbarContentBackgroundColor}
        borderColor={props.appbarStyle.appbarContentBorderColor}
        onPress={() => {
          SoundPlayer({ sound: props.appbarStyle.clickSound });

          RunIfPossible({ func: props.appbarStyle.onBackPressed });
        }}
      />

      {/* le titre de lappbar */}
      <ClickableTextIcon
        backgroundColor={props.appbarStyle.appbarContentBackgroundColor}
        borderColor={props.appbarStyle.appbarContentBorderColor}
        height={props.appbarStyle.appbarIconHeight}
        text={props.appbarStyle.appbarTitle}
        textSize={props.appbarStyle.appbarTextSize}
        color={props.appbarStyle.appbarContentColor}
        fontFamily={props.appbarStyle.appbarFont}
        onPress={() => {
          SoundPlayer({ sound: props.appbarStyle.clickSound });

          RunIfPossible({ func: props.appbarStyle.onAppbarTitleClicked });
        }}
      ></ClickableTextIcon>

      {/* licone importante, ou pas */}
      <ShowImportantIconOrNot
        appbarStyle={props.appbarStyle}
      ></ShowImportantIconOrNot>

      {/* le menu doptions, ou pas */}
      <OptionsMenuOrNot appbarStyle={props.appbarStyle}></OptionsMenuOrNot>
    </RNPaperAppbar>
  );
};
