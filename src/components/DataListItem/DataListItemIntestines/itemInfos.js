import { singleInfoLine } from "./singleInfoLine";

/**
 *
 * @param {*} itemStyle, les infos de style de la vignette
 *
 * @returns les paires de icones + info, en dessous du nom de litem.
 */
export const itemInfos = (itemStyle) => {
  if (itemStyle?.itemsInfos != null) {
    return itemStyle?.itemsInfos?.map((itemInfo, i) => {
      return singleInfoLine(itemStyle, itemInfo, i);
    });
  } else {
    return null;
  }
};
