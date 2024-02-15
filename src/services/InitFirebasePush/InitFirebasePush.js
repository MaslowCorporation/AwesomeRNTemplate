import messaging from '@react-native-firebase/messaging';
import { CreateFirestoreDocument, UpdateFirestoreDocument } from '../FirestoreCRUD/FirebaseCRUD';
import notifee from '@notifee/react-native';

// Note that an async function or a function that returns a Promise 
// is required for both subscribers.
export function InitFirebasePush() {
    // React Native


    function onMessageReceived(message) {
        notifee.displayNotification(JSON.parse(message.data.notifee));
    }

    messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(onMessageReceived);

    onAppBootstrap();
}

async function onAppBootstrap() {
    // Register the device with FCM
    await messaging().registerDeviceForRemoteMessages();

    // Get the token
    const token = await messaging().getToken();

    // Save the token
    await CreateFirestoreDocument({
        collectionName: "FCMKeys",
        documentId: token,
        documentData: { token },
        //onSuccess,
        //onError,
    });
}
