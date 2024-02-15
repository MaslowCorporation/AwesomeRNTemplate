import i18next from 'i18next';


// Import module
import { Linking, Platform } from 'react-native';

/**
 * 
 * Function that writes hex code to Arduino board over Serial USB
 * via a Android app called ArduinoGPTHex
 *  
 */
export async function UploadHexToArduino(hexString) {


    if (!hexString) {
        return false;
    }

    try {
        const currentPlatform = Platform.OS;

        if (currentPlatform == 'android') {
            const arduinoGPTHexIntent = `maslow://arduinogpt.com?hex_str=${hexString}`;
            const arduinoGPTHexInstall = `https://play.google.com/store/apps/details?id=com.arduinogpt`;

            await Linking.openURL(arduinoGPTHexIntent);

            /*
            if (await Linking.canOpenURL(arduinoGPTHexIntent)) {
                

                await Linking.openURL(arduinoGPTHexIntent);
            } else {
                

                await Linking.openURL(arduinoGPTHexInstall);

            }
            */

            return true;
        } else {

            // `https://npmjs.com/package/arduino-gpt-hex`
            await Linking.openURL("https://play.google.com/store/apps/details?id=com.arduinogpt");

            return true;
        }

    } catch (error) {
        console.error(i18next.t('xkpEDQ8t') + ` ${error}`);
    }

    return false;
}

