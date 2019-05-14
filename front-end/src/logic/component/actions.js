import { LOAD_COMPONENT, DELETE_COMPONENT, UPDATE_COMPONENT,ADD_COMPONENT } from "./actionTypes";

export function loadComponents() {
  return {
    type: LOAD_COMPONENT
  };
}

export function deleteComponent(component) {
  return {
    type: DELETE_COMPONENT,
    payload: { component }
  };
}

export function addComponent(name, type, description){
  return {
    type: ADD_COMPONENT,
    payload: { name, type, description}
  };
}

export function updateComponent(name,component){
  return{
    type: UPDATE_COMPONENT,
    payload:{name, component}
  }
}

