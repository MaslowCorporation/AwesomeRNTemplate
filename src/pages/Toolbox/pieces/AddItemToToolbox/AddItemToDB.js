import { SqliteReduxToolbox } from "src/reduxState/Toolbox/ToolboxGetterSetter";

/**
 *
 * @param {*} answers
 * @param {*} uniqueId
 *
 * ajoute le tuto dans la DB
 */
export function AddItemToDB(answers, uniqueId) {
  /* PLOP_INJECT_ANSWER_VALUE */

  // la date de création de litem
  const currentDate = new Date();

  // combien de Toolbox à tu déja crée précédemment (0 ou +) ?
  const allItems = SqliteReduxToolbox.GetToolbox();
  const qtyItems = allItems.length;

  /**
   * litem fraichement crée
   */
  const item = {
    /* PLOP_INJECT_VALUE_IN_DB */

    uniqueId: uniqueId,
    creation_year: currentDate.getFullYear(),
    creation_month: currentDate.getMonth(),
    creation_day: currentDate.getDate(),
    creation_hour: currentDate.getHours(),
    creation_minute: currentDate.getMinutes(),
    creation_second: currentDate.getSeconds(),
    //groupName: Constants.defaultGroupName,
    itemIndex: qtyItems,
  };

  // ajoute litem dans la base de données + Redux
  SqliteReduxToolbox.AddRowToDatabase({
    row: item,
    onSuccess: (row) => {

    },
    onError: (e) => {

    },
  });
}
