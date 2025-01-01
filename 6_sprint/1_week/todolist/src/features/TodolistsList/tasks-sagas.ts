import { put, call, takeEvery, select } from "redux-saga/effects";
import { setAppStatusAC } from "../../app/app-reducer";
import { AxiosResponse } from "axios";
import {
  GetTasksResponse,
  todolistsAPI,
  UpdateTaskModelType,
  TaskType
} from "../../api/todolists-api";
import {
  setTasksAC,
  removeTaskAC,
  addTaskAC,
  UpdateDomainTaskModelType,
  updateTaskAC
} from "./tasks-reducer";
import {
  handleServerAppError,
  handleServerNetworkError,
  handleServerAppErrorSaga,
  handleServerNetworkErrorSaga
} from "../../utils/error-utils";

export function* fetchTasksWorkerSaga(action: ReturnType<typeof fetchTasks>) {
  yield put(setAppStatusAC("loading"));
  const data: GetTasksResponse = yield call(
    todolistsAPI.getTasks,
    action.todolistId
  );
  const tasks = data.items;
  yield put(setTasksAC(tasks, action.todolistId));
  yield put(setAppStatusAC("succeeded"));
}

export const fetchTasks = (todolistId: string) => ({
  type: "TASKS/FETCH-TASKS",
  todolistId
});

export function* removeTaskWorkerSaga(action: ReturnType<typeof removeTasks>) {
  yield call(todolistsAPI.deleteTask, action.todolistId, action.taskId);
  yield put(removeTaskAC(action.taskId, action.todolistId));
}
export const removeTasks = (taskId: string, todolistId: string) => ({
  type: "TASKS/REMOVE-TASK",
  taskId,
  todolistId
});

export function* addTaskWorkerSaga(action: ReturnType<typeof addTasks>) {
  yield put(setAppStatusAC("loading"));
  try {
    const res = yield call(
      todolistsAPI.createTask,
      action.todolistId,
      action.title
    );
    if (res.data.resultCode === 0) {
      const task = res.data.data.item;
      const action = addTaskAC(task);
      yield put(action);
      yield put(setAppStatusAC("succeeded"));
    } else {
      yield handleServerAppErrorSaga(res.data);
    }
  } catch (error) {
    yield handleServerNetworkErrorSaga(error);
  }
}

export const addTasks = (title: string, todolistId: string) =>
  ({
    type: "TASKS/ADD-TASK",
    title,
    todolistId
  } as const);

export function* updateTaskWorkerSaga(action: ReturnType<typeof updateTask>) {
  try {
    const task = yield select(state =>
      state.tasks[action.todolistId].find(
        (task: TaskType) => task.id === action.taskId
      )
    );
    if (!task) {
      //throw new Error("task not found in the state");
      yield console.warn("task not found in the state");
      return;
    }

    const apiModel: UpdateTaskModelType = {
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      title: task.title,
      status: task.status,
      ...action.domainModel
    };

    const res = yield call(
      todolistsAPI.updateTask,
      action.todolistId,
      action.taskId,
      apiModel
    );
    if (res.data.resultCode === 0) {
      yield put(
        updateTaskAC(action.taskId, action.domainModel, action.todolistId)
      );
    } else {
      yield call(handleServerAppError, res.data, put);
    }
  } catch (error) {
    yield call(handleServerNetworkError, error, put);
  }
}

export const updateTask = (
  todolistId: string,
  domainModel: UpdateDomainTaskModelType,
  taskId: string
) => ({
  type: "TASKS/UPDATE-TASK",
  taskId,
  todolistId,
  domainModel
});

// export const updateTaskTC = (
//   taskId: string,
//   domainModel: UpdateDomainTaskModelType,
//   todolistId: string
// ) => (dispatch: ThunkDispatch, getState: () => AppRootStateType) => {
//   const state = getState();
//   const task = state.tasks[todolistId].find(t => t.id === taskId);
//   if (!task) {
//     //throw new Error("task not found in the state");
//     console.warn("task not found in the state");
//     return;
//   }
//
//   const apiModel: UpdateTaskModelType = {
//     deadline: task.deadline,
//     description: task.description,
//     priority: task.priority,
//     startDate: task.startDate,
//     title: task.title,
//     status: task.status,
//     ...domainModel
//   };
//
//   todolistsAPI
//     .updateTask(todolistId, taskId, apiModel)
//     .then(res => {
//       if (res.data.resultCode === 0) {
//         const action = updateTaskAC(taskId, domainModel, todolistId);
//         dispatch(action);
//       } else {
//         handleServerAppError(res.data, dispatch);
//       }
//     })
//     .catch(error => {
//       handleServerNetworkError(error, dispatch);
//     });
// };
//
export function* tasksWatcherSaga() {
  yield takeEvery("TASKS/FETCH-TASKS", fetchTasksWorkerSaga);
  yield takeEvery("TASKS/REMOVE-TASK", removeTaskWorkerSaga);
  yield takeEvery("TASKS/ADD-TASK", addTaskWorkerSaga);
  yield takeEvery("TASKS/UPDATE-TASK", updateTaskWorkerSaga);
}
