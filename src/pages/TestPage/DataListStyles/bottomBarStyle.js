/* PLOP_INJECT_IMPORT */

// identifiant unique

// permet de générer des noms aléatoires

// permet accès CRUD a DB Sqlite , + Redux associé

// multilingue

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// constantes globales
import { useRoute } from "@react-navigation/native";
import { Constants } from "src/constants/Constants.js";

// la liste dicones du bas
import { BottomBarIconsList } from "./BottomBarStylePieces/BottomBarIconsList";

/* PLOP_INJECT_CODE */

/* les styles et callbacks à appliquer à la bottom bar */
export const getBottomBarStyle = () => {
  const route = useRoute();
  return {
    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // la barre en bas de lécran est elle distincte du body (false)
    // ou mélangé lun a lautre (true)
    bottomBarLayoutOverlaid: false,

    // affiche la bottom bar ou pas ?
    showBottomBar: true,

    // la hauteur de la bottom bar
    bottomBarHeight: Constants.defaultBarHeight,

    // la couleur darrrière plan de la bottom bar
    bottomBarBackgroundColor: Constants.defaultBackgroundColor,

    // si > 0, permet effet délévation de la bottom bar
    bottomBarElevation: 0,

    // la couleur des icones de la bottom bar
    bottomBarIconsColor: Constants.defaultContentColor,

    // le style de texte
    bottomBarFont: Constants.defaultFontFamily,

    // la ou les icones a afficher
    bottomBarIconsList: BottomBarIconsList(),
  };
};
