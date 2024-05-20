import i18next from 'i18next';

import logo from "assets/images/icon.png";
import { Constants } from "src/constants/Constants.js";

/**
 *
 * @param {*} props de GetUserInput
 *
 * @returns le msg de vide
 */
export function emptyQCMMsg(props) {
  return {
    messageText: i18next.t('xac8Mi0'),
    messageTextColor: props.dataListTextColor ?? Constants.defaultContentColor,
    messageTextFont: props.bodyFont ?? Constants.defaultFontFamily,
    backgroundColor: props.dataListBackgroundColor ?? "red",
    iconPath: logo,
    iconWidth: 100,
    iconHeight: 100,
    buttonBackgroundColor: "purple",
    buttonLogoName: "add",
    buttonLogoSize: 30,
    buttonLogoColor: "white",
    buttonText: i18next.t('xf1IQg9I'),
    buttonTextColor: "white",
    buttonTextFont: Constants.defaultFontFamily,
    onButtonClicked: () => { },
  };
}
