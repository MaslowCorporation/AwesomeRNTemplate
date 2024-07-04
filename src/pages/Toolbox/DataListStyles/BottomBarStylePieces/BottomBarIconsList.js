import { GoToAddItemToToolbox } from "../../pieces/NavHelpers/GoToAddItemToToolbox";

/**
 *
 *
 * @returns la liste dicones de la barre du bas décran.
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
