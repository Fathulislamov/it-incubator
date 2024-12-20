import { useDispatch } from "react-redux";
import { applyMiddleware, combineReducers, legacy_createStore, AnyAction, createStore } from "redux";
import { thunk as thunkMiddleware, ThunkDispatch } from "redux-thunk";
import { postsReducer } from "../posts/reducer";

const rootReducer = combineReducers(
	{
		posts: postsReducer
	}
)
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>

export const appDispatch = () => useDispatch<AppDispatchType>()
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
