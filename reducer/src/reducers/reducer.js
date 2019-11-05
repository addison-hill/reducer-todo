import React from 'react';
import { addTodo } from '../Actions/Actions';


export const initialState = [
    {
        item: 'Learn about Reducers',
        completed: false,
        id: 1
    },

    {
        item: 'Learn Redux',
        completed: false,
        id: 2
    }
]

export const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false, 
                    id: new Date()
                }
            ]

        case "TOGGLE_TODO":
            return state.map(item => {
                if (item.id === action.payload) {
                    return {...item, completed: !item.completed};
                } else {
                    return item;
                }
            });

        case "CLEAR_COMPLETED":
            return state.filter(item => item.completed === false);
        default:
            return state
    }
};

