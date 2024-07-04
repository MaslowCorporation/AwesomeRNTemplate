/* PLOP_INJECT_IMPORT */
import { React } from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./Spinner.style.js";

/**
 *
 * un objet props {} contenant:
 *
 * @param {*}
 *
 * @returns le ...
 */
function Spinner(props) {
  return (
    <View
      style={[styles.videoSpinner, { backgroundColor: props.backgroundColor }]}
    >
      <ActivityIndicator size="large" color={props.color} />
    </View>
  );
}

export { Spinner };
