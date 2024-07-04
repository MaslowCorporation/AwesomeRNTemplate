/* PLOP_INJECT_IMPORT */
//import React from "react";

import {PermissionsAndroid} from 'react-native';
import {app_strings} from 'src/stringRepos/AppStrings/AppStrings';
import {RunIfPossible} from '../RunIfPossible/RunIfPossible';

/**
 *
 * @param {*} onYes, si oui
 * @param {*} onNo, si non
 *
 * @returns
 *
 * Cette fonction permet de demander permission de stockage
 */
const RequestStoragePermission = async ({onYes, onNo}) => {
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
    RunIfPossible({func: onYes, args: null});
  } else {
    RunIfPossible({func: onNo, args: null});
  }
};

export {RequestStoragePermission};
