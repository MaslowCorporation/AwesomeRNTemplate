/* PLOP_INJECT_IMPORT */
import { MessageAvecLayout } from "src/components/MessageAvec/MessageAvecLayout/MessageAvecLayout";
import React from "react";
import { useEffect } from "react";

// permet daccéder a des globales

/**
 *
 * @param {*} un objet contenant: {du style décrit plus bas}
 *
 * @returns un component MessageAvecTextInput,
 *
 * qui permet dafficher un message avec bouton
 * qui fait des actions.
 *

<MessageAvecTextInput
  messageText={"Greetings, punke"}
  messageTextColor={Constants.defaultContentColor}
  messageTextFont={Constants.defaultFontFamily}
  backgroundColor={"yellow"}
  
></MessageAvecTextInput>

 *
 */
const MessageAvec = ({
  messageText,
  messageTextColor,
  messageTextFont,
  messageFontSize,
  backgroundColor,
  component,
  messageFlex,
  componentFlex,
  componentFirst,
}) => {
  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  /**
   * une page simple, constituées:
   *
   * dun message,
   * de quelque component en dessous de ce message
   *
   * empilés verticalement.ou horizontalement selon orientation écran.
   *
   * #
   * #
   * #
   *
   * ou
   *
   * # # #.
   *
   * par défaut, le message et le component prennnent chacun le meme espace
   *
   * (flex: 1)
   *
   * mais on peut changer le flex de chaque chose selon besoin
   */
  return (
    /* le conteneur qui contient icone, texte et bouton */
    <MessageAvecLayout
      backgroundColor={backgroundColor}
      messageTextColor={messageTextColor}
      messageTextFont={messageTextFont}
      messageText={messageText}
      component={component}
      messageFlex={messageFlex}
      componentFlex={componentFlex}
      componentFirst={componentFirst}
      messageFontSize={messageFontSize}
    />
  );
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.

    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);
};

export { MessageAvec };
