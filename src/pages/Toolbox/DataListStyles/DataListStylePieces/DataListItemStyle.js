import {PlayerGTAInstance} from 'src/constants/PlayerGTA/PlayerGTA';
import {HowLongAgo} from 'src/services/HowLongAgo/HowLongAgo';
import {app_strings} from 'src/stringRepos/AppStrings/AppStrings';
import {Constants} from 'src/constants/Constants.js';
import {GoToEditItemInToolbox} from '../../pieces/NavHelpers/GoToEditItemInToolbox';
import {useRoute} from '@react-navigation/native';

/**
 *
 * @param {*} item, l'élement individuel dans la liste d'items de la base de données.
 * @param {*} index, la position de cet item dans la liste
 *
 * @returns les styles et callbacks,
 * à appliquer à l'UI par défaut de l'item,
 * de la liste de données
 */
export const DataListItemStyle = (item, index) => {
  // la date de création de l'item
  const creationDate = new Date(
    item.creation_year,
    item.creation_month,
    item.creation_day,
    item.creation_hour ?? 0,
    item.creation_minute ?? 0,
    item.creation_second ?? 0,
  );

  // la date de création de l'item, format texte
  const howLongAgo = HowLongAgo({creationDate: creationDate});

  // trucs de react-navigation
  const route = useRoute();
  //const navigation = useNavigation();

  return {
    // la couleur du texte et consorts, dans le DataListItem
    contentColor: Constants.defaultContentColor,

    // le style du texte
    contentFont: Constants.defaultFontFamily,

    // la couleur d'arrière plan
    backgroundColor: Constants.defaultBackgroundColor,

    // l'url ou uri local du thumbnail de l'item
    thumbUrl: null,
    thumbPath: route.params.images.baby,

    // le nom de l'item
    itemName: `${item.name}`,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // 1 ou plusieurs informations a propos de l'item
    itemsInfos: [
      {
        // self explanatory
        infoIconUrl: null,
        infoIconPath: null,
        infoTxt: `${app_strings.t('DOB')} ${howLongAgo}`,
      },
    ],
    onItemClicked: () => {
      /*
      
      navigation.navigate("<SomeFancyNewPage>", {
        data: {},
      });

      */
    },
    onItemLongPress: () => {
      GoToEditItemInToolbox(item.uniqueId);
    },
  };
};
