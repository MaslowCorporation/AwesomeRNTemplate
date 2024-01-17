# remindme (A simple & humble & beautiful React Native app template) 🌎

## APP CODE PLACEHOLDERS

- package.json

<ADDR_IP> = The IP Address of the physical Android device.

<YOUR_GITHUB_URL> = your github repo url, for pushing 

- AppPieces/Fetchers/FetchGoogleSignIn.js

<GGL_CLIENT_ID> = Your Google Web Client ID (necessary for firebase/firestore)

- android/app/google-services.json (a file that needs to be added to the app, so it can build/work properly)

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