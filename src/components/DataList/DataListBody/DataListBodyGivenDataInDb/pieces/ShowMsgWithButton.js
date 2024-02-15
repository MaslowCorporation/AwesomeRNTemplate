import { MessageAvecBouton } from "src/components/MessageAvecBouton/MessageAvecBouton";

/**
 *
 * @param {*} msgData le message et actions de bouton à afficher quand la db est vide.
 *
 * @returns lécran de bouge to cul et crée quelque chose
 */
export const ShowMsgWithButton = ({ msgData }) => {
  return MessageAvecBouton(msgData);
};
