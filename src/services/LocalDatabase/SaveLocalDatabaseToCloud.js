import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";
import { CreateFirestoreDocument } from "../FirestoreCRUD/FirebaseCRUD";
import { GoogleLogin, GoogleLogout } from "../GoogleLogin/GoogleLogin";
import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { GetFirebaseUserCredentials } from "./GetFirebaseUserCredentials";

export async function SaveLocalDatabaseToCloud({ SqliteReduxObject, onSuccess, onError }) {
    try {

        const firebase_user = await GetFirebaseUserCredentials();


        // si y'a un user Google/Firebase connectay
        if (firebase_user) {


            const allRows = await SqliteReduxObject.GetAllRowsFromDB({});

            console.log(`before cloud save, db contains ${allRows.length} rows`);


            const doc = await CreateFirestoreDocument({
                collectionName: `SqliteReduxDatabases`,
                documentId: `${firebase_user.uid}_${SqliteReduxObject.dbName}`,
                documentData: { 'rows': allRows },
                onSuccess: (data) => {
                    //console.log(`success: ${JSON.stringify(data, null, 2)}`)
                },
                onError: (e) => {
                    console.log(`error: ${JSON.stringify(e, null, 2)}`)
                },
            });




            if (doc) {



                RunIfPossible({ func: onSuccess, args: true })

                return true;
            }
        }



        RunIfPossible({ func: onError, args: 'Cloud save failed homie..... Try again soldier' })

        return false;

    } catch (error) {



        RunIfPossible({ func: onError, args: error })

        return false;
    }
}