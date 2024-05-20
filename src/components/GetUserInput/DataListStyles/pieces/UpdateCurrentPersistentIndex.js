import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter.js";

export async function UpdateCurrentPersistentIndex(persistenceID, newIndex) {

    // les reponses des UI de la liste dUI,
    // stockees dans la base de donnees GUIAnswers,
    // si donnees existantes, ou null si pas de donnees dans DB
    const answersPersistent = SqliteReduxGUIAnswers.GetItemByUniqueID(persistenceID);

    // si il existe des donnees pour cette liste dUI persistante,
    // alors update l'index de scroll
    if (answersPersistent) {
        SqliteReduxGUIAnswers.UpdateSpecificRowsFromDB({
            row: {
                ...answersPersistent,
                currentIndex: newIndex,
            },
            rowName: "uniqueId",
            rowValue: persistenceID,
            onSuccess: (data) => {
            },
            onError: (e) => {
            }
        });
    }

}
