
export interface CounterState {
    count: number;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET_VALUE = 'SET_VALUE';


export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

export interface ResetAction {
    type: typeof RESET;
}

export interface SetValueAction {
    type: typeof SET_VALUE;
    payload: number;
}

export type CounterAction =
    | IncrementAction
    | DecrementAction
    | ResetAction
    | SetValueAction;


export type Theme = 'light' | 'dark';

export interface ThemeState {
    theme: Theme;
}


export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';

export interface ToggleThemeAction {
    type: typeof TOGGLE_THEME;
}

export interface SetThemeAction {
    type: typeof SET_THEME;
    payload: Theme;
}

export type ThemeAction = ToggleThemeAction | SetThemeAction;

export interface RootState {
    counter: CounterState;
    theme: ThemeState;
}
