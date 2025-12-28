

import {type CounterState, type CounterAction, INCREMENT, DECREMENT, RESET, SET_VALUE } from '../types';

const initialState: CounterState = {
    count: 0
};


const counterReducer = (
    state: CounterState = initialState,
    action: CounterAction
): CounterState => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

        case RESET:
            return {
                ...state,
                count: 0
            };

        case SET_VALUE:
            return {
                ...state,
                count: action.payload
            };

        default:
            return state;
    }
};

export default counterReducer;
