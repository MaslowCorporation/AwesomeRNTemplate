import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Cache le snack
 */
export function HideSnackbar() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // cache le snack
      snackbarVisible: Constants.false,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
