import { loadProduct, clearProduct } from "../../logic/products/actions";
import {updateUser} from '../../logic/user/actions'
export function mapStateToProps(state) {
  const {product, loading, error } = state.products;
  const {user} = state.user;

  return {
    product,
    loading,
    error,
    user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadProduct(barCode) {
      dispatch(loadProduct(barCode));
      
    },
    clearProduct(){
      dispatch(clearProduct());
    },
    updateUser(user){
      dispatch(updateUser(user))
    }
  };
}
