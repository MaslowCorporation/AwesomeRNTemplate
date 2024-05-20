import i18next from 'i18next';
/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 * Linstance du singleton Timer.
 */
let instance;

/**
 * le state actuel du Timer.
 */
let timerState = {
  // lidentifiant du timer
  // permet suppression.
  timerId: null,

  // le moment ou le timer démarre.
  start: null,

  // la durée du
  // en millisecondes.
  remaining: null,

  // la callback a exécuter qd le temps est passé
  latestCallback: null,
};

/**
 * Le Timer.
 */
class CameraTimer {
  /**
   * Le constructeur
   * qui ne construira quun seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error(i18next.t('xYJkIqwm'));
    }

    instance = this;
  }

  /**
   * met le timer en standby.
   */
  pause() {
    // arrête le timer actuel
    clearTimeout(timerState.timerId);

    // efface lid du timer puisque il est dead
    timerState.timerId = null;

    // stocke la durée de temps restante
    // de façon à resume le timer
    // la ou il faut, si besoin.
    timerState.remaining -= Date.now() - timerState.start;

  }

  /**
   *
   * @returns  lid du timer tout juste crée.
   *
   * Ceci crée un  et retourne son id.
   */
  resume() {
    // si un timer existe déja,
    // ne fais rien
    if (timerState.timerId) {
      return;
    }

    // le timer démarre à cet instant T
    timerState.start = Date.now();

    // lance ze timer
    timerState.timerId = setTimeout(
      timerState.latestCallback,
      timerState.remaining
    );


  }

  /**
   *
   * @param {*} callback, function à exec qd temps écoulé.
   *
   * @param {*} delay, temps à attendre, en millisecondes.
   *
   * @returns crée le timer, et stocke son id et sa durée.
   *
   */
  start({ callback, delay }) {
    // si un timer existe déja,
    // ne fais rien
    if (timerState.timerId) {
      // arrête le timer actuel
      clearTimeout(timerState.timerId);

      // efface lid du timer puisque il est dead
      timerState.timerId = null;
    }

    // set la durée du timeout
    timerState.remaining = delay;

    // le timer démarre à cet instant T
    timerState.start = Date.now();

    // stocke la callback, pour pouvoir supprimer, puis
    // recréer le timer,
    // si besoin
    timerState.latestCallback = callback;

    // lance ze timer, et stocke lid pour suppression etc...
    timerState.timerId = setTimeout(
      timerState.latestCallback,
      timerState.remaining
    );


  }

  /**
   * met le timer en PLS.
   */
  kill() {
    if (timerState.timerId) {
      // arrête le timer actuel
      clearTimeout(timerState.timerId);

      //RunIfPossible({ func: timerState.latestCallback });

      // efface lid et consorts,
      // du timer puisque il est dead
      timerState.timerId = null;
      timerState.start = null;
      timerState.remaining = null;
      timerState.latestCallback = null;
    }
  }
}

let CameraTimerInstance = Object.freeze(new CameraTimer());

export { CameraTimerInstance };
