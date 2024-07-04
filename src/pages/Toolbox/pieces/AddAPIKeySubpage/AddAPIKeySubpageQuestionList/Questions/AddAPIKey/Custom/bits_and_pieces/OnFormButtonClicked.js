import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { SaveAPIKeyInAppState } from "./SaveAPIKeyInAppState";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

/**
 * 
 * @param {*} 
 * 
 * this callback gets called when the form button is clicked 
 */
export function OnFormButtonClicked({ text, onInput }) {
    // do whatever you want here. You can erase the shit below, its just example code.
    // you can use the onInput and setShowUI setter to save the user data collected from this UI
    // feel free to add more args if needed


    ShowNotification({
        id: 0,
        title: "arduinogpt",
        body: app_strings.t("APIKeySuccess") + `: ` + text,
        extra: null,
    });

    onInput(text);

    SaveAPIKeyInAppState(text);

}


