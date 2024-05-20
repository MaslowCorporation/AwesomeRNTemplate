/* PLOP_INJECT_IMPORT */
import { IconList } from "src/components/IconList/IconList";

// nécessaire
import React from "react";

import { View, TouchableOpacity } from "react-native";
import { CustomButton } from "src/components/CustomButton/CustomButton";
import { Icon } from "@rneui/themed";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";

// permet daccéder a des globales

/**
 *
 * @param {*} un objet contenant, entre autres: {
    // la barre en bas de lécran est elle distincte du body (false)
    // ou mélangé lun a lautre (true)
    bottomBarLayoutOverlaid: false,

    // affiche la bottom bar ou pas ?
    showBottomBar: true,

    // la hauteur de la bottom bar
    bottomBarHeight: Constants.defaultBarHeight,

    // la couleur darrrière plan de la bottom bar
    bottomBarBackgroundColor: "pink",

    // si > 0, permet effet délévation de la bottom bar
    bottomBarElevation: 0,

    // la couleur des icones de la bottom bar
    bottomBarIconsColor: Constants.defaultContentColor,

    // le style de texte
    bottomBarFont: Constants.defaultFontFamily,

    bottomBarIconsList: [
      {iconName: "", onIconClicked: () => {}},
      {iconText: "", onIconClicked: () => {}},
      {iconName: "", onIconClicked: () => {}}
    ],
  }

  appbarOptionMenuList: [
    {optionName: "", onOptionClicked: () => {}},
    {...}
  ],
} 
 
 *
 *
 * @returns une bottomBar (optionnel) avec bouton
 * Précédent, un titre, une icone importante, et un menu doptions.
 */
export const BottomBarLayout = (props) => {
  //

  return (
    /* la barre entière */
    <View
      style={[
        {
          backgroundColor: props.bottomBarStyle.bottomBarBackgroundColor,
          elevation: props.bottomBarStyle.bottomBarElevation,
          height: props.bottomBarStyle.bottomBarHeight,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        props.bottomBarStyle.bottomBarLayoutOverlaid === true
          ? {
            // utile pour style pizza
            // enlève pour style hamburger
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }
          : {},
      ]}
    >
      {bottomBarIcons(props.bottomBarStyle)}
    </View>
  );
};

/**
 *
 * @param {*} bottomBarIconsList
 *
 *
 * @returns la liste dicones
 */

export const bottomBarIcons = (bottomBarStyle) => {
  if (
    bottomBarStyle.bottomBarIconsList != null &&
    bottomBarStyle.bottomBarIconsList.length > 0
  ) {
    return bottomBarStyle.bottomBarIconsList.map((iconData, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

            height: bottomBarStyle.bottomBarHeight,
          }}
          onPress={() => {
            SoundPlayer({ sound: bottomBarStyle.clickSound });

            RunIfPossible({ func: iconData.onIconClicked });
          }}
        >
          <ProperIconGivenNeeds
            bottomBarStyle={bottomBarStyle}
            iconData={iconData}
            iconsColor={bottomBarStyle.bottomBarIconsColor}
            bottomBarFont={bottomBarStyle.bottomBarFont}
          ></ProperIconGivenNeeds>
        </TouchableOpacity>
      );
    });
  } else {
    return null;
  }
};

function ProperIconGivenNeeds(props) {
  if (
    props.iconData.iconName != null &&
    props.iconData.iconChoicesList == null
  ) {
    return (
      <Icon
        type={"material-community"}
        name={props.iconData.iconName}
        color={props.iconsColor}
        size={35}
        containerStyle={[{
          padding: 10,
          backgroundColor: props.bottomBarStyle.bottomBarIconsBackgroundColor,
          borderColor: props.bottomBarStyle.bottomBarIconsBorderColor ?? "transparent",
          borderWidth: 2, // Adjust the width to your preference
          borderRadius: 40, // Adjust the radius to make it rounded
        }]}
      />
    );
  } else if (
    props.iconData.iconName != null &&
    props.iconData.iconChoicesList != null
  ) {
    return (
      <IconList
        backgroundColor={props.bottomBarStyle.bottomBarIconsBackgroundColor}
        borderColor={props.bottomBarStyle.bottomBarIconsBorderColor ?? "transparent"}
        name={props.iconData.iconName}
        color={props.iconsColor}
        size={35}
        iconChoicesList={props.iconData.iconChoicesList}
        font={props.bottomBarFont}
      />
    );
  } else if (props.iconData.iconText != null) {
    return (
      <CustomButton
        buttonText={props.iconData.iconText}
        buttonContainerStyle={[
          //styles.buttonContainerStyle,
          {
            backgroundColor: props.bottomBarStyle.bottomBarIconsBackgroundColor,
            borderColor: props.bottomBarStyle.bottomBarIconsBorderColor ?? "transparent",
            borderWidth: 2, // Adjust the width to your preference
            borderRadius: 20, // Adjust the radius to make it rounded
          },
        ]}
        buttonTextStyle={[
          {
            color: props.iconData.iconTextColor,
            fontFamily: props.iconData.iconTextFont,
            fontSize: props.iconData.iconTextSize,
          },
        ]}
      ></CustomButton>
    );
  } else if (props.iconData.customIcon != null) {
    return <View>{props.iconData.customIcon()}</View>;
  } else {
    return null; //<View></View>;
  }
}
