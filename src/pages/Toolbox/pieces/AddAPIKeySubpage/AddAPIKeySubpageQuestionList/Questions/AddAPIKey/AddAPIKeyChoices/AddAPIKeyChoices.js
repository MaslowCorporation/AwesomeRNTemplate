/* eslint-disable no-unused-vars */
/* PLOP_INJECT_IMPORT */
// eslint-disable-next-line no-unused-vars
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const AddAPIKeyChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */

  };
};

/* Les différents strings à afficher pour UI, selon choix */
export const AddAPIKeyChoicesUI = () => {
  return {
    /* PLOP_INJECT_CHOICE_UI */

  };
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le string dUI à afficher selon valeur de choix
 */
export const AddAPIKeyChoiceUI = (choice) => {
  var object = AddAPIKeyChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return AddAPIKeyChoicesUI()[keyName];
};

/**
 * Les différents actions à effectuer, selon choix cliqué.
 *
 *
 **/
export const AddAPIKeyChoicesActions = {
  /* PLOP_INJECT_CHOICE_ACTION */

};
