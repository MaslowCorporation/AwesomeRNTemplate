import i18next from 'i18next';
/* PLOP INJECT_IMPORT */
//import React from "react";

/* PLOP_INJECT_CODE */

/**
 * Linstance du singleton PlayerGTA.
 */
let instance;

/**
 * le state actuel du PlayerGTA.
 */
let state = {
  //
  id: null,
};

/**
 * Le all mighty PlayerGTA, qui nous permet un accès CRUD du ghetto.
 */
class PlayerGTA {
  /**
   * Le constructeur
   * qui ne construira quun seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error(i18next.t('x1KVUz3U'));
    }

    instance = this;
  }

  /**
   * Ceci permet dobtenir le PlayerGTA
   */
  GetSound() {
    return state.sound;
  }

  /**
   * Ceci permet de set des données dans le PlayerGTA
   */
  SetSound(newState) {
    state.sound = newState;
  }

  /**
   * Ceci permet de ...
   */
  action_1({ arg1, arg2 }) {
    return;
  }

  /**
   * Ceci permet de ...
   */
  action_2({ arg1, arg2 }) {
    return;
  }
}

let PlayerGTAInstance = Object.freeze(new PlayerGTA());

export { PlayerGTAInstance };
