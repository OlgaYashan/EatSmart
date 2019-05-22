import defaultState from "../defaultState";
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  LOAD_PRODUCT_BAR_CODE,
  LOAD_PRODUCT_BAR_CODE_SUCCESS,
  LOAD_PRODUCT_BAR_CODE_ERROR,
  CLEAR,
  CLEAR_ERROR,
  CLEAR_SUCCESS

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
        loading: false,
        error:false
      };
    }
    case LOAD_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload.product,
        loading: false
      };
    }
    case ADD_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case EDIT_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case EDIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload.product,
        loading: false
      };
    }
    case EDIT_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload.product,
        loading: false
      };
    }
    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case LOAD_PRODUCT_BAR_CODE: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_PRODUCT_BAR_CODE_SUCCESS: {
      return {
        ...state,
        product: action.payload.product,
        loading: false,
        error:false
      };
    }
    case LOAD_PRODUCT_BAR_CODE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case CLEAR:{
      return {
        ...state,
        product: {},
        loading:false,
        error:false
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
