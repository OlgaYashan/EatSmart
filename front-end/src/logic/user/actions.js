import { LOAD_USER, DELETE_USER } from "./actionTypes";

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

export function authorizeUser(login,pasword) {
  return {
    type: LOAD_USER,
    payload: { login,pasword }
  };
}

