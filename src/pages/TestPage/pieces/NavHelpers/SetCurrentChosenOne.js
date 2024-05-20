import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

/**
 * Set le nom de lécran actuellement visionné à lécran.
 *
 * Pour camoufler les autres péquenauds.
 */
export function SetCurrentChosenOne(newChosenOne, itemUniqueId) {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SqliteReduxTestPageState.UpdateSpecificRowsFromDB({
    row: {
      ...TestPageState,

      // le nouvel élu
      chosenOne: newChosenOne,
      itemUniqueId,
    },
    rowName: "uniqueId",
    rowValue: "TestPageState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
