import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Let's go back to ToolboxList
 */
export function GoToToolboxList() {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // l'écran actuellement affiché dans Toolbox.js
      chosenOne: "ToolboxList",

      // cache le snack
      snackbarVisible: Constants.false,

      itemUniqueId: null,
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
