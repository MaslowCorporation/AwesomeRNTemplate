import { SetPageState } from "../NavHelpers/SetPageState";
// getter/setter
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { Constants } from "src/constants/Constants";

/**
 *
 * @param {*} answers
 * @param {*} errAnswerIndex
 * @param {*} errMsg
 *
 * si bobo, affiche message de bobo
 */
export function onItemCreationError(answers, errAnswerIndex, errMsg) {
  const qtyAnswers = Object.keys(answers).length;

  // getter, contient le state actuel
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();
  /**
   *
   * si données invalides,
   * on affiche un message derreur.
   *
   */
  SetPageState({
    ...ToolboxState,
    snackbarVisible: Constants.true,
    snackbarText: `(${errAnswerIndex + 1}/${qtyAnswers}): ${errMsg}`,
    userInputErrorIndex: errAnswerIndex,
  });
}
