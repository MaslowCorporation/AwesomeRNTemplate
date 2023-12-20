import { React } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "../VideoPlayer.style";

export function Spinner(props) {
  return (

    <View
      style={[styles.videoSpinner, { backgroundColor: props.backgroundColor }]}
    >
      <ActivityIndicator size="large" color={props.color} />
    </View>
  );
}
