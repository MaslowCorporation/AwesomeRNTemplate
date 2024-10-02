import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */
import {
  AddAPIKeySubpage
} from './pieces/AddAPIKeySubpage/AddAPIKeySubpage.js';
import { ToolboxChoices } from './pieces/ToolboxChoices/ToolboxChoices.js';
import { SqliteReduxToolboxState } from 'src/reduxState/ToolboxState/ToolboxStateGetterSetter';

// permet du state local
import { React } from 'react';

// des blocs de base
import { StatusBar } from 'react-native';

// styles de base
import { styles } from './Toolbox.style.js';

// permet affichage correct sur lécran
import { View } from 'react-native';

// constantes globales
import { Constants } from 'src/constants/Constants.js';

// permet lifecycle
import { OnComponentLifeAndDeath } from './pieces/OnComponentLifeAndDeath/OnComponentLifeAndDeath';

// écran dajout ditem
import { AddItemToToolbox } from './pieces/AddItemToToolbox/AddItemToToolbox';

// écran de modif ditem
import { EditItemInToolbox } from './pieces/EditItemInToolbox/EditItemInToolbox';

// la liste ditem ou un message, si liste vide
import { ToolboxListOrMsg } from './pieces/ToolboxListOrMsg/ToolboxListOrMsg';

// gère les appui sur bouton back du phone.
import { OnDeviceBackPressed } from './pieces/OnDeviceBackPressed/OnDeviceBackPressed';

// permet message SnackBar
import { Messager } from 'src/components/Messager/Messager';

// un tourneur
import { Spinner } from 'src/components/Spinner/Spinner.js';
import { Wait } from './pieces/Wait/Wait.js';
import { HideSnackbar } from './pieces/NavHelpers/HideSnackbar.js';

/**
 *
 * 

 
// getter/setter
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

// getter, contient le state actuel
const ToolboxState =
  SqliteReduxToolboxState.GetFreshestToolboxStateFirstRow();

// setter de state de page, en entier
SetPageState({
  // le state existant.... agrémenté de ....
  ...ToolboxState,

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index derreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // lécran actuellement affiché dans Toolbox.js
  chosenOne: "ToolboxList",

  // la page Toolbox.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique
  uniqueId: "ToolboxState",
}); OK

// setter, permet de nav vers écran de création de données.
GoToAddItemToToolbox(); OK

// setter, permet de nav vers écran de liste de données.
GoToToolboxList(); OK

// setter, permet de nav vers écran de navigation entre étapes.
GoToEditItemInToolbox(); OK

// setter, permet de nav vers écran de patiente
GoToWaitScreen();

// setter, permet de cacher le snackbar
HideSnackbar(); OK

// setter, permet de rendre lécran visible
MarkScreenAsMounted(); OK

// setter, permet de choisir quel écran on veut visionner
SetCurrentChosenOne("newChosenOne", "itemUniqueId"); OK

// setter, permet de changer lindex ditem visionné
SetCurrentIndex(newIndex); OK


***********

 * 
 * 
 * @param {*} route
 * @param {*} navigation
 *
 * @returns lécran de tutos
 */
const Toolbox = ({ route, navigation }) => {
  /* PLOP_INJECT_CODE */

  // le state de la page
  const ToolboxState =
    SqliteReduxToolboxState.GetFreshestToolboxStateFirstRow();



  /**
   * gère les appui sur bouton back
   * pour fermer menu options
   */
  OnDeviceBackPressed();


  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit.
   *
   * A lintérieur de ceci, on a ajouté un timeout qui
   * permet une meilleure navigation entre écran.
   */
  OnComponentLifeAndDeath();

  /* si la page nest pas prête à etre affiché, affiche spinner */
  if (ToolboxState.isMounted == Constants.false) {
    return (
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    );
  }

  /* si la page est prête à etre affiché, affiche la */
  return (
    /* le conteneur qui contient toute la page */
    <View style={styles.dataListContainer}>
      {/* Permet de donner de la couleur et du style, à la barre ou il y a lheure sur ton phone */}
      <StatusBar
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
        barStyle={'dark-content'}
      />

      {/* PLOP_INJECT_SUBPAGE */}

      <AddAPIKeySubpage />

      <ToolboxChoices />

      {/* la liste des items crées par luser, ou un message invitant à créer un item. */}
      <ToolboxListOrMsg />

      {/* Lécran de création ditem */}
      <AddItemToToolbox />

      {/* Lécran de modification ditem */}
      <EditItemInToolbox />

      {/* Lécran de patientage */}
      <Wait />

      {/* permet dafficher des messages à lécran */}
      <Messager
        clickSound={PlayerGTAInstance.GetSound()}
        message={ToolboxState.snackbarText}
        onDismiss={() => {
          HideSnackbar();
        }}
        snackbarVisible={
          ToolboxState.snackbarVisible == Constants.true ? true : false
        }></Messager>
    </View>
  );
};

export { Toolbox };
