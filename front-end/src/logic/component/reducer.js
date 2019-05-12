import defaultState from "../defaultState";
import {
  LOAD_COMPONENT,
  LOAD_COMPONENT_SUCCESS,
  LOAD_COMPONENT_ERROR,
  UPDATE_COMPONENT,
  UPDATE_COMPONENT_SUCCESS,
  UPDATE_COMPONENT_ERROR,
  ADD_COMPONENT,
  ADD_COMPONENT_SUCCESS,
  ADD_COMPONENT_ERROR

} from "./actionTypes";

export default function componentReducer(state = defaultState.component, action) {
  switch (action.type) {
    case LOAD_COMPONENT: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_COMPONENT_SUCCESS: {
      return {
        ...state,
        components: action.payload.components,
        loading: false
      };
    }
    case LOAD_COMPONENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case UPDATE_COMPONENT: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_COMPONENT_SUCCESS: {
      return {
        ...state,
        component: action.payload.component,
        loading: false
      };
    }
    case UPDATE_COMPONENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case ADD_COMPONENT: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_COMPONENT_SUCCESS: {
      return {
        ...state,
        component: action.payload.component,
        loading: false
      };
    }
    case ADD_COMPONENT_ERROR: {
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
