/* PLOP_INJECT_IMPORT */
import { React } from "react";
import { Spinner } from "src/components/Spinner/Spinner.js";
import { DataListBodyGivenScrollType } from "./pieces/DataListBodyGivenScrollType.js";
import { ShowMsgWithButton } from "./pieces/ShowMsgWithButton";

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
const DataListBodyGivenDataInDb = ({
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
   *
   * Premier cas: dataItems est inexistant (null)
   *
   * Dans ce cas, on affiche un spinner tournant.
   */
  if (dataItems === null) {
    return (
      <Spinner
        backgroundColor={dataListStyle.backgroundColor}
        color={dataListStyle.contentColor}
      />
    );
  } else if (dataItems.length === 0) {
    /**
     * Si il existe une liste de données,
     * mais quelle est vide,
     *
     * affiche un message invitant à créer une liste de données.
     */
    return <ShowMsgWithButton msgData={dataListStyle.emptyDBMsgData} />;
  } else if (dataItems.length > 0) {
    /**
     * Si il existe un liste de données contenant un ou plusieurs données,
     * affiche cette liste de données scrollable.
     *
     * Cette liste peut scroller dans diverses directions.
     */
    return (
      <DataListBodyGivenScrollType
        dataItems={dataItems}
        appbarStyle={appbarStyle}
        bottomBarStyle={bottomBarStyle}
        dataListStyle={dataListStyle}
        importantData={importantData}
        setCurrentIndex={setCurrentIndex}
        backgroundColor={backgroundColor}
      ></DataListBodyGivenScrollType>
    );
  } else {
    /**
     * Si on est dans une situation extraterrestre,
     * affiche rien.
     */
    return null;
  }
};

export { DataListBodyGivenDataInDb };
