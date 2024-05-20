/* PLOP_INJECT_IMPORT */

import { React, memo } from "react";
import { MemoizedChosenOne } from "./ChosenOne";
import { MemoizedNPC } from "./NPC";
import { MemoizedEmptyPlaceholder } from "./EmptyPlaceholder";
import { NPCSAreNeededHere } from "./NPCSAreNeededHere";
import { itemIsEmptyPlaceholder } from "./itemIsEmptyPlaceholder";

/**
 *
 * @param {*} item, litem à transformer en UI
 *
 * @param {*} index, lindex de  litem à transformer en UI
 *
 * @param {*} dataListStyle, styles/callbacks, a appliquer a litem.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment lindex de litem en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 *
 * @param {*} dataListItemHeight, la hauteur de lUI de litem.
 *
 * @param {*} dataListItemWidth, la largeur de lUI de litem.
 *
 * @param {*} backgroundColor, la couleur darrière plan
 * de lécran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 * @returns lUI pour chaque item de la liste de données.
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

  // si on doit seulement afficher la chose visible à lécran (le chosen one)
  // et que litem quon est sur le point dafficher
  // nest ni la chose actuellement visible à lécran (chosen one), ni un PNJ
  // alors affiche rien. ou plutot affiche un placeholder vide prenant de la place cohérente.
  if (
    itemIsEmptyPlaceholder({
      dataListStyle,
      index,
      chosenOneIndex: importantData.currentIndex,
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

  // si on doit seulement afficher la chose visible à lécran (le chosen one),
  // et que litem sur le point detre affiché fait partie des PNJ entourant le chosen one,
  // affiche le PNJ
  else if (
    NPCSAreNeededHere({
      dataListStyle,
      index,
      chosenOneIndex: importantData.currentIndex,
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

const MemoizedSingleItemGivenNeeds = memo(SingleItemGivenNeeds);

export { MemoizedSingleItemGivenNeeds };
