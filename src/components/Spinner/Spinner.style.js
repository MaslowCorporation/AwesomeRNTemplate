import { StyleSheet } from "react-native";
//import { Dimensions } from "react-native";

//const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

/**
 * Ci-dessous, voici les styles à appliquer à ce VideoPlayer
 *
 */
const styles = StyleSheet.create({
  videoSpinner: {
    flex: 1,
    /*borderRadius: 5,
    borderColor: "#ffffff",
    borderWidth: 1,*/
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export { styles };
