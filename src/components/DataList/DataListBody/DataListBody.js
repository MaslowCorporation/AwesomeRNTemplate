/* PLOP_INJECT_IMPORT */
import { React } from "react";
import { View } from "react-native";
import { DataListBodyGivenDataInDb } from "./DataListBodyGivenDataInDb/DataListBodyGivenDataInDb.js";
import { styles } from "./DataListBodyGivenDataInDb/DataListBodyGivenDataInDb.style.js";

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
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
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
      {/* ce qu'on montre à l'écran, selon ce qu'il y a dans dataItems */}
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
