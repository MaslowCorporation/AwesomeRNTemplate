/* PLOP_INJECT_IMPORT */

// permet de supprimer un item de la liste ditems
import { DeleteItemOrNot } from "./Questions/DeleteItemOrNot";

// permet de créer/modifier les données dun item.
import { TestPageCreationList } from "../../AddItemToTestPage/TestPageCreationList/TestPageCreationList";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Ceci contient toutes les questions de TestPageEditList.
 *
 * Cela correspond aux questions de TestPageCreationList, avec une proposition de suppression en +.
 */
const TestPageEditList = () => {
  return TestPageCreationList().concat([
    /* PLOP_INJECT_CODE */
  ].reverse()).concat(DeleteItemOrNot());
};

export { TestPageEditList };
