import { Constants } from "src/constants/Constants";
import { GetGUIStateFirstRow } from "./GetGUIStateFirstRow";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";
import { SqliteReduxGUIAnswers } from "src/reduxState/GUIAnswers/GUIAnswersGetterSetter";

/**
 * @param {*} answers
 *
 * @returns Stocke les réponses, dans le state SqliteRedux, sous forme de string.
 * avec JSON.stringify()
 */
export const SetAnswers = ({ answers, persistenceID, onSuccess, onError }) => {


  if (persistenceID != null) {
    SetAnswersPersistent({
      answers,
      persistenceID,
      onSuccess,
      onError
    });
  } else {
    SetAnswersNonPersistent({ answers, onSuccess, onError });
  }
};

function SetAnswersNonPersistent({ answers, onSuccess, onError }) {
  const GUIState = GetGUIStateFirstRow();

  const newRow = {
    ...GUIState,
    answers: JSON.stringify(answers),
    showGUI: Constants.true,
  };

  //console.log(`Newest row + answers: ${JSON.stringify(newRow)}`);
  UpdateSpecificRowsFromDB({
    row: newRow,
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: onSuccess,
    onError: onError,
  });
}

function SetAnswersPersistent({ answers, persistenceID, onSuccess, onError }) {

  SqliteReduxGUIAnswers.UpdateSpecificRowsFromDB({
    row: { answers: JSON.stringify(answers), uniqueId: persistenceID },
    rowName: "uniqueId",
    rowValue: persistenceID,
    onSuccess: (qtyAffected) => {
      const GUIState = GetGUIStateFirstRow();

      const newRow = {
        ...GUIState,
        showGUI: Constants.true,
      };

      UpdateSpecificRowsFromDB({
        row: newRow,
        rowName: "uniqueId",
        rowValue: "GUIState",
        onSuccess: onSuccess,
        onError: onError,
      });
    },
    onError: (e) => { },
  });
}

