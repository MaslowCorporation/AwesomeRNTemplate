import { React, useState } from "react";
import { MessageAvec } from "src/components/MessageAvec/MessageAvec";
import { DataList } from "src/components/DataList/DataList";
import { getChoicesStyle } from "./getChoicesStyle";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

/**
 *
 * @param {*} question
 * @param {*} questions
 * @param {*} setQuestions
 * @param {*} bodyContentColor
 * @param {*} bodyFont
 * @param {*} bodyBackgroundColor
 * @param {*} props
 *
 * @returns Le layout dun écran permettant de faire des choix pour répondre à une question donnée.
 */
export const MsgAvecTxtInputChoices = ({
  question,
  questions,
  setQuestions,
  bodyContentColor,
  bodyFont,
  bodyBackgroundColor,
  props,
}) => {
  // lindex de la question a lécran
  const GUIState = SqliteReduxGUIState.GetFreshestGUIStateFirstRow();
  const currentIndex = GUIState.currentIndex;

  // les réponse actuelles aux questions du QCM
  const answers = SqliteReduxGUIState.GetAnswers(props.persistenceID);



  // Le state de lécran de choix.
  //
  // Contient:
  //
  // choices, la liste de choix possibles.
  // Définie par lutilisateur de GetUserInput
  // (ze programmeur)
  //
  // lastItemClickedIndex, lindex
  // du tt dernier choix cliqué.
  // null, si aucun clic fait
  const [choicesState, setChoicesState] = useState({
    choices: question.choices({
      answers,
      answer: answers[question.name],
      answerIndex: currentIndex,
    }),
  });

  /*const importantData = {
    lastItemClickedIndex: choicesState.lastItemClickedIndex,
  };*/


  return (
    /**
     * Le message + liste de choix
     */
    <MessageAvec
      messageText={question.description({
        answers,
        answer: answers[question.name],
        answerIndex: currentIndex,
      })}
      messageTextColor={bodyContentColor}
      messageTextFont={bodyFont}
      messageFontSize={question.messageFontSize}
      backgroundColor={bodyBackgroundColor}
      component={() => {
        /**
         * La liste de choix
         */
        return (
          <DataList
            appbarStyle={{
              showAppbar: false,
            }}
            /**
             * Callbacks + styles permettant de
             * créer la liste de choix.
             */
            dataListStyle={getChoicesStyle({
              props: props,
              setChoicesState: setChoicesState,
              choicesState: choicesState,
              question: question,
              questions: questions,
              setQuestions: setQuestions,
            })}
            bottomBarStyle={{
              showBottomBar: false,
            }}
            //importantData={importantData}
            backgroundColor={bodyBackgroundColor}
            dataItems={choicesState.choices}
          ></DataList>
        );
      }}
      messageFlex={question.messageFlex}
      componentFlex={question.componentFlex}
      componentFirst={question.componentFirst}
    />
  );
};
