/* PLOP_INJECT_IMPORT */
import { onComponentLifeAndDeath } from "src/components/BottomBar/BottomPieces/onComponentLifeAndDeath";
import { BottomBarLayout } from "src/components/BottomBar/BottomPieces/BottomBarLayout";

// nécessaire
import React from "react";

/**
 * 
 * @param {*} un objet contenant {
  bottomBarStyle: {
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

    // des icones venant de https://materialdesignicons.com/
    bottomBarIconsList: [
      {iconName: "", onIconClicked: () => {}},
      {iconText: "", onIconClicked: () => {}},
      {iconName: "", iconChoicesList: [
        {optionName: "", onOptionClicked: () => {}},
      ]}
    ],
  }

} 

 * @returns la barre dicone qui va typiquement en bas de lécran 
 * (mais tu peux le mettre en haut aussi)
 * 
 */
const BottomBar = ({ bottomBarStyle }) => {
  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  /** Si il faut montrer la bottomBar, on le montre */
  if (bottomBarStyle.showBottomBar === true) {
    return (
      /* la barre entière */
      <BottomBarLayout bottomBarStyle={bottomBarStyle}></BottomBarLayout>
    );
  } else {
    /** sinon on montre rien */
    return null;
  }
};

export { BottomBar };
