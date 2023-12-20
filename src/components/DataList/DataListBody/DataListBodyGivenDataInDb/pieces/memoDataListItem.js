import { memo } from "react";
import { shouldRefresh } from "./shouldRefresh";

/**
 *
 * @param {*} item, les données servant à créer l'UI de l'item.
 * @param {*} index, l'index de l'item dans la liste verticale/horizontale
 * @param {*} renderDataListItem, le renderer d'UI d'item individuel (user defined)
 * @param {*} importantData,
 *
 * @returns l'UI d'item de liste verticale/horizontale.
 */
const MemoDataListItem = ({
  item,
  index,
  renderDataListItem,
  importantData,
}) => {
  return renderDataListItem({ item, index });
};

const MemoizedDataListItem = memo(MemoDataListItem, shouldRefresh);

export { MemoizedDataListItem };
