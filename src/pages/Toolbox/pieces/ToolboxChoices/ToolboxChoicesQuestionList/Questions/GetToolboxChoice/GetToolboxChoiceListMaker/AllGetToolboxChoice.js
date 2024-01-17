import { GetToolboxChoiceChoices } from "../GetToolboxChoiceChoices/GetToolboxChoiceChoices";
import { GetToolboxChoiceLayout } from "./GetToolboxChoiceLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllGetToolboxChoice({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(GetToolboxChoiceChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return GetToolboxChoiceLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
