/**
 *
 * @param {*} ref
 * @param {*} properOffset
 * @param {*} itemIndex
 */
export const repositionFlatlist = ({ ref, properOffset, itemIndex }) => {
  console.log("Let's reposition this onebyoneflatlist biiiih !!!");

  ref?.scrollToOffset({
    offset: itemIndex * properOffset,
    animated: true,
  });
};
