import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { chatReduser } from './chat-reduser';
import { applyMiddleware, combineReducers, createStore, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({ chat: chatReduser })
const store = legacy_createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)


export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
