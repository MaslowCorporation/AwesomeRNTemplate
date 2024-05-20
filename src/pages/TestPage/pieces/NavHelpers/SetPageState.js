import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Set le state de page.
 */
export function SetPageState(newPageState) {
  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: newPageState,
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
