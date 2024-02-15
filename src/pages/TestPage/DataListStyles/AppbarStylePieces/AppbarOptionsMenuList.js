import i18next from 'i18next';

/**
 *
 *
 * @returns la liste doptions de lappbar
 */
export function AppbarOptionsMenuList() {
  return [
    {
      optionName: i18next.t('xyyaUqVV'),

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {

      },
    },
    {
      // texte du choix
      optionName: i18next.t('xL6HQGEv'),

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {

      },
    },
  ];
}
