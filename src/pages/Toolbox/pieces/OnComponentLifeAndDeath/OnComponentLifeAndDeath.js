/* PLOP_INJECT_IMPORT */

// permet lifecycle
import { useEffect } from "react";
import { MarkScreenAsMounted } from "../NavHelpers/MarkScreenAsMounted";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
export const OnComponentLifeAndDeath = () => {
  /* PLOP_INJECT_CODE */

  useEffect(() => {
    // Anything in here is fired on component mount.

    // ce petit timeout permet une navigation gracieuse entre écran
    // react-navigation est un peu lent.
    setTimeout(() => MarkScreenAsMounted(), 100);

    return () => {
      // Anything in here is fired on component unmount.
      SqliteReduxToolboxState.ResetState();
    };
  }, []);
};
