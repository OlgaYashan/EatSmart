import defaultState from "../defaultState";
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR, 
  CLEAR

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
        loading: false,
        error: false
      };
    }
    case LOAD_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case ADD_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false
      };
    }
    case ADD_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case CLEAR:{
      return {
        ...state,
        user: {}
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
