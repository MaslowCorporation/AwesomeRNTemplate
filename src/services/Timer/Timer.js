/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 * L'instance du singleton Timer.
 */
let instance;

/**
 * le state actuel du Timer.
 */
let timerState = {
  // l'identifiant du timer
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
   * met le timer en standby.
   */
  pause() {
    // arrête le timer actuel
    clearTimeout(timerState.timerId);

    // efface l'id du timer puisque il est dead
    timerState.timerId = null;

    // stocke la durée de temps restante
    // de façon à resume le timer
    // la ou il faut, si besoin.
    timerState.remaining -= Date.now() - timerState.start;

    console.log(
      `On à mit en pause le timer, il restera ${timerState.remaining} millisecondes.`
    );
  }

  /**
   *
   * @returns  l'id du timer tout juste crée.
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

    console.log(
      `On à redémarré le timer, il reste ${timerState.remaining} millisecondes.`
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

      // efface l'id du timer puisque il est dead
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

    // lance ze timer, et stocke l'id pour suppression etc...
    timerState.timerId = setTimeout(
      timerState.latestCallback,
      timerState.remaining
    );

    /*console.log(
      `On à démarré le timer, il dure ${timerState.remaining} millisecondes.`
    );*/
  }

  /**
   * met le timer en PLS.
   */
  kill() {
    if (timerState.timerId) {
      // arrête le timer actuel
      clearTimeout(timerState.timerId);

      RunIfPossible({ func: timerState.latestCallback });

      // efface l'id et consorts,
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
