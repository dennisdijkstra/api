import jwtDecode from 'jwt-decode';
import {
    USER_LOADING,
    SET_CURRENT_USER,
    GET_CURRENT_USER,
} from './types';

export const setUserLoading = () => (
    {
        type: USER_LOADING,
    }
);

export const setCurrentUser = decoded => (
    {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
);

export const registerUser = (user, history) => () => {
    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(() => history.push('/login'))
        .catch((err) => {
            console.log(err);
        });
};

export const loginUser = user => (dispatch) => {
    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getCurrentUser = () => (dispatch) => {
    dispatch(setUserLoading());
    fetch('/api/users/currentuser')
        .then(response => response.json())
        .then(res => dispatch({
            type: GET_CURRENT_USER,
            payload: res.data,
        }));
};

export const logOutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
};
