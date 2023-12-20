/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 * L'instance du singleton ChoiceListState.
 */
let instance;

/**
 * le state actuel du ChoiceListState.
 */
let choiceListState = {
  // l'index du tout dernier item cliqué dans un DataList vertical/horizontal
  lastItemClickedIndex: null,

  // l'index de l'avant dernier item cliqué dans un DataList vertical/horizontal
  avantDernierItemClickedIndex: null,
};

/**
 * Le ChoiceListState.
 *
 * Ceci est un dirty (clever ? ;-) hack
 * pour pouvoir mémoiser correctement
 * le VerticalFlatList ou HorizontalFlatList.
 */
class ChoiceListState {
  /**
   * Le constructeur
   * qui ne construira qu'un seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

  /**
   *
   * @param lastItemClickedIndex, le dernier index d'item cliqué
   */
  setLastItemClickedIndex(lastItemClickedIndex) {
    // stocke le dernier index d'item cliqué
    choiceListState.lastItemClickedIndex = lastItemClickedIndex;
  }

  /**
   *
   * @returns  le lastItemClickedIndex stocké
   *
   */
  getLastItemClickedIndex() {
    return choiceListState.lastItemClickedIndex;
  }
}

let GlobalChoiceListState = Object.freeze(new ChoiceListState());

export { GlobalChoiceListState };
