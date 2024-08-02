import { Dispatch } from "redux";
import { ResponseType } from "../api/todolists-api";
import { setErrorAC, SetErrorType, setLoadingAC, SetLoadingType } from "../app/app-reducer";

type ErrorUtilsDispatchType = Dispatch<SetLoadingType | SetErrorType>

export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, e: { message: string }) => {
  dispatch(setLoadingAC('failed'))
  dispatch(setErrorAC(e.message))
}
export const handleServerAppError = <T>(dispatch: ErrorUtilsDispatchType, data: ResponseType<T>) => {
  if (data.messages.length) {
    dispatch(setErrorAC(data.messages[0]))
  }
  else {
    dispatch(setErrorAC('Some error occurred'))
  }
  dispatch(setLoadingAC('failed'))
}
