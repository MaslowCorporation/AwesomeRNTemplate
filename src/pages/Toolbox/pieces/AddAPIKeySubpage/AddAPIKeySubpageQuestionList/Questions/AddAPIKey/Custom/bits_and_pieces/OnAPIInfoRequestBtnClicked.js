import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";

import MaslowGPTSDK from "maslow-gpt-sdk";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export function OnAPIInfoRequestBtnClicked({ setYourAPIData, setShowUI }) {
  
    const AppState = SqliteReduxAppState.GetItemByUniqueID("AppState");
    const maslowAPIKey = AppState.maslowAPIKey;

    MaslowGPTSDK.GetAPIClientInfo({
        apiKey: maslowAPIKey,
        onSuccess: (APIData) => {
            setYourAPIData(APIData);

            showSnackbar(app_strings.t("Success"));

            //setShowUI(false);
        },

        onError: (e) => {
            app_strings.t("Error");
        },
        print: true
    });
    
}
