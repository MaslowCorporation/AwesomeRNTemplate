import { React } from "react";
import { HorizontalFlatList } from "./HorizontalFlatList";
import { VerticalFlatList } from "./VerticalFlatList";
import { OneByOneFlatList } from "./OneByOneFlatList";

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
 * @param {*} backgroundColor, la couleur darrière plan
 * de lécran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns le body de la liste de données scrollable.
 */
export const DataListBodyGivenScrollType = ({
  appbarStyle,
  bottomBarStyle,
  dataListStyle,
  dataItems,
  importantData,
  setCurrentIndex,
  backgroundColor,
}) => {
  /**
   * Le body de la liste de données scrollable,
   * selon le scroll souhaité.
   *
   * Premier cas: dataListStyle.dataListScrollDirection == "vertical"
   *
   * Dans ce cas, on affiche une liste de données conventionnelle,
   *
   * scrollant de haut en bas.
   */
  if (dataListStyle.dataListScrollDirection == "vertical") {
    return (
      <VerticalFlatList
        dataItems={dataItems}
        renderDataListItem={dataListStyle.renderDataListItem}
        dataListStyle={dataListStyle}
        importantData={importantData}
      ></VerticalFlatList>
    );
  } else if (dataListStyle.dataListScrollDirection == "horizontal") {
    /**
     * Si dataListStyle.dataListScrollDirection == "horizontal",
     *
     * on affiche une liste de données conventionnelle,
     *
     * scrollant de gauche à droite.
     */
    return (
      <HorizontalFlatList
        dataItems={dataItems}
        renderDataListItem={dataListStyle.renderDataListItem}
        dataListStyle={dataListStyle}
        importantData={importantData}
      ></HorizontalFlatList>
    );
  } else if (dataListStyle.dataListScrollDirection == "vertical_one_by_one") {
    /**
     * Si dataListStyle.dataListScrollDirection == "vertical_one_by_one",
     *
     * on affiche une liste de données style TikTok/Google Shorts,
     *
     * scrollant de haut en bas.
     */
    return (
      <OneByOneFlatList
        appbarStyle={appbarStyle}
        bottomBarStyle={bottomBarStyle}
        dataListStyle={dataListStyle}
        dataItems={dataItems}
        importantData={importantData}
        setCurrentIndex={setCurrentIndex}
        horizontal={false}
        backgroundColor={backgroundColor}
      ></OneByOneFlatList>
    );
  } else if (dataListStyle.dataListScrollDirection == "horizontal_one_by_one") {
    /**
     * Si dataListStyle.dataListScrollDirection == "horizontal_one_by_one",
     *
     * on affiche une liste de données style TikTok/Google Shorts,
     *
     * scrollant de gauche à droite.
     */
    return (
      <OneByOneFlatList
        appbarStyle={appbarStyle}
        bottomBarStyle={bottomBarStyle}
        dataListStyle={dataListStyle}
        dataItems={dataItems}
        importantData={importantData}
        setCurrentIndex={setCurrentIndex}
        horizontal={true}
        backgroundColor={backgroundColor}
      ></OneByOneFlatList>
    );
  } else {
    /**
     * Si extraterrestre, on return rien.
     */
    return null;
  }
};
