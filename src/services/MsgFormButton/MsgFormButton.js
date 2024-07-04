
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// First, lets import all necessary components from react, and react native.
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CustomButton } from 'src/components/CustomButton/CustomButton';
import { ShowNotification } from '../ShowNotification/ShowNotification';
import { Constants } from 'src/constants/Constants';
import { TextInputWithButtons } from './TextInputWithButtons';


export function MsgFormButton({ message, initialFormInput, formPlaceholder, onFormButtonClicked, buttonText, onButtonClicked, fontFamily }) {
  // useState allows us to manage state in a function component. We use it here to manage the TextInput 
  // content (formInput) and update it each time it changes
  const [formInput, setFormInput] = useState(initialFormInput);

  // We use a View as a container for all the components. It occupies available space (flex: 1), 
  // everything is centered and evenly distributed (justifyContent and alignItems: center), with no 
  // need for scrolling (flexWrap: nowrap).
  // The formInput TextInput is here. The value of TextInput set to be formInput. Whenever the value changes, 
  // we update formInput using setformInput and run the onInput callback with formInput as its argument. 

  // Under the TextInput, we have a  'Subscribe' button. You can fill its onPress callback on your own
  return (

    <View style={styles.container}>
      <Text style={styles.txtStyle}>{message}</Text>

      <TextInputWithButtons
        fontFamily={fontFamily}
        placeholder={formPlaceholder}
        initialFormInput={formInput}
        onValidate={(text) => { setFormInput(text); onFormButtonClicked(text); }}
      />


      <CustomButton
        onClick={onButtonClicked}
        buttonText={buttonText}
        buttonContainerStyle={styles.btnStyle}
        buttonTextStyle={styles.btnTxtStyle}
      ></CustomButton>
    </View>
  );
}


// Here you have your styles. Remember that in React Native, we dont use CSS, but a JavaScript 
// object system that looks like CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'nowrap',
    fontFamily: "ComingSoon",
    backgroundColor: Constants.defaultBackgroundColor,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '90%',
    fontFamily: "ComingSoon"
  },
  txtStyle: {
    fontFamily: "ComingSoon",
    color: "black",
    margin: 15
  },
  btnStyle: { backgroundColor: "transparent", borderColor: "black", borderWidth: 1, padding: 15, borderRadius: 5 },
  btnTxtStyle: {
    color: "black",
    fontFamily: "ComingSoon",
  }
});

