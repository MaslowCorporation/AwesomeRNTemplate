


import { useSelector } from "react-redux";

/**
 *
 * permet dobtenir le plus frais premier row stocké dans Redux.
 *
 * Meme après que le state redux a changé ailleurs.
 * Cela permet dafficher dans lUI la toute dernère valeur du state Redux.
 *
 * !!! IMPORTANT: Ce service nest pas disponible en dehors du scope dun component.
 * Si tu est en dehors de la zone dinfluence dun component,
 * il y aura un message derreur semblable à celui ci:
 *
 * Invalid hook call. Hooks can only be called inside of the body of a function component.
 *
 * Cela signifie quil faut utiliser lautre fonction nommée
 *
 * GetToolboxFirstRow
 *
 * qui fonctionne en dehors de la zone dinfluence du component,
 * mais ne rafraichira pas lUI quand le state redux change.
 *
 */

export function GetFreshestToolboxFirstRow() {
  const allToolbox = useSelector((state) => state.Toolbox.allRows);

  if (allToolbox != null && allToolbox.length > 0) {
    return allToolbox[0];
  } else {
    return allToolbox;
  }
}
