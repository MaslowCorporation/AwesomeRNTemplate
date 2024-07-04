import { memo } from "react";
import { shouldRefresh } from "./shouldRefresh";

/**
 *
 * @param {*} item, les données servant à créer lUI de litem.
 * @param {*} index, lindex de litem dans la liste verticale/horizontale
 * @param {*} renderDataListItem, le renderer dUI ditem individuel (user defined)
 * @param {*} importantData,
 *
 * @returns lUI ditem de liste verticale/horizontale.
 */
const MemoDataListItem = ({
  item,
  index,
  renderDataListItem,
  importantData,
}) => {
  return renderDataListItem({ item, index });
};

const MemoizedDataListItem = memo(MemoDataListItem);

export { MemoizedDataListItem };
