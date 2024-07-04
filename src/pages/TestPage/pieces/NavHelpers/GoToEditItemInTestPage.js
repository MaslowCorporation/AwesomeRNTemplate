import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { SetPageState } from "./SetPageState";

/**
 * Lets go back to the item edit screen.
 */
export function GoToEditItemInTestPage(itemUniqueId) {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  SetPageState({
    ...TestPageState,

    // lécran actuellement affiché dans TestPage.js
    chosenOne: "EditItemInTestPage",

    // identifiant unique de litem en cours de modif
    itemUniqueId: itemUniqueId,
  });

}
