/* PLOP_INJECT_IMPORT */
import { GetUniqueID } from 'src/services/GetUniqueID/GetUniqueID';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';
import { AllGetToolboxChoice } from './GetToolboxChoiceListMaker/AllGetToolboxChoice';

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import { GetToolboxChoiceChoices } from './GetToolboxChoiceChoices/GetToolboxChoiceChoices';

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import { useNavigation, useRoute } from '@react-navigation/native';

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée GetToolboxChoice, qui ....
 */
const GetToolboxChoice = () => {
  /* PLOP_INJECT_CODE */
  const navigation = useNavigation();
  const currentItem = {
    navigation,
  };

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: 'GetToolboxChoice',

    // le type de question souhaité
    // "text" ou "number" ou "choices" ou "custom"
    type: 'choices',

    // la description de la question
    // en mode "text" ou "number" ou "choices"
    description: ({ answers, answer, answerIndex }) => {
      return app_strings.t('GetToolboxChoice');
    },
    // les choix dispos pour lutilisateur, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return AllGetToolboxChoice({
        answers,
        answer,
        answerIndex,

        // PLOP_INJECT_CURRENT_ITEM
        currentItem,
      });
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: null,

    // callback de text changé (en mode "text")
    onTextChanged: newText => { },

    // la valeur par défaut a mettre dans le text input
    // (optionnel)
    defaultValue: ({ answers, answer, answerIndex }) => '',

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
      return true;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return app_strings.t('WrongTool');
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {
      return;
    },
  };
};

export { GetToolboxChoice };
