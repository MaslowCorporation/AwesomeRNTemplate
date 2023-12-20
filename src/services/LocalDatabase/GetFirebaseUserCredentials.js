import auth from '@react-native-firebase/auth';
import { GoogleLogin } from '../GoogleLogin/GoogleLogin';


export const GetFirebaseUserCredentials = async () => {
    let user = auth().currentUser;

    if (user) {
        // User is already logged in
        console.log('User is logged in:', user.uid);
        return user;
    } else {
        // User is not logged in
        console.log('User is not logged in');


        return null;
    }
};