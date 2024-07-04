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
 * Ceci nous permet déviter les re-renders inutiles dans la FlatList.
 *
 * Par défaut, à chaque fois quun des éléments
 * de la FlatList update son state interne,
 * tous les autres items de la FlatList
 * sont rerendus, même si cest pas nécéssaire.
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


  // Si litem en cours de refresh potentiel,
  // est aussi litem actuellement visible à lécran,
  // On refresh
  const itemIsChosenOne =
    currentState.index == currentState.importantData.currentIndex;

  // Si litem en cours de refresh potentiel,
  // est un PNJ, alors on refresh quune seule fois.
  const itemIsNPC =
    !itemIsChosenOne &&
    NumberIsBetween({
      number: currentState.index,
      start:
        currentState.importantData.currentIndex -
        currentState.importantData.howManyNPCSOnEachSide,
      end:
        currentState.importantData.currentIndex +
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
    currentState.index == previousState.importantData.currentIndex;


  // Si litem en cours de refresh potentiel,
  // est aussi litem actuellement visible à lécran,
  // et que les données importantes on changé dun iota,
  // On refresh
  if (itemIsChosenOne && importantDataChanged) {


    // on refresh
    return false;
  }
  // Si litem en cours de refresh potentiel,
  // est un PNJ, alors on refresh quune seule fois.
  else if (itemIsNPC && THIS_NPC_WAS_CHOSEN_BEFORE_THIS_RERENDER) {

    // on refresh
    return false;
  }
  // Autrement, on ne refresh pas:
  else {
    //;

    // on refresh pas
    return true;
  }
};
