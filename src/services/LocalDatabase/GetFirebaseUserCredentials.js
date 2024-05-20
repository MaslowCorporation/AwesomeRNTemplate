import auth from '@react-native-firebase/auth';
import { GoogleLogin } from '../GoogleLogin/GoogleLogin';


export const GetFirebaseUserCredentials = async () => {
    let user = auth().currentUser;

    if (user) {
        // User is already logged in

        return user;
    } else {
        // User is not logged in



        return null;
    }
};