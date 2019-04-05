import defaultState from "../defaultState";
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR
} from "./actionTypes";

export default function productsReducer(state = defaultState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload.products,
        loading: false
      };
    }
    case LOAD_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default: 
    {
      return {
        ...state
      };
    }
  }
}
