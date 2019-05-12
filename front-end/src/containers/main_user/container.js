import { loadUser, updateUser } from "../../logic/user/actions";
import { loadComponents } from "../../logic/component/actions";
import { loadDiets } from "../../logic/diet/actions";

export function mapStateToProps(state) {
  const { user, loading, error } = state.user;
  const {components, component} = state.component;
  const {diets, diet} = state.diet;

  return {
    user,
    loading,
    error,
    components,
    diets
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadUser() {
      dispatch(loadUser());
    },
    updateUser(user){
      dispatch(updateUser(user))
    },
    loadComponents(){
      dispatch(loadComponents())
    },
    loadDiets(){
      dispatch(loadDiets())
    }
  };
}