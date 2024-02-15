import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter";
import { GetGUIStateFirstRow } from "./GetGUIStateFirstRow";
import { TryParse } from "src/services/TryParse/TryParse";

/**
 *
 * @returns les réponses aux questions.
 * stockés dans le state GUIState,
 */
export const GetAnswers = (persistenceID) => {


  if (persistenceID != null) {
    const answersPersistent = SqliteReduxGUIAnswers.GetItemByUniqueID(persistenceID);


    const answers = TryParse(answersPersistent?.answers);

    return answers;
  } else {
    const GUIState = GetGUIStateFirstRow();
    const answersString = GUIState.answers;

    //

    return JSON.parse(answersString);
  }
};
