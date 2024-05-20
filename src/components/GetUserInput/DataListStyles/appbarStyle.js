import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// permet daccéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * les styles de la topbar
 */
export const getAppbarStyle = ({ props, GUIState, setGUIState }) => {
  const questionIndex = GUIState.currentIndex + 1;
  const qtyQuestions = GUIState.questions.length;
  const roadmap = `(${questionIndex}/${qtyQuestions})`;

  return {
    appbarLayoutOverlaid: props.appbarLayoutOverlaid ?? false,
    appbarTextSize: props.appbarTextSize ?? 20,
    appbarHeight: props.appbarHeight ?? Constants.defaultBarHeight,
    showAppbar: props.showAppbar ?? true,
    appbarTitle: (props.appbarTitle ?? "") + " " + roadmap,
    appbarFont: props.appbarFont ?? Constants.defaultFontFamily,
    showAppbarIcon: false,
    showAppbarMenuIcon: props.appbarMenuChoiceList != null,
    //appbarIcon: "plus-thick",
    clickSound: props.clickSound,
    appbarBackgroundColor: props.appbarBackgroundColor,
    appbarElevation: props.appbarElevation ?? 0,
    appbarContentColor:
      props.appbarContentColor ?? Constants.defaultContentColor,
    onAppbarTitleClicked: () => {
    },
    onAppbarIconClicked: () => {
    },
    onBackPressed: () => {
      RunIfPossible({
        func: props.onCancel,
        args: null,
      });
    },
    appbarOptionMenuList: props.appbarMenuChoiceList,
  };
};
