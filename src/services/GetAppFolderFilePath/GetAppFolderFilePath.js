/* PLOP_INJECT_IMPORT */
//import React from "react";
import { PermissionsAndroid } from 'react-native';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';
import { _GetAppFolderFilePath } from './_GetAppFolderFilePath';

/**
 *
 * @param {*} fileExtension, extension du fichier, sans point (par ex: "mp3", "png", "js", etc....)
 * @param {*} fileName, le nom du fichier
 * @param {*} subfolder, le sous dossier dans le dossier
 * @param {*} folder, le dossier dans lequel tout sera crée
 * @param {*} content, le contenu textuel du fichier, si besoin
 * @param {*} createFile, réécrit on le fichier si déja existant ?
 *
 * @returns un path de fichier destiné à être crée dans le dossier appli.
 * 
 * Some example:
 * 
 
const outputAudioPath = await GetAppFolderFilePath({
  folder: ReactNativeBlobUtil.fs.dirs.DownloadDir,
  fileExtension: "mp3",
  fileName: "yt_audio",
  subfolder: "arduinogpt",
});

 * 
 */
const GetAppFolderFilePath = async ({
  folder,
  fileExtension,
  fileName,
  subfolder,
  content,
  createFile = true,
}) => {
  /* PLOP_INJECT_CODE */

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: '',
      message: app_strings.t('askExtStoragePerm'),
      buttonNeutral: app_strings.t('annuler'),
      buttonNegative: app_strings.t('non'),
      buttonPositive: app_strings.t('oui'),
    },
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // path du sous dossier dans lequel le fichier va etre crée
    return _GetAppFolderFilePath({
      createFile,
      folder,
      subfolder,
      fileName,
      fileExtension,
      content,
    });
  } else {
    return null;
  }
};

export { GetAppFolderFilePath };
