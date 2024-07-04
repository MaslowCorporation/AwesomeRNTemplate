import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetGUIAnswersFirstRow() {
  const allGUIAnswers = store.getState().GUIAnswers.allRows;

  if (allGUIAnswers != null && allGUIAnswers.length > 0) {
    return allGUIAnswers[0];
  } else {
    return allGUIAnswers;
  }
}
