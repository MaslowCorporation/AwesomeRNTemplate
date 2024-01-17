

// Import module
import { Linking, Platform } from 'react-native';

/**
 * 
 * Function that writes hex code to Arduino board over Serial USB
 * via a Android app called remindmeHex
 *  
 */
export async function UploadHexToArduino(hexString) {


    if (!hexString) {
        return false;
    }

    try {
        const currentPlatform = Platform.OS;

        if (currentPlatform == 'android') {
            const arduinoGPTHexIntent = `maslow://remindme.com?hex_str=${hexString}`;
            const arduinoGPTHexInstall = `https://play.google.com/store/apps/details?id=com.remindme`;

            await Linking.openURL(arduinoGPTHexIntent);

            /*
            if (await Linking.canOpenURL(arduinoGPTHexIntent)) {
                console.log(`remindmeHex is currently installed on your Android device, let's start this app !`);

                await Linking.openURL(arduinoGPTHexIntent);
            } else {
                console.log(`remindmeHex is not currently installed on your Android device, let's go to the installation page !`);

                await Linking.openURL(arduinoGPTHexInstall);

            }
            */

            return true;
        } else {
            console.log(`IOS devices don't like USB stuff.... In order to install your program, use the remindmeHex app available on Android (Windows/Linux/MacOS versions of remindmeHex coming soon) !`);

            // `https://npmjs.com/package/arduino-gpt-hex`
            await Linking.openURL("https://play.google.com/store/apps/details?id=com.remindme");

            return true;
        }

    } catch (error) {
        console.error(`Failed to install hex on Arduino UNO: ${error}`);
    }

    return false;
}

