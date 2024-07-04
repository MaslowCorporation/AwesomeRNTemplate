import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Lécran est mounted.
 */
export function MarkScreenAsMounted() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // lécran est mounted
      isMounted: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
