/* PLOP_INJECT_IMPORT */
import { onComponentLifeAndDeath } from "./AppbarPieces/onComponentLifeAndDeath";
import { ReactNativePaperAppbar } from "./AppbarPieces/ReactNativePaperAppbar";

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
const Appbar = ({ appbarStyle }) => {
  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  /** Si il faut montrer lappbar, on le montre */
  if (appbarStyle?.showAppbar === true) {
    return (
      /* la barre entière */
      <ReactNativePaperAppbar
        appbarStyle={appbarStyle}
      ></ReactNativePaperAppbar>
    );
  } else {
    /** sinon on montre rien */
    return null;
  }
};

export { Appbar };
