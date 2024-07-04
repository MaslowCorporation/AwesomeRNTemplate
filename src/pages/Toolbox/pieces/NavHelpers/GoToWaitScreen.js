import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Lets go to the waiting screen
 */
export function GoToWaitScreen() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // lécran actuellement affiché dans Toolbox.js
      chosenOne: "Wait",
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
