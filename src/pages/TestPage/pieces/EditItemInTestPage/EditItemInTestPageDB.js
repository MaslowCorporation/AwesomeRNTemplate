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

  console.log(`edited item = ${JSON.stringify(editedItem)}`);

  SqliteReduxTestPage.UpdateSpecificRowsFromDB({
    row: editedItem,
    rowName: "uniqueId",
    rowValue: editedItem.uniqueId,
    onSuccess: (row) => {
      console.log("item modifé avec succès dans TestPage.");

      GoToTestPageList();
    },
    onError: (e) => {
      console.log(
        "Un problème est survenu durant la modif d'item dans TestPage."
      );

      GoToTestPageList();
    },
  });
};
