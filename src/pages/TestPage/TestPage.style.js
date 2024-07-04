import { StyleSheet } from "react-native";
import { Constants } from "src/constants/Constants";

// permet daccéder a des globales

/**
 * Ci-dessous, voici les styles à appliquer à la page TestPage
 *
 */
const styles = StyleSheet.create({
  dataListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Constants.defaultBackgroundColor,
  },
  blackText: {
    color: "black",
  },
});

export { styles };
