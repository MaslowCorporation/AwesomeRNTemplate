import { StyleSheet } from "react-native";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    padding: 4,
    margin: 5,
    //height: 50,
    width: "90%",
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
});

export { styles };
