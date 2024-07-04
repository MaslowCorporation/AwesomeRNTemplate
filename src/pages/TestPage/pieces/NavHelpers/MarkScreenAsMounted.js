import { Constants } from "src/constants/Constants";
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Lécran est mounted.
 */
export function MarkScreenAsMounted() {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      // lécran est mounted
      isMounted: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
