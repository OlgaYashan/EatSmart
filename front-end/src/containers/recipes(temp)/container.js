import { loadRecipes } from "../../logic/recipes/actions";

export function mapStateToProps(state) {
  const { recipes, loading, error } = state.recipes;

  return {
    recipes,
    loading,
    error
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadRecipes() {
      dispatch(loadRecipes());
    }
  };
}
