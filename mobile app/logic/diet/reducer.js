import defaultState from "../defaultState";
import {
  LOAD_DIET,
  LOAD_DIET_SUCCESS,
  LOAD_DIET_ERROR,
  UPDATE_DIET,
  UPDATE_DIET_SUCCESS,
  UPDATE_DIET_ERROR,
  ADD_DIET,
  ADD_DIET_SUCCESS,
  ADD_DIET_ERROR

} from "./actionTypes";

export default function dietReducer(state = defaultState.diet, action) {
  switch (action.type) {
    case LOAD_DIET: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_DIET_SUCCESS: {
      return {
        ...state,
        diets: action.payload.diets,
        loading: false
      };
    }
    case LOAD_DIET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case UPDATE_DIET: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_DIET_SUCCESS: {
      return {
        ...state,
        diet: action.payload.diet,
        loading: false
      };
    }
    case UPDATE_DIET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case ADD_DIET: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_DIET_SUCCESS: {
      return {
        ...state,
        diet: action.payload.diet,
        loading: false
      };
    }
    case ADD_DIET_ERROR: {
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
