
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import useInterval from './useInterval.js'; //Your custom Hook for setting intervals.
import { CustomButton } from 'src/components/CustomButton/CustomButton.js';

const TextReader = ({ speedMs = 1000, text = "", fontFamily, textSize, textColor, backgroundColor, textBackgroundColor }) => {

    //Split the text for easy manipulation.
    const wordsArray = text?.split(" ");

    //States for the word counter and the current text displayed.
    const [counter, setCounter] = useState(0);
    const [currentText, setCurrentText] = useState('');

    //Reference to the ScrollView for auto-scrolling.
    const scrollRef = useRef();

    //Your custom Hook for setting intervals.
    useInterval(() => {
        //If it's end of the text, reset.
        if (counter === wordsArray?.length) {
            setCounter(0);
            setCurrentText('');
        }
        else {
            //Update the current text and increment the counter.
            setCurrentText(prevWords => prevWords + ' ' + wordsArray[counter]);
            setCounter(prevCount => prevCount + 1);
        }
        //Auto-scrolls down.
        scrollRef.current.scrollToEnd({ animated: true });
    }, speedMs); //function called every second.

    //Resets the text in case of press the refresh button
    const refreshText = () => {
        setCounter(0);
        setCurrentText('');
    };

    const textStyle = {
        backgroundColor: textBackgroundColor,
        color: textColor,
        fontSize: textSize,
        fontFamily: fontFamily,
        margin: 10,
        paddingRight: 10
    }

    return (

        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColor }]}
            onPress={refreshText}
        >
            {/*<CustomButton
                onClick={refreshText}
                buttonLogoName={"refresh"}
                buttonContainerStyle={styles.btnStyle}
                buttonTextStyle={styles.btnTxtStyle}
                isVisible={true}

            ></CustomButton>*/}

            <ScrollView ref={scrollRef}>
                <Text style={textStyle}>{currentText}</Text>
            </ScrollView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    refreshButton: {
        alignSelf: 'center',
    },
    btnStyle: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: "black",
        width: 100

    },
    btnTxtStyle: {
        color: "black",
        fontFamily: "ComingSoon",
    },
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    }
});

export default TextReader;

