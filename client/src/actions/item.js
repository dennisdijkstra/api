import {
    GET_ITEMS,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    SET_IS_EDITABLE,
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const setItemsLoading = () => (
    {
        type: ITEMS_LOADING,
    }
);

export const setIsEditable = id => (
    {
        type: SET_IS_EDITABLE,
        payload: id,
    }
);

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    fetch('/api/user/items', {
        headers: setAuthToken({
            'Content-Type': 'application/json',
        }),
    })
        .then(response => response.json())
        .then(data => dispatch({
            type: GET_ITEMS,
            payload: data,
        }));
};

export const addItem = item => (dispatch) => {
    fetch('/api/item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => dispatch({
            type: ADD_ITEM,
            payload: data,
        }));
};

export const updateItem = (id, item) => (dispatch) => {
    fetch(`/api/item/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => dispatch({
            type: UPDATE_ITEM,
            payload: data,
        }))
        .then(() => dispatch({
            type: SET_IS_EDITABLE,
            payload: '',
        }));
};

export const deleteItem = id => (dispatch) => {
    fetch(`/api/item/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => dispatch({
            type: DELETE_ITEM,
            payload: id,
        }));
};
