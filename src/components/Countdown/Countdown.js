// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useEffect } from "react";

// import all the components we are going to use

//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 
<Countdown
  direction={"decroissant"} // decroissant, en mode 5 4 3 2 1.... croissant en mode 1 2 3 4 5....
  dureeSecondes={props.maxVideoDuration}
  textColor={props.color}
></Countdown>

 *
 * @param {*}
 *
 * @returns un compteur montant ou descendant
 */
const Countdown = (props) => {
  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  if (props.direction === "croissant") {
    return (
      <Stopwatch
        laps
        msecs={false}
        //Time Duration
        start={props.start}
        //To start
        reset={props.reset}
        //To reset
        options={options(props)}
        //options for the styling
        handleFinish={() => {
          RunIfPossible({ func: props.onDone });
        }}
        //can call a function On finish of the time
        getTime={(time) => {
          ///*
        }}
      />
    );
  } else if (props.direction === "decroissant") {
    return (
      <Timer
        totalDuration={props.dureeSecondes * 1000}
        msecs={false}
        //Time Duration
        start={props.start}
        //To start
        reset={props.reset}
        //To reset
        options={options(props)}
        //options for the styling
        handleFinish={() => {
          RunIfPossible({ func: props.onDone });
        }}
        //can call a function On finish of the time
        getTime={(time) => {
          ///*
        }}
      />
    );
  } else {
    return;
  }
};

const options = (props) => {
  return {
    container: {
      backgroundColor: "transparent",
      padding: 5,
      //borderRadius: 5,
      //width: 200,
      alignItems: "center",
    },
    text: {
      fontSize: 25,
      color: props.textColor,
      marginLeft: 7,
      fontFamily: props.fontFamily,
    },
  };
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.
    ///*

    return () => {
      // Anything in here is fired on component unmount.
      ///*
    };
  }, []);
};

export { Countdown };
