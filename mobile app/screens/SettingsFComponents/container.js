import { loadComponents } from "../../logic/component/actions";
import { updateUser } from "../../logic/user/actions";

export function mapStateToProps(state) {
  const {components, loading, error } = state.component;
  const {user}=state.user;

  return {
    components,
    loading,
    error,
    user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadComponents() {
      dispatch(loadComponents());
      
    },
    updateUser(user){
      dispatch(updateUser(user))
    }
  };
}
