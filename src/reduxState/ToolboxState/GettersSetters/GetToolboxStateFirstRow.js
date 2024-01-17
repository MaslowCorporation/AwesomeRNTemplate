import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir le premier row stocké actuellement dans Redux.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetToolboxStateFirstRow() {
  const allToolboxState = store.getState().ToolboxState.allRows;

  if (allToolboxState != null && allToolboxState.length > 0) {
    return allToolboxState[0];
  } else {
    return allToolboxState;
  }
}
