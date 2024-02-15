import { Constants } from "src/constants/Constants";
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Lets go back to TestPageList
 */
export function GoToTestPageList() {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      // lécran actuellement affiché dans TestPage.js
      chosenOne: "TestPageList",

      // cache le snack
      snackbarVisible: Constants.false,

      itemUniqueId: null,
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
