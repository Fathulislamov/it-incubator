import { Dispatch } from "redux";
import { appActions } from "app/app.reducer";
import { BaseResponse } from "common/types/common.types";

/**
 * handleServerAppError - функция, которая обрабатывает ошибки приложения
 * @param data - data
 * @param dispatch - dispatch
 * @isShowError - isShowError
 * @returns - функция ничего не возвращает
 */
export const handleServerAppError = <D>(data: BaseResponse<D>, dispatch: Dispatch, isShowError: boolean = true) => {
  if (isShowError) {
    const error = data.messages.length ? data.messages[0] : "Some error occurred";
    dispatch(appActions.setAppError({ error }));
  }
  dispatch(appActions.setAppStatus({ status: "failed" }));
};
