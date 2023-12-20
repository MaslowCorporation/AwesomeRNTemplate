

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
                console.log(`ArduinoGPTHex is currently installed on your Android device, let's start this app !`);

                await Linking.openURL(arduinoGPTHexIntent);
            } else {
                console.log(`ArduinoGPTHex is not currently installed on your Android device, let's go to the installation page !`);

                await Linking.openURL(arduinoGPTHexInstall);

            }
            */

            return true;
        } else {
            console.log(`IOS devices don't like USB stuff.... In order to install your program, use the ArduinoGPTHex app available on Android (Windows/Linux/MacOS versions of ArduinoGPTHex coming soon) !`);

            // `https://npmjs.com/package/arduino-gpt-hex`
            await Linking.openURL("https://play.google.com/store/apps/details?id=com.arduinogpt");

            return true;
        }

    } catch (error) {
        console.error(`Failed to install hex on Arduino UNO: ${error}`);
    }

    return false;
}

