/* PLOP_INJECT_IMPORT */

import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import React from "react"
import { CustomComponent } from "./Custom/custom";


/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée AddAPIKey, qui ....
 */
const AddAPIKey = () => {
  /* PLOP_INJECT_CODE */


  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "AddAPIKey",

    // le type de question souhaité
    // "text" ou "number" ou "choices" ou "custom"
    type: "custom",

    // la valeur choisie/écrite par l'user
    // null (par défaut)
    value: null,

    // un callback qui vérifie que l'input est valide
    // (optionnel)
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      //console.log(`valiou: ${answer?.value?.length}`);

      const isValid = answer?.value?.length > 0;

      return isValid;
    },
    // un message d'erreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return app_strings.t("xlEu9A5o");
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {

      return <CustomComponent
        defaultAPIKey={answer?.value}
        onInput={onInput}
      />
    },
  };
};

export { AddAPIKey };
