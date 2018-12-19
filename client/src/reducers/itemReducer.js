import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, ITEMS_LOADING, SET_IS_EDITABLE } from '../actions/types';

const initialState = {
    items: [],
    loading: false,
    isEditable: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_ITEMS:
        return {
            ...state,
            items: action.payload,
            loading: false,
        };
    case ADD_ITEM:
        return {
            ...state,
            items: [action.payload, ...state.items],
        };
    case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(item => item._id !== action.payload),
        };
    case ITEMS_LOADING:
        return {
            ...state,
            loading: true,
        };
    case SET_IS_EDITABLE:
        return {
            ...state,
            isEditable: action.payload,
        };
    default:
        return state;
    }
};
