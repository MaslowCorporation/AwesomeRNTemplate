import { SqliteReduxToolbox } from "src/reduxState/Toolbox/ToolboxGetterSetter";

// getter/setter
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
// eslint-disable-next-line no-unused-vars
import { GoToToolboxList } from "../NavHelpers/GoToToolboxList";
import { SetPageState } from "../NavHelpers/SetPageState";

/**
 *
 * permet de modifier un item stocké dans sqlite + redux
 *
 */
export const AddAPIKeySubpageDB = ({ answers, route }) => {
  /* PLOP_INJECT_ANSWER_VALUE */


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
};
