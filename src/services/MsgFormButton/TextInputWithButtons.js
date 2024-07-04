import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CustomButton } from 'src/components/CustomButton/CustomButton';
import { StyleSheet } from 'react-native';

export const TextInputWithButtons = ({ initialFormInput, placeholder, onValidate, fontFamily }) => {
    const [text, setText] = useState(initialFormInput ?? '');

    const handleDelete = () => {
        setText('');
    };

    const handleValidate = () => {
        onValidate(text);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CustomButton
                onClick={handleDelete}
                buttonLogoName={"backspace-reverse-outline"}
                buttonContainerStyle={styles.btnStyle}
                isVisible={true}
            ></CustomButton>
            <TextInput
                style={{ flex: 1, borderWidth: 1, padding: 8, margin: 8, fontFamily: fontFamily }}
                placeholder={placeholder}
                value={text}
                onChangeText={setText} />

            <CustomButton
                onClick={handleValidate}
                buttonLogoName={"check-outline"}
                buttonContainerStyle={styles.btnStyle}
                isVisible={true}

            ></CustomButton>
        </View>
    );
};

// Defining the styles that will be used by the components
const styles = StyleSheet.create({

    btnStyle: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: "black"
    },
});

