import { LOAD_DIET, DELETE_DIET, UPDATE_DIET,ADD_DIET } from "./actionTypes";

export function loadDiets() {
  return {
    type: LOAD_DIET
  };
}

export function deleteDiet(id) {
  return {
    type: DELETE_DIET,
    payload: { id }
  };
}

export function addDiet(login,password,name,surname,gender,age,role,rating){
  return {
    type: ADD_DIET,
    payload: { login,password,name,surname,gender,age,role,rating}
  };
}

export function updateDiet(arr){
  return{
    type: UPDATE_DIET,
    payload:{arr}
  }
}

