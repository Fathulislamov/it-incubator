import { v1 } from "uuid"
import { FilterValuesType, TodolistType } from "../App"

export type RemoveTodolistActionType = {
  type: 'REMOVE-TODOLIST'
  payload: {
    id: string
  }
}

export type AddTodolistActionType = {
  type: 'ADD-TODOLIST'
  payload: {
    title: string
  }
}

export type ChangeTodolistTitleActionType = {
  type: 'CHANGE-TODOLIST-TITLE'
  payload: {
    id: string
    title: string
  }
}

export type ChangeTodolistFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER'
  payload: {
    id: string
    filter: FilterValuesType
  }
}

type ActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
  { id: todolistID1, title: 'What to learn', filter: 'all' },
  { id: todolistID2, title: 'What to buy', filter: 'all' },
]

export const todolistsReducer = (state: TodolistType[] = initialState, action: ActionType): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      // setTodolists(todolists.filter(el => el.id !== todolistId))
      return state.filter(tl => tl.id !== action.payload.id)
    }

    case 'ADD-TODOLIST': {
      const newTodolistId = v1()
      const newTodolist: TodolistType = { id: newTodolistId, title: action.payload.title, filter: 'all' }
      return [...state, newTodolist]
      // setTasks({ ...tasks, [newTodolistId]: [] })
    }

    case 'CHANGE-TODOLIST-TITLE': {
      return state.map(t => t.id === action.payload.id ? { ...t, title: action.payload.title } : t)
    }

    case 'CHANGE-TODOLIST-FILTER': {
      return state.map(el => el.id === action.payload.id ? { ...el, filter: action.payload.filter } : el)
    }

    default: return state
  }
}

export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id
    }
  } as const
}

export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      title
    }
  } as const
}
export const changeTodolistTitleAC = (id: string, title: string) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
      id,
      title
    }
  } as const
}
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
      id,
      filter
    }
  } as const
}
