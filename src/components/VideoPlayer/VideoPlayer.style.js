import { StyleSheet } from "react-native";
//import { Dimensions } from "react-native";

//const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

/**
 * Ci-dessous, voici les styles à appliquer à ce VideoPlayer
 *
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    /*borderRadius: 5,
    borderColor: "yellow",
    borderWidth: 3,*/
  },
  video: {
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  videoControls: {
    flex: 1,
    //borderRadius: 5,
    /*borderColor: "#cc00cc",
    borderWidth: 5,*/
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    //width: "50%",
    height: "100%",
    flexDirection: "row",
  },
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
  backForward: {
    flex: 1,
    /*borderRadius: 5,
    borderColor: "green",
    borderWidth: 1,*/
  },
  pauseResume: {
    flex: 2,
    justifyContent: "center",
    /*borderRadius: 5,
    borderColor: "brown",
    borderWidth: 1,*/
  },
});

export { styles };
