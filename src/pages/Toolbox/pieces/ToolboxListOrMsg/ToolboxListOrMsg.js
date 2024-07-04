/*  PLOP_INJECT_IMPORT */
import { React } from "react";

// styles/callbacks de appbar/body/bottom bar
import { getBottomBarStyle } from "../../DataListStyles/bottomBarStyle";
import { getAppbarStyle } from "../../DataListStyles/appbarStyle";
import { getDataListStyle } from "../../DataListStyles/dataListStyle";

// permet dafficher une liste de données
import { DataList } from "src/components/DataList/DataList";

// globales constantes
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

import { SqliteReduxToolbox } from "src/reduxState/Toolbox/ToolboxGetterSetter";

/**
 *
 * @returns la liste ditems crées par luser, ou un message.
 */
export const ToolboxListOrMsg = () => {
  /* PLOP_INJECT_CODE */

  /** les styles/callbacks de lappbar (si besoin) */
  const appbarStyle = getAppbarStyle();

  /** les styles/callbacks du dataList (si besoin) */
  const dataListStyle = getDataListStyle();

  /** les styles/callbacks du bottomBar (si besoin) */
  const bottomBarStyle = getBottomBarStyle();

  const ToolboxState =
    SqliteReduxToolboxState.GetFreshestToolboxStateFirstRow();

  const ToolboxList = SqliteReduxToolbox.GetFreshestToolbox();

  return (
    <Camouflage
      chosenOne={ToolboxState.chosenOne}
      name={"ToolboxList"}
      refreshed={true}
    >
      {/* le component qui permet dafficher tes items */}
      <DataList
        /* ici c est les Toolbox sous forme de array [] */
        dataItems={ToolboxList}
        /* la couleur d arrière plan de la liste de données à l ecran */
        backgroundColor={Constants.defaultBackgroundColor}
        /* les styles/callbacks a appliquer à l appbar/body/bottom bar */
        appbarStyle={appbarStyle}
        dataListStyle={dataListStyle}
        bottomBarStyle={bottomBarStyle}
      ></DataList>
    </Camouflage>
  );
};
