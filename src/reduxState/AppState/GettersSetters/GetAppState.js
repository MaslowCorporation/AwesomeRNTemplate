import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir tous les rows stockés actuellement dans Redux/Sqlite.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */
export function GetAppState() {
  return store.getState().AppState.allRows;
}
