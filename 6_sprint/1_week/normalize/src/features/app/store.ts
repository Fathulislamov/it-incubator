import { postsReducer } from "../posts/reducer";
import thunkMiddleware from 'redux-thunk' //thunkMiddleware
import { applyMiddleware, combineReducers, createStore, legacy_createStore, UnknownAction } from "redux";
let rootReducer = combineReducers(
	{
		posts: postsReducer
	}
)
export type AppStateType = ReturnType<typeof rootReducer>
// export type AppDispatchType = ThunkDispatch<AppStateType, any, UnknownAction>

// export const appDispatc = () => useDispatch<AppDispatchType>()
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
