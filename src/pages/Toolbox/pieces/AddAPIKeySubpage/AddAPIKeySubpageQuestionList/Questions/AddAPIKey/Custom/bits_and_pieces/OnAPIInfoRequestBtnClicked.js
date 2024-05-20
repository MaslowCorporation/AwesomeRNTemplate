import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";

// import YourOwnSDK from "your-own-sdk";
import { ErrorMsgGivenStatus } from "src/services/ErrorMsgGivenStatus/ErrorMsgGivenStatus";
import i18next from "i18next";
import { ShowErrorSnackbar } from "src/services/ShowErrorSnackbar/ShowErrorSnackbar";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export function OnAPIInfoRequestBtnClicked({ setYourAPIData, setShowUI }) {

    const AppState = SqliteReduxAppState.GetItemByUniqueID("AppState");
    const maslowAPIKey = AppState.maslowAPIKey;

    /*
    YourOwnSDK.GetAPIClientInfo({
        apiKey: maslowAPIKey,
        onSuccess: (APIData) => {
            setYourAPIData(APIData);

            showSnackbar(app_strings.t("Success"));

            //setShowUI(false);
        },

        onError: (err) => {

            ShowErrorSnackbar(err);
        },
        print: true
    });
    */
}

