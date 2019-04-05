import { LOAD_RECIPES, DELETE_RECIPE } from "./actionTypes";

export function loadRecipes() {
  return {
    type: LOAD_RECIPES
  };
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    payload: { id }
  };
}
