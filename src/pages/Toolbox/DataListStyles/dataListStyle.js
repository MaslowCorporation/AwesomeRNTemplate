import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */

// permet accès CRUD a DB Sqlite , + Redux associé

// permet choix conditionnel

// truc important
import { useRoute } from '@react-navigation/native';
import { React } from 'react';

// briques de base

// item dans liste
import { DataListItem } from 'src/components/DataListItem/DataListItem';

// multilingue

// constantes globales
import { Constants } from 'src/constants/Constants.js';

// style a appliquer à litem par défaut de la liste ditems
import { DataListItemStyle } from './DataListStylePieces/DataListItemStyle';

// messaage du vide
import { EmptyDBMessageLayout } from './DataListStylePieces/EmptyDBMessageLayout';

/* PLOP_INJECT_CODE */

/**
 * les styles du torse
 * de la liste.
 *
 * Il faut fournir les styles
 * de lappbar et du bottom bar,
 * car la heuteur et largeur de la liste de données
 * dépend du style appliqué a lappbar et bottom bar.
 */
const getDataListStyle = () => {
  const route = useRoute();

  return {
    // la couleur darrière plan par défaut de la liste de données.
    backgroundColor: Constants.defaultBackgroundColor,

    // la couleur par défaut du texte de la liste de données
    contentColor: Constants.defaultContentColor,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // les styles à appliquer au message de base de données vide.
    emptyDBMsgData: EmptyDBMessageLayout(),
    // le layout dun item individuel de la liste de données
    renderDataListItem: ({ item, index }) => {
      return (
        <DataListItem
          itemData={item}
          itemStyle={DataListItemStyle(item, index)}
        />
      );
    },

    // si renderOnlyItemOnScreen = true
    // et dataListScrollDirection == "vertical_one_by_one" ou "horizontal_one_by_one"
    // quaffiche ton pour les items entourant litem snackbarVisible à lécran.
    // les personnages non joueurs (PNJ - NPC)
    renderNPCDataListItem: ({ item, index }) => {
      return (
        <DataListItem
          itemData={item}
          itemStyle={DataListItemStyle(item, index)}
        />
      );
    },

    // que fait on quand on arrive au bout de la liste ?
    onListEndPushed: () => {
      /**/
    },

    // on affiche uniquement litem à lindex en cours de visionnage ?
    renderOnlyItemOnScreen: true,

    // si renderOnlyItemOnScreen = true
    // howManyNPCSOnEachSide représente combien de PNJ entourent la chose affichée a lécran ?
    // combien à gauche et a droite.
    // (par ex: si howManyNPCSOnEachSide = 1, il y a un component PNJ a gauche et un a droite.
    // le reste des éléments de la FlatList est = à null.
    //
    // ..... null => PNJ => Chose a lécran => PNJ => null => .....
    //
    // Ce méchanisme permet de ne pas trop surcharger notre UI
    // quand on affiche une liste de components 'lourds'
    // (comme une vidéo, etc...).
    // Par défaut, FlatList affiche tout en même temps, ce qui peut poser problème.
    howManyNPCSOnEachSide: 1,

    // dans quel sens va le scroll ?
    //
    // vertical, horizontal, vertical_one_by_one, horizontal_one_by_one
    dataListScrollDirection: 'vertical',
  };
};

export { getDataListStyle };
