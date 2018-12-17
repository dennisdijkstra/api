import { GET_ITEMS, ADD_ITEM } from './types';

export const getItems = () => (
    {
        type: GET_ITEMS,
    }
);

export const addItem = () => (
    {
        type: ADD_ITEM,
    }
);
