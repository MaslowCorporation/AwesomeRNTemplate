import { useEffect } from "react";
import { Constants } from "src/constants/Constants.js";
import { extractDataFromQuestions } from "./DataListStyles/pieces/extractDataFromQuestions.js";
import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter.js";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
export const onComponentLifeAndDeath = ({ hardReset, persistenceID, GUIState, setGUIState }) => {

  useEffect(() => {

    if (persistenceID != null) {
      AddDefaultPersistentAnswers(
        persistenceID,
        GUIState, setGUIState
      );
    } else {
      AddDefaultNonPersistentAnswers(
        GUIState, setGUIState
      );
    }

    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);
};

function AddDefaultNonPersistentAnswers(GUIState, setGUIState) {
  // Anything in here is fired on component mount.

  const initialAnswers = extractDataFromQuestions(GUIState.questions);

  setGUIState({
    ...GUIState,
    answers: initialAnswers,
    showGUI: true,
  });
}

async function AddDefaultPersistentAnswers(persistenceID, GUIState, setGUIState) {
  // les reponses par defaut des UI de la liste dUI
  const initialAnswers = extractDataFromQuestions(GUIState.questions);

  // les reponses des UI de la liste dUI,
  // stockees dans la base de donnees GUIAnswers,
  // si donnees existantes, ou null si pas de donnees dans DB
  const answersPersistent = SqliteReduxGUIAnswers.GetItemByUniqueID(persistenceID);

  // si il nexiste aucune donnees pour cette liste dUI persistante,
  // alors ajoute les rows par defaut dans la DB
  if (!answersPersistent) {
    SqliteReduxGUIAnswers.AddRowToDatabase({
      row: {
        answers: JSON.stringify(initialAnswers),
        uniqueId: persistenceID,
        currentIndex: GUIState.currentIndex,
      },
      onSuccess: (data) => {
        setGUIState({
          ...GUIState,
          showGUI: true,
        });
      },
      onError: (e) => {

      }
    });
  } else {
    setGUIState({
      ...GUIState,
      showGUI: true,
      currentIndex: answersPersistent.currentIndex ?? 0,
    });
  }

}
