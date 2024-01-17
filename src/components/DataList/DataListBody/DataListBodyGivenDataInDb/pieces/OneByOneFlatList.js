import { React, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { OneByOneFlatListLayout } from "./OneByOneFlatListLayout";
import { computeDimensionsAndStuff } from "./computeDimensionsAndStuff";
import { OnViewableItemsChanged } from "./OnViewableItemsChanged";
import { resetDimensionsOnChange } from "./resetDimensionsOnChange";

/**
 *
 * @param {*} appbarStyle, les styles et callbacks
 * à appliquer à la barre du haut de l'écran.
 *
 * @param {*} bottomBarStyle, les styles et callbacks
 * à appliquer à la barre du bas d'écran.
 *
 * @param {*} dataListStyle, les styles et callbacks
 * à appliquer au body de l'écran.
 *
 * @param {*} dataItems, une liste d'items à afficher,
 * via notamment dataListStyle.renderDataListItem.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment l'index de l'item en cours de visionnage.
 *
 * @param {*} setCurrentIndex, modifie l'index de l'item en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 * ==
 * "horizontal_one_by_one" ou "vertical_one_by_one"
 *
 * @param {*} horizontal, la liste de données est elle horizontale, ou pas ?
 *
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
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
   * au bon endroit quand on change d'orientation d'écran.
   */
  //const [ref, setRef] = useState(null);

  /**
   * les dimensions de l'écran et de la page d'application.
   */
  const [dimensions, setDimensions] = useState({ window });

  // DIRTY HACK :-)
  resetDimensionsOnChange({ dimensions, window, setDimensions });

  /**
   * Permet de déterminer à quel pourcentage de scroll,
   * on passe d'un item à un autre, dans la FlatList.
   */
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 95,

    waitForInteraction: true,
    //viewAreaCoveragePercentThreshold: 95,
  });

  /**
   * callback quand l'item visible à l'écran à changé
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

  return (
    /* le conteneur qui contient la liste */
    <OneByOneFlatListLayout
      /**
       * Détermine le %tage de scroll
       * déterminant le passage d'un item à un autre
       */
      currentViewabilityConfig={viewabilityConfig.current}
      /* Callback qd item visible à changé */
      onViewableItemsChanged={onViewableItemsChanged.current}
      /* La hauteur de(s) items du FlatList, a l'écran */
      dataListItemHeight={dataListItemHeight}
      /* La largeur de(s) items du FlatList, a l'écran */
      dataListItemWidth={dataListItemWidth}
      /* La longueur de scroll nécessaire au passage d'un item à l'autre. */
      properSnapToIntervalAndOffset={properSnapToIntervalAndOffset}
      /* la liste de données à afficher */
      dataItems={dataItems}
      /* la liste est horizontale, ou pas ? */
      horizontal={horizontal}
      /* le style à appliquer à la liste de données */
      dataListStyle={dataListStyle}
      /* l'index de l'item en cours de visionage */
      importantData={importantData}
      /* la couleur d'arrière plan */
      backgroundColor={backgroundColor}
    ></OneByOneFlatListLayout>
  );
};
