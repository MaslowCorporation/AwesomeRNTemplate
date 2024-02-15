/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} onBefore, callback déchauffement
 * @param {*} onDuring, callback de bizness iz going down
 * @param {*} onDone, callback de business is done
 * @param {*} onError, callback de bobo durant bizness
 *
 * @returns le résultat de cette computation
 *
 * Ceci est un pattern communément utilisé dans nos programmes
 */
const BeforeDuringAfterPattern = async ({
  onBefore,
  onDuring,
  onDone,
  onError,
}) => {
  /* PLOP_INJECT_CODE */

  try {
    await RunIfPossible({ func: onBefore, args: null });

    const result = await RunIfPossible({ func: onDuring, args: null });

    RunIfPossible({ func: onDone, args: result });

    return result;
  } catch (e) {
    RunIfPossible({ func: onError, args: e });

    return null;
  }
};

export { BeforeDuringAfterPattern };
