import i18next from 'i18next';
import logo from "assets/images/icon.png";
import { GetUserInputLayout } from "./pieces/getUserInputLayout";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";
import { Spinner } from "src/components/Spinner/Spinner";
import React from "react";

/**
 * les styles du torse
 * de la liste.
 */
const getDataListStyle = ({ GUIState, setGUIState, props }) => {
  return {
    clickSound: props.clickSound,
    backgroundColor: props.bodyBackgroundColor ?? "yellow",
    contentColor: props.bodyContentColor ?? "green",
    emptyDBMsgData: {
      messageText: i18next.t("add_questions_program"),
      messageTextColor:
        props.dataListTextColor ?? Constants.defaultContentColor,
      messageTextFont: props.bodyFont ?? Constants.defaultFontFamily,
      messageTextSize: 20,
      backgroundColor:
        props.dataListBackgroundColor ?? Constants.defaultBackgroundColor,
      iconPath: logo,
      iconWidth: 100,
      iconHeight: 100,
      buttonBackgroundColor: "purple",
      buttonLogoName: "plus",
      buttonLogoSize: 30,
      buttonLogoColor: "white",
      buttonText: i18next.t('xikpQVaX'),
      buttonTextColor: "white",
      buttonTextFont: Constants.defaultFontFamily,
      clickSound: props.clickSound,
      onButtonClicked: () => {

      },
    },

    renderDataListItem: ({ item, index }) => {
      // le layout dune question individuelle de la liste
      // d' UI déroulant horizontalement via scroll.
      //
      // Cette question est soit du texte,
      // un nombre entier/décimal,
      // ou une liste de choix.
      return GetUserInputLayout({
        question: item,
        props: props,
        GUIState, setGUIState
      });
    },
    renderNPCDataListItem: ({ item, index }) => {
      // le layout dune question individuelle de la liste
      // d' UI déroulant horizontalement via scroll.
      //
      // Cette question est soit du texte,
      // un nombre entier/décimal,
      // ou une liste de choix.
      return (
        <Spinner
          color={props.bodyContentColor}
          backgroundColor={props.bodyBackgroundColor}
        />
      );
    },

    // on affiche uniquement litem à lindex en cours de visionnage ?
    renderOnlyItemOnScreen: true,

    // si renderOnlyItemOnScreen = true
    // howManyNPCSOnEachSide représente combien de PNJ entourent la chose affichée a lécran ?
    // combien à gauche et a droite.
    // (par ex: si howManyNPCSOnEachSide = 1, il y a un component PNJ a gauche et un a droite.
    // le reste des éléments de la FlatList est = à null.
    //
    // ..... null => PNJ => Chose a lécran => PNJ => null => .....
    //
    // Ce méchanisme permet de ne pas trop surcharger notre UI
    // quand on affiche une liste de components 'lourds'
    // (comme une vidéo, etc...).
    // Par défaut, FlatList affiche tout en même temps, ce qui peut poser problème.
    howManyNPCSOnEachSide: 1,

    onListEndPushed: () => {
      /*;*/
    },

    // vertical, horizontal, vertical_one_by_one, horizontal_one_by_one
    dataListScrollDirection: props.scrollDirection,
  };
};

export { getDataListStyle };
