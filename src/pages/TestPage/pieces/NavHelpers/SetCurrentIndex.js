import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Set lindex détape actuellement visionné à lécran.
 */
export function SetCurrentIndex(newIndex) {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      currentIndex: newIndex,
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
