import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";

/**
 *
 * @param {*} answers
 * @param {*} uniqueId
 *
 * ajoute le tuto dans la DB
 */
export function AddItemToDB(answers, uniqueId) {
  /* PLOP_INJECT_ANSWER_VALUE */
	const name = answers["GetTestName"]?.value;

  // la date de création de l'item
  const currentDate = new Date();

  // combien de TestPage à tu déja crée précédemment (0 ou +) ?
  const allItems = SqliteReduxTestPage.GetTestPage();
  const qtyItems = allItems.length;

  /**
   * l'item fraichement crée
   */
  const item = {
    /* PLOP_INJECT_VALUE_IN_DB */
		name,

    //name,
    //category: category,
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

  // ajoute l'item dans la base de données + Redux
  SqliteReduxTestPage.AddRowToDatabase({
    row: item,
    onSuccess: (row) => {
      console.log("item ajouté avec succès dans TestPage.");
    },
    onError: (e) => {
      console.log(
        "Un problème est survenu durant  l'ajout d'item dans TestPage."
      );
    },
  });
}
