import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function FetchGoogleSignIn() {

  GoogleSignin.configure({
    webClientId: "<GGL_CLIENT_ID>",
  });



  return true;
}
