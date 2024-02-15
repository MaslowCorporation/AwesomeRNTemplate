/* PLOP_INJECT_IMPORT */
//import React from "react";
import DocumentPicker from "react-native-document-picker";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 * 

import { types } from "react-native-document-picker";


PickFile({
  fileType: types.video,
  onFilePicked: async (fileUri) => {
    //

    onVideoTaken({ path: fileUri, durationSec: null });

  },
  onPickError: (e) => {
    

    SetCurrentSubstep(CurrentSubstep.WatchVideo);
  },
});

 */
const PickFile = async ({ fileType, onFilePicked, onPickError }) => {
  /* PLOP_INJECT_CODE */
  try {
    const response = await DocumentPicker.pick({
      presentationStyle: "fullScreen",
      type: fileType,
      copyTo: "documentDirectory",
    });

    const decodedUri = decodeURIComponent(response[0]?.fileCopyUri);

    RunIfPossible({ func: onFilePicked, args: decodedUri });
  } catch (err) {
    RunIfPossible({ func: onPickError, args: err });
  }
};

export { PickFile };
