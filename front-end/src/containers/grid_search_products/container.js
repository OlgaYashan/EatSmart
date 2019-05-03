import { loadProducts } from "../../logic/products/actions";
import {updateUserProducts} from "../../logic/user/actions"

export function mapStateToProps(state) {
  const { products, loading, error } = state.products;
  const { user } = state.user;

  return {
    products,
    loading,
    error, 
    user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
    },
    updateUserProducts(user){
      dispatch(updateUserProducts(user))
    }
  };
}
