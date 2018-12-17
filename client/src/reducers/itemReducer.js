import { GET_ITEMS } from '../actions/types';

const initialState = {
    items: [
        { number: 1, name: 'Item 1' },
        { number: 2, name: 'Item 2' },
        { number: 3, name: 'Item 3' },
        { number: 4, name: 'Item 4' },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_ITEMS:
        return {
            ...state,
        };
    default:
        return state;
    }
};
