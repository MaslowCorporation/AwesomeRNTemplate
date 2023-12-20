import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { SetPageState } from "./SetPageState";

/**
 * Let's go back to the item edit screen.
 */
export function GoToEditItemInTestPage(itemUniqueId) {
  // getter
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  SetPageState({
    ...TestPageState,

    // l'écran actuellement affiché dans TestPage.js
    chosenOne: "EditItemInTestPage",

    // identifiant unique de l'item en cours de modif
    itemUniqueId: itemUniqueId,
  });

}
