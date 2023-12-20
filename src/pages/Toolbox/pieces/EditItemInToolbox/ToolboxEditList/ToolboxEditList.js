/* PLOP_INJECT_IMPORT */

// permet de supprimer un item de la liste d'items
import { DeleteItemOrNot } from "./Questions/DeleteItemOrNot";

// permet de créer/modifier les données d'un item.
import { ToolboxCreationList } from "../../AddItemToToolbox/ToolboxCreationList/ToolboxCreationList";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Ceci contient toutes les questions de ToolboxEditList.
 *
 * Cela correspond aux questions de ToolboxCreationList, avec une proposition de suppression en +.
 */
const ToolboxEditList = () => {
  return ToolboxCreationList().concat([
    /* PLOP_INJECT_CODE */
  ].reverse()).concat(DeleteItemOrNot());
};

export { ToolboxEditList };
