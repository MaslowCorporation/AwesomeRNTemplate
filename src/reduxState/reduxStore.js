/* PLOP_INJECT_IMPORT */

import GUIAnswersReducer from './GUIAnswers/GUIAnswersSlice';
import TestPageStateReducer from './TestPageState/TestPageStateSlice';
import TestPageReducer from './TestPage/TestPageSlice';
import AppStateReducer from './AppState/AppStateSlice';
import ToolboxStateReducer from "./ToolboxState/ToolboxStateSlice";
import ToolboxReducer from "./Toolbox/ToolboxSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    /* PLOP_INJECT_REDUX_REDUCER */

    GUIAnswers: GUIAnswersReducer,
    TestPageState: TestPageStateReducer,
    TestPage: TestPageReducer,
    AppState: AppStateReducer,
    ToolboxState: ToolboxStateReducer,
    Toolbox: ToolboxReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export { store };
