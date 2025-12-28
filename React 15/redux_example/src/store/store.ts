import { createStore, type Store, combineReducers } from 'redux';
import type {RootState, CounterAction, ThemeAction} from '../types';
import counterReducer from '../reducers/counterReducer';
import themeReducer from '../reducers/themeReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});

const store: Store<RootState, CounterAction | ThemeAction> = createStore(
    rootReducer);

export default store;

export type { RootState } from '../types';
