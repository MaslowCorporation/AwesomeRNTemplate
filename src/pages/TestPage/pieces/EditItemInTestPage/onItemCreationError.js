// getter/setter
import { Constants } from "src/constants/Constants";
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { SetPageState } from "../NavHelpers/SetPageState";

/**
 *
 * @param {*} answers
 * @param {*} errAnswerIndex
 * @param {*} errMsg
 *
 * si bobo, on affiche un message
 */
export function onItemCreationError(answers, errAnswerIndex, errMsg, questions) {
  const qtyAnswers = questions.length;

  // getter, contient le state actuel
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  /**
   *
   * si données invalides,
   * on affiche un message derreur.
   *
   */
  SetPageState({
    ...TestPageState,
    snackbarVisible: Constants.true,
    snackbarText: `(${errAnswerIndex + 1}/${qtyAnswers}): ${errMsg}`,
    userInputErrorIndex: errAnswerIndex,
  });
}
