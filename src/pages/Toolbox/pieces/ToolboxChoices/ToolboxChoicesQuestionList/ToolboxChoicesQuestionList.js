/* PLOP_INJECT_IMPORT */
import { GetToolboxChoice } from "src/pages/Toolbox/pieces/ToolboxChoices/ToolboxChoicesQuestionList/Questions/GetToolboxChoice/GetToolboxChoice";

/* PLOP_INJECT_GLOBAL_CODE */

// [["Arduino", "ArduinoTool", "Utilise l'outil de création/installation de programmes Arduino", "Use the Arduino program installation/creation tool", null], ["BackupDB", "BackupDBTool", "Utilise l'outil de sauvegarde/récupération de base de données", "Use the database backup/restoration tool", null], ["ChatGPT", "ChatGPTChoice", "Utilise l'outil ChatGPT (Une Intelligence Artificielle qui connaît tout)", "Use the ChatGPT tool (a know-it-all A.I.)", null], ["Todos", "TodosTool", "Utilise le cahier de notes", "Use the notebook", null]]

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
