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
    messageText: "Ajoute des choix poto, dans ton programme",
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
    buttonText: "This bouton ne sert à rien",
    buttonTextColor: "white",
    buttonTextFont: Constants.defaultFontFamily,
    onButtonClicked: () => {},
  };
}
