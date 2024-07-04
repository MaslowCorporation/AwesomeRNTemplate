import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Lets go back to ToolboxList
 */
export function GoToToolboxList() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // lécran actuellement affiché dans Toolbox.js
      chosenOne: "ToolboxList",

      // cache le snack
      snackbarVisible: Constants.false,

      itemUniqueId: null,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
