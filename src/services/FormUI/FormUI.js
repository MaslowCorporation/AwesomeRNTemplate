import i18next from 'i18next';


/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// First, lets import all necessary components from react, and react native.
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CustomButton } from 'src/components/CustomButton/CustomButton';
import { ShowNotification } from '../ShowNotification/ShowNotification';
import { Constants } from 'src/constants/Constants';
import { TextInputWithButtons } from './TextInputWithButtons';
import { showSnackbar } from 'src/components/Messager/Messager';
import { OuiOuNon } from '../OuiOuNon/OuiOuNon';

export const PageState = {
  NoData: 0,
  DataLoading: 1,
  DataLoadingFailed: 2,
  DataLoaded: 3
};

export function FormUI({
  UI,
  initialFormInput,
  formPlaceholder,
  showForm = true,
  UIState,
  setUIState,
  fontFamily,
  otherButtons
}) {
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

      {showForm && <TextInputWithButtons
        placeholder={formPlaceholder}
        fontFamily={fontFamily}
        initialFormInput={formInput}
        validateBtnIcon={otherButtons[0].buttonIconName}
        onValidate={(text) => {
          const pageState = UIState.PageState;
          const workIsGoingOn = pageState == PageState.DataLoading;

          if (!workIsGoingOn) {
            setFormInput(text);
            otherButtons[0].onButtonClicked(text);
          } else {
            showSnackbar(i18next.t('xb9dUQ9T'));

            OuiOuNon({
              text: i18next.t('xWQ2YEPr'),
              onYesPressed: () => {
                setUIState(
                  JSON.stringify({
                    ...UIState,
                    PageState: PageState.NoData
                  })
                )

              },
            });
          }
        }}
      />}
      <View style={{ flexDirection: 'row' }}>

        {!showForm && otherButtons.map((btn) => <CustomButton
          key={btn.buttonIconName}
          onClick={() => {
            const pageState = UIState.PageState;
            const workIsGoingOn = pageState == PageState.DataLoading;

            if (!workIsGoingOn) {
              btn.onButtonClicked();
            } else {
              showSnackbar(i18next.t('x0vdnKW5'));

              OuiOuNon({
                text: i18next.t('xGmtzh7t'),
                onYesPressed: () => {
                  setUIState(
                    JSON.stringify({
                      ...UIState,
                      PageState: PageState.NoData
                    })
                  )

                },
              });
            }
          }}
          buttonLogoName={btn.buttonIconName}
          buttonContainerStyle={styles.input}
          isVisible={true}
        ></CustomButton>)}


      </View>
      <View style={[styles.UIcontainer]}>
        <UI UIState={UIState} setUIState={setUIState} />
      </View>
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
  UIcontainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'nowrap',
    fontFamily: "ComingSoon",
    width: "100%",
    height: "100%",
    backgroundColor: Constants.defaultBackgroundColor,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '90%',
    flex: 1,
    fontFamily: "ComingSoon"
  },
  txtStyle: {
    fontFamily: "ComingSoon",
    margin: 15
  },
  btnStyle: { backgroundColor: "transparent", },
  btnTxtStyle: {
    color: "black",
    fontFamily: "ComingSoon",
  }
});

