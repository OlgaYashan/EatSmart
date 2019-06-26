import { LOAD_USER, DELETE_USER, UPDATE_USER,ADD_USER,CLEAR_USER } from "./actionTypes";

export function loadUser() {
  return {
    type: LOAD_USER
  };
}

export function CLEAR(){
  return {
    type: CLEAR_USER
  }
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: { id }
  };
}

export function authorizeUser(login,password) {
  return {
    type: LOAD_USER,
    payload: { login,password }
  };
}

export function registrationUser(login,password,name,surname,gender,age,role,rating){
  return {
    type: ADD_USER,
    payload: { login,password,name,surname,gender,age,role,rating}
  };
}

export function updateUser(arr){
  return{
    type: UPDATE_USER,
    payload:{arr}
  }
}

