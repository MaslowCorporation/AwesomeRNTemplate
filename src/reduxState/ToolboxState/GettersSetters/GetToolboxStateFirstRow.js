import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
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
