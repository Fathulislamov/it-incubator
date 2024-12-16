import { fetchTasksWorkerSaga, addTaskWorkerSaga } from "./tasks-sagas";
import { setAppStatusAC } from "../../app/app-reducer";
import { put, call } from "redux-saga/effects";
import {
  todolistsAPI,
  GetTasksResponse,
  TaskStatuses,
  TaskPriorities
} from "../../api/todolists-api";
import { setTasksAC } from "./tasks-reducer";

beforeEach(() => {});

test("fetchTasksWorkerSaga success flow", () => {
  const todolistId = "todolistId";
  const gen = fetchTasksWorkerSaga({ type: "", todolistId });
  expect(gen.next().value).toEqual(put(setAppStatusAC("loading")));

  expect(gen.next().value).toEqual(call(todolistsAPI.getTasks, todolistId));

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

  expect(gen.next(fakeResponse).value).toEqual(
    put(setTasksAC(fakeResponse.items, todolistId))
  );
  const next = gen.next();
  expect(next.value).toEqual(put(setAppStatusAC("succeeded")));
  expect(next.done).toBeTruthy();
});
