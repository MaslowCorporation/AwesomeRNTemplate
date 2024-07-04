import { showSnackbar } from "src/components/Messager/Messager";
import { ErrorMsgGivenStatus } from "../ErrorMsgGivenStatus/ErrorMsgGivenStatus";
import i18next from "i18next";

export function ShowErrorSnackbar(err) {
    const errorStatus = err?.response?.status;
    const errorType = ErrorMsgGivenStatus(errorStatus);

    console.log("Error code: " + JSON.stringify(errorStatus, null, 2));
    console.log("Error type: " + JSON.stringify(errorType, null, 2));


    errorType && showSnackbar(i18next.t(errorType));
}
