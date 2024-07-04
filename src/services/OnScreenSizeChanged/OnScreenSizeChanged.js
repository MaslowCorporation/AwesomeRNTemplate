/* PLOP_INJECT_IMPORT */
//import React from "react";

import { useEffect } from "react";
import { Dimensions } from "react-native";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 

 OnScreenSizeChanged({
  onScreenSizeChanged: ({ newWindowSize, newScreenSize }) => {
    

    onScreenSizeChanged({
      dataListRef: ref,
      newWindowSize: newWindowSize,
      newScreenSize: newScreenSize,
      props: props,
      setDimensions: setDimensions,
    });
  },
});


 * @param {*} onScreenSizeChanged, la callback a exécuter, quand la taille décran à changé.
 *
 * Cette fonction permet de créer un listener de changement de taille décran.
 */
const OnScreenSizeChanged = ({ onScreenSizeChanged }) => {
  /* PLOP_INJECT_CODE */

  useEffect(() => {
    // crée le listener de changement de taille décran
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {


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
