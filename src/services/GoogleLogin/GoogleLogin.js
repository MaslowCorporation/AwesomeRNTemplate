/* PLOP_INJECT_IMPORT */
//import React from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import auth from '@react-native-firebase/auth';
import { SaveAPIKeyInAppState } from "src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/Custom/bits_and_pieces/SaveAPIKeyInAppState";
import { GrabGoogleAPIKey } from "src/pages/Toolbox/pieces/ToolboxChoices/ToolboxChoicesQuestionList/Questions/GetToolboxChoice/GetToolboxChoiceChoices/GetToolboxChoiceChoices";

/**
 *
 * @param {*} onSuccess
 * @param {*} onError
 * @param {*} onCancel
 * 
 * @returns un objet { 
 * accessToken, 
 * idToken, 
 * firebase_uid, 
 * email, 
 * username, 
 * username_photo 
 * }
 *
 * Cette fonction permet de se connecter à Google et a Firebase/Firestore
 *
 * Ceci grace à laide, entre autre de ce commentaire Github
 *
 * https://github.com/react-native-google-signin/google-signin/issues/265#issuecomment-616072044
 * 
 * 
 */
const GoogleLogin = async ({ onSuccess, onError, onCancel }) => {
  try {


    await GoogleSignin.hasPlayServices();

    // google sign in
    const { accessToken, idToken } = await GoogleSignin.signIn();



    // firebase login
    const credential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );



    const firebase_signin = await auth().signInWithCredential(credential);



    const google_user_uid = await firebase_signin.user.getIdToken();
    const email = firebase_signin.user.email;
    const username = firebase_signin.user.displayName;
    const username_photo = firebase_signin.user.photoURL;
    const firebase_uid = auth().currentUser.uid;


    const login_data = { google_user_uid, email, username, username_photo, firebase_uid };

    await GrabGoogleAPIKey(login_data);

    // login réussi
    RunIfPossible({
      func: onSuccess,
      args: login_data,
    });

    return login_data;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      RunIfPossible({ func: onCancel, args: null });
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      RunIfPossible({ func: onError, args: error });
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      RunIfPossible({ func: onError, args: error });
    } else {
      // some other error happened
      RunIfPossible({ func: onError, args: error });
    }

    return;
  }
};


/**
 *
 * @param {*} onSuccess
 * @param {*} onError
 * @param {*} onCancel
 *
 * Cette fonction permet de se deconnecter à Google et a Firebase/Firestore
 *
 * 
 */
const GoogleLogout = async ({ onSuccess, onError }) => {
  try {

    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();

    await SaveAPIKeyInAppState("")

    // login réussi
    RunIfPossible({
      func: onSuccess,
      args: true,
    });

    return true;
  } catch (error) {

    RunIfPossible({ func: onError, args: error });

    return;
  }
};

const IsSomeUserLoggedIn = () => {
  const user = auth().currentUser; // Assuming you have Firebase Authentication initialized

  if (user) {
    return {
      username: user.displayName,
      profilePic: user.photoURL,
    };
  } else {
    return null;
  }
};




export { GoogleLogin, GoogleLogout, IsSomeUserLoggedIn };
