import { React, useState } from 'react';
import { TextInput } from 'react-native';
import { MessageAvec } from 'src/components/MessageAvec/MessageAvec';
import { styles } from './styles';
import { storeInputToQuestions } from './storeTextInputToQuestions';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';

import { RunIfPossible } from 'src/services/RunIfPossible/RunIfPossible';
import { GetAnswers } from './GetAnswers';

/**
 * Le layout dun question individuel dans la liste de données
 *
 */
export const MsgAvecTextInputTextKeyboard = props => {
  // les réponse actuelles aux UI du QCM
  const answers = GetAnswers({ persistenceID: props.persistenceID, GUIState: props.GUIState });

  const [input, setInput] = useState(props.defaultTextInput);

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
            value={input?.toString()}
            placeholderTextColor={props.bodyContentColor}
            style={[
              styles.textInput,
              {
                color: props.bodyContentColor,
                borderColor: props.bodyContentColor,
                fontFamily: props.bodyFont,
              },
            ]}
            placeholder={app_strings.t('typeHere')} // https://infinitbility.com/how-to-set-keyboard-type-in-react-native
            keyboardType={'email-address'}
            onChangeText={text => {
              const textOrNull = text?.length > 0 ? text : null;

              setInput(textOrNull);

              RunIfPossible({ func: props.question.onTextChanged, args: textOrNull });

              storeInputToQuestions({
                persistenceID: props.persistenceID,
                question: props.question,
                GUIState: props.GUIState,
                setGUIState: props.setGUIState,
                input: textOrNull,
              });
            }}
          />
        );
      }}
      messageFlex={props.question.messageFlex}
      componentFlex={props.question.componentFlex}
      componentFirst={props.question.componentFirst}
    />
  );
};
