import { LOAD_USER, DELETE_USER, UPDATE_USER_PRODUCTS } from "./actionTypes";

export function loadUser() {
  return {
    type: LOAD_USER
  };
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

export function updateUserProducts(arr){
  return{
    type: UPDATE_USER_PRODUCTS,
    payload:{arr}
  }
}

