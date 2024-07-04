
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// Import react-native-image-crop-picker library
import ImagePicker from 'react-native-image-crop-picker';

/*
Its important to note, the details of the crop region 
would generally be obtained from user interactions in the 
UI and not pre-set. The mock function below is simplified 
to illustrate the overall idea.
*/

function CropPicture({ imgPath, cropAreaSize, onSuccess, onError }) {

  // Declare crop configuration
  const cropConfig = {
    path: imgPath,
    width: cropAreaSize,
    height: cropAreaSize,
  };

  // Start cropping operation
  ImagePicker.openCropper(cropConfig)
    .then(image => {
      // onSuccess callback, image.path contains the path of cropped image
      onSuccess(image.path);
    })
    .catch(error => {
      // onError callback
      onError(error);
    });
}

export default CropPicture;

