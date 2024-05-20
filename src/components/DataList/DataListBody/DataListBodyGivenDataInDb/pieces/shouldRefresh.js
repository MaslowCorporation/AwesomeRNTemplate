//import { ChoiceListState } from "src/services/ChoiceListState/ChoiceListState";

/**
 *
 * @param {*} previousState, les props de la fonction MemoDataListItem,
 * avant le rerender en cours actuellement.
 *
 * @param {*} currentState, les props de la fonction MemoDataListItem,
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
 * A partir de maintenant,
 * une fois le render initial
 * de chaque item individuel effectué,
 * dans une flatlist 'horizontal' ou 'vertical',
 *
 * On effectue un rerender seulement 
 * si la condition 1 est true, 
 * ou que la condition 2 ou 3 est true,
 *
 * 1) Lindex de litem correspond à lindex du tout dernier item cliqué.
 * En Booléen:
 *

currentState.index == currentState.importantData.lastItemClickedIndex

return true si litem en cours de re-render est le tout dernier item cliqué dessus
return false si cest pas lélu
 
 *
 * 2) Une ou plusieurs données importantes
 * (previousState/currentState.importantData) à changé.
 * En booléen, Avec la fonction:
 *

DidObjectChange(previousState.importantData, currentState.importantData)
 
return true si des données importantes ont changé dans importantData
return false si aucune donnée importante na changé dans importantData

 *
 * 3) Une ou plusieurs données importantes
 * à changé, dans item.
 * En booléen, Avec la fonction:
 *

DidObjectChange(previousState.item, currentState.item)
 
return true si des données de litem ont changé
return false si aucune donnée importante na changé dans litem

 *
 * Si la première condition est true:
 * (item à lécran est litem sur le point detre re-render)
 *
 * et que lune des 2 conditions suivantes est true:
 * (item et/ou importantData à changé)
 *
 * return false (re-render nécessaire)
 *
 * sinon, return true (re-render pas nécessaire)
 *
 *
 */
export const shouldRefresh = (previousState, currentState) => {
  /*
  // cet item sur le point dêtre re-rendu,
  // est aussi litem dernièrement cliqué dessus ?
  const lastItemClickedIndex = ChoiceListState.getLastItemClickedIndex();
  const itemBeenClickedOn =
    lastItemClickedIndex != null && currentState.index == lastItemClickedIndex;

  //;

  

  // lobjet importantData à changé ?
  const importantDataChanged = DidObjectChange({
    obj1: previousState.importantData,
    obj2: currentState.importantData,
    //prettyPrint: true,
  });

  // lobjet item à changé ?
  const itemChanged = DidObjectChange({
    obj1: previousState.item,
    obj2: currentState.item,
    //prettyPrint: true,
  });

  // refresh nécessaire ? (oui ou non)
  const weNeedRefresh =
    itemBeenClickedOn || importantDataChanged || itemChanged;

  

  // si litem à lécran correspond à litem dernièrement cliqué dessus,
  // ou lavant dernier item cliqué,
  // re-render (return false)
  if (itemBeenClickedOn || itemIsCheckmarkedButShouldnt) {
    return false;
  }

  // autrement, on ne re-render pas
  // (return true)
  else {
    return true;
  }

  */

  return false;
};
