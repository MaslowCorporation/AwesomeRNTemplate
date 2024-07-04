import { React, useState } from "react";
import { MessageAvec } from "src/components/MessageAvec/MessageAvec";
import { DataList } from "src/components/DataList/DataList";
import { getChoicesStyle } from "./getChoicesStyle";
import { GetAnswers } from "./GetAnswers";


/**
 *
 * @param {*} question
 * @param {*} GUIState
 * @param {*} setGUIState
 * @param {*} bodyContentColor
 * @param {*} bodyFont
 * @param {*} bodyBackgroundColor
 * @param {*} props
 *
 * @returns Le layout dun écran permettant de faire des choix pour répondre à une question donnée.
 */
export const MsgAvecTxtInputChoices = ({
  question,
  GUIState, setGUIState,
  bodyContentColor,
  bodyFont,
  bodyBackgroundColor,
  props,
}) => {
  // lindex de la question a lécran
  const currentIndex = GUIState.currentIndex;

  // les réponse actuelles aux UI du QCM
  const answers = GetAnswers({ persistenceID: props.persistenceID, GUIState: GUIState });

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

  // ${importantData.lastItemClickedIndex}`);

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
              GUIState,
              setGUIState,
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
