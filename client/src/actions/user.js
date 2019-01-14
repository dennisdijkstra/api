import { SET_CURRENT_USER, UPDATE_USER } from './types';

export const setCurrentUser = decoded => (
    {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
);

export const updateUser = user => (
    {
        type: UPDATE_USER,
        payload: user,
    }
);
