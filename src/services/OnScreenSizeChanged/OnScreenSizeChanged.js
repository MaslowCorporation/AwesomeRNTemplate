/* PLOP_INJECT_IMPORT */
//import React from "react";

import { useEffect } from "react";
import { Dimensions } from "react-native";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 

 OnScreenSizeChanged({
  onScreenSizeChanged: ({ newWindowSize, newScreenSize }) => {
    console.log("screen size changed");

    onScreenSizeChanged({
      dataListRef: ref,
      newWindowSize: newWindowSize,
      newScreenSize: newScreenSize,
      props: props,
      setDimensions: setDimensions,
    });
  },
});


 * @param {*} onScreenSizeChanged, la callback a exécuter, quand la taille d'écran à changé.
 *
 * Cette fonction permet de créer un listener de changement de taille d'écran.
 */
const OnScreenSizeChanged = ({ onScreenSizeChanged }) => {
  /* PLOP_INJECT_CODE */

  useEffect(() => {
    // crée le listener de changement de taille d'écran
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        console.log("sa tangue sur le bateau ohéohéohé !");

        // exécute la callback de changement
        RunIfPossible({
          func: onScreenSizeChanged,
          args: { newWindowSize: window, newScreenSize: screen },
        });
      }
    );

    // quand le component parent est détruit, stoppe le listener
    return () => subscription?.remove();
  });
};

export { OnScreenSizeChanged };
