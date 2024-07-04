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
    alignItems: "center",
    justifyContent: "center",
  },
  blackText: {
    color: Constants.defaultContentColor,
    margin: 30,
    fontFamily: Constants.defaultFontFamily,
    fontSize: 18,
  },
  logoStyle: {
    width: 64,
    height: 64,
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
