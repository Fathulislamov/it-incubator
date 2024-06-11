import { v1 } from "uuid";
import { TaskType } from "../App";

export const taskReducer = (state: TaskType[], action: TasksReducerActionType): TaskType[] => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return state.filter(t => t.id !== action.payload.id)
    }
    case 'ADD-TASK': {
      const newTask = {
        id: v1(),
        title: action.payload.title,
        isDone: false
      }
      return [newTask, ...state]
    }
    default: return state
  }

}

type RemoveTaskACType = {
  type: 'REMOVE-TASK',
  payload: {
    id: string
  }
}
type AddTaskACType = {
  type: 'ADD-TASK',
  payload: {
    title: string
  }
}

type TasksReducerActionType = RemoveTaskACType | AddTaskACType

export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      id
    }

  } as const
}

export const addTaskAC = (title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      title
    }
  } as const
}
