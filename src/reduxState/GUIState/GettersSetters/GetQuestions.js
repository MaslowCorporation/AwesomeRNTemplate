import { SqliteReduxGUIState } from "../GUIStateGetterSetter";

/**
 *
 * @returns les questions du GetUserInput,
 * stockés dans le state GUIState,
 * avec seulement les primitives (string, number, booléens)
 */
export const GetQuestions = () => {
  const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();
  const questionsString = GUIState.questions;

  return JSON.parse(questionsString);
};
