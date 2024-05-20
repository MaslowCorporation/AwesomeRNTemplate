import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetTestPageStateFirstRow() {
  const allTestPageState = store.getState().TestPageState.allRows;

  if (allTestPageState != null && allTestPageState.length > 0) {
    return allTestPageState[0];
  } else {
    return allTestPageState;
  }
}
