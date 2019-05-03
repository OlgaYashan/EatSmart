import defaultState from "../defaultState";
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  UPDATE_USER_PRODUCTS,
  UPDATE_USER_PRODUCTS_SUCCESS,
  UPDATE_USER_PRODUCTS_ERROR

} from "./actionTypes";

export default function userReducer(state = defaultState.user, action) {
  switch (action.type) {
    case LOAD_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false
      };
    }
    case LOAD_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case UPDATE_USER_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_USER_PRODUCTS_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false
      };
    }
    case UPDATE_USER_PRODUCTS_ERROR: {
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
