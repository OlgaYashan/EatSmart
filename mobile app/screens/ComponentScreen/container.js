import { loadProduct } from "../../logic/component/actions";
//import { clearComponent } from "../../logic/component/actions";
import {updateUser} from '../../logic/user/actions'

export function mapStateToProps(state) {
  const {user} = state.user;

  return {
    user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateUser(user){
      dispatch(updateUser(user))
    }
  };
}
