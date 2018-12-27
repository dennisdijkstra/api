import { SET_CURRENT_USER } from './types';

const setCurrentUser = decoded => (
    {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
);

export default setCurrentUser;
