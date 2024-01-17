/* PLOP_INJECT_IMPORT */

import { React, memo } from "react";
import { MemoizedChosenOne } from "./ChosenOne";
import { MemoizedNPC } from "./NPC";
import { MemoizedEmptyPlaceholder } from "./EmptyPlaceholder";
import { NPCSAreNeededHere } from "./NPCSAreNeededHere";
import { itemIsEmptyPlaceholder } from "./itemIsEmptyPlaceholder";
import { shouldRefresh1By1 } from "./shouldRefresh1By1";

/**
 *
 * @param {*} item, l'item à transformer en UI
 *
 * @param {*} index, l'index de  l'item à transformer en UI
 *
 * @param {*} dataListStyle, styles/callbacks, a appliquer a l'item.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment l'index de l'item en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 *
 * @param {*} dataListItemHeight, la hauteur de l'UI de l'item.
 *
 * @param {*} dataListItemWidth, la largeur de l'UI de l'item.
 *
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns l'UI pour chaque item de la liste de données.
 * Selon que cet item soit un chose one, ou un NPC, ou un placeholder.
 */
const SingleItemGivenNeeds = ({
  item,
  index,
  dataListStyle,
  importantData,
  dataListItemHeight,
  dataListItemWidth,
  backgroundColor,
}) => {
  /*console.log(
    `item index ${index} is rendering. Item unique id: ${item.uniqueId}`
  );*/

  // si on doit seulement afficher la chose visible à l'écran (le chosen one)
  // et que l'item qu'on est sur le point d'afficher
  // n'est ni la chose actuellement visible à l'écran (chosen one), ni un PNJ
  // alors affiche rien. ou plutot affiche un placeholder vide prenant de la place cohérente.
  if (
    itemIsEmptyPlaceholder({
      dataListStyle,
      index,
      chosenOneIndex: importantData?.currentIndex,
    })
  ) {
    return (
      <MemoizedEmptyPlaceholder
        dataListItemHeight={dataListItemHeight}
        dataListItemWidth={dataListItemWidth}
        backgroundColor={backgroundColor}
      />
    );
  }

  // si on doit seulement afficher la chose visible à l'écran (le chosen one),
  // et que l'item sur le point d'etre affiché fait partie des PNJ entourant le chosen one,
  // affiche le PNJ
  else if (
    NPCSAreNeededHere({
      dataListStyle,
      index,
      chosenOneIndex: importantData?.currentIndex,
    })
  ) {
    return (
      <MemoizedNPC
        dataListItemHeight={dataListItemHeight}
        dataListItemWidth={dataListItemWidth}
        dataListStyle={dataListStyle}
        item={item}
        index={index}
      />
    );
  }

  // autrement, on affiche la chose importante.
  else {
    return (
      <MemoizedChosenOne
        dataListItemHeight={dataListItemHeight}
        dataListItemWidth={dataListItemWidth}
        dataListStyle={dataListStyle}
        item={item}
        index={index}
      />
    );
  }
};

const MemoizedSingleItemGivenNeeds = memo(
  SingleItemGivenNeeds,
  shouldRefresh1By1
);

export { MemoizedSingleItemGivenNeeds };
