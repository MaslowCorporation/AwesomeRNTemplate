import { PlayerGTAInstance } from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */

/* permet UI de création/modif ditem dans liste */
import { GetUserInput } from 'src/components/GetUserInput/GetUserInput';

/* la liste de question nécessaire à la modif ditem via UI */
import { ToolboxChoicesQuestionList } from './ToolboxChoicesQuestionList/ToolboxChoicesQuestionList';

// some shyt
import { React } from 'react';

// constantes globales
import { Constants } from 'src/constants/Constants.js';

// permet affichage conditionnel de component
import { Camouflage } from 'src/components/Camouflage/Camouflage.js';

// permet dêtre multilingue
import auth from '@react-native-firebase/auth';


// permet accès CRUD a DB Sqlite , + Redux associé

// getter/setter
import { SqliteReduxToolboxState } from 'src/reduxState/ToolboxState/ToolboxStateGetterSetter';
import { useNavigation, useRoute } from '@react-navigation/native';
import { app_strings } from 'src/stringRepos/AppStrings/AppStrings';
import { useEffect } from 'react';
import { useState } from 'react';
import { Delay } from 'src/services/Delay/Delay';
import { Spinner } from 'src/components/Spinner/Spinner';

/**
 *
 *
 * @returns un component qui affiche conditionnellement
 * un GetUserInput de création ditem dans ToolboxChoices.
 */
export const ToolboxChoices = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const ToolboxState =
    SqliteReduxToolboxState.GetFreshestToolboxStateFirstRow();

  // la liste de questions
  const questions = ToolboxChoicesQuestionList();

  const route = useRoute();
  const navigation = useNavigation();

  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async currentUser => {
      setRefresh(true);

      await Delay(100);

      setRefresh(false);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <Camouflage
      chosenOne={ToolboxState.chosenOne}
      name={'ToolboxChoices'}
      refreshed={true}>
      {/* Une UI de récup/modif de données */}
      {refresh ?
        <Spinner color={Constants.defaultContentColor} backgroundColor={Constants.defaultBackgroundColor} /> :
        <GetUserInput
          /* direction vers laquelle va le scroll */
          scrollDirection={'horizontal_one_by_one'}
          /* montre appbar, ou pas ? */
          showAppbar={true}
          /* le texte de titre de appbar */
          appbarTitle={app_strings.t('ZeFokinToolz')}
          /* un bruit de clic */
          clickSound={PlayerGTAInstance.GetSound()}
          /* couleur darrière plan de appbar */
          appbarBackgroundColor={Constants.defaultBackgroundColor}
          /* taille de texte du titre appbar */
          appbarTextSize={20}
          /* couleur texte + icones appbar */
          appbarContentColor={Constants.defaultContentColor}
          /* font du texte du titre appbar */
          appbarFont={Constants.defaultFontFamily}
          /* liste de questions à transformer en UI  */
          questions={questions}
          /* couleur arrière plan body */
          bodyBackgroundColor={Constants.defaultBackgroundColor}
          /* couleur contenu body */
          bodyContentColor={Constants.defaultContentColor}
          /* font du texte du body */
          bodyFont={Constants.defaultFontFamily}
          /* couleur arrière plan bottom bar */
          bottomBarBackgroundColor={Constants.defaultBackgroundColor}
          /* couleur icones bottom bar */
          bottomBarIconsColor={Constants.defaultContentColor}
          /* callback si on annule création ditem */
          onCancel={() => {
            navigation.goBack();
          }}
          /* callback si on réussit  à obtenir données valides, via questions UI */
          onSuccess={answers => {
            //onItemCreationSuccess(answers, route);
          }}
          /* callback si données input sont invalides */
          onError={({ errMsg, errAnswerIndex, answers }) => {
            //onItemCreationError(answers, errAnswerIndex, errMsg);
          }}></GetUserInput>}
    </Camouflage>
  );
};
