import { Dimensions } from "react-native";
import Constants from "expo-constants";

/**
 *
 * @param {*} appbarStyle
 * @param {*} bottomBarStyle
 * @param {*} appScreenHeight
 * @param {*} horizontal
 *
 * @returns des dimensions dont on a besoin pour construire le FlatList 1 by 1
 */
export const computeDimensionsAndStuff = ({
  appbarStyle,
  bottomBarStyle,
  appScreenHeight,
  horizontal,
}) => {
  const appScreenWidth = Dimensions.get("window").width;

  /**
   * lappbar et bottom bar sont ils en mode sandwich ?
   */
  const bottomBarLayoutOverlaid = bottomBarStyle.bottomBarLayoutOverlaid;
  const appbarLayoutOverlaid = appbarStyle.appbarLayoutOverlaid;

  /**
   * lappbar et bottom bar existent ils ?
   */
  const bottomBarExists = bottomBarStyle.showBottomBar;
  const appbarExists = appbarStyle.showAppbar;

  /**
   * la taille de lappbar et bottom bar.
   *
   * Si lappbar/bottombar existent, et prennent de la place,
   * on déduit leur hauteur de la la hauteur totale de lécran,
   * pour donner la bonne taille au body pour un bon scroll one by one
   */
  const appbarHeight =
    appbarExists === true && appbarLayoutOverlaid === false
      ? appbarStyle.appbarHeight
      : 0;
  const bottomBarHeight =
    bottomBarExists === true && bottomBarLayoutOverlaid === false
      ? bottomBarStyle.bottomBarHeight
      : 0;

  /**
   * la hauteur de la barre  tout en haut de lécran (la ou il y a lheure).
   * Si il ny a pas dappbar, le contenu touche le bord haut de lécran.
   * Donc il faut pas enlever la hauteur de status bar de la hauteur de la liste, sinon bobo
   */
  const statusBarHeight = appbarExists === true ? Constants.statusBarHeight : 0;

  /**
   * la hauteur et largeur de la liste ditems
   */
  const dataListItemHeight =
    appScreenHeight -
    (appbarHeight || 0) -
    (bottomBarHeight || 0) -
    (statusBarHeight || 0);

  const dataListItemWidth = appScreenWidth;

  const properSnapToIntervalAndOffset =
    horizontal === true ? dataListItemWidth : dataListItemHeight;
  return {
    properSnapToIntervalAndOffset,
    dataListItemHeight,
    dataListItemWidth,
  };
};
