/* PLOP_INJECT_IMPORT */
import { GetToolboxChoice } from "src/pages/Toolbox/pieces/ToolboxChoices/ToolboxChoicesQuestionList/Questions/GetToolboxChoice/GetToolboxChoice";

/* PLOP_INJECT_GLOBAL_CODE */


/**
 *
 * Ceci contient toutes les questions de ToolboxChoicesQuestionList.
 *
 * Cela correspond aux questions de ToolboxChoicesCreationList, avec une proposition de suppression en +.
 *
 */
const ToolboxChoicesQuestionList = () =>
  [
    /* PLOP_INJECT_CODE */
    GetToolboxChoice(),
  ]?.reverse();

export { ToolboxChoicesQuestionList };
