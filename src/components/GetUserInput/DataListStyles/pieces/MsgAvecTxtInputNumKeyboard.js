import { React, useState } from 'react';
import { TextInput } from 'react-native';
import { MessageAvec } from 'src/components/MessageAvec/MessageAvec';
import { storeInputToQuestions } from './storeTextInputToQuestions';
import { styles } from './styles';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';

import { RunIfPossible } from 'src/services/RunIfPossible/RunIfPossible';
import { GetAnswers } from './GetAnswers';

export function MsgAvecTxtInputNumKeyboard(props) {
  // les réponse actuelles aux UI du QCM
  const answers = GetAnswers({ persistenceID: props.persistenceID, GUIState: props.GUIState });

  const [input, setInput] = useState(JSON.stringify(props.defaultNumInput));

  // lindex de la question a lécran

  const currentIndex = props.GUIState.currentIndex;

  return (
    <MessageAvec
      messageText={props.question.description({
        answers,
        answer: answers[props.question.name],
        answerIndex: currentIndex,
      })}
      messageTextColor={props.bodyContentColor}
      messageTextFont={props.bodyFont}
      messageFontSize={props.question.messageFontSize}
      backgroundColor={props.bodyBackgroundColor}
      component={() => {
        return (
          <TextInput
            multiline={true}
            numberOfLines={3}
            placeholderTextColor={props.bodyContentColor}
            value={input?.toString()}
            style={[
              styles.textInput,
              {
                color: props.bodyContentColor,
                borderColor: props.bodyContentColor,
                fontFamily: props.bodyFont,
              },
            ]}
            onChangeText={text => {
              const numValue = text?.length > 0 ? Number(text) : null;

              setInput(numValue);

              RunIfPossible({
                func: props.question.onTextChanged,
                args: numValue,
              });

              storeInputToQuestions({
                persistenceID: props.persistenceID,
                question: props.question,
                GUIState: props.GUIState,
                setGUIState: props.setGUIState,
                input: numValue,
              });
            }}
            placeholder={app_strings.t('typeHere')}
            keyboardType={'numeric'}
          />
        );
      }}
      messageFlex={props.question.messageFlex}
      componentFlex={props.question.componentFlex}
      componentFirst={props.question.componentFirst}
    />
  );
}
