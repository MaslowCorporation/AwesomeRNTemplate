import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { SetPageState } from "./SetPageState";
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

/**
 * Let's go back to AddItemToTestPage
 */
export function GoToAddItemToTestPage() {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // setter
  SetPageState({
    ...TestPageState,

    // l'écran actuellement affiché dans TestPage.js
    chosenOne: "AddItemToTestPage",

    itemUniqueId: GetUniqueID(7)
  });

}
