/* PLOP_INJECT_IMPORT */
import { React, useState } from "react";
import { View } from "react-native";
import { styles } from "./GetUserInput.style.js";
import { getBottomBarStyle } from "./DataListStyles/bottomBarStyle";
import { getAppbarStyle } from "./DataListStyles/appbarStyle";
import { getDataListStyle } from "./DataListStyles/dataListStyle";
import { DataList } from "src/components/DataList/DataList";
import { Constants } from "src/constants/Constants.js";
import { Spinner } from "../Spinner/Spinner.js";
import { onComponentLifeAndDeath } from "./onComponentLifeAndDeath";
import { UpdateCurrentPersistentIndex } from "./DataListStyles/pieces/UpdateCurrentPersistentIndex.js";

/**
 * @returns l'écran dinterrogatoire
 */
const GetUserInput = (props) => {

  /**
   * faut il reset le state de GUI, ou pas ?
   */
  const [GUIState, setGUIState] = useState({
    questions: props.questions,
    answers: null,
    currentIndex: 0,
    showGUI: false,
  });

  /** les styles/callbacks de lappbar/dataList/bottomBar */
  const appbarStyle = getAppbarStyle({
    GUIState,
    setGUIState,
    props,
  });

  /** Les styles/callbacks de la liste d' UI  */
  const dataListStyle = getDataListStyle({
    GUIState,
    setGUIState,
    props: props,
  });

  /**
   * les styles/callbacks de la barre dicones en bas de lécran
   * (annuler et valider.)
   */
  const bottomBarStyle = getBottomBarStyle({
    GUIState,
    setGUIState,
    props: props,
  });


  /** les données importantes, déterminant si on affiche, ou pas, l'UI */
  const importantData = {
    currentIndex: GUIState.currentIndex,
  };

  const setCurrentIndex = (newIndex) => {
    setGUIState({ ...GUIState, currentIndex: newIndex })

    UpdateCurrentPersistentIndex(props.persistenceID, newIndex)
  }

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath({
    GUIState,
    setGUIState,
    persistenceID: props.persistenceID,
    hardReset: props.hardReset
  });

  /* si la page nest pas prête à etre affiché, affiche spinner */
  if (GUIState.showGUI == false) {
    return (
      <Spinner
        color={props.bodyContentColor}
        backgroundColor={props.bodyBackgroundColor}
      />
    );
  }

  return (
    /** le conteneur contenant toute la page */
    <View style={styles.dataListContainer}>
      {/* la liste de question horizontalement scrollable */}
      <DataList
        /* la liste d' UI */
        dataItems={GUIState.questions}
        /* la couleur darrière plan du questionnaire */
        backgroundColor={Constants.defaultBackgroundColor}
        /* styles/callbacks de lappbar */
        appbarStyle={appbarStyle}
        /* styles/callbacks de la liste de données */
        dataListStyle={dataListStyle}
        /* styles/callbacks de la bottom bar*/
        bottomBarStyle={bottomBarStyle}
        /* permet de grab current item index, après scroll */
        setCurrentIndex={setCurrentIndex}
        /**
         * les données importantes, qui déterminent
         * si oui ou non, on refresh le(s) item(s)
         */
        importantData={importantData}
      ></DataList>
    </View>
  );
};

export { GetUserInput };
