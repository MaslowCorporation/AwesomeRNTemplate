

import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

/**
 * 
 * @param {*} inputs, a list of objects {
 *    title: the title of the input,
 * 
 *    id: a unique identifier,
 * 
 *    type: one of: 
 * 'textinput_text', 
 * 'textinput_number', 
 * 'choice_list',
 * 'clickable_choice'
 * 
 *    onClick: a callback to call when the clickable choice is clicked
 * 
 *    choices: a list of objects {
 *      title: the title of the choice,
 *      value: the actual value of the choice,
 *    }, each one of these objects represents an individual choice
 * } 
 * @param {*} onSubmit, callback that gets executed when the submit button is pressed.
 * this callback provides you with ths same array as inputs, but with an additional
 * .output value
 * 
 * @param {*} modalVisible, is the modal visible or not ?
 * 
 * @param {*} showModalButton, do we show the show modal button, or not ?
 * 
 * @param {*} fontFamily, the font family to be used in the modal
 * 
 * @returns a nice modal */
const ScrollableModal = ({
  inputs,
  onSubmit,
  onCancel,
  modalVisible = true,
  showModalButton = true,
  fontFamily = 'Arial', // Default font family is Arial
  textColor = 'black',
}) => {
  // Define state variables
  const [answers, setAnswers] = useState(inputs);
  const [isVisible, setIsVisible] = useState(modalVisible);

  console.log(`inputs modal: ${JSON.stringify(inputs, null, 2)}`)
  // Update modal visibility when prop value changes
  useEffect(() => {
    setIsVisible(modalVisible);
  }, [modalVisible]);

  // Update input list when prop value changes
  useEffect(() => {
    setAnswers(inputs);
  }, [inputs]);

  // Handle form submission
  const handleSubmit = () => {
    setIsVisible(false);
    onSubmit && onSubmit(answers);
    onCancel && onCancel();
  };

  // Handle input field value change
  const handleAnswerChange = (id, output) => {
    const updatedAnswers = answers?.map(answer => {
      if (answer.id === id) {
        return { ...answer, output };
      }
      return answer;
    });
    setAnswers(updatedAnswers);
  };


  return (
    <View>
      {/* Render the button to open the modal if showModalButton is true */}
      {showModalButton && (
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Text style={{ fontFamily }}>Open Modal</Text>
        </TouchableOpacity>
      )}
      {/* Scrollable Modal */}
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => handleSubmit()}
      >
        <ScrollView>
          <View style={styles.modalContainer}>
            {/* Check if inputs array is empty or null */}
            {inputs && inputs.length > 0 ? (
              inputs.map(input => (
                <View key={input.id}>
                  {/* Render the title of the input field */}
                  <Text style={{ fontFamily, marginTop: 20, color: textColor }}>{input.title}</Text>
                  {/* Render input fields based on input type */}
                  {
                    input.type === 'textinput_text' && (
                      <TextInput
                        defaultValue={input.output}
                        style={[styles.textInput, { fontFamily, color: textColor }]}
                        onChangeText={output => handleAnswerChange(input.id, output)}
                      />
                    )
                  }
                  {
                    input.type === 'textinput_number' && (
                      <TextInput
                        style={[styles.textInput, { fontFamily }]}
                        keyboardType="numeric"
                        onChangeText={output => handleAnswerChange(input.id, output)}
                      />
                    )
                  }
                  {
                    input.type === 'choice_list' && (
                      <Picker
                        style={[styles.picker]}
                        selectedValue={answers?.find(answer => answer.id === input.id)?.output}
                        onValueChange={output => handleAnswerChange(input.id, output)}
                      >
                        {/* Render choice items */}
                        {input.choices.map(choice => (
                          <Picker.Item
                            color={textColor}
                            key={choice.value}
                            label={choice.title}
                            value={choice.value}
                          />
                        ))}
                      </Picker>
                    )
                  }
                  {
                    input.type === 'clickable_choice' && (
                      <TouchableOpacity
                        style={[styles.submitButton, { fontFamily }]}
                        onPress={input.onClick}
                      >
                        <Text style={{ color: textColor, fontFamily }}>{input.buttonText ?? input.title}</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
              ))
            ) : (
              // Render a message if inputs array is empty or null
              // eslint-disable-next-line react/no-unescaped-entities
              <Text style={{ fontFamily, color: textColor }}>
                There s no inputs specified... Add an array of inputs, sir.
              </Text>
            )}
            {/* Render the submit button */}
            {onSubmit && <TouchableOpacity
              style={[styles.submitButton, { fontFamily }]}
              onPress={handleSubmit}
            >
              <Text style={{ color: 'white', fontFamily }}>Submit</Text>
            </TouchableOpacity>}
          </View>
        </ScrollView>
      </Modal>
    </View >
  );
};

// Styling
const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
};

export { ScrollableModal };
