import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir des rows spécifiques, stockés actuellement dans Redux.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetGUIStateFromGroup({ groupName }) {
  return store.getState().GUIState.groups[groupName] ?? [];
}
