
# arduinogpt

## To setup this app template into an app

[See this tutorial for more info](https://github.com/MaslowCorporation/MaslowGPTDev/blob/main/AllReadmeFiles/CreateRNApp/README.md)

## When shizzle go sour, do this:

delete node_modules & package-lock.json, then run this command to clean npm/yarn cache ;-) Sometimes, this fixes the shizzle

```
npm cache clean; npx yarn cache clean;
```

Then clean your Android stuff with

```
cd android; ./gradlew clean
```

Then clean your iOS stuff with these commands

(install rimraf globally using `npm i -g rimraf` and use rimraf on Windows, because rm isn't there for Windows)

```
rm -rf ios/Pods
rm ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
```

Then run `npm i` to reinstall the dependencies

Then reinstall the ios Pods dependencies using

```
cd ios; npx pod-install
```

Then reinstall your app on your Android/iOS device, using 

```
npx react-native run-android
```

and

```
npx react-native run-ios
```

Then close your app, and restart your app using this command, to clear the Metro Bundler cache too ;-)

```
npx react-native start --reset-cache
```

And Voilà !!

