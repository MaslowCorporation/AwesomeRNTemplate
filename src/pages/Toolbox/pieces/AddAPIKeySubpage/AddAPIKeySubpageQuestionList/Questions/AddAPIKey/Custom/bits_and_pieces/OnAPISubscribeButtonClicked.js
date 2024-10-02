import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin, GoogleLogout } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

import MaslowGPTSDK from "maslow-gpt-sdk";
import { ShowErrorSnackbar } from "src/services/ShowErrorSnackbar/ShowErrorSnackbar";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export async function OnAPISubscribeButtonClicked({ setSubscribeUrl, setShowUI }) {
    // do whatever you want here. You can erase the shit below, its just example code.
    // you can use the setSubscribeUrl and setShowUI setters (or other names if u renamed it earlier)
    // to set the iframe url, and UI visibility respectively
    // feel free to add more args if needed

    await GoogleLogout({});

    GoogleLogin({
        onSuccess: async (login_data) => {
            MaslowGPTSDK.GetAPISubscriptionLink({
                params: login_data,
                onSuccess: (url_data) => {
                    ShowNotification({
                        id: 0,
                        title: "arduinogpt",
                        body: app_strings.t("LetsAPISub"),
                        extra: null,
                    });

                    setSubscribeUrl(url_data.url);
                    setShowUI(false);

                    GoogleLogout({});
                },

                onError: (e) => {
                    ShowNotification({
                        id: 0,
                        title: "arduinogpt",
                        body: app_strings.t("APISubError"),
                        extra: null,
                    });

                    GoogleLogout({});

                    ShowErrorSnackbar(e);
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
