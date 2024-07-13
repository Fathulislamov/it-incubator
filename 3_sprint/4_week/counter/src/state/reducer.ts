import { ValuesType } from "../App"

const initialState: ValuesType = {
  maxValue: 10,
  startValue: 0,
  count: 0,
  error: '',
  isNewData: false
}

export type ChangeMaxValueActionType = {
  type: 'CHANGE-MAX-VALUE'
  value: number
}

export type ChangeStartValueActionType = {
  type: 'CHANGE-START-VALUE'
  value: number
}

export type ChangeCountActionType = {
  type: 'CHANGE-CURRENT-VALUE'
  value: number
}
export type ChangeErrorActionType = {
  type: 'CHANGE-ERROR'
  error: string
}

export type ChangeIsNewDataActionType = {
  type: 'CHANGE-IS-NEW-DATA'
  value: boolean
}

type ActionsType = ChangeMaxValueActionType
  | ChangeStartValueActionType
  | ChangeErrorActionType
  | ChangeCountActionType
  | ChangeIsNewDataActionType

export const reducer = (state: ValuesType = initialState, action: ActionsType): ValuesType => {
  switch (action.type) {
    case 'CHANGE-MAX-VALUE': {
      return { ...state, maxValue: action.value }
    }
    case 'CHANGE-START-VALUE': {
      return { ...state, startValue: action.value }
    }
    case 'CHANGE-CURRENT-VALUE': {
      return { ...state, count: action.value }
    }
    case 'CHANGE-ERROR': {
      return { ...state, error: action.error }
    }
    case 'CHANGE-IS-NEW-DATA': {
      return { ...state, isNewData: action.value }
    }
    default: return state
  }
}

export const changeMaxValueAC = (value: number): ChangeMaxValueActionType => {
  return { type: 'CHANGE-MAX-VALUE', value }
}

export const ChangeStartValueAC = (value: number): ChangeStartValueActionType => {
  return { type: 'CHANGE-START-VALUE', value }
}
export const ChangeCountAC = (value: number): ChangeCountActionType => {
  return { type: 'CHANGE-CURRENT-VALUE', value }
}

export const ChangeErrorAC = (error: string): ChangeErrorActionType => {
  return { type: 'CHANGE-ERROR', error }
}

export const ChangeIsNewDataAC = (value: boolean): ChangeIsNewDataActionType => {
  return { type: 'CHANGE-IS-NEW-DATA', value }
}
