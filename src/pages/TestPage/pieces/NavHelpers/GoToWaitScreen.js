import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Lets go to the waiting screen
 */
export function GoToWaitScreen() {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      // lécran actuellement affiché dans TestPage.js
      chosenOne: "Wait",
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
