import { Constants } from "src/constants/Constants";
import { cancelButton } from "./pieces/cancelButton";
import { confirmButton } from "./pieces/confirmButton";

/**
 *
 * @param {*} props, contient styles et callbacks de GetUserInput
 *
 * @returns la bottom bar du GetUserInput,
 * avec bouton cancel (croix X) et valider (checkmark v)
 */
export const getBottomBarStyle = ({ props, GUIState, setGUIState }) => {
  return {
    clickSound: props.clickSound,
    bottomBarLayoutOverlaid: false,
    showBottomBar: true,
    bottomBarHeight: props.bottomBarHeight ?? Constants.defaultBarHeight,
    bottomBarBackgroundColor: props.bottomBarBackgroundColor,
    bottomBarElevation: 0,
    bottomBarIconsColor: props.bottomBarIconsColor,
    bottomBarIconsList: [
      // le bouton de annule QCM
      cancelButton({ props, GUIState, setGUIState }),

      // le bouton de QCM terminé
      confirmButton({ props, GUIState, setGUIState }),
    ],
  };
};
