import { StyleSheet } from "react-native";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * Ci-dessous, voici les styles à appliquer à ce SearchBar
 *
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    //flex: 1,
  },
  whiteText: {
    color: "white",
  },
  textInput: {
    borderRadius: 5,
    padding: 4,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    flex: 4,
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
  buttonContainerStyle: {
    flex: 1,
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,

    // IOS
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // ANDROID
    elevation: 2,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    //width: 50,
  },
  buttonTextStyle: {
    color: Constants.defaultContentColor,
    fontFamily: Constants.defaultFontFamily,
    fontSize: 18,
    marginLeft: 10,
  },
});

export { styles };
