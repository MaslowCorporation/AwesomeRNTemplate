import { StyleSheet } from "react-native";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * Ci-dessous, voici les styles à appliquer à la page LoginPage
 *
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    flexDirection: "column",
    //alignItems: "center",
    //justifyContent: "center",
  },
  textInput: {
    borderRadius: 5,
    padding: 4,
    margin: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,

    fontSize: 20,
    fontFamily: Constants.defaultFontFamily,

    // IOS
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // ANDROID
    elevation: 2,
  },
  evenContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buddhaContainerStyle: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  blackText: {
    color: Constants.defaultContentColor,
    //margin: 30,
    fontFamily: Constants.defaultFontFamily,
    fontSize: 18,
  },
  logoStyle: {
    //width: 64,
    //height: 64,
  },
  buttonContainerStyle: {
    backgroundColor: "lightgreen",
    padding: 20,
    borderRadius: 20,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 5, width: 5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 6, // Android

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTextStyle: {
    color: Constants.defaultContentColor,
    fontFamily: Constants.defaultFontFamily,
    fontSize: 18,
    marginLeft: 10,
  },
});

export { styles };
