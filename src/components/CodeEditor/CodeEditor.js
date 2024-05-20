

// Importing necessary modules from react and react-native
import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

// CodeEditor function component
export const CodeEditor = ({
  initialCode,
  onCodeChanged,
  onValidateClick,
  validateIcon,
  textColor,
  backgroundColor,
  borderColor,
  textFont,
  placeholderText,
  showValidateBtn
}) => {
  // Creating a reference for the text input component 
  const textInput = useRef(null);

  // State hook to keep track of the editors content 
  const [content, setContent] = useState(initialCode || '');

  // Using useEffect to set the initial content of the editor once after first render 
  useEffect(() => {
    if (initialCode) {
      setContent(initialCode);
    }
  }, [initialCode]);

  // Function to handle changes in the editors content 
  const onContentChange = (text) => {
    setContent(text);
    // Checking if onCodeChanged callback is passed as props and calling it with text as argument 
    if (onCodeChanged) {
      onCodeChanged(text);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* TextInput component for editing the code */}
      <TextInput
        ref={textInput}
        multiline
        placeholder={placeholderText}
        value={content}
        onChangeText={onContentChange}
        style={{
          ...styles.codeEditor,                    // spread JS operator to combine styles
          color: textColor,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          fontFamily: textFont
        }}
      />

      {/* IconButton to save the changes */}
      {showValidateBtn && <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          onValidateClick &&
            onValidateClick(content);
        }}
      >
        <Icon name={validateIcon} size={30} color="#FFF" />
      </TouchableOpacity>}
    </View>
  );
}

// Object holding the styling for the CodeEditor and button
const styles = StyleSheet.create({
  codeEditor: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: '#03A9F4',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  }
});

