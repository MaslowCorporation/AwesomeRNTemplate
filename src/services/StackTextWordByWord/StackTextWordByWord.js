/* PLOP_INJECT_IMPORT */

// permet du state local
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import { React } from "react";

// styles de base
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import { styles } from "./pieces/UI/Styles/StackTextWordByWord.style.js";

/**
 *
 * un service/component
 *
 */
const StackTextWordByWord = (text) => {
  /* PLOP_INJECT_CODE */
  const string1Space = text.replace(/\s+/g, " ").trim();

  return string1Space.replace(/ /g, "\n");
};

export { StackTextWordByWord };
