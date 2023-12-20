/* PLOP_INJECT_IMPORT */
import { useCallback, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

/**
 *
 * @param {*} fontPaths,
 * une liste des paths de fonts qu'on va utiliser,
 * partant du dossier racine de l'appli
 *
 * @param {*} setAppIsReady,
 * une callback qui permet de changer le state d'un component
 *
 * @param {*} appIsReady
 * l'état d'avancement du chargement des font(s)
 *
 * @returns un truc machin chose nécessaire à l'affichage
 * délayé de l'UI
 */
const FontsLoader = (fontPaths, setAppIsReady, appIsReady) => {
  useEffect(() => {
    async function prepare() {
      try {
        /*console.log("Chargeons ces jolis fonts...");*/

        // chargeons nos font(s)
        await Font.loadAsync(fontPaths);
      } catch (e) {
        console.warn(e);
      } finally {
        /*console.log("Les fonts sont enfin chargés !");*/

        // indique que les données sont chargées
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    // si les données sont chargées...
    if (appIsReady) {
      // cache le splash
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // retournons ze truc machin chose nécéssaire
  return onLayoutRootView;
};

export { FontsLoader };
