import {
    INCREMENT,
    DECREMENT,
    RESET,
    SET_VALUE,
    type IncrementAction,
    type DecrementAction,
    type ResetAction,
    type SetValueAction
} from '../types';


export const increment = (): IncrementAction => {
    return {
        type: INCREMENT
    };
};


export const decrement = (): DecrementAction => {
    return {
        type: DECREMENT
    };
};


export const reset = (): ResetAction => {
    return {
        type: RESET
    };
};


export const setValue = (value: number): SetValueAction => {
    return {
        type: SET_VALUE,
        payload: value
    };
};
