import i18next from 'i18next';

import { SetPageState } from "src/pages/Toolbox/pieces/NavHelpers/SetPageState.js";
import { app_strings } from "../../../../../../../../stringRepos/AppStrings/AppStrings.js";
import MaslowGPTSDK from "maslow-gpt-sdk";

/* PLOP_INJECT_IMPORT */
import { DatabaseObjects } from 'src/reduxState/DatabaseObjects';
import { RestoreLocalDatabasesFromCloud } from 'src/services/LocalDatabase/RestoreLocalDatabasesFromCloud';
import { SaveLocalDatabasesToCloud } from 'src/services/LocalDatabase/SaveLocalDatabasesToCloud';
import { ShowNotification } from 'src/services/ShowNotification/ShowNotification';
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { GoogleLogin, GoogleLogout, IsSomeUserLoggedIn } from "src/services/GoogleLogin/GoogleLogin.js";
import { showSnackbar } from "src/components/Messager/Messager.js";
import { SaveAPIKeyInAppState } from "src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/Custom/bits_and_pieces/SaveAPIKeyInAppState.js";
import { ShowErrorSnackbar } from 'src/services/ShowErrorSnackbar/ShowErrorSnackbar.js';
import { Constants } from 'src/constants/Constants.js';


/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const GetToolboxChoiceChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */
    AddAPIKey: 2,
    LoginLogout: 3,
    SaveDBCloud: 0,
    BackupDBCloud: 1,
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
 * retourne le string dUI à afficher selon valeur de choix
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
          title: "arduinogpt",
          body: app_strings.t("xNUgKxo"),
          extra: null,
        });

        showSnackbar(app_strings.t("xNUgKxo"));
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "arduinogpt",
          body: app_strings.t('xAmgHBho'),
          extra: null,
        });

        showSnackbar(app_strings.t("xAmgHBho"));
      }
    });

  },
  BackupDBCloud: async ({ choice, answers, answer, answerIndex, currentItem }) => {
    // getter, contient le state actuel
    const ToolboxState =
      SqliteReduxToolboxState.GetToolboxStateFirstRow();

    // setter de state de page, en entier
    SetPageState({
      // le state existant.... agrémenté de ....
      ...ToolboxState,

      // la page Toolbox.js est prêt à être affichée ?
      isMounted: Constants.false,
    });

    RestoreLocalDatabasesFromCloud({
      SqliteReduxObjects: DatabaseObjects,
      onSuccess: (data) => {
        ShowNotification({
          id: 0,
          title: "arduinogpt",
          body: app_strings.t('xSpTMl1n'),
          extra: null,
        });

        // setter de state de page, en entier
        SetPageState({
          // le state existant.... agrémenté de ....
          ...ToolboxState,

          // la page Toolbox.js est prêt à être affichée ?
          isMounted: Constants.true,
        });

        showSnackbar(app_strings.t("xSpTMl1n"));
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "arduinogpt",
          body: app_strings.t('x0qpHyto'),
          extra: null,
        });

        // setter de state de page, en entier
        SetPageState({
          // le state existant.... agrémenté de ....
          ...ToolboxState,

          // la page Toolbox.js est prêt à être affichée ?
          isMounted: Constants.true,
        });

        showSnackbar(app_strings.t("x0qpHyto"));
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

      // lécran actuellement affiché dans Toolbox.js
      chosenOne: "AddAPIKeySubpage",

    });
  },
  LoginLogout: async ({ choice, answers, answer, answerIndex, currentItem }) => {
    const userData = IsSomeUserLoggedIn();

    if (userData) {
      GoogleLogout({
        onSuccess: (data) => {
          showSnackbar(i18next.t('xZ6RNXYD'))
        },
        onError: (e) => {
          showSnackbar(i18next.t('xhCkmjDG'))
        }
      });
    } else {
      GoogleLogin({
        onSuccess: async (data) => {

        },
        onError: (e) => {
          showSnackbar(i18next.t('xicjMvqY'))
        },
        onCancel: () => {
          showSnackbar(i18next.t('xzjsdVWj'))
        }
      });
    }
  },
};

export async function GrabGoogleAPIKey(data) {
  let googleAPIKey;

  try {

    const googleAPIKeyResponse = await MaslowGPTSDK.GetGoogleAPIKey({
      onSuccess: (output) => {
      },
      onError: (e) => {
        ShowErrorSnackbar(e);
      },
      firebase_uid: data.firebase_uid,
      print: false,
    });
    googleAPIKey = googleAPIKeyResponse?.apiKey;




    if (googleAPIKey) {
      showSnackbar(i18next.t('Success'));

      ShowNotification({
        id: 0,
        title: "arduinogpt",
        body: app_strings.t("APIKeySuccess") + `: ` + googleAPIKey,
        extra: null,
      });

      SaveAPIKeyInAppState(googleAPIKey);

      return googleAPIKey;
    } else {
      showSnackbar(i18next.t('xWdJ36Wg'));

      return;
    }
  } catch (error) {
    return googleAPIKey;
  }
}

