import jwtDecode from 'jwt-decode';
import history from '../history';
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

export const loginUser = user => (dispatch) => {
    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then((data) => {
            const { token } = data;
            localStorage.setItem('jwtToken', token);
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        })
        .then(() => history.push('/dashboard'))
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
    history.push('/');
};
