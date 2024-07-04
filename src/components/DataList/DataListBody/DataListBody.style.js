import { StyleSheet } from "react-native";

/**
 * Ci-dessous, voici les styles à appliquer à ce DataListBody
 *
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  verticalFlatListStyle: {
    flex: 1,

    // trucs de bordure et ombres
    padding: 5,
    margin: 5,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    // IOS
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // ANDROID
    elevation: 2,
  },
});

export { styles };
