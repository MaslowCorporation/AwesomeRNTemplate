import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter";
import { TryParse } from "src/services/TryParse/TryParse";

/**
 *
 * @returns les réponses aux UI.
 * stockés dans le state persistent ou non persistent,
 */
export const GetAnswers = ({ persistenceID, GUIState }) => {
    if (persistenceID != null) {
        const answersPersistent = SqliteReduxGUIAnswers.GetItemByUniqueID(persistenceID);

        const answers = TryParse(answersPersistent?.answers);

        return answers;
    } else {
        return GUIState.answers;
    }
};