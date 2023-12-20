import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

/**
 * Set l'index d'étape actuellement visionné à l'écran.
 */
export function SetCurrentIndex(newIndex) {
  // getter
  const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();

  // setter
  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,

      currentIndex: newIndex,
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: (row) => {
      /*console.log(
        `state de page modifé avec succès dans Tutoriels.`
      );*/
    },
    onError: (e) => {},
  });
}
