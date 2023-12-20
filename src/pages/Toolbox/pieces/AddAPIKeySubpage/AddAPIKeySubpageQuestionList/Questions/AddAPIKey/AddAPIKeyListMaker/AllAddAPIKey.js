import { AddAPIKeyChoices } from "../AddAPIKeyChoices/AddAPIKeyChoices";
import { AddAPIKeyLayout } from "./AddAPIKeyLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllAddAPIKey({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(AddAPIKeyChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return AddAPIKeyLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
