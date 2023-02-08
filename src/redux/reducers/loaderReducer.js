import {
    ADD_TO_CART,
    ADD_ONE_PRODUCT,
    REMOVE_ONE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    CLEAR_CART,
    FILL_CART
  } from "../types";

export const loaderInitialState = {
    show: false,
};

export default function loaderReducer(state = loaderInitialState, action)
{
    switch(action.type)
    {
        case 'SHOW':
            return {
                ...state,
                show: true,
            };
        case 'CLOSE':
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
}