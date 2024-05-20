import { React, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { OneByOneFlatListLayout } from "./OneByOneFlatListLayout";
import { computeDimensionsAndStuff } from "./computeDimensionsAndStuff";
import { OnViewableItemsChanged } from "./OnViewableItemsChanged";
import { resetDimensionsOnChange } from "./resetDimensionsOnChange";

/**
 *
 * @param {*} appbarStyle, les styles et callbacks
 * à appliquer à la barre du haut de lécran.
 *
 * @param {*} bottomBarStyle, les styles et callbacks
 * à appliquer à la barre du bas décran.
 *
 * @param {*} dataListStyle, les styles et callbacks
 * à appliquer au body de lécran.
 *
 * @param {*} dataItems, une liste ditems à afficher,
 * via notamment dataListStyle.renderDataListItem.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment lindex de litem en cours de visionnage.
 *
 * @param {*} setCurrentIndex, modifie lindex de litem en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 * ==
 * "horizontal_one_by_one" ou "vertical_one_by_one"
 *
 * @param {*} horizontal, la liste de données est elle horizontale, ou pas ?
 *
 * @param {*} backgroundColor, la couleur darrière plan
 * de lécran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns le body de la liste de données scrollable.
 */
export const OneByOneFlatList = ({
  appbarStyle,
  bottomBarStyle,
  dataListStyle,
  dataItems,
  importantData,
  setCurrentIndex,
  horizontal,
  backgroundColor,
}) => {
  // permet de repositionner la flatlist si besoin
  const window = useWindowDimensions();

  /**
   * La télécommande du FlatList.
   *
   * permet entre autres le scroll
   * au bon endroit quand on change dorientation décran.
   */
  //const [ref, setRef] = useState(null);

  /**
   * les dimensions de lécran et de la page dapplication.
   */
  const [dimensions, setDimensions] = useState({ window });

  //;

  // DIRTY HACK :-)
  resetDimensionsOnChange({ dimensions, window, setDimensions });

  /**
   * Permet de déterminer à quel pourcentage de scroll,
   * on passe dun item à un autre, dans la FlatList.
   */
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 95,

    waitForInteraction: true,
  });

  /**
   * callback quand litem visible à lécran à changé
   */
  const onViewableItemsChanged = OnViewableItemsChanged({
    setCurrentIndex,
  });

  /**
   * divers tailles et touillles
   */
  const {
    properSnapToIntervalAndOffset,
    dataListItemHeight,
    dataListItemWidth,
  } = computeDimensionsAndStuff({
    appbarStyle,
    bottomBarStyle,
    appScreenHeight: dimensions.window.height,
    horizontal,
  });

  //;

  return (
    /* le conteneur qui contient la liste */
    <OneByOneFlatListLayout
      /**
       * Détermine le %tage de scroll
       * déterminant le passage dun item à un autre
       */
      currentViewabilityConfig={viewabilityConfig.current}
      /* Callback qd item visible à changé */
      onViewableItemsChanged={onViewableItemsChanged.current}
      /* La hauteur de(s) items du FlatList, a lécran */
      dataListItemHeight={dataListItemHeight}
      /* La largeur de(s) items du FlatList, a lécran */
      dataListItemWidth={dataListItemWidth}
      /* La longueur de scroll nécessaire au passage dun item à lautre. */
      properSnapToIntervalAndOffset={properSnapToIntervalAndOffset}
      /* la liste de données à afficher */
      dataItems={dataItems}
      /* la liste est horizontale, ou pas ? */
      horizontal={horizontal}
      /* le style à appliquer à la liste de données */
      dataListStyle={dataListStyle}
      /* lindex de litem en cours de visionage */
      importantData={importantData}
      /* la couleur darrière plan */
      backgroundColor={backgroundColor}
    ></OneByOneFlatListLayout>
  );
};
