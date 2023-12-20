
// We start by importing necessary modules and components
import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import RNFetchBlob from 'react-native-blob-util';
import { SaveFileToCameraRoll } from '../SaveFileToCameraRoll/SaveFileToCameraRoll';




// Defining and exporting QRGenerator function
export function QRGenerator({ qrText, fontFamily, downloadButtonText, onSuccess, onError }) {

  // useRef is a built-in function in React
  // We used it here to create a variable that can hold a reference to the QRCode component
  let qrRef = useRef(null);

  const handleDownload = () => {

    // Check if a QR code has been generated
    if (!qrRef.current) {
      // If not, inform client via error callback
      onError('No QR code to download.');
      return;
    }

    // Define a path to save the generated QR code
    // We're using RNFetchBlob to get a path to a temporary directory
    const path = `${RNFetchBlob.fs.dirs.CacheDir}/qrcode.png`;

    // Convert QR code to Base64
    qrRef.current.toDataURL((data) => {

      // Save base64 data as a file to a temporary cache dir
      // It's a good practice to catch promise based function
      // because they can throw an error if something goes wrong
      RNFetchBlob.fs.writeFile(path, data, 'base64')
        .then(() => {

          // After saving to cache, save the file to the device's Gallery
          return SaveFileToCameraRoll(path)
        })
        .then((path) => {

          // If everything went good, inform the client via success callback
          onSuccess(path);

          ToastAndroid.show(`File Saved to gallery !`, ToastAndroid.SHORT);
        })
        .catch((err) => {

          onError(err.message);
        });
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Display QR code view if qrText is available */}
      {qrText && <QRCode value={qrText} getRef={(c) => (qrRef.current = c)} />}
      <View style={{ flexDirection: 'row' }}>
        {/* Button for creating a QR code */}

        {/* Button for downloading the QR code */}
        <TouchableOpacity onPress={handleDownload}>
          <Text style={{ fontFamily, margin: 25 }}>{downloadButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

