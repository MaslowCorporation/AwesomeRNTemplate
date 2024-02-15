/* PLOP_INJECT_IMPORT */
//import React from "react";

import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} imagePath, le path/url/uri de la photo,
 * de type ImageSource,
 * description détaillée ici:
 * https://github.com/guhungry/react-native-photo-manipulator/blob/30c3f5a975e25ef3bd6358a9ac5323c28228fe1c/README.md#overlay-image
 *
 * @param {*} icon, l' icone à ajouter sur la photo,
 * de type ImageSource,
 * description détaillée ici:
 * https://github.com/guhungry/react-native-photo-manipulator/blob/30c3f5a975e25ef3bd6358a9ac5323c28228fe1c/README.md#overlay-image
 *
 * @param {*} position, la position de l' icone à ajouter sur la photo,
 * de type Point,
 * description détaillée ici:
 * https://github.com/guhungry/react-native-photo-manipulator/blob/30c3f5a975e25ef3bd6358a9ac5323c28228fe1c/README.md#overlay-image
 *
 *
 * @param {*} onSuccess, callback quand photo prête.
 * (photoPath) => {}
 *
 * @param {*} onError, callback quand problémo
 * durant ajout de icone sur photo
 * (e) => {}
 *
 * @returns le path de la photo textuée.
 *
 * Cette fonction permet dajouter un ou plusieurs icones
 * sur une photo
 */
const AddIconToImage = ({ imagePath, icon, position, onSuccess, onError }) => {
  /* PLOP_INJECT_CODE */

  return new Promise((resolve, reject) => {
    /**
     * Premièrement, on essaie dajouter le
     * icone sur la photo.
     */
    overlayImage(imagePath, icon, position)
      /**
       * cette callback, sexecute lorsque la photo est prête
       */
      .then((iconedPhotoPath) => {
        resolve(iconedPhotoPath);

        RunIfPossible({ func: onSuccess, args: iconedPhotoPath });
      })
      /** si bobo durant ajout de icone sur la photo */
      .catch((e) => {
        reject(e);

        RunIfPossible({ func: onError, args: e });
      });
  });
};

const overlayImage = (imagePath, iconPath, position) => {
  return;
};

export { AddIconToImage };
