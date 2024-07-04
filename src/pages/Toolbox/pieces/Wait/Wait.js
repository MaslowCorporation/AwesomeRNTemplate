/* PLOP_INJECT_IMPORT */

// some shyt
import { React } from "react";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// getter/setter
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";
import { Spinner } from "src/components/Spinner/Spinner";

/**
 *
 * @returns un component qui affiche conditionnellement
 * un spinner
 */
export const Wait = () => {
  /* PLOP_INJECT_CODE */

  // getter
  const ToolboxState =
    SqliteReduxToolboxState.GetFreshestToolboxStateFirstRow();

  /**
   *
   * Camouflage, cest une cape dinvisibilité conditionnelle,
   * si chosenOne == name, on affiche contenu, sinon rien
   *
   */
  return (
    <Camouflage
      chosenOne={ToolboxState.chosenOne}
      name={"Wait"}
      refreshed={true}
    >
      {/* ridin spinners */}
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    </Camouflage>
  );
};
