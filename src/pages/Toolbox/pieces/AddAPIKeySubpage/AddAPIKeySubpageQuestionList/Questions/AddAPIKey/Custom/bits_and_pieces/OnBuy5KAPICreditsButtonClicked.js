import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin, GoogleLogout } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";

import MaslowGPTSDK from "maslow-gpt-sdk";
import { SaveAPIKeyInAppState } from "./SaveAPIKeyInAppState";
import { GrabGoogleAPIKey } from "src/pages/Toolbox/pieces/ToolboxChoices/ToolboxChoicesQuestionList/Questions/GetToolboxChoice/GetToolboxChoiceChoices/GetToolboxChoiceChoices";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export async function OnBuy5KAPICreditsButtonClicked({ setSubscribeUrl, setShowUI }) {
    // do whatever you want here. You can erase the shit below, its just example code.
    // you can use the setSubscribeUrl and setShowUI setters (or other names if u renamed it earlier)
    // to set the iframe url, and UI visibility respectively
    // feel free to add more args if needed
    const AppState = SqliteReduxAppState.GetItemByUniqueID("AppState");
    const maslowAPIKey = AppState.maslowAPIKey;

    await GoogleLogout({});

    GoogleLogin({
        onSuccess: async (data) => {
            const freshAPIKey = await GrabGoogleAPIKey(data);

            MaslowGPTSDK.Buy5KAPICreditsLink({
                apiKey: freshAPIKey ?? maslowAPIKey,
                params: data,
                onSuccess: (url_data) => {
                    ShowNotification({
                        id: 0,
                        title: "arduinogpt",
                        body: app_strings.t("LetsBuyAPICredits"),
                        extra: null,
                    });

                    setSubscribeUrl(url_data.url);
                    setShowUI(false);
                },

                onError: (e) => {
                    ShowNotification({
                        id: 0,
                        title: "arduinogpt",
                        body: app_strings.t("APICreditsError"),
                        extra: null,
                    });

                    GoogleLogout({});
                },
                print: true
            });

        },
        onError: (e) => {
            showSnackbar(app_strings.t("LoginError"))

            GoogleLogout({});
        },
        onCancel: () => {
            showSnackbar(app_strings.t("LoginCancel"))

            GoogleLogout({});
        },
    });

}
