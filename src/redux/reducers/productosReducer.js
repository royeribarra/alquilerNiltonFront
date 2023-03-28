import {
    FILL_PRODUCTS
  } from "../types";
  
export const productosInitialState = {
  productos: []
};

export function productosReducer(state = productosInitialState, action){
  switch (action.type) {
    case FILL_PRODUCTS:
      
      return {
        ...state,
        productosTienda: action.payload
      };
      
    default:
      return state;
  }
}