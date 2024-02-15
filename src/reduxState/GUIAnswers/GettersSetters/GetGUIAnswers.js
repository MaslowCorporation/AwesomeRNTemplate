import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir tous les rows stockés actuellement dans Redux/Sqlite.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */
export function GetGUIAnswers() {
  return store.getState().GUIAnswers.allRows;
}
