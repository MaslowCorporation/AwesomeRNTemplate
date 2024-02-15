/**
 *
 * @param {*} ref
 * @param {*} properOffset
 * @param {*} itemIndex
 */
export const repositionFlatlist = ({ ref, properOffset, itemIndex }) => {


  ref?.scrollToOffset({
    offset: itemIndex * properOffset,
    animated: true,
  });
};
