import { createStore } from 'redux';
import { reducer } from './reducer';

// непосредственно создаём store
export const store = createStore(reducer);
// определить автоматически тип всего объекта состояния
// export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
