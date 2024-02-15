/* PLOP_INJECT_IMPORT */

import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import React from "react"
import { CustomComponent } from "./Custom/custom";
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";


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

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: null,

    // un callback qui vérifie que linput est valide
    // (optionnel)
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      //

      const isValid = answer?.value?.length > 0;

      return isValid;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return app_strings.t("xlEu9A5o");
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {
      const AppState = SqliteReduxAppState.GetFreshestAppStateFirstRow();

      return <CustomComponent
        defaultAPIKey={AppState?.maslowAPIKey}
        onInput={onInput}
      />
    },
  };
};

export { AddAPIKey };
