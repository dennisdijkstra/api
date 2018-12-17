import uuid from 'uuid';
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Item 1' },
        { id: uuid(), name: 'Item 2' },
        { id: uuid(), name: 'Item 3' },
        { id: uuid(), name: 'Item 4' },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_ITEMS:
        return {
            ...state,
        };
    case ADD_ITEM:
        return {
            ...state,
            items: [action.payload, ...state.items],
        };
    case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload),
        };
    default:
        return state;
    }
};
