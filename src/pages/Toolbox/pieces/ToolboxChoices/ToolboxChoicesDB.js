import { SqliteReduxToolbox } from "src/reduxState/Toolbox/ToolboxGetterSetter";

// getter/setter
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
// eslint-disable-next-line import/no-unresolved
import { GoToToolboxList } from "../NavHelpers/GoToToolboxList";

/**
 *
 * permet de modifier un item stocké dans sqlite + redux
 *
 */
export const ToolboxChoicesDB = ({ answers, route }) => {
  /* PLOP_INJECT_ANSWER_VALUE */

  // getter, contient le state actuel
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  const currentItemUniqueId = ToolboxState.itemUniqueId;
  const currentItem = SqliteReduxToolbox.GetItemByUniqueID(currentItemUniqueId);
  const editedItem = {
    ...currentItem,

    /* PLOP_INJECT_VALUE_IN_DB */
  };

  console.log(`edited item = ${JSON.stringify(editedItem)}`);

  SqliteReduxToolbox.UpdateSpecificRowsFromDB({
    row: editedItem,
    rowName: "uniqueId",
    rowValue: editedItem.uniqueId,
    onSuccess: (row) => {
      console.log("item modifé avec succès dans ToolboxChoices.");

      GoToToolboxList();
    },
    onError: (e) => {
      console.log(
        "Un problème est survenu durant la modif d'item dans ToolboxChoices."
      );

      GoToToolboxList();
    },
  });
};
