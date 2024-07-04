import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { DeleteDatabase } from "./DeleteDatabase";

export async function DeleteDatabases({ SqliteReduxObjects, onSuccess, onError }) {
    try {

        const deletions = await mapAsync(SqliteReduxObjects, async (SqliteReduxObject, index) => {
            return DeleteDatabase({ SqliteReduxObject });
        });


        RunIfPossible({ func: onSuccess, args: deletions })

        return deletions;
    } catch (error) {
        RunIfPossible({ func: onError, args: error })

        return;
    }
}