/* PLOP_INJECT_IMPORT */
//import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { BackHandler } from "react-native";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const OnHardwareBackPressed = ({ sound, stateValue, condition, action }) => {
  /* PLOP_INJECT_CODE */

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        RunIfPossible({ func: sound });

        if (condition()) {
          RunIfPossible({ func: action });

          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [stateValue])
  );

  // ...
};

export { OnHardwareBackPressed };
