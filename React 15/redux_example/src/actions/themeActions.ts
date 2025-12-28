
import {
    TOGGLE_THEME,
    SET_THEME,
    type ToggleThemeAction,
    type SetThemeAction,
    type Theme
} from '../types';

export const toggleTheme = (): ToggleThemeAction => {
    return {
        type: TOGGLE_THEME
    };
};

export const setTheme = (theme: Theme): SetThemeAction => {
    return {
        type: SET_THEME,
        payload: theme
    };
};
