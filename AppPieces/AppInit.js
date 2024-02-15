import i18next from 'i18next';

/* PLOP_INJECT_IMPORT */

// nécéssaire
import React from 'react';

// les fichiers de style de components.
import { styles } from './App.style.js';

// permet dupdate lécran quand tout est prêt
import { useCallback } from 'react';

// permet dafficher un écran de patientage
import * as SplashScreen from 'expo-splash-screen';

// un message avec bouton cliquable
import { MessageAvecBouton } from 'src/components/MessageAvecBouton/MessageAvecBouton';

// permet bon affichage IOS
import { SafeAreaView } from 'react-native-safe-area-context';

// permet daccéder a des globales
import { Constants } from 'src/constants/Constants.js';
import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA.js';

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

/**
 *
 * @param {*} un objet contenant: {
 *   route: { nous permet de pouvoir passer des données entre écrans },
 *   navigation: <un objet qui nous permet de naviguer d un écran vers un autre>
 * }
 *
 * @returns la page daccueil, un ptit message avec bouton.
 */
export const Home = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MessageAvecBouton
        messageText={i18next.t('xdTbnvWd')}
        messageTextColor={Constants.defaultContentColor}
        messageTextFont={Constants.defaultFontFamily}
        backgroundColor={'yellow'}
        iconPath={route.params.images.app_icon}
        iconWidth={50}
        iconHeight={50}
        buttonBackgroundColor={'orange'}
        buttonLogoName={'logo-google'}
        buttonLogoSize={20}
        buttonLogoColor={Constants.defaultContentColor}
        buttonText={i18next.t('xPuScS2M')}
        buttonTextColor={Constants.defaultContentColor}
        buttonTextFont={'PriceDown'}
        onButtonClicked={() => {
          PlayerGTAInstance.GetSound().replayAsync()


        }
        }></MessageAvecBouton>
    </SafeAreaView >
  );
};
