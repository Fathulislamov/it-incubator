import { Dispatch } from "redux";
import {
  SetAppErrorActionType,
  SetAppStatusActionType
} from "../../app/app-reducer";

const initialState: InitialStateType = {
  isLoggedIn: false
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

// actions

export const setIsLoggedInAC = (value: boolean) =>
  ({ type: "login/SET-IS-LOGGED-IN", value } as const);

// types

type ActionsType = ReturnType<typeof setIsLoggedInAC>;
type InitialStateType = {
  isLoggedIn: boolean;
};

type ThunkDispatch = Dispatch<
  ActionsType | SetAppStatusActionType | SetAppErrorActionType
>;
