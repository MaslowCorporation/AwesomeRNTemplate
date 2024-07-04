import { Constants } from "src/constants/Constants";
import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter";

/**
 * @param {*} answers
 *
 * @returns Stocke les réponses, dans le state SqliteRedux, sous forme de string.
 * avec JSON.stringify()
 */
export const SetAnswers = ({ answers, GUIState, setGUIState, persistenceID }) => {


    if (persistenceID != null) {
        SetAnswersPersistent({
            answers,
            GUIState,
            setGUIState,
            persistenceID,
        });
    } else {
        SetAnswersNonPersistent({
            answers,
            GUIState,
            setGUIState,
        });
    }
};

function SetAnswersNonPersistent({
    answers,
    GUIState,
    setGUIState,
}) {

    const newState = {
        ...GUIState,
        answers,
        showGUI: true,
    };

    setGUIState(newState)
}

function SetAnswersPersistent({
    answers,
    GUIState,
    setGUIState,
    persistenceID,
}) {

    SqliteReduxGUIAnswers.UpdateSpecificRowsFromDB({
        row: { answers: JSON.stringify(answers), uniqueId: persistenceID },
        rowName: "uniqueId",
        rowValue: persistenceID,
        onSuccess: (qtyAffected) => {
            const newState = {
                ...GUIState,
                showGUI: true,
                answers
            };

            setGUIState(newState)
        },
        onError: (e) => { },
    });
}
