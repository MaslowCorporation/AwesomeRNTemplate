import { FileExists } from "../FileExists/FileExists";
import { GetBlobFromPath } from "../GetBlobFromPath/GetBlobFromPath";
import { GetFileName } from "../GetFileName/GetFileName";
import { _fetchAndGetResponse } from "./_fetchAndGetResponse";

/**
 *
 * @param {*} url
 * LURL de la requête HTTP
 *
 * @param {*} requestType
 * Le type de requête HTTP
 * (POST, GET, PUT, DELETE)
 *
 * @param {*} headers
 * les headers de la requête
 *
 * @param {*} body
 * le body de la requête
 *
 * @returns une Promise contenant
 * la réponse obtenue en format JSONifié
 *
 * Fait la requete HTTP, version multipart,
 * selon besoins.
 */
export const _multipartRequest = async ({
  requestType,
  url,
  headers,
  body,
  onGrabCanceller,
}) => {
  // les données de multipart (form)
  let formData = new FormData();

  // ajoute les données dans le form
  for (const key in body) {
    // la valeur de cet item de body
    const keyValue = body[key];

    // si un des élements du body est un path de fichier
    // alors prépare le pour quil soit interprété comme tel
    const itsAFile = await FileExists({ path: keyValue });

    if (itsAFile) {
      // fichier blobifié
      const blobFile = await GetBlobFromPath(keyValue);

      // le mime du fichier
      const blobFileType = blobFile.type;

      // le nom du fichier
      const fileName = await GetFileName(keyValue);

      //
      //

      // pour que ce path de fichier soit reconnu
      // il faut lenrober comme tel
      const fichierEnrobay = {
        // le path du fichier
        uri: keyValue,

        // le mime du fichier
        type: blobFileType,

        // nom et path du fichier
        name: fileName,
      };


      formData.append(key, fichierEnrobay);
    } else {
      formData.append(key, keyValue);
    }
  }

  return _fetchAndGetResponse({
    requestType: requestType,
    url,
    headers,
    body: formData,
    onGrabCanceller,
  });
};
