import { StyleSheet } from "react-native";
import { Constants } from "src/constants/Constants";

// permet daccéder a des globales

/**
 * Ci-dessous, voici les styles à appliquer à la page Toolbox
 *
 */
const styles = StyleSheet.create({
  dataListContainer: {
    backgroundColor: Constants.defaultBackgroundColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blackText: {
    color: "black",
  },
});

export { styles };
