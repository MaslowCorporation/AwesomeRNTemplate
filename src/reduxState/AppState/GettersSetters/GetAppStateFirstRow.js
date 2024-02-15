import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetAppStateFirstRow() {
  const allAppState = store.getState().AppState.allRows;

  if (allAppState != null && allAppState.length > 0) {
    return allAppState[0];
  } else {
    return allAppState;
  }
}
