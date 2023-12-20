import { React } from "react";
import { DataListItem } from "src/components/DataListItem/DataListItem";
import { getChoiceStyle } from "./getSingleChoiceStyle";

// permet d'accéder a des globales
import { emptyQCMMsg } from "./emptyQCMMsg";

/**
 *
 * @param {*} props, les props de GetUserInput
 * @param {*} question, les données de la question à choix multiple
 * @param {*} questions, la liste de questions de GetUserInput
 * @param {*} setQuestions, permet de edit la liste de questions de GetUserInput
 * @param {*} setChoicesState, setter de state du QCM. permet de edit la liste de choix
 * @param {*} choicesState, state de QCM. la liste de choix de la question à choix multitple
 *
 * @returns les styles + callbacks pour créer le body du QCM
 */
export const getChoicesStyle = ({
  props,
  question,
  questions,
  setQuestions,
  setChoicesState,
  choicesState,
}) => {
  return {
    // couleur d'arrière plan du QCM
    backgroundColor: props.bodyBackgroundColor ?? "yellow",

    // couleur du texte, border, etc... du QCM
    contentColor: props.bodyContentColor ?? "green",

    // message si QCM vide
    emptyDBMsgData: emptyQCMMsg(props),

    // Crée l'UI d'un choix individuel du QCM
    renderDataListItem: ({ item, index }) => {
      return (
        <DataListItem
          // itemStyle contient les styles et callbacks de click
          // a appliquer à ce choix individuel
          itemStyle={getChoiceStyle({
            // on save les réponses, ou pas ?
            persistenceID: props.persistenceID,

            // la couleur du contenu du QCM
            contentAndBorderColor: props.bodyContentColor,

            // couleur d'arrière plan du QCM
            backgroundColor: props.dataListBackgroundColor,

            // bruit de clic sur choix QCM
            clickSound: props.clickSound,

            // design du text de QCM
            contentFont: props.bodyFont,

            // données rpzt le choix du QCM
            choixData: item,

            // les données du QCM en entier
            question: question,

            // les données de toutes les questions de GetUserInput
            questions: questions,

            // modifie les données de toutes les questions de GetUserInput
            setQuestions: setQuestions,

            // modifie le state du QCM
            setChoicesState: setChoicesState,

            // le state du QCM
            choicesState: choicesState,

            // l'index du choix de QCM dans la liste de choix du QCM
            index: index,
          })}
          // données rpzt le choix du QCM
          itemData={item}
        ></DataListItem>
      );
    },
    // une liste de choix scrollable verticalement
    dataListScrollDirection: "vertical",
  };
};
