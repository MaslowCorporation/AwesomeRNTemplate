/* PLOP_INJECT_IMPORT */


/**
 *
 * Permet de sauvegarder 1 ou plusieurs rows,
 * dans une base de données SqliteRedux...
 * 

```javascript

// par ex. sauvegarde des données dans un row, 
// suite à une prise de photo thumbnail dun tuto
SaveItemInDB({
    // item is the currently stored item
    // in the DB, whose rows are about to be changed.
    // since we may need some value from this item to update it,
    // this callback provides the item
    itemRows: (item) => {
      return {
        thumbnailNeedsUpload: Constants.true,
        thumbnailPath: thumbPath
      };
    },
    SqliteReduxObject: SqliteReduxTutoriels,
    uniqueId: route.params.tutoriel.uniqueId,
    onSuccess: (qtyRowsAffected) => {
      
    },
    onError: (e) => {
      
    }
})

```

 *
 */
const SaveItemInDB = async ({ itemRows, SqliteReduxObject, uniqueId, onSuccess, onError }) => {

  const currentItem = SqliteReduxObject.GetItemByUniqueID(uniqueId);

  const itemRowsCallbackResult = itemRows(currentItem);

  await SqliteReduxObject.UpdateSpecificRowsFromDB({
    row: { ...currentItem, ...itemRowsCallbackResult },
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
    onSuccess,
    onError
  });
};

export { SaveItemInDB };
