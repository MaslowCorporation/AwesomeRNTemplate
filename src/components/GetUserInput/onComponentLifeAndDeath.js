import { useEffect } from "react";
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter.js";
import { extractDataFromQuestions } from "./DataListStyles/pieces/extractDataFromQuestions.js";
import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter.js";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
export const onComponentLifeAndDeath = ({ hardReset, persistenceID, questions, setGUIStateReady }) => {
  useEffect(() => {
    if (persistenceID != null) {
      AddDefaultPersistentAnswers(
        persistenceID,
        questions,
        setGUIStateReady
      );
    } else {
      AddDefaultNonPersistentAnswers(
        persistenceID,
        questions,
        setGUIStateReady
      );
    }

    return () => {
      // Anything in here is fired on component unmount.
      SqliteReduxGUIState.ResetState(hardReset);
    };
  }, []);
};

function AddDefaultNonPersistentAnswers(persistenceID, questions, setGUIStateReady) {
  // Anything in here is fired on component mount.

  const GUIState = SqliteReduxGUIState.GetGUIState()?.at(0);
  const answersPersistentStr = GUIState?.answersPersistent

  const initialAnswers = extractDataFromQuestions(questions);

  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,
      answers: JSON.stringify(initialAnswers),
      answersPersistent: answersPersistentStr,
      showGUI: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: (data) => {
      setGUIStateReady(true);
    },
    onError: (e) => { },
  });
}

async function AddDefaultPersistentAnswers(persistenceID, questions, setGUIStateReady) {
  // les reponses par defaut des UI de la liste d'UI
  const initialAnswers = extractDataFromQuestions(questions);


  // les reponses des UI de la liste d'UI,
  // stockees dans la base de donnees GUIAnswers,
  // si donnees existantes, ou null si pas de donnees dans DB
  const answersPersistent = SqliteReduxGUIAnswers.GetItemByUniqueID(persistenceID);

  // si il n'existe aucune donnees pour cette liste d'UI persistante,
  // alors ajoute les rows par defaut dans la DB
  if (!answersPersistent) {
    SqliteReduxGUIAnswers.AddRowToDatabase({
      row: {
        answers: JSON.stringify(initialAnswers),
        uniqueId: persistenceID
      },
      onSuccess: (data) => {
        ShowGUI(setGUIStateReady)
      },
      onError: (e) => {

      }
    });
  } else {
    ShowGUI(setGUIStateReady);
  }

}

function ShowGUI(setGUIStateReady) {
  // le state du component GetUserInput
  const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();

  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,
      showGUI: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: (data) => {
      setGUIStateReady(true);
    },
    onError: (e) => { },
  });
}

