import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

// import YourOwnSDK from "your-own-sdk";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export function OnAPISubscribeButtonClicked({ setSubscribeUrl, setShowUI }) {
    // do whatever you want here. You can erase the shit below, it's just example code.
    // you can use the setSubscribeUrl and setShowUI setters (or other names if u renamed it earlier)
    // to set the iframe url, and UI visibility respectively
    // feel free to add more args if needed

    /*
    GoogleLogin({
        onSuccess: async (login_data) => {
            YourOwnSDK.GetAPISubscriptionLink({
                params: login_data,
                onSuccess: (url_data) => {
                    ShowNotification({
                        id: 0,
                        title: "remindme",
                        body: app_strings.t("LetsAPISub"),
                        extra: null,
                    });

                    setSubscribeUrl(url_data.url);
                    setShowUI(false);
                },

                onError: (e) => {
                    ShowNotification({
                        id: 0,
                        title: "remindme",
                        body: app_strings.t("APISubError"),
                        extra: null,
                    });
                },
                print: true
            });

        },
        onError: (e) => {
            showSnackbar(app_strings.t("LoginError"))
        },
        onCancel: () => {
            showSnackbar(app_strings.t("LoginCancel"))
        },
    });
    */ 
}
