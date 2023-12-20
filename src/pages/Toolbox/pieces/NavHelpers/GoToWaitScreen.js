import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Let's go to the waiting screen
 */
export function GoToWaitScreen() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // l'écran actuellement affiché dans Toolbox.js
      chosenOne: "Wait",
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {
      /*console.log(
        `state de page modifé avec succès dans Toolbox.`
      );*/
    },
    onError: (e) => {},
  });
}
