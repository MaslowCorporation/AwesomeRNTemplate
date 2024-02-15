import { JoinPaths } from "src/services/JoinPaths/JoinPaths";
import ReactNativeBlobUtil from "react-native-blob-util";
import { FileExists } from "../FileExists/FileExists";

/**
 *
 * @param {*} subfolder
 * @param {*} fileName
 * @param {*} fileExtension
 * @param {*} folder
 * @param {*} content
 * @param {*} createFile
 *
 * @returns
 */
export async function _GetAppFolderFilePath({
  folder,
  subfolder,
  fileName,
  fileExtension,
  content,
  createFile,
}) {
  const fullSubfolder = JoinPaths(folder, subfolder);

  // crée le sous dossier, si non existant
  const folderExists = await FileExists({
    path: fullSubfolder,
    debugPrint: true,
  });
  !folderExists ? await ReactNativeBlobUtil.fs.mkdir(fullSubfolder) : null;

  //
  // ze path of ze graal
  const filePath = JoinPaths(fullSubfolder, `${fileName}.${fileExtension}`);

  const fileExists = await FileExists({ path: filePath, debugPrint: true });

  // si on souhaite créer/overwrite le fichier
  if (createFile) {
    // crée le fichier, si non existant.
    // profites en pour write some data si besoin
    if (!fileExists) {
      await ReactNativeBlobUtil.fs.createFile(filePath, content ?? "", "utf-8");
    } else {
      // si le fichier existe déja, on le vide/overwrite
      await ReactNativeBlobUtil.fs.writeFile(filePath, content ?? "", "utf-8");
    }
  }

  //
  return "file://" + filePath;
}
