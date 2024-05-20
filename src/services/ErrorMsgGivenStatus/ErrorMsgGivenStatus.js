import { Constants } from "src/constants/Constants";

export function ErrorMsgGivenStatus(errCode) {
    return Constants.apiErrorCodes[errCode];
}
