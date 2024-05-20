import { useRef } from "react";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} setCurrentIndex
 *
 * @returns un callback quand litem visible à lécran à changé.
 */
export const OnViewableItemsChanged = ({ setCurrentIndex }) => {
  return useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      const newIndex = viewableItems[0]?.index;

      //;

      // exécute la callback de set index ditem
      RunIfPossible({
        func: setCurrentIndex,
        args: newIndex,
      });
    }
  });
};
