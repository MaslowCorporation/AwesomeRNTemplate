import { StyleSheet } from "react-native";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * Ci-dessous, voici les styles à appliquer à ce DataListItem
 *
 */
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 5,
    padding: 5,
    margin: 5,
    borderColor: "#000000",
    borderWidth: 1,

    // IOS
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // ANDROID
    elevation: 2,
  },
  itemThumbnail: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 128,
    height: 128,
  },
  itemContainerThumbnail: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },
  infoIconAndDescription: {
    flexDirection: "row",
    marginBottom: 6,
    marginTop: 6,
    marginLeft: 15,
  },
  infoIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  infoDescription: {
    //borderWidth: 1,
    borderColor: "black",
    flex: 1,
    fontSize: 16,
    marginTop: 5,
    fontFamily: Constants.defaultFontFamily,
  },
  itemName: {
    fontSize: 16,
    marginTop: 6,
    margin: 15,
    fontFamily: Constants.defaultFontFamily,
  },
});

export { styles };
