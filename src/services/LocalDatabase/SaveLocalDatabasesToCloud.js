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
                    let saves = [];

                    for (var i = 0; i < SqliteReduxObjects.length; i++) {
                        const SqliteReduxObject = SqliteReduxObjects[i];

                        const save = await SaveLocalDatabaseToCloud({ SqliteReduxObject });

                        saves.push(save);
                    }


                    const isAllGood = saves.every(function (element) {
                        return element === true;
                    });



                    if (isAllGood) {
                        RunIfPossible({ func: onSuccess, args: true })

                        resolve(true);
                    } else {
                        RunIfPossible({ func: onError, args: i18next.t('xXj53jg') })

                        resolve(false);
                    }
                },
                onError: (e) => {


                    RunIfPossible({ func: onError, args: `google / fb login erreur: ${JSON.stringify(e, null, 2)}` })

                    resolve(false);
                },
                onCancel: () => {


                    RunIfPossible({ func: onError, args: i18next.t('xwCp4ng6') })

                    resolve(false);
                },
            });

        } catch (error) {

            RunIfPossible({ func: onError, args: error })

            resolve(false);
        }
    })
}