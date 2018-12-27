import {
    SET_CURRENT_USER,
    USER_LOADING,
    GET_CURRENT_USER,
} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case USER_LOADING:
        return {
            ...state,
            loading: true,
        };
    case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
        };
    case GET_CURRENT_USER:
        return {
            ...state,
            profile: action.payload,
            loading: false,
        };
    default:
        return state;
    }
};
