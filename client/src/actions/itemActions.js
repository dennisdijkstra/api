import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from './types';

export const getItems = () => (
    {
        type: GET_ITEMS,
    }
);

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
