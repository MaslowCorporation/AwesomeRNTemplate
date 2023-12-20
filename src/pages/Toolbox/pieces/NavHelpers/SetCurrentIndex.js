import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * Set l'index d'étape actuellement visionné à l'écran.
 */
export function SetCurrentIndex(newIndex) {
  // getter
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter
  SqliteReduxToolboxState.UpdateSpecificRowsFromDB({
    row: {
      ...ToolboxState,

      currentIndex: newIndex,
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
