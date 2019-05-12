import { LOAD_COMPONENT, DELETE_COMPONENT, UPDATE_COMPONENT,ADD_COMPONENT } from "./actionTypes";

export function loadComponents() {
  return {
    type: LOAD_COMPONENT
  };
}

export function deleteComponent(id) {
  return {
    type: DELETE_COMPONENT,
    payload: { id }
  };
}

export function addComponent(login,password,name,surname,gender,age,role,rating){
  return {
    type: ADD_COMPONENT,
    payload: { login,password,name,surname,gender,age,role,rating}
  };
}

export function updateComponent(arr){
  return{
    type: UPDATE_COMPONENT,
    payload:{arr}
  }
}

