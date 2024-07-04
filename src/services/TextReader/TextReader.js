import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import useInterval from './useInterval.js'; //Your custom Hook for setting intervals.

const TextReader = ({
    speedMs = 1000,
    text = "",
    fontFamily,
    textSize,
    textColor,
    backgroundColor,
    textBackgroundColor,
    animate = true,
    animateLoop = true, // New prop for looping animation
}) => {
    const wordsArray = text?.split(" ");
    const [counter, setCounter] = useState(0);
    const [currentText, setCurrentText] = useState('');

    const scrollRef = useRef();

    useInterval(() => {
        //console.log(`counter: ${counter}`);
        //console.log(`words length: ${wordsArray?.length}`);

        if (counter >= wordsArray?.length) {

            if (animateLoop) {
                setCounter(0);
                setCurrentText('');
            }
        } else {
            if (animate) {
                //console.log(`animate the text word by word`);

                setCurrentText(prevWords => prevWords + ' ' + wordsArray[counter]);
                setCounter(prevCount => prevCount + 1);
            } else {
                //console.log(`add a block of words`);

                setCurrentText(wordsArray.join(' '));
                setCounter(wordsArray?.length);
            }

            //console.log(`elder scroll !`);
            scrollRef?.current?.scrollToEnd({ animated: true });

        }

    }, speedMs);

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
    };

    return (
        <View
            style={[styles.container, { backgroundColor: backgroundColor }]}
        >
            <ScrollView ref={scrollRef}>
                <Text style={textStyle}>{currentText}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    refreshButton: {
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    }
});

export default TextReader;
