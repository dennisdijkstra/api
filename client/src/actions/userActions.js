import jwt_decode from 'jwt-decode';
import {
    USER_LOADING,
    SET_CURRENT_USER,
    GET_CURRENT_USER,
} from './types';

export const registerUser = (user, history) => {
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

export const loginUser = () => {

};

export const setUserLoading = () => {

};

export const setCurrentUser = () => {

};

export const getCurrentUser = () => {

};

export const logOutUser = () => {

};
