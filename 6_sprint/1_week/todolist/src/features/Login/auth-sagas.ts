import { put, call, takeEvery } from "redux-saga/effects";
import { setAppStatusAC } from "../../app/app-reducer";
import { authAPI, LoginParamsType } from "../../api/todolists-api";
import { setIsLoggedInAC } from "./auth-reducer";
import {
  handleServerAppError,
  handleServerNetworkError
} from "../../utils/error-utils";

export function* loginWorkerSaga(action: ReturnType<typeof login>) {
  try {
    yield put(setAppStatusAC("loading"));
    const res = yield call(authAPI.login, action.data);
    if (res.data.resultCode === 0) {
      yield put(setIsLoggedInAC(true));
      yield put(setAppStatusAC("succeeded"));
    } else {
      yield call(handleServerAppError, res.data, put);
    }
  } catch (error) {
    yield call(handleServerNetworkError, error, put);
  }
}

export const login = (data: LoginParamsType) => ({
  type: "AUTH/LOGIN",
  data
});

export function* logoutWorkerSaga() {
  yield console.log("kjljljk");
  console.log("kjljljk");
  try {
    yield put(setAppStatusAC("loading"));
    const res = yield call(authAPI.logout);
    if (res.data.resultCode === 0) {
      yield put(setIsLoggedInAC(false));
      yield put(setAppStatusAC("succeeded"));
    } else {
      yield call(handleServerAppError, res.data, put);
    }
  } catch (error) {
    yield call(handleServerNetworkError, error, put);
  }
}
export const logout = () => ({ type: "AUTH/LOGOUT" });

export function* authWatcherSaga() {
  yield takeEvery("AUTH/LOGIN", loginWorkerSaga);
  yield takeEvery("AUTH/LOGOUT", logoutWorkerSaga);
}
