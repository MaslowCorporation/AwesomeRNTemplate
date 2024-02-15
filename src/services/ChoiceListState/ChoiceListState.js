import i18next from 'i18next';
/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 * Linstance du singleton ChoiceListState.
 */
let instance;

/**
 * le state actuel du ChoiceListState.
 */
let choiceListState = {
  // lindex du tout dernier item cliqué dans un DataList vertical/horizontal
  lastItemClickedIndex: null,

  // lindex de lavant dernier item cliqué dans un DataList vertical/horizontal
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
   * qui ne construira quun seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error(i18next.t('xPRoIUP'));
    }

    instance = this;
  }

  /**
   *
   * @param lastItemClickedIndex, le dernier index ditem cliqué
   */
  setLastItemClickedIndex(lastItemClickedIndex) {
    // stocke le dernier index ditem cliqué
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
