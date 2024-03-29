import i18next from 'i18next';


// Import necessary packages
import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text } from 'react-native';

// QRScanner Component
export default function QRScanner({ onSuccess, onError }) {
    // Permission state
    const [hasPermission, setHasPermission] = React.useState(null);

    // Requests permission for camera on component mount
    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // If permissions not determined, return null
    if (hasPermission === null) {
        return null;
    }

    // If no camera permission was granted, return an error message
    if (hasPermission === false) {
        onError(i18next.t('xO7ZBv8'));
        return <Text>Access to camera has been denied.</Text>;
    }

    // Function that is called when a QR code has been scanned
    const handleBarCodeScanned = ({ type, data }) => {
        // After a successful scan, call the `onSuccess` prop
        onSuccess(data);
    };

    // Return the BarCodeScanner component from expo-barcode-scanner
    return (
        <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={{ flex: 1 }}
        />
    );
}

