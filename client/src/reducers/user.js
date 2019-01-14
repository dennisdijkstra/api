import isEmpty from 'is-empty';
import { SET_CURRENT_USER, UPDATE_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload,
        };
    case UPDATE_USER:
        return {
            ...state,
            user: {
                ...state.user,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
            },
        };
    default:
        return state;
    }
};
