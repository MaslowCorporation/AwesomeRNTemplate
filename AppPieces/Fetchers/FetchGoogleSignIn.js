import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function FetchGoogleSignIn() {

  GoogleSignin.configure({
    webClientId: null,
  });



  return true;
}
