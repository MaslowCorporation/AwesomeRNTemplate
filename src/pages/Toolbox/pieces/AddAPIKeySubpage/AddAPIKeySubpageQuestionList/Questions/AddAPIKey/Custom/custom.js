/* PLOP_INJECT_IMPORT */

import { useState } from "react";
import { MsgFormButton } from "src/services/MsgFormButton/MsgFormButton";
import { SwitchPages } from "src/services/SwitchPages/SwitchPages";
import React from "react";
import { OnFormButtonClicked } from "./bits_and_pieces/OnFormButtonClicked";
import { OnAPISubscribeButtonClicked } from "./bits_and_pieces/OnAPISubscribeButtonClicked";
import { ScrollableModal } from "src/services/ScrollableModal/ScrollableModal";
import { View } from "react-native";
import { OnBuy5KAPICreditsButtonClicked } from "./bits_and_pieces/OnBuy5KAPICreditsButtonClicked";
import { OnAPIInfoRequestBtnClicked } from "./bits_and_pieces/OnAPIInfoRequestBtnClicked";
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * @param {*} answers, all the user answers so far
 *
 * @param {*} answer, the user answer for this question
 *
 * @param {*} answerIndex, the 0 based index of this question,
 * in the list of questions.
 *
 * @param {*} onInput, a callback that allows you
 * to save the user chosen answer,
 * from custom UI, or whatever.
 *
 * @param {*} route, the route object from useRoute() of @react-navigation/native
 *
 * @param {*} navigation, the navigation object from useRoute() of @react-navigation/native
 *
 * @return some custom UI imaginated
 * by your magnificient brain,
 * and/or the magnificient brain of A.I.
 */
export const CustomComponent = ({
  onInput,
  defaultAPIKey
}) => {
  /* PLOP_INJECT_CODE */

  // this page displays a UI that allows 
  // a user to subscribe to an API 
  // this serves as a template mechanism, that allows you to switch between a UI of your own making,
  // and a mini web page (AKA Iframe)
  // feel free to tweak it so it serves your purpose

  // The iframes currently displayed url.
  // you can rename the getter/setter as you wish
  // use the setter to change the iframes url
  const [subscribeUrl, setSubscribeUrl] = useState(null)

  // Whether or not the UI shown on screen.
  // if true, the UI shows up, and the iframe is hidden under it
  // if false, the UI is not shown and the iframe is visible on screen
  const [showUI, setShowUI] = useState(true);

  // Whether or not the Modal is shown on screen.
  const [showModal, setShowModal] = useState(false)

  // your API data
  const [yourAPIData, setYourAPIData] = useState(null);

  // a no arg callback that returns a component of your choice
  // here its an UI that allows the user to press a subscribe button to subscribe to the API
  // then enter his fresh API in a form.
  // but it could also be your own custom homemade DIY component made from you too
  const UIComponent = () =>
    <MsgFormButton
      fontFamily={"Fredoka"}
      message={app_strings.t("APIScreenMsg")}
      initialFormInput={defaultAPIKey}
      formPlaceholder={app_strings.t("EnterAPIKeyHere")}
      onFormButtonClicked={(text) => {
        OnFormButtonClicked({ text, onInput });
      }}
      buttonText={app_strings.t("APIButtonText")}
      onButtonClicked={() => {
        setShowModal(true);

      }}
    />


  // the SwitchPages component allows you to
  // switch back & forth between a UI, and a iframe (AKA a mini web browser)
  return <View style={{ flex: 1 }}>
    <SwitchPages
      showUI={showUI}
      setShowUI={setShowUI}
      iframeURL={subscribeUrl}
      setIframeURL={setSubscribeUrl}
      fontFamily={"Fredoka"}
      /* the url of the homepage, if omitted, the home button wont be shown in the iframe */
      //homeURL={"https://duckduckgo.com"}
      /* do we show the address bar in the iframe, or not ? */
      showAddressBar={true}
      UIComponent={UIComponent}
    />
    <ScrollableModal
      inputs={[
        {
          id: "APISub",
          title: app_strings.t("SubAPIMsg"),
          type: "clickable_choice",
          onClick: () => {
            OnAPISubscribeButtonClicked({ setSubscribeUrl, setShowUI });

            setShowModal(false);
          }
        },
        {
          id: "Buy5KCredits",
          title: app_strings.t("Buy5KMsg"),
          type: "clickable_choice",
          onClick: () => {
            OnBuy5KAPICreditsButtonClicked({ setSubscribeUrl, setShowUI });

            setShowModal(false);
          }
        },
        {
          id: "GetAPIData",
          title: app_strings.t("GetFreshAPIInfo"),
          buttonText: yourAPIData ? JSON.stringify(yourAPIData, null, 2) : app_strings.t("LemonButton"),
          type: "clickable_choice",
          onClick: () => {
            OnAPIInfoRequestBtnClicked({ setYourAPIData, setShowUI });

            //setShowModal(false);
          }
        }
      ]}
      modalVisible={showModal}
      showModalButton={false}
      fontFamily={"Fredoka"}
      onCancel={() => {
        setShowModal(false);
      }}
    />
  </View >

};


