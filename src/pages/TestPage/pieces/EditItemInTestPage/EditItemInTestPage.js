/* PLOP_INJECT_IMPORT */

/* permet UI de création/modif ditem dans liste */
import { GetUserInput } from "src/components/GetUserInput/GetUserInput";

/* la liste de question nécessaire à la modif ditem via UI */
import { TestPageEditList } from "./TestPageEditList/TestPageEditList";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// some shyt
import { React } from "react";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// permet dêtre multilingue

// permet accès CRUD a DB Sqlite , + Redux associé
import { cancelItemCreation } from "./cancelItemCreation";
import { onItemCreationSuccess } from "./onItemCreationSuccess";
import { onItemCreationError } from "./onItemCreationError";

// getter/setter
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { useRoute } from "@react-navigation/native";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";
import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";

/**
 *
 *
 * @returns un component qui affiche conditionnellement
 * un GetUserInput de création ditem dans TestPage.
 */
export const EditItemInTestPage = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const TestPageState =
    SqliteReduxTestPageState.GetFreshestTestPageStateFirstRow();

  // la liste de questions
  const questions = TestPageEditList();

  const route = useRoute();

  // currentItem is the item that just got long clicked in the list of data
  const currentItemUniqueId = TestPageState.itemUniqueId;
  const currentItem =
    SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);

  return (
    <Camouflage
      chosenOne={TestPageState.chosenOne}
      name={"EditItemInTestPage"}
      refreshed={true}
    >
      {/* Une UI de récup/modif de données */}
      <GetUserInput
        /* permet une persistence des donnes de cet item, durant */
        persistenceID={currentItem?.uniqueId}
        /* direction vers laquelle va le scroll */
        scrollDirection={"horizontal_one_by_one"}
        /* montre appbar, ou pas ? */
        showAppbar={true}
        /* le texte de titre de appbar */
        appbarTitle={app_strings.t("Edit")}
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
          cancelItemCreation();
        }}
        /* callback si on réussit  à obtenir données valides, via questions UI */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers);
        }}
        /* callback si données input sont invalides */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};
