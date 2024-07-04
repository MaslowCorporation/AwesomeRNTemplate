import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetTestPageFirstRow() {
  const allTestPage = store.getState().TestPage.allRows;

  if (allTestPage != null && allTestPage.length > 0) {
    return allTestPage[0];
  } else {
    return allTestPage;
  }
}
