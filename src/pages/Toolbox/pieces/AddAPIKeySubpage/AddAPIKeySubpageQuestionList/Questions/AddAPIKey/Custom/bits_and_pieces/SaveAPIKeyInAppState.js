import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";
import { SaveItemInDB } from "src/services/SaveItemInDB/SaveItemInDB";

export function SaveAPIKeyInAppState(text) {
    const newAPIData = {
        maslowAPIKey: text,
    };

    SaveItemInDB({
        itemRows: (item) => newAPIData,
        SqliteReduxObject: SqliteReduxAppState,
        uniqueId: "AppState",
        onSuccess: (qtyRowsAffected) => {
            console.log(`API key saved successfully in AppState !`);
        },
        onError: (e) => {
            console.log(`This error happened trying to save data: ${e} .`);
        }
    });
}
