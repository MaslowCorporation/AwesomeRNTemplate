import i18next from 'i18next';


import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";
import { CreateFirestoreDocument } from "../FirestoreCRUD/FirebaseCRUD";
import { GoogleLogin, GoogleLogout } from "../GoogleLogin/GoogleLogin";
import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { SaveLocalDatabaseToCloud } from "./SaveLocalDatabaseToCloud";

export async function SaveLocalDatabasesToCloud({ SqliteReduxObjects, onSuccess, onError }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {


            await GoogleLogout({});

            GoogleLogin({
                onSuccess: async (data) => {



                    const saves = await mapAsync(SqliteReduxObjects, async (SqliteReduxObject, index) => {
                        return SaveLocalDatabaseToCloud({ SqliteReduxObject });
                    });

                    const isAllGood = saves.every(function (element) {
                        return element === true;
                    });



                    if (isAllGood) {
                        RunIfPossible({ func: onSuccess, args: true })

                        resolve(true);
                    } else {
                        RunIfPossible({ func: onError, args: i18next.t('x3HAGIz') })

                        resolve(false);
                    }
                },
                onError: (e) => {

                    RunIfPossible({ func: onError, args: i18next.t('xCRZALjm') + `${JSON.stringify(e, null, 2)}` })

                    resolve(false);
                },
                onCancel: () => {


                    RunIfPossible({ func: onError, args: i18next.t('xjJQt4i') })

                    resolve(false);
                },
            });

        } catch (error) {

            RunIfPossible({ func: onError, args: error })

            resolve(false);
        }
    })
}