import i18next from 'i18next';
/* PLOP_INJECT_IMPORT */

// identifiant unique
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

// permet multilingue
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

// constantes globales
import { Constants } from "src/constants/Constants";

// getter/setter
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

// getter/setter
import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Le choix de catégorie ditem.
 */
const ChooseCategory = () => {
  /* PLOP_INJECT_CODE */
  // getter, contient le state actuel
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  const currentItemUniqueId = TestPageState.itemUniqueId;

  const currentItem =
    SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "ChooseCategory",

    type: "choices", //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return app_strings.t("chooseCategory");
    },
    // requis, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return [
        {
          choiceDescription: app_strings.t("besoinsDeBase"),
          choiceValue: Constants.besoinsDeBase,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsDeBase,
          onChoiceClicked: () => {

          },
        },
        {
          choiceDescription: app_strings.t("besoinsSpirituels"),
          choiceValue: Constants.besoinsSpirituels,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsSpirituels,
          onChoiceClicked: () => { },
        },
        {
          choiceDescription: app_strings.t("besoinsTerritoriaux"),
          choiceValue: Constants.besoinsTerritoriaux,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsTerritoriaux,
          onChoiceClicked: () => { },
        },
      ];
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: currentItem?.category ?? Constants.besoinsDeBase,

    // la valeur par défaut a mettre dans le text input
    //defaultValue: ({ answers, answer, answerIndex }) => "",

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 2,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return input != null;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return i18next.t('xRDM5lr2');
    },
  };
};

export { ChooseCategory };
