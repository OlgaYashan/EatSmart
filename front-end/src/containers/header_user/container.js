import { authorizeUser, registrationUser, CLEAR } from "../../logic/user/actions";

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
    authorizeUser(login,password) {
      dispatch(authorizeUser(login,password));
    },
    registrationUser(login,password,name,surname,gender,age,role,rating) {
      dispatch(registrationUser(login,password,name,surname,gender,age,role,rating));
    },
    CLEAR(){
      dispatch(CLEAR());
    }
  };
}