import { FetchReduxStates } from './FetchReduxStates';
import { FetchFonts } from './FetchFonts';
import { FetchImages } from './FetchImages';
import { FetchAudios } from './FetchAudios';
import { FetchGoogleSignIn } from './FetchGoogleSignIn';

// lance le chargement de toutes les choses nécessaires.
//
// retourne le state initial à fournir à tous les écrans.
// ce state initial contient les lecteurs audios.
// entre autres.
export const FetchEverythingNeededAsynchronously = async () => {
  const fontAssets = FetchFonts();
  const imageAssets = FetchImages();
  const reduxLoadings = FetchReduxStates();
  const audioPlayersAsync = FetchAudios();
  const googleSignIn = FetchGoogleSignIn();


  const results = await Promise.all([
    imageAssets,
    fontAssets,
    reduxLoadings,
    audioPlayersAsync,
    googleSignIn,
  ]);

  const audioPlayers = results[3];
  const images = results[0];

  return {
    audioPlayers: audioPlayers,
    images: images,
  };
};
