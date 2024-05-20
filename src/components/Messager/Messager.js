import { Platform, ToastAndroid, Alert } from 'react-native';
import { Delay } from 'src/services/Delay/Delay';

/* PLOP_INJECT_GLOBAL_CODE */
/**
 *
 * un objet props {} contenant {
 *   route: { nous permet de pouvoir passer des données entre écrans },
 *   navigation: <un objet qui nous permet de naviguer d un écran vers un autre>
 * }
 *
 *
 * @returns une liste ditems crées par toi, lutilisateur de lappli.
 */
const Messager = props => {
  if (props.snackbarVisible) {
    showSnackbar(props.message);

    if (props.onDismiss) {
      (async function () {
        await Delay(750);

        props.onDismiss();
      })();

    }
  }

  return;
};

export function showSnackbar(message) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else if (Platform.OS === 'ios') {
    Alert.alert(message);
  }
}

export { Messager };
