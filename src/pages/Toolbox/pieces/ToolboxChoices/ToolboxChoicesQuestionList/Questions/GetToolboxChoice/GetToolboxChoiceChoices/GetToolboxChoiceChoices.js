import { SetPageState } from "src/pages/Toolbox/pieces/NavHelpers/SetPageState.js";
import { app_strings } from "../../../../../../../../stringRepos/AppStrings/AppStrings.js";

/* PLOP_INJECT_IMPORT */
import { DatabaseObjects } from 'src/reduxState/DatabaseObjects';
import { RestoreLocalDatabasesFromCloud } from 'src/services/LocalDatabase/RestoreLocalDatabasesFromCloud';
import { SaveLocalDatabasesToCloud } from 'src/services/LocalDatabase/SaveLocalDatabasesToCloud';
import { ShowNotification } from 'src/services/ShowNotification/ShowNotification';
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { GoogleLogin, GoogleLogout, IsSomeUserLoggedIn } from "src/services/GoogleLogin/GoogleLogin.js";
import { showSnackbar } from "src/components/Messager/Messager.js";


/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const GetToolboxChoiceChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */
    SaveDBCloud: 0,
    BackupDBCloud: 1,
    AddAPIKey: 2,
    LoginLogout: 3
  };
};

/* Les différents strings à afficher pour UI, selon choix */
export const GetToolboxChoiceChoicesUI = () => {
  const userData = IsSomeUserLoggedIn();
  const logoutStr = `${app_strings.t('Logout')}
${userData?.username}`

  return {
    /* PLOP_INJECT_CHOICE_UI */
    AddAPIKey: app_strings.t('AddAPIKey'),
    SaveDBCloud: app_strings.t('SaveDBCloud'),
    BackupDBCloud: app_strings.t('BackupDBCloud'),
    LoginLogout: userData ? logoutStr : app_strings.t('Login'),
  };
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le string d'UI à afficher selon valeur de choix
 */
export const GetToolboxChoiceChoiceUI = choice => {
  var object = GetToolboxChoiceChoices();

  const keyName = Object.keys(object).find(key => object[key] === choice);

  return GetToolboxChoiceChoicesUI()[keyName];
};

/**
 * Les différents actions à effectuer, selon choix cliqué.
 *
 *
 **/
export const GetToolboxChoiceChoicesActions = {
  /* PLOP_INJECT_CHOICE_ACTION */
  SaveDBCloud: async ({ choice, answers, answer, answerIndex, currentItem }) => {

    SaveLocalDatabasesToCloud({
      SqliteReduxObjects: DatabaseObjects,
      onSuccess: (data) => {
        ShowNotification({
          id: 0,
          title: "remindme",
          body: app_strings.t("xNUgKxo"),
          extra: null,
        });
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "remindme",
          body: app_strings.t('xAmgHBho'),
          extra: null,
        });
      }
    });

  },
  BackupDBCloud: async ({ choice, answers, answer, answerIndex, currentItem }) => {

    RestoreLocalDatabasesFromCloud({
      SqliteReduxObjects: DatabaseObjects,
      onSuccess: (data) => {
        ShowNotification({
          id: 0,
          title: "remindme",
          body: app_strings.t('xSpTMl1n'),
          extra: null,
        });
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "remindme",
          body: app_strings.t('x0qpHyto'),
          extra: null,
        });
      }
    });

  },
  AddAPIKey: async ({ choice, answers, answer, answerIndex, currentItem }) => {
    // getter, contient le state actuel
    const ToolboxState =
      SqliteReduxToolboxState.GetToolboxStateFirstRow();

    // setter de state de page, en entier
    SetPageState({
      // le state existant.... agrémenté de ....
      ...ToolboxState,

      // l'écran actuellement affiché dans Toolbox.js
      chosenOne: "AddAPIKeySubpage",

    });
  },
  LoginLogout: async ({ choice, answers, answer, answerIndex, currentItem }) => {
    const userData = IsSomeUserLoggedIn();

    if (userData) {
      GoogleLogout({
        onSuccess: (data) => {
          showSnackbar('Logout OK !')
        }
      });
    } else {
      GoogleLogin({
        onSuccess: (data) => {
          showSnackbar('Login NOT OK !')
        }
      });
    }
  },
};
