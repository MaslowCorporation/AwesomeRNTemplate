import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";

// chargeons les fonts.
export const FetchFonts = async () => {
  return Font.loadAsync({
    ComingSoon: require("assets/fonts/ComingSoon-Regular.ttf"),
    PriceDown: require("assets/fonts/pricedown.ttf"),
    Fredoka: require("assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("assets/fonts/Fredoka-Bold.ttf"),
    ...MaterialCommunityIcons.font,
  });
};
