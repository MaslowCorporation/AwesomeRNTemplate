import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * L'écran est mounted.
 */
export function MarkScreenAsMounted() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // l'écran est mounted
      isMounted: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {
      /*console.log(
        `state de page modifé avec succès dans Toolbox. is mounted: ${row.isMounted}`
      );*/
    },
    onError: (e) => {},
  });
}
