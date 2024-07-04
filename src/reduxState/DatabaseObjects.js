/* PLOP_INJECT_IMPORT */

import { SqliteReduxGUIAnswers } from './GUIAnswers/GUIAnswersGetterSetter';
import { SqliteReduxTestPageState } from './TestPageState/TestPageStateGetterSetter';
import { SqliteReduxTestPage } from './TestPage/TestPageGetterSetter';
import { SqliteReduxAppState } from './AppState/AppStateGetterSetter';
import { SqliteReduxToolbox } from './Toolbox/ToolboxGetterSetter';
import { SqliteReduxToolboxState } from './ToolboxState/ToolboxStateGetterSetter';

export const DatabaseObjects = [
  /* PLOP_INJECT_SQLITE_REDUX_OBJ */

  SqliteReduxGUIAnswers,
  SqliteReduxTestPageState,
  SqliteReduxTestPage,
  SqliteReduxAppState,
  SqliteReduxToolboxState,
  SqliteReduxToolbox,
];

