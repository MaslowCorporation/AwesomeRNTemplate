import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */

// permet callback onpress
import { OnHardwareBackPressed } from 'src/services/OnHardwareBackPressed/OnHardwareBackPressed.js';

// bruit son onlic
import { SoundPlayer } from 'src/services/SoundPlayer/SoundPlayer.js';

// getter/setter
import { SqliteReduxToolboxState } from 'src/reduxState/ToolboxState/ToolboxStateGetterSetter';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Constants } from 'src/constants/Constants';
import { cancelItemCreation } from '../AddAPIKeySubpage/cancelItemCreation';

// gère appui sur bouton back du device.
export const OnDeviceBackPressed = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  // exécute ton la callback de back pressed ?
  const doWeRunCallback = true;
  //ToolboxState.chosenOne != 'ToolboxChoices' ||
  //ToolboxState.snackbarVisible == Constants.true;

  // route de react navigation
  const route = useRoute();
  const navigation = useNavigation();

  OnHardwareBackPressed({
    sound: () => SoundPlayer({ sound: PlayerGTAInstance.GetSound() }),
    stateValue: ToolboxState.chosenOne,
    condition: () => doWeRunCallback,
    action: () => {
      console.log(`do we run callback ?: ${doWeRunCallback}`);
      //console.log(`chosen one: ${ToolboxState.chosenOne}`);

      if (ToolboxState.chosenOne == "AddAPIKeySubpage") {
        cancelItemCreation();
      } else {
        navigation.popToTop();
      }
    },
  });
};
