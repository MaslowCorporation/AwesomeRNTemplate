import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Lets go back to the item edit screen.
 */
export function GoToEditItemInToolbox(itemUniqueId) {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // lécran actuellement affiché dans Toolbox.js
      chosenOne: "EditItemInToolbox",

      // identifiant unique de litem en cours de modif
      itemUniqueId: itemUniqueId,
    },
    rowName: "uniqueId",
    rowValue: "ToolboxState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
