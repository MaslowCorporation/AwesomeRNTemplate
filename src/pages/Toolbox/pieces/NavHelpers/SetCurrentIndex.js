import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Set lindex détape actuellement visionné à lécran.
 */
export function SetCurrentIndex(newIndex) {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      currentIndex: newIndex,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
