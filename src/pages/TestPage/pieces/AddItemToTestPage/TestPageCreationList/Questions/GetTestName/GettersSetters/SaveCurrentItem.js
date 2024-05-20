/* PLOP_INJECT_IMPORT */

import { 
  SqliteReduxTestPage 
} from "src/reduxState/TestPage/TestPageGetterSetter";


/* PLOP_INJECT_GLOBAL_CODE */

export const SaveCurrentItem = (currentItem) => {
  /* PLOP_INJECT_CODE */

  SqliteReduxTestPage.UpdateSpecificRowsFromDB({
    row: currentItem,
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
  });

};
