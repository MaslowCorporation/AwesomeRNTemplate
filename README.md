# <YOUR_APP_NAME> (A simple & humble React Native app template)

## Create a React Native app using the npx <MAS> create-react-native-app command

Install <MAS_CAMEL>GPT from npm

https://npmjs.com/LINK_COMING_SOON

Run the following command, and follow the steps, to create your very own React Native App

(It could be the next big thing, or your own little recipe cooking or todo app ! Your imagination is the limit ;-)

```
npx <MAS> create-react-native-app
```

Once created, navigate to the root folder of this baby app, and install the npm dependencies

```
cd 'path_to_root' && npm i
```

To install your app on a physical Android device, do the following:

Turn on developer options in your android device.

Turn on USB debugging in the developer options

Plug your device (smartphone/tablet) to your computer,
via USB, and allow the USB debugging popup message.
Also, check the 'always allow' button.
You can now unplug your device from the computer.

Install Tailscale, on your Android device AND on your computer.

Then go to package.json, and look for this pattern:

<ADDR_IP_PHONE>

replace <ADDR_IP_PHONE> with the Tailscale IP address of your android device.

Create a Cloud Firestore project for your app, at:

https://console.firebase.google.com

Create a Android application inside this project 

You will need to add a SHA 1 key, during this creation process.

Run the command below to get this SHA 1 key:

```
npm run get-sha-keys
```

The SHA 1 key you need is the one with:

Task :app:signingReport, 
Variant: debugAndroidTest, 
Config: debug

You will also need the applicationId, it is available at android/app/build.gradle

Once the Android application is created, Create a Cloud Firestore database, and add a collection named 'SqliteReduxDatabases' in it. 
then add the following rules to the Rules section of Cloud Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read and write access to authenticated users.
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```


Go to Authentication, activate Authentication, then Sign-in method, then activate Google Sign in.
Choose the default email address in the dropdown menu.

Once activated, copy the Web client ID, available in the same page, in a dropdown menu 
(the dropdown menu about the Web SDK)
and add this Web Client ID to the

AppPieces\Fetchers\FetchGoogleSignIn.js

file. Uncomment the code in this file, and replace <GGL_CLIENT_ID> with the client id you just copied

```
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function FetchGoogleSignIn() {
  /*
  
  GoogleSignin.configure({
    webClientId: "<GGL_CLIENT_ID>",
  });

  */

  return true;
}
```

Then download the google-services.json file, and add it in the android/app folder.

Finally, plug your Android device via USB, then run this command to install/develop/debug your app (on a physical Android device)

```
npm run android
```

The first time you run this command, it will fail, and a notification will appear on your Android device, asking you to allow your computer, say yes, and toggle the 'remember' choice.

Then re-run the same command

```
npm run start-debug-android
```

And wait for 2-3 minutes, and your app will install successfully ! Bravo !

## App code setup 

package.json

<ADDR_IP_PHONE> = The Tailscale IP Address of the physical Android device.

<YOUR_GITHUB_URL> = your github repo url, for pushing 

AppPieces/Fetchers/FetchGoogleSignIn.js

<GGL_CLIENT_ID> = Your Google Web Client ID (necessary for firebase/firestore)

## To permanently set Github username/password

you can set up Git to use SSH authentication instead, which is more secure and convenient. 

Here are the steps to fix this issue:

1. **Generate SSH Key Pair (if you don't already have one):**
   If you don't already have an SSH key pair, you can generate one using the following command:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   Replace `your_email@example.com` with your actual email address. You can leave the passphrase empty if you want to avoid entering it every time.

2. **Add Your SSH Public Key to Your Git Provider:**

   Display the SSH key with

   Ubuntu
   ```
   cat ~/.ssh/id_rsa.pub
   ```

   Windows CMD
   ```
   type %userprofile%\.ssh\id_rsa.pub
   ```

   Windows Powershell
   ```
   Get-Content $env:userprofile\.ssh\id_rsa.pub
   ```

   Copy the whole ssh-rsa ...... stuff, then go to this page in your Github account

   https://github.com/settings/ssh/new

   and create a SSH entry for your server/computer. Paste this SSH where needed.

3. **Update Your Git Remote URL:**
   Change your Git remote URL from HTTPS to SSH. You can do this using the following command:

   ```bash
   git remote set-url origin git@github.com:user/repo.git
   ```

   Replace `git@github.com:user/repo.git` with the SSH URL of your Git repository.

4. **Test SSH Authentication:**
   To make sure SSH authentication is working, you can run the following command:

   ```bash
   ssh -T git@github.com
   ```

   Replace `github.com` with the hostname of your Git provider. You should see a message indicating successful authentication.

   Something like:

   Hi <YOUR_GITHUB_USERNAME>! You've successfully authenticated, but GitHub does not provide shell access.

5. **Perform a Git Pull:**
   Now, when you run `git pull` on the server side, it should use SSH authentication, and you won't be prompted for a username and password.

By following these steps, you'll set up SSH authentication for your Git repository, which is more secure and should eliminate the need to enter your credentials every time you perform Git operations.

## Troubleshooting

### To fix the following Watchman error

```
metro-file-map: Watchman crawl failed. Retrying once with node crawler.
Usually this happens when watchman isn't running. Create an empty `.watchmanconfig` file in your project's root folder or initialize a git or hg 
repository in your project.
```

Run this command below:

```
watchman watch-del-all; watchman shutdown-server
```

### ......