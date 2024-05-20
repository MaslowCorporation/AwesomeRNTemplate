import { StyleSheet } from "react-native";
import { Constants } from "src/constants/Constants";

/**
 * Ci-dessous, voici les styles à appliquer
 *
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  blackText: {
    color: Constants.defaultContentColor,
  },
  list: {
    //margin: 5,

    borderRadius: 5,
    margin: 5,
    borderColor: "#000000",
    borderWidth: 1,
  },
});

export { styles };
