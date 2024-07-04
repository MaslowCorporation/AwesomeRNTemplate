/**
 *
 * @param {*} appbarStyle
 * @param {*} openMenu
 *
 * on ouvre le menu seulement si besoin
 */
export const openMenuIfNeeded = (appbarStyle, openMenu) => {
  const menuList = appbarStyle.appbarOptionMenuList;

  if (menuList != null && menuList.length > 0) {
    openMenu();
  }
};
