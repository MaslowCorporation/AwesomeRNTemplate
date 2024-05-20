import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */

// permet daccéder a des globales
import { useNavigation, useRoute } from '@react-navigation/native';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';
import { Constants } from 'src/constants/Constants.js';

// la liste doptions de lappbar
import { AppbarOptionsMenuList } from './AppbarStylePieces/AppbarOptionsMenuList';

/**
 * les styles de la topbar
 */
export const getAppbarStyle = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();
  const navigation = useNavigation();

  return {
    // la barre en haut de lécran est elle distincte du body (false)
    // ou mélangé lun a lautre (true)
    appbarLayoutOverlaid: false,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // la taille des icones de lappbar
    appbarIconSize: 35,

    // la taille du texte de lappbar
    appbarTextSize: 20,

    // la hauteur de lappbar
    appbarHeight: Constants.defaultBarHeight,

    // la hauteur/largeur des icones
    appbarIconWidth: 60,

    // idéalement la même taille que lappbar
    appbarIconHeight: 75,

    // on affiche lappbar ou pas ?
    showAppbar: true,

    // montre licone menu (3 ptit point) ?
    showAppbarMenuIcon: false,

    // le titre (texte snackbarVisible) de lappbar
    appbarTitle: app_strings.t('Toolbox'),

    // le design du texte de lappbar et menu appbar
    appbarFont: Constants.defaultFontFamily,

    // montre licone a gauche de licone menu (3 ptit point) ?
    showAppbarIcon: false,

    // des icones venant de https://materialdesignicons.com/
    // licone en question si showAppbarIcon = true
    appbarIcon: 'plus-thick',

    // la couleur darrière plan de lappbar
    appbarBackgroundColor: Constants.defaultBackgroundColor,

    // si supérieur à 0, élève lappbar pour avoir un effet de relief entre body et appbar
    appbarElevation: 0,

    // la couleur de tout ce quil y a dans lappbar (titre, icones, etc...)
    appbarContentColor: Constants.defaultContentColor,

    // callback dactions a effectuer si on clique sur le texte de lappbar
    onAppbarTitleClicked: () => { },

    // callback dactions a effectuer si on clique sur licone de lappbar
    onAppbarIconClicked: () => {
      navigation.navigate('<SomeFancyScreen>');
    },

    // callback dactions a effectuer si on clique sur la flèche de retour arrière
    // de lappbar.
    onBackPressed: () => {
      navigation.goBack();
    },

    // la liste des choix du menu saffichant quand on clique sur les 3 petits points de lappbar
    appbarOptionMenuList: AppbarOptionsMenuList(),
  };
};
