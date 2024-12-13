import { authAPI } from "../api/todolists-api";
import { call } from "redux-saga/effects";
import { initializeAppWorkerSaga } from "./app-sagas";

test("intializeAppWorkerSaga", () => {
  const gen = initializeAppWorkerSaga();
  const result = gen.next();
  expect(result.value).toBe(call(authAPI.me));
});
