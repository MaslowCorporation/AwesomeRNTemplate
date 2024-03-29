import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetGUIStateFirstRow() {
  const allGUIState = store.getState().GUIState.allRows;

  if (allGUIState != null && allGUIState.length > 0) {
    return allGUIState[0];
  } else {
    return allGUIState;
  }
}
