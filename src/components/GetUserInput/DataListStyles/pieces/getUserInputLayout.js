import { React } from "react";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";
import { MsgAvecTextInputTextKeyboard } from "./MessageAvecTextInput";
import { MsgAvecTxtInputChoices } from "./MsgAvecTxtInputChoices";
import { MsgAvecTxtInputNumKeyboard } from "./MsgAvecTxtInputNumKeyboard";
import { storeInputToQuestions } from "./storeTextInputToQuestions";

/**
 *
 * @param {*} question
 * @param {*} props
 * @param {*} questions
 * @param {*} setQuestions
 *
 * @returns
 *
 * Ceci nous permet d'obtenir l'écran d'une question individuelle
 * à demander à l'user (demande txt, numero, choix, ou custom)
 */
export const GetUserInputLayout = ({
  question,
  props,
  questions,
  setQuestions,
}) => {
  // on récupère l'id, le name, le value de chaque question.
  // on va donner ceci à la callback de succès, si y'a pas d'erreurs.
  const answers = SqliteReduxGUIState.GetAnswers(props.persistenceID);

  // l'index de la question a l'écran
  const GUIState = SqliteReduxGUIState.GetFreshestGUIStateFirstRow();
  const currentIndex = GUIState.currentIndex;

  // on récupère l'info via un component custom,
  if (question.type === "custom") {

    return question.customQuestionPanel({
      answer: answers[question.name],
      answers,
      answerIndex: currentIndex,
      onInput: (userInput) => {
        storeInputToQuestions({
          persistenceID: props.persistenceID,
          question: question,
          questions: questions,
          setQuestions: setQuestions,
          input: userInput,
        });
      },
    });
  }
  // on récupère l'info via un TextInput
  // qui récupère du texte.
  // et met à jour le state via setQuestions dataList, et item (id entre autre)
  else if (question.type === "text") {
    let defaultTextInput = question.defaultValue({
      answers,
      answer: answers[question.name],
      answerIndex: currentIndex,
    });

    return (
      <MsgAvecTextInputTextKeyboard
        persistenceID={props.persistenceID}
        defaultTextInput={defaultTextInput}
        question={question}
        bodyContentColor={props.bodyContentColor}
        bodyFont={props.bodyFont}
        bodyBackgroundColor={props.bodyBackgroundColor}
        questions={questions}
        setQuestions={setQuestions}
      ></MsgAvecTextInputTextKeyboard>
    );
  }
  // on récupère l'info via un TextInput
  // qui récupère un nombre entier/décimal.
  // et met à jour le state via setQuestions dataList, et item (id entre autre)
  else if (question.type === "number") {
    let defaultNumInput = question.defaultValue({
      answers,
      answer: answers[question.name],
      answerIndex: currentIndex,
    });

    return (
      <MsgAvecTxtInputNumKeyboard
        persistenceID={props.persistenceID}
        defaultNumInput={defaultNumInput}
        question={question}
        bodyContentColor={props.bodyContentColor}
        bodyFont={props.bodyFont}
        bodyBackgroundColor={props.bodyBackgroundColor}
        questions={questions}
        setQuestions={setQuestions}
      ></MsgAvecTxtInputNumKeyboard>
    );
  }
  // on récupère l'info via un FlatList vertical
  // qui propose des choix (stockés dans item.choices).
  // et met à jour le state via setQuestions dataList, et item (id entre autre)
  else if (question.type === "choices") {
    return (
      <MsgAvecTxtInputChoices
        question={question}
        questions={questions}
        setQuestions={setQuestions}
        bodyContentColor={props.bodyContentColor}
        bodyFont={props.bodyFont}
        bodyBackgroundColor={props.bodyBackgroundColor}
        props={props}
      ></MsgAvecTxtInputChoices>
    );
  } else {
    return;
  }
};
