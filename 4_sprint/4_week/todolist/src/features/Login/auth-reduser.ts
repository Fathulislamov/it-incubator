import { Dispatch } from 'redux'
import { authAPI } from '../../api/todolists-api'
import {
  SetAppErrorActionType,
  setAppStatusAC,
  SetAppStatusActionType,
  setIsInitealizedAC,
  SetIsInitealizedActionType,
} from '../../app/app-reducer'
import { handleServerAppError, handleServerNetworkError } from '../../utils/error-utils'
import { LoginType } from './Login'

const initialState = {
  isLoggedIn: false,
}
type InitialStateType = typeof initialState

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    default:
      return state
  }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value }) as const

// thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatusAC('loading'))
  authAPI.login(data).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(true))
      dispatch(setAppStatusAC('succeeded'))
    }
    else {
      handleServerAppError(res.data, dispatch)
    }
  })
    .catch((e) => {
      handleServerNetworkError(e, dispatch)
    })
}
export const meTC = () => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatusAC('loading'))
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(true))
      dispatch(setAppStatusAC('succeeded'))
    }
    else {
      handleServerAppError(res.data, dispatch)
    }
  })
    .catch((e) => {
      handleServerNetworkError(e, dispatch)
    })
    .finally(() => {
      return dispatch(setIsInitealizedAC(true))
    })
}
export const logOutTC = () => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setAppStatusAC('loading'))
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(false))
      dispatch(setAppStatusAC('succeeded'))
    }
    else {
      handleServerAppError(res.data, dispatch)
    }
  })
    .catch((e) => {
      handleServerNetworkError(e, dispatch)
    })
}

// types
type ActionsType =
  | ReturnType<typeof setIsLoggedInAC>
  | SetAppStatusActionType
  | SetAppErrorActionType
  |SetIsInitealizedActionType
