import { Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

/* PLOP_INJECT_IMPORT */

// nécéssaire
import React from 'react';

// permet dupdate lécran quand tout est prêt
import { useCallback } from 'react';

// permet dafficher un écran de patientage
import * as SplashScreen from 'expo-splash-screen';


// cache le splash screen quand on en a plus besoin.
// quand tout (fonts, icones, etc...) est chargé
export const hideSplashScreenWhenLoaded = appState => {
  const onLayoutRootView = useCallback(async () => {
    if (appState.isEverythingLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setIsEverythingLoaded`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appState]);

  // retourne le onLayoutRootView nécessaire a laffichage de lappli
  return onLayoutRootView;
};


function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 28 }}>Content is in safe area.</Text>
    </View>
  );
}

export function Home({ route, navigation }) {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}