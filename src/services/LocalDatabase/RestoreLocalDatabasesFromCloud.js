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
                    console.log(`google/fb login succes`);

                    // utilise GetFirestoreDocument, DeleteDatabases, et AddRowsToDatabase


                    // vide les DB existantes
                    //await DeleteDatabases({ SqliteReduxObjects, })



                    // pour chaque objet SqliteRedux...
                    const restores = await mapAsync(SqliteReduxObjects, async (SqliteReduxObject, index) => {


                        // recupere les donnees cloud
                        const cloudRows = await GetFirestoreDocument({
                            collectionName: `SqliteReduxDatabases`,
                            documentId: `${login_data.firebase_uid}_${SqliteReduxObject.dbName}`,
                        });



                        // si les donnees cloud existent...
                        if (cloudRows) {

                            // l'array de rows
                            const rows = cloudRows.rows;

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
                        RunIfPossible({ func: onError, args: 'one or more database cloud saves failed' })

                        resolve(false);
                    }
                },
                onError: (e) => {
                    console.log(`google/fb login erreur: ${JSON.stringify(e, null, 2)}`);

                    RunIfPossible({ func: onError, args: `google/fb login erreur: ${JSON.stringify(e, null, 2)}` })

                    resolve(false);
                },
                onCancel: () => {
                    console.log(`google login cancelled`);

                    RunIfPossible({ func: onError, args: 'google login cancelled' })

                    resolve(false);
                },
            });

        } catch (error) {

            RunIfPossible({ func: onError, args: error })

            resolve(false);
        }
    })
}