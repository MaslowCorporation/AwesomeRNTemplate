/* PLOP_INJECT_IMPORT */
import { React, useState } from "react";
import { View } from "react-native";
import { styles } from "./GetUserInput.style.js";
import { getBottomBarStyle } from "./DataListStyles/bottomBarStyle";
import { getAppbarStyle } from "./DataListStyles/appbarStyle";
import { getDataListStyle } from "./DataListStyles/dataListStyle";
import { DataList } from "src/components/DataList/DataList";
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter.js";
import { SetCurrentIndex } from "./DataListStyles/pieces/SetCurrentIndex.js";
import { Spinner } from "../Spinner/Spinner.js";
import { onComponentLifeAndDeath } from "./onComponentLifeAndDeath";
import { GetOrientation } from "src/services/GetOrientation/GetOrientation.js";

/**
 * @returns l'écran d'interrogatoire
 */
const GetUserInput = (props) => {
  // le state SqliteRedux du GUI
  const GUIState = SqliteReduxGUIState.GetFreshestGUIStateFirstRow();

  /**
   *
   * Le state stockant la liste de questions à demander
   * à l'utilisateur
   *
   * (soit null, ou une liste de données) (si besoin)
   *
   */
  const [questions, setQuestions] = useState(props.questions);

  /**
   * faut il reset le state de GUI, ou pas ?
   */
  const [GUIStateReady, setGUIStateReady] = useState(false);

  /** les styles/callbacks de l'appbar/dataList/bottomBar */
  const appbarStyle = getAppbarStyle({
    questions: questions,
    setQuestions: setQuestions,
    props: props,
  });

  /** Les styles/callbacks de la liste de questions  */
  const dataListStyle = getDataListStyle({
    questions: questions,
    setQuestions: setQuestions,
    props: props,
  });

  /**
   * les styles/callbacks de la barre d'icones en bas de l'écran
   * (annuler et valider.)
   */
  const bottomBarStyle = getBottomBarStyle({
    questions: questions,
    setQuestions: setQuestions,
    props: props,
  });



  /** les données importantes, déterminant si on refresh, ou pas, l'item */
  const importantData = {
    currentIndex: GUIState.currentIndex,
    howManyNPCSOnEachSide: dataListStyle.howManyNPCSOnEachSide,
  };

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath({
    questions,
    setGUIStateReady,
    persistenceID: props.persistenceID,
    hardReset: props.hardReset
  });

  /* si la page n'est pas prête à etre affiché, affiche spinner */
  if (GUIStateReady == false) {
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
        /* la liste de questions */
        dataItems={questions}
        /* la couleur d'arrière plan du questionnaire */
        backgroundColor={Constants.defaultBackgroundColor}
        /* styles/callbacks de l'appbar */
        appbarStyle={appbarStyle}
        /* styles/callbacks de la liste de données */
        dataListStyle={dataListStyle}
        /* styles/callbacks de la bottom bar*/
        bottomBarStyle={bottomBarStyle}
        /* permet de grab current item index, après scroll */
        setCurrentIndex={SetCurrentIndex}
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
