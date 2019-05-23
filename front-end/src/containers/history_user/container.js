import { loadUser} from "../../logic/user/actions";

export function mapStateToProps(state) {
  const { user, loading, error } = state.user;

  return {
    user,
    loading,
    error

  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadUser() {
      dispatch(loadUser());
    }
  };
}