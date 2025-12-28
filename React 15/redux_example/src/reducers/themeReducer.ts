import {type ThemeState, type ThemeAction, TOGGLE_THEME, SET_THEME } from '../types';


const getInitialTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }
    // Проверяем системные настройки
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

const initialState: ThemeState = {
    theme: getInitialTheme()
};


const themeReducer = (
    state: ThemeState = initialState,
    action: ThemeAction
): ThemeState => {
    switch (action.type) {
        case TOGGLE_THEME:
            { const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {
                ...state,
                theme: newTheme
            }; }

        case SET_THEME:
            localStorage.setItem('theme', action.payload);
            return {
                ...state,
                theme: action.payload
            };

        default:
            return state;
    }
};

export default themeReducer;
