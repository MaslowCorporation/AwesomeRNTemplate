import { useRef } from "react";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} setCurrentIndex
 *
 * @returns un callback quand l'item visible à l'écran à changé.
 */
export const OnViewableItemsChanged = ({ setCurrentIndex }) => {
  return useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      const newIndex = viewableItems[0]?.index;

      //console.log(`how many viewable items ?: ${viewableItems.length}`);

      // exécute la callback de set index d'item
      RunIfPossible({
        func: setCurrentIndex,
        args: newIndex,
      });
    }
  });
};
