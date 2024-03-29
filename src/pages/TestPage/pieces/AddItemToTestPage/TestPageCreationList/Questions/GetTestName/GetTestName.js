/* PLOP_INJECT_IMPORT */

import {
  SqliteReduxTestPage
} from "src/reduxState/TestPage/TestPageGetterSetter";
import {
  SqliteReduxTestPageState
} from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import { AllGetTestName } from "./GetTestNameListMaker/AllGetTestName";

// eslint-disable-next-line no-unused-vars
import { GetTestNameChoices } from "./GetTestNameChoices/GetTestNameChoices";

// eslint-disable-next-line no-unused-vars
import { useNavigation, useRoute } from "@react-navigation/native";
import { CustomComponent } from "./Custom/custom";

// eslint-disable-next-line no-unused-vars
import { SaveCurrentItem } from "./GettersSetters/SaveCurrentItem";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée GetTestName, qui ....
 */
const GetTestName = () => {
  /* PLOP_INJECT_CODE */

  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();
  const currentItemUniqueId = TestPageState.itemUniqueId;
  const currentItem = SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);


  const route = useRoute();
  const navigation = useNavigation();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "GetTestName",

    // le type de question souhaité
    // "text" ou "number" ou "choices" ou "custom"
    type: "text",

    // la description de la question
    // en mode "text" ou "number" ou "choices"
    description: ({ answers, answer, answerIndex }) => {
      return app_strings.t("xK6jy8ax");
    },
    // les choix dispos pour lutilisateur, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return AllGetTestName({
        answers,
        answer,
        answerIndex,

        // PLOP_INJECT_CURRENT_ITEM

        currentItem,
      });
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: currentItem?.name,

    // callback de text changé (en mode "text")
    onTextChanged: (newText) => {
      currentItem != null ? SaveCurrentItem({ ...currentItem, name: newText }) : 42;
    },

    // la valeur par défaut a mettre dans le text input
    // (optionnel)
    defaultValue: ({ answers, answer, answerIndex }) =>
      currentItem?.name,

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // (optionnel)
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return answer?.value?.length > 0;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return app_strings.t("xdBhrfN");
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {
      return CustomComponent({
        answers,
        answer,
        answerIndex,
        onInput,
        route,
        navigation,
      });
    },
  };
};

export { GetTestName };
