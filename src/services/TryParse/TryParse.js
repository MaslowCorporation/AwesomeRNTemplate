/* PLOP_INJECT_IMPORT */

// permet du state local
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import { React } from "react";

// styles de base
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import { styles } from "./pieces/UI/Styles/TryParse.style.js";

/**
 *
 * un service/component
 *
 */
const TryParse = (txt) => {
  /* PLOP_INJECT_CODE */
  try {
    return JSON.parse(txt?.trim());
  } catch (e) {
    return null;
  }
};

export { TryParse };
