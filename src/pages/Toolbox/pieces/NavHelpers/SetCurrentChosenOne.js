import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Set le nom de l'écran actuellement visionné à l'écran.
 *
 * Pour camoufler les autres péquenauds.
 */
export function SetCurrentChosenOne(newChosenOne, itemUniqueId) {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      // le nouvel élu
      chosenOne: newChosenOne,
      itemUniqueId,
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
