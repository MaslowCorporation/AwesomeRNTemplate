// eslint-disable-next-line no-unused-vars
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { GoToToolboxList } from "../NavHelpers/GoToToolboxList";
import { SetPageState } from "../NavHelpers/SetPageState";

/**
 *
 *
 * si annulation, retour à liste
 */
export function cancelItemCreation() {
  // getter, contient le state actuel
  const ToolboxState =
    SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // setter de state de page, en entier
  SetPageState({
    // le state existant.... agrémenté de ....
    ...ToolboxState,

    // lécran actuellement affiché dans Toolbox.js
    chosenOne: "ToolboxChoices",

  });
}
