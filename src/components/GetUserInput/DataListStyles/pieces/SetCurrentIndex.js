import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

/**
 * Set lindex détape actuellement visionné à lécran.
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

    },
    onError: (e) => { },
  });
}
