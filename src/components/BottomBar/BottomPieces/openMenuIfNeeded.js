/**
 *
 * @param {*} bottomBarStyle
 * @param {*} openMenu
 *
 * on ouvre le menu seulement si besoin
 */
export const openMenuIfNeeded = (bottomBarStyle, openMenu) => {
  const menuList = bottomBarStyle.bottomBarOptionMenuList;

  if (menuList != null && menuList.length > 0) {
    openMenu();
  }
};
