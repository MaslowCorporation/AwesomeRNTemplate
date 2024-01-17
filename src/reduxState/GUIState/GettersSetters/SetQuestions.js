import { SqliteReduxGUIState } from "../GUIStateGetterSetter";

/**
 *
 * @param {*} questions
 *
 *
 * Stocke les questions, dans le state SqliteRedux, sous forme de string.
 * la liste de questions est filtrée,
 * on garde seulement les primitives,
 * puis on convertit en string.
 * (avec JSON.stringify)
 */
export const SetQuestions = (questions) => {
  const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();

  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,
      questions: JSON.stringify(questions),
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
  });
};
