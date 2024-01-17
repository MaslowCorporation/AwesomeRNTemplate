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

    //console.log(`The GUIAnswers: ${JSON.stringify(answersPersistent, null, 2)}`);

    const answers = TryParse(answersPersistent?.answers);

    return answers;
  } else {
    const GUIState = GetGUIStateFirstRow();
    const answersString = GUIState.answers;

    //console.log(`Answers as string: ${answersString}`);

    return JSON.parse(answersString);
  }
};
