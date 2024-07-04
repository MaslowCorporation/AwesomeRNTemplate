/* PLOP_INJECT_IMPORT */

import {
  SqliteReduxGUIAnswers
} from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter";
import {
  SqliteReduxTestPageState
} from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import {
  SqliteReduxTestPage
} from "src/reduxState/TestPage/TestPageGetterSetter";
import {
  SqliteReduxAppState
} from "src/reduxState/AppState/AppStateGetterSetter";

import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { SqliteReduxToolbox } from "src/reduxState/Toolbox/ToolboxGetterSetter";

/**
 *
 * @returns
 *
 * Cette fonction permet dinitialiser le(s) state(s) SqliteRedux,
 *
 * et deffectuer deventuels reset, ou appels dAPI, et jen passe.
 */
export const FetchReduxStates = async () => {
  /** ***********************************************************************
   *
   * Ci dessous, les initialisations de state SqliteRedux.
   */

  /* PLOP_INJECT_REDUX_INIT */


  // initialize the sqlite/redux mechanism      
  await SqliteReduxGUIAnswers.InitGUIAnswers({
    debugMode: true,
  });



  await SqliteReduxTestPageState.InitTestPageState({
    debugMode: true,
  });



  await SqliteReduxTestPageState.ResetState();




  await SqliteReduxTestPage.InitTestPage({
    debugMode: true,
  });



  /*await SqliteReduxTestPage.ResetState({
    debugMode: true,
  });*/



  // initialize the sqlite/redux mechanism      
  await SqliteReduxAppState.InitAppState({
    debugMode: true,
  });



  // create the state, if not already existing
  await SqliteReduxAppState.ResetState({
    debugMode: true,
  });





  await SqliteReduxToolboxState.InitToolboxState({
    debugMode: true,
  });



  await SqliteReduxToolboxState.ResetState();



  await SqliteReduxToolbox.InitToolbox({
    debugMode: true,
  });






  /** *********************************************************************** */

  return;
};
