/* PLOP_INJECT_IMPORT */
import { AddAPIKey } from "src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/AddAPIKey";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Ceci contient toutes les questions de AddAPIKeySubpageQuestionList.
 *
 * Cela correspond aux questions de AddAPIKeySubpageCreationList, avec une proposition de suppression en +.
 */
const AddAPIKeySubpageQuestionList = () =>
  [
    /* PLOP_INJECT_CODE */
    AddAPIKey(),
  ]?.reverse();

export { AddAPIKeySubpageQuestionList };
