import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Set le nom de lécran actuellement visionné à lécran.
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

    },
    onError: (e) => { },
  });
}
