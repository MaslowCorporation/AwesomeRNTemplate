import { Constants } from "src/constants/Constants";
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Cache le snack
 */
export function HideSnackbar() {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      // cache le snack
      snackbarVisible: Constants.false,
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
