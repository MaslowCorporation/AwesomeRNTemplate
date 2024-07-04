/* PLOP_INJECT_IMPORT */

// permet de chager des icones.

// permet dupdate lUI quand tout est chargé.
import { useEffect } from 'react';

// permet de charger les sons
import { FetchEverythingNeededAsynchronously } from './Fetchers/FetchEverythingNeededAsynchronously';

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit.
 *
 * dans notre cas, on charge des données utiles avant
 * dafficher lapplication.
 */
export const FetchEverythingNeeded = ({ appState, setAppState }) => {
  let initialState = null;

  useEffect(() => {
    async function prepare() {
      try {
        // charge tout ici
        initialState = await FetchEverythingNeededAsynchronously();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppState({
          ...appState,
          isEverythingLoaded: true,
          initialState: initialState,
        });
      }
    }

    prepare();
  }, []);
};
