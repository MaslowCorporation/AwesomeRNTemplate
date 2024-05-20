import i18next from 'i18next';
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";
import { CreateFirestoreDocument, GetFirestoreDocument, UpdateFirestoreDocument } from "../FirestoreCRUD/FirebaseCRUD";
import { GoogleLogin, GoogleLogout } from "../GoogleLogin/GoogleLogin";
import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { GetFirebaseUserCredentials } from "./GetFirebaseUserCredentials";

export async function SaveLocalDatabaseToCloud({ SqliteReduxObject, onSuccess, onError }) {
    try {


        const firebase_user = await GetFirebaseUserCredentials();



        // si ya un user Google/Firebase connectay
        if (firebase_user) {


            const allRows = await SqliteReduxObject.GetAllRowsFromDB({});



            let existingDocData = await GetFirestoreDocument({
                collectionName: `SqliteReduxDatabases_arduinogpt`,
                documentId: firebase_user.uid,
            })

            // console.log("docu data = " + JSON.stringify(existingDocData, null, 2))

            let newDoc;

            if (!existingDocData) {
                const newDocData = {};

                newDocData[SqliteReduxObject.dbName] = { 'rows': allRows };

                newDoc = await CreateFirestoreDocument({
                    collectionName: `SqliteReduxDatabases_arduinogpt`,
                    documentId: firebase_user.uid,
                    documentData: newDocData,
                    onError: (e) => {

                    }
                });



            } else {
                existingDocData[SqliteReduxObject.dbName] = { 'rows': allRows };

                newDoc = await UpdateFirestoreDocument({
                    collectionName: `SqliteReduxDatabases_arduinogpt`,
                    documentId: firebase_user.uid,
                    updateData: existingDocData,
                })


            }



            if (newDoc) {



                RunIfPossible({ func: onSuccess, args: true })

                return true;
            }
        }



        RunIfPossible({ func: onError, args: i18next.t('xSOthoPw') })

        return false;

    } catch (error) {



        RunIfPossible({ func: onError, args: error })

        return false;
    }
}