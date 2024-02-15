/* PLOP_INJECT_IMPORT */

import {
  TestPage
} from "src/pages/TestPage/TestPage";

import { Toolbox } from 'src/pages/Toolbox/Toolbox';

// nécéssaire
import React from 'react';


// styles de base
import { styles } from './App.style.js';

// barre dheure stylée
import { StatusBar } from 'react-native';

// provider redux
import { Provider } from 'react-redux';

// provider react native paper
import { Provider as PaperProvider } from 'react-native-paper';

// permet nav entre écran
import { NavigationContainer } from '@react-navigation/native';

// store redux
import { store } from 'src/reduxState/reduxStore';

// écran par défaut
import { Home } from './AppInit';

// pour bon affichage IOS
import { SafeAreaProvider } from 'react-native-safe-area-context';

// constantes utiles
import { Constants } from 'src/constants/Constants.js';

// permet de pouvoir naviguer entre écrans
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * Ceci permet de pouvoir naviguer entre différents écrans
 * dans cette application.
 *
 * + dinfos dispo Ici
 *
 * https://reactnavigation.org/docs/getting-started
 */
const Stack = createNativeStackNavigator();

/**
 *
 * @param {*} onLayoutRootView, permet affichage de lappli
 *
 * @param {*} appState, le state de base de lapplication.
 *
 * @returns Lalpha et Loméga, lappli entière.
 */
export const AppMainComponent = ({ onLayoutRootView, appState }) => {
  /* PLOP_INJECT_CODE */

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      {/* Permet de donner de la couleur et du style, à la barre ou il y a lheure sur ton phone */}
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
      />

      {/* Le Provider Redux, qui permet accès CRUD à des données, et refresh UI */}
      <Provider store={store}>
        {/* Le Provider react-native-paper, qui permet accès à des pretty Appbar et autre joyeuseries */}
        <PaperProvider>
          {/* Permet une navigation entre écrans */}
          <NavigationContainer>
            {/* initialRouteName, cest la page par défaut a lallumage de lappli */}
            <Stack.Navigator
              initialRouteName="TestPage"
              screenOptions={{
                headerShown: false,
              }}>
              {/* PLOP_INJECT_PAGES_PARAMS */}

              <Stack.Screen
                name="TestPage"
                component={
                  TestPage
                }
                initialParams={
                  appState.initialState
                } />
              <Stack.Screen
                name="Toolbox"
                component={Toolbox}
                initialParams={appState.initialState}
              />

              {/* la page par défaut */}
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={appState.initialState}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
