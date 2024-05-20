import { GlobalChoiceListState } from "src/services/ChoiceListState/ChoiceListState";

/**
 *
 * @param {*} choicesState
 * @param {*} choixData
 * @param {*} setChoicesState
 * @param {*} index
 *
 */
export function setChoiceInChoices({
  choicesState,
  choixData,
  setChoicesState,
  index,
}) {
  const itemIndex = choicesState.choices.findIndex((item) => {
    return item.choiceValue === choixData.choiceValue;
  });

  // reset toutes les question en mode greenCheckmark = false,
  // (pour afficher uniquement le nouvel item tout juste cliqué avec un greenCheckmark)
  const resettedDataList = choicesState.choices.map((dataItem) => {
    dataItem.greenCheckmark = false;

    return dataItem;
  });

  // le tout juste cliqué est green
  resettedDataList[itemIndex].greenCheckmark = true;

  //;

  // modifie le state du QCM, pour
  // afficher le nouveau choix
  setChoicesState({ choices: resettedDataList });

  // stocke lindex de litem tt juste cliqué dessus
  // dans un singleton
  GlobalChoiceListState.setLastItemClickedIndex(itemIndex);
}
