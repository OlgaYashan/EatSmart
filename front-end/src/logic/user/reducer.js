import defaultState from "../defaultState";
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR
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
    default: 
    {
      return {
        ...state
      };
    }
  }
}
