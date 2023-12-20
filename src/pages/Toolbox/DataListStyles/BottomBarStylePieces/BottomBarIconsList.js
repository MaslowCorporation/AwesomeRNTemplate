import { GoToAddItemToToolbox } from "../../pieces/NavHelpers/GoToAddItemToToolbox";

/**
 *
 *
 * @returns la liste d'icones de la barre du bas d'écran.
 */
export function BottomBarIconsList() {
  return [
    {
      iconName: "plus-thick",

      // callback quand icone est cliquée
      onIconClicked: () => {
        GoToAddItemToToolbox();
      },
    },
  ];
}
