import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";

// getter/setter
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { GoToTestPageList } from "../NavHelpers/GoToTestPageList";

/**
 *
 * permet de modifier un item stocké dans sqlite + redux
 *
 */
export const EditItemInTestPageDB = ({ answers }) => {
  /* PLOP_INJECT_ANSWER_VALUE */
  const name = answers["GetTestName"]?.value;

  // getter, contient le state actuel
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  const currentItemUniqueId = TestPageState.itemUniqueId;
  const currentItem =
    SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);
  const editedItem = {
    ...currentItem,

    /* PLOP_INJECT_VALUE_IN_DB */
    name,

    //name,
    //category: category,
  };


  SqliteReduxTestPage.UpdateSpecificRowsFromDB({
    row: editedItem,
    rowName: "uniqueId",
    rowValue: editedItem.uniqueId,
    onSuccess: (row) => {


      GoToTestPageList();
    },
    onError: (e) => {


      GoToTestPageList();
    },
  });
};
