import i18next from 'i18next';

/**
 *
 *
 * @returns la liste doptions de lappbar
 */
export function AppbarOptionsMenuList() {
  return [
    {
      optionName: i18next.t('xmQbIBwM'),

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {

      },
    },
    {
      // texte du choix
      optionName: i18next.t('xlCyp2sY'),

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {

      },
    },
  ];
}
