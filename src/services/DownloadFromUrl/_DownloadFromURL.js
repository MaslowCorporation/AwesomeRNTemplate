import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import * as FileSystem from "expo-file-system";

/**
 *
 * @param {*} url
 * @param {*} outputPath
 * @param {*} onSuccess
 * @param {*} onError
 * @param {*} onProgress
 *
 * Cete fonctionn permet de télécharger du contenu venant d'une URL
 */
export async function _DownloadFromURL({
  url,
  outputPath,
  onSuccess,
  onError,
  onProgress,
  resolve, reject,
}) {
  // callback d'avancement de DL
  const callback = (downloadProgress) => {
    // le pourcentage de contenu DL (de 0 à 100)
    const progress =
      (downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite) *
      100;

    console.log(`DL %: ${progress}`)

    // si l'user à un callback custom, exécute la
    RunIfPossible({ func: onProgress, args: progress });
  };

  // ceci crée le processus d'upload,
  // mais ne le lance pas tout de suite
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    outputPath,

    {},
    callback
  );

  try {
    console.log(`DL commencé`);

    // lance l'upload
    const { uri } = await downloadResumable.downloadAsync();

    console.log(`DL terminé`);

    resolve(uri)

    // ici, l'upload est terminé
    RunIfPossible({ func: onSuccess, args: uri });
  } catch (e) {
    reject(null)

    // ici, ça pue
    RunIfPossible({ func: onError, args: e });
  }
}
