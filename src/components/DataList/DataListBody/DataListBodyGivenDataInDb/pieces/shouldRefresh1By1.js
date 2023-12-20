import { DidObjectChange } from "src/services/DidObjectChange/DidObjectChange";
import { NumberIsBetween } from "src/services/NumberIsBetween/NumberIsBetween";

/**
 *
 * @param {*} previousState, les props de la fonction SingleItemsGivenNeeds,
 * avant le rerender en cours actuellement.
 *
 * @param {*} currentState, les props de la fonction SingleItemsGivenNeeds,
 * durant le rerender en cours actuellement.
 *
 * Ceci nous permet d'éviter les re-renders inutiles dans la FlatList.
 *
 * Par défaut, à chaque fois qu'un des éléments
 * de la FlatList update son state interne,
 * tous les autres items de la FlatList
 * sont rerendus, même si c'est pas nécéssaire.
 *
 * Pour éviter cela, cette fonction return:
 *
 * false, si cet item doit être re-render
 * true, si cet item ne nécessite pas de re-render.
 *
 * On applique donc des règles strictes,
 * pour limiter les re-renders.
 *
 *
 */
export const shouldRefresh1By1 = (previousState, currentState) => {
  /*
  
  console.log(`********************`);
  console.log(
    `re-render in progress.... 
    prev chosen one index: ${previousState.importantData?.currentIndex} 
    current chosen one index: ${currentState.importantData?.currentIndex}
    item index = ${currentState.index}.`
  );

  */

  // Si l'item en cours de refresh potentiel,
  // est aussi l'item actuellement visible à l'écran,
  // On refresh
  const itemIsChosenOne =
    currentState.index == currentState.importantData?.currentIndex;

  // Si l'item en cours de refresh potentiel,
  // est un PNJ, alors on refresh qu'une seule fois.
  const itemIsNPC =
    !itemIsChosenOne &&
    NumberIsBetween({
      number: currentState.index,
      start:
        currentState.importantData?.currentIndex -
        currentState.importantData.howManyNPCSOnEachSide,
      end:
        currentState.importantData?.currentIndex +
        currentState.importantData.howManyNPCSOnEachSide,
    });

  // est ce que des données importantes ont changé, ou pas ?
  const importantDataChanged = DidObjectChange({
    obj1: previousState.importantData,
    obj2: currentState.importantData,
    //prettyPrint: true,
  });

  // Ce PNJ était il le chosen juste avant le dernier re-render ?
  const THIS_NPC_WAS_CHOSEN_BEFORE_THIS_RERENDER =
    currentState.index == previousState.importantData?.currentIndex;

  /*
  console.log(`item index = ${currentState.index}.`);
  console.log(
    `First NPC index = ${
      currentState.importantData?.currentIndex -
      currentState.importantData.howManyNPCSOnEachSide
    }.`
  );
  console.log(
    `Last NPC index = ${
      currentState.importantData?.currentIndex +
      currentState.importantData.howManyNPCSOnEachSide
    }.`
  );
  */

  // Si l'item en cours de refresh potentiel,
  // est aussi l'item actuellement visible à l'écran,
  // et que les données importantes on changé d'un iota,
  // On refresh
  if (itemIsChosenOne && importantDataChanged) {
    /*console.log(
      `item index ${currentState.index} is the chosen one that needs a re-render`
    );*/

    // on refresh
    return false;
  }
  // Si l'item en cours de refresh potentiel,
  // est un PNJ, alors on refresh qu'une seule fois.
  else if (itemIsNPC && THIS_NPC_WAS_CHOSEN_BEFORE_THIS_RERENDER) {
    /*console.log(
      `item index ${currentState.index} is a NPC that needs a re-render`
    );*/

    // on refresh
    return false;
  }
  // Autrement, on ne refresh pas:
  else {
    //console.log(`item index ${currentState.index} is a empty placeholder.`);

    // on refresh pas
    return true;
  }
};
