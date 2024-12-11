import { tasksReducer } from "../features/TodolistsList/tasks-reducer";
import { todolistsReducer } from "../features/TodolistsList/todolists-reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer";
import { authReducer } from "../features/Login/auth-reducer";
import createSagaMiddleware from "redux-saga";
import { tasksWatcherSaga } from "../features/TodolistsList/tasks-sagas";
import { appWatcherSaga } from "./app-sagas";
import { authWatcherSaga } from "../features/Login/auth-sagas";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
  app: appReducer,
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();
// непосредственно создаём store
/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer /* preloadedState, */,
  compose(
    applyMiddleware(thunkMiddleware, sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

  // applyMiddleware(thunkMiddleware, sagaMiddleware)
);
/* eslint-enable */
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher);

function* rootWatcher() {
  yield appWatcherSaga();
  yield tasksWatcherSaga();
  yield authWatcherSaga();
}
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
