/* PLOP_INJECT_IMPORT */
import { MessageAvecBoutonLayout } from "src/components/MessageAvecBouton/MessageAvecBoutonLayout/MessageAvecBoutonLayout";
import React from "react";
import { useEffect } from "react";

// permet daccéder a des globales

/**
 *
 * @param {*} un objet contenant: {du style décrit plus bas}
 *
 * @returns un component MessageAvecBouton,
 *
 * qui permet dafficher un message avec bouton
 * qui fait des actions.
 *

<MessageAvecBouton
  messageText={"Greetings, punke"}
  messageTextColor={Constants.defaultContentColor}
  messageTextFont={Constants.defaultFontFamily}
  messageTextSize={25}
  messageMarginLateral={10}
  backgroundColor={"yellow"}
  iconPath={logo}
  iconWidth={50}
  iconHeight={50}
  buttonBackgroundColor={"orange"}
  buttonLogoName={"logo-google"}
  buttonLogoSize={20}
  buttonLogoColor={Constants.defaultContentColor}
  buttonText={i18next.t("blk_n_yellow")}
  buttonTextColor={Constants.defaultContentColor}
  buttonTextFont={"PriceDown"}
  onButtonClicked={() => {

  }}
></MessageAvecBouton>

 *
 */
const MessageAvecBouton = ({
  buttonLateralMargin,
  messageText,
  messageTextColor,
  messageTextFont,
  messageTextSize,
  messageMarginLateral,
  backgroundColor,
  iconPath,
  iconWidth,
  iconHeight,
  buttonBackgroundColor,
  buttonLogoName,
  buttonLogoSize,
  buttonLogoColor,
  buttonText,
  buttonTextColor,
  buttonTextFont,
  onButtonClicked,
  clickSound,
}) => {
  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  /**
   * une page simple, constituées:
   *
   * dune icone,
   * dun message,
   * dun bouton.
   *
   * empilés verticalement.
   *
   * #
   * #
   * #
   */
  return (
    /* le conteneur qui contient icone, texte et bouton */
    <MessageAvecBoutonLayout
      buttonLateralMargin={buttonLateralMargin}
      clickSound={clickSound}
      backgroundColor={backgroundColor}
      iconPath={iconPath}
      messageTextColor={messageTextColor}
      messageTextFont={messageTextFont}
      messageText={messageText}
      buttonText={buttonText}
      buttonBackgroundColor={buttonBackgroundColor}
      buttonTextColor={buttonTextColor}
      buttonTextFont={buttonTextFont}
      onButtonClicked={onButtonClicked}
      buttonLogoName={buttonLogoName}
      buttonLogoSize={buttonLogoSize}
      buttonLogoColor={buttonLogoColor}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      messageTextSize={messageTextSize}
      messageMarginLateral={messageMarginLateral}
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

export { MessageAvecBouton };
