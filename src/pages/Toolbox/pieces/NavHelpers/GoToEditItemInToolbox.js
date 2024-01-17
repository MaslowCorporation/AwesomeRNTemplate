import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Let's go back to the item edit screen.
 */
export function GoToEditItemInToolbox(itemUniqueId) {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // l'écran actuellement affiché dans Toolbox.js
      chosenOne: "EditItemInToolbox",

      // identifiant unique de l'item en cours de modif
      itemUniqueId: itemUniqueId,
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
