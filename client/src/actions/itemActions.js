import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';

export const setItemsLoading = () => (
    {
        type: ITEMS_LOADING,
    }
);

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    fetch('http://localhost:5000/api/items')
        .then(response => response.json())
        .then(data => dispatch({
            type: GET_ITEMS,
            payload: data,
        }));
};

export const addItem = item => (
    {
        type: ADD_ITEM,
        payload: item,
    }
);

export const deleteItem = id => (
    {
        type: DELETE_ITEM,
        payload: id,
    }
);
