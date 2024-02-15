import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Set le state de page.
 */
export function SetPageState(newPageState) {
  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: newPageState,
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
