import defaultState from "../defaultState";
import {
  LOAD_RECIPES,
  LOAD_RECIPES_SUCCESS,
  LOAD_RECIPES_ERROR
} from "./actionTypes";

export default function recipesReducer(state = defaultState.recipes, action) {
  switch (action.type) {
    case LOAD_RECIPES: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_RECIPES_SUCCESS: {
      return {
        ...state,
        recipes: action.payload.recipes,
        loading: false
      };
    }
    case LOAD_RECIPES_ERROR: {
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
