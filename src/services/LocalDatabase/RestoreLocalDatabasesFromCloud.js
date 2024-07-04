import i18next from 'i18next';

import { GetFirestoreDocument } from "../FirestoreCRUD/FirebaseCRUD";
import { GoogleLogin, GoogleLogout } from "../GoogleLogin/GoogleLogin";
import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { AddRowsToDatabase } from "./AddRowsToDatabase";

export async function RestoreLocalDatabasesFromCloud({ SqliteReduxObjects, onSuccess, onError }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {


            await GoogleLogout({});

            GoogleLogin({
                onSuccess: async (login_data) => {


                    // utilise GetFirestoreDocument, DeleteDatabases, et AddRowsToDatabase


                    // vide les DB existantes
                    //await DeleteDatabases({ SqliteReduxObjects, })

                    // recupere les donnees cloud
                    const cloudRows = await GetFirestoreDocument({
                        collectionName: `SqliteReduxDatabases_arduinogpt`,
                        documentId: login_data.firebase_uid,
                    });

                    // pour chaque objet SqliteRedux...
                    const restores = await mapAsync(SqliteReduxObjects, async (SqliteReduxObject, index) => {

                        // si les donnees cloud existent...
                        if (cloudRows) {

                            // larray de rows
                            const rows = cloudRows[SqliteReduxObject.dbName].rows;

                            // Ajoute/Update ce ou ces rows a la DB locale
                            const add = await AddRowsToDatabase({
                                SqliteReduxObject,
                                rows,
                            })




                            // si c ok
                            if (add) {
                                // mission reussie
                                return true;
                            }
                            // si caca
                            else {
                                // kk
                                return false;
                            }
                        }
                        // si donnees cloud existent pas
                        else {
                            // on fait rien, call it a day
                            return true;
                        }
                    });




                    const isAllGood = restores.every(function (element) {
                        return element === true;
                    });



                    if (isAllGood) {
                        RunIfPossible({ func: onSuccess, args: true })

                        resolve(true);
                    } else {
                        RunIfPossible({ func: onError, args: i18next.t('xnlz0LXD') })

                        resolve(false);
                    }
                },
                onError: (e) => {


                    RunIfPossible({ func: onError, args: `google / fb login erreur: ${JSON.stringify(e, null, 2)}` })

                    resolve(false);
                },
                onCancel: () => {


                    RunIfPossible({ func: onError, args: i18next.t('xXG38k86') })

                    resolve(false);
                },
            });

        } catch (error) {

            RunIfPossible({ func: onError, args: error })

            resolve(false);
        }
    })
}