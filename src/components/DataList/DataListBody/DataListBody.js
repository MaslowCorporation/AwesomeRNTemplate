/* PLOP_INJECT_IMPORT */
import { React } from "react";
import { View } from "react-native";
import { DataListBodyGivenDataInDb } from "./DataListBodyGivenDataInDb/DataListBodyGivenDataInDb.js";
import { styles } from "./DataListBodyGivenDataInDb/DataListBodyGivenDataInDb.style.js";

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
const DataListBody = ({
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
   * selon les données disponibles dans dataItems.
   *
   * dataItems = null, [], ou [{...}, {...}] etc...
   */

  return (
    /* un conteneur pacha flex */
    <View
      style={[
        styles.centeredContainer,
        { backgroundColor: dataListStyle.backgroundColor },
      ]}
    >
      {/* ce quon montre à lécran, selon ce quil y a dans dataItems */}
      <DataListBodyGivenDataInDb
        dataListStyle={dataListStyle}
        dataItems={dataItems}
        appbarStyle={appbarStyle}
        bottomBarStyle={bottomBarStyle}
        importantData={importantData}
        setCurrentIndex={setCurrentIndex}
        backgroundColor={backgroundColor}
      ></DataListBodyGivenDataInDb>
    </View>
  );
};

export { DataListBody };
