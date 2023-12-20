import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export async function AddRowsToDatabase({ SqliteReduxObject, rows, onSuccess, onError }) {
    try {

        const adds = await mapAsync(rows, async (row, index) => {
            const rowExists = SqliteReduxObject.GetItemByUniqueID(row.uniqueId)

            // if a row with the same uniqueId already exists in the local database
            if (rowExists) {
                console.log(`row with uniqueId ${row.uniqueId} already exists locally, we revert it to the backup state`);

                // update this existing row back to the cloud backup state
                return SqliteReduxObject.UpdateSpecificRowsFromDB({
                    row,
                    rowName: 'uniqueId',
                    rowValue: row.uniqueId
                })
            }
            // if no such row exists locally
            else {
                console.log(`row with uniqueId ${row.uniqueId} doesn't exist locally, let's add it`);

                // add this cloud backed up row
                return SqliteReduxObject.AddRowToDatabase({
                    row,
                })
            }
        });

        RunIfPossible({ func: onSuccess, args: adds })

        return adds;
    } catch (error) {
        RunIfPossible({ func: onError, args: error })

        return;
    }
}