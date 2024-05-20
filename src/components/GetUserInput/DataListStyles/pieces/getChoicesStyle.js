import { React } from "react";
import { DataListItem } from "src/components/DataListItem/DataListItem";
import { getChoiceStyle } from "./getSingleChoiceStyle";

// permet daccéder a des globales
import { emptyQCMMsg } from "./emptyQCMMsg";

/**
 *
 * @param {*} props, les props de GetUserInput
 * @param {*} question, les données de la question à choix multiple
 * @param {*} GUIState, le state contenant la liste de UI de GetUserInput
 * @param {*} setGUIState, permet de edit la liste de UI de GetUserInput
 * @param {*} setChoicesState, setter de state du QCM. permet de edit la liste de choix
 * @param {*} choicesState, state de QCM. la liste de choix de la question à choix multitple
 *
 * @returns les styles + callbacks pour créer le body du QCM
 */
export const getChoicesStyle = ({
  props,
  question,
  GUIState, setGUIState,
  setChoicesState,
  choicesState,
}) => {
  return {
    // couleur darrière plan du QCM
    backgroundColor: props.bodyBackgroundColor ?? "yellow",

    // couleur du texte, border, etc... du QCM
    contentColor: props.bodyContentColor ?? "green",

    // message si QCM vide
    emptyDBMsgData: emptyQCMMsg(props),

    // Crée lUI dun choix individuel du QCM
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

            // couleur darrière plan du QCM
            backgroundColor: props.dataListBackgroundColor,

            // bruit de clic sur choix QCM
            clickSound: props.clickSound,

            // design du text de QCM
            contentFont: props.bodyFont,

            // données rpzt le choix du QCM
            choixData: item,

            // les données du QCM en entier
            question: question,

            // les données de toutes les UI de GetUserInput
            GUIState,

            // modifie les données de toutes les UI de GetUserInput
            setGUIState,

            // modifie le state du QCM
            setChoicesState: setChoicesState,

            // le state du QCM
            choicesState: choicesState,

            // lindex du choix de QCM dans la liste de choix du QCM
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
