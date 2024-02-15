/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 *
 * @returns "PORTRAIT" ou "PAYSAGE"
 *
 * Cette fonction permet de savoir comment est orienté lécran
 */
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
const GetOrientation = ({ onOrientationChanged }) => {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    // lorientation actuelle est stockée comme valeur de départ du state, AKA orientation
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  // met en place le listener qui nous dira si lécran
  // est debout ou couché
  useEffect(() => {
    // le callback qui rafraichira lUI
    // quand lorientation changera
    const callback = () => {
      const newOrientation = isPortrait() ? "PORTRAIT" : "LANDSCAPE";

      setOrientation(newOrientation);

      onOrientationChanged && onOrientationChanged(newOrientation);
    }

    // lance le listener dorientation.
    // retourne de quoi pouvoir arreter le lister si besoin
    const sub = Dimensions.addEventListener("change", callback);

    return () => {
      // arrete le listener
      sub.remove();
    };
  }, []);

  // retourne lorientation actuelle
  return orientation;
};

export { GetOrientation };
