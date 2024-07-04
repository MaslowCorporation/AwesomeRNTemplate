/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} sound,
 *
 * @returns le son
 *
 * Cette fonction permet de jouer du son
 */
const SoundPlayer = async ({ sound, onSuccess, onError }) => {
  /* PLOP_INJECT_CODE */
  try {
    if (sound != null) {
      await sound.replayAsync();

      RunIfPossible({ func: onSuccess });

      return sound;
    }
  } catch (e) {
    RunIfPossible({ func: onError, args: e });

    return;
  }
};

export { SoundPlayer };
