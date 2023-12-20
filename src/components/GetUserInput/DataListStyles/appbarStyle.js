import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// permet d'accéder a des globales
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

/**
 * les styles de la topbar
 */
export const getAppbarStyle = ({ props, questions, setQuestions }) => {
  const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();
  const questionIndex = GUIState.currentIndex + 1;
  const qtyQuestions = questions.length;
  const roadmap = `(${questionIndex}/${qtyQuestions})`;

  return {
    appbarLayoutOverlaid: props.appbarLayoutOverlaid ?? false,
    appbarTextSize: props.appbarTextSize ?? 20,
    appbarHeight: props.appbarHeight ?? Constants.defaultBarHeight,
    showAppbar: props.showAppbar ?? true,
    appbarTitle: (props.appbarTitle ?? "") + " " + roadmap,
    appbarFont: props.appbarFont ?? Constants.defaultFontFamily,
    showAppbarIcon: false,
    //appbarIcon: "plus-thick",
    clickSound: props.clickSound,
    appbarBackgroundColor: props.appbarBackgroundColor,
    appbarElevation: props.appbarElevation ?? 0,
    appbarContentColor:
      props.appbarContentColor ?? Constants.defaultContentColor,
    onAppbarTitleClicked: () => {
      /*console.log("Le titre à été cliqué dessus.");*/
    },
    onAppbarIconClicked: () => {
      /*console.log("Le all mighty icone à été cliqué dessus.");*/
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
