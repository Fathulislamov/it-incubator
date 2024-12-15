import { fetchTasksWorkerSaga } from "./tasks-sagas";
import { setAppStatusAC } from "../../app/app-reducer";
import { put, call } from "redux-saga/effects";
import {
  todolistsAPI,
  GetTasksResponse,
  TaskStatuses,
  TaskPriorities
} from "../../api/todolists-api";

beforeEach(() => {});

test("fetchTasksWorkerSaga success flow", () => {
  const gen = fetchTasksWorkerSaga({ type: "", todolistId: "todolistId" });
  let result = gen.next();
  expect(result.value).toEqual(put(setAppStatusAC("loading")));

  result = gen.next();
  expect(result.value).toEqual(call(todolistsAPI.getTasks, "todolistId"));

  const fakeResponse: GetTasksResponse = {
    items: [
      {
        id: "1",
        title: "CSS",
        status: TaskStatuses.New,
        todoListId: "todolistId",
        description: "",
        startDate: "",
        deadline: "",
        addedDate: "",
        order: 0,
        priority: TaskPriorities.Low
      }
    ],
    totalCount: 1,
    error: null
  };

  result = gen.next(fakeResponse);
  // expect(result.value).toEqual(call(todolistsAPI.getTasks, "todolistId"));
});
