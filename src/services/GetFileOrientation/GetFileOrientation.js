/* PLOP_INJECT_IMPORT */

// permet du state local
// eslint-disable-next-line no-unused-vars
import { React } from "react";

// styles de base
// eslint-disable-next-line no-unused-vars
import { styles } from "./pieces/UI/Styles/GetFileOrientation.style.js";

/**
 * 
 * @param {*} width 
 * @param {*} height 
 * 
 * @returns "landscape" | "portrait"
 */
const GetFileOrientation = (width, height) => {
  /* PLOP_INJECT_CODE */
  if (width >= height) {
    return "landscape";
  } else {
    return "portrait";
  }
};

export { GetFileOrientation };
