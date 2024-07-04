import i18next from 'i18next';
/* PLOP_INJECT_IMPORT */

// un identifiant unique
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

// permet multilingue
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// permet choix conditionnel
import { OuiOuNon } from "src/services/OuiOuNon/OuiOuNon";

// permet accès CRUD à une base de données Sqlite + Redux
import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";
import { GoToTestPageList } from "../../../NavHelpers/GoToTestPageList";

import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

import { useRoute } from "@react-navigation/native";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Nous permet de supprimer un item de la liste ditems.
 */
const DeleteItemOrNot = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "DeleteItemOrNot",

    type: "choices", //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return app_strings.t("pressToDelete");
    },
    // requis, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return [
        {
          choiceDescription: app_strings.t("poubelle"),
          choiceValue: true,
          choiceImgUrl: "",
          choiceImgPath: "",
          //greenCheckmark: answer?.value == true,
          onChoiceClicked: () => {
            onSupprimeVraimentOuPas(route);
          },
        },
      ];
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: false,

    // la valeur par défaut a mettre dans le text input
    defaultValue: ({ answers, answer, answerIndex }) => "",

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return true;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return i18next.t('xoG44AdY');
    },
  };
};

/**
 *
 * permet suppression ditem conditionnelle,
 * pour éviter freakout et cassage de téléphone.
 *
 */
const onSupprimeVraimentOuPas = (route) => {
  OuiOuNon({
    clickSound: PlayerGTAInstance.GetSound(),
    text: app_strings.t("doWeDelete"),
    onYesPressed: () => {
      deleteItemAndGoBackToList();
    },
  });
};

/**
 *
 * Retournons à la liste de données,
 * et supprimons cet item aussi.
 *
 */
const deleteItemAndGoBackToList = () => {
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  const currentItemUniqueId = TestPageState.itemUniqueId;
  const currentItem =
    SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);

  // direction poubelos pour le tuto
  SqliteReduxTestPage.DeleteSpecificRowsFromDB({
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
    onSuccess: (qtyAffected) => {


      // retour à la maison
      GoToTestPageList();
    },
    onError: (e) => {
      //
    },
  });
};

export { DeleteItemOrNot };
