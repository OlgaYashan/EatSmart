import { loadProducts } from "../../logic/products/actions";
import {updateUser} from "../../logic/user/actions"
import { loadComponents } from "../../logic/component/actions";

export function mapStateToProps(state) {
  const { products, loading, error } = state.products;
  const { user } = state.user;
  
  const {components, component} = state.component;

  return {
    products,
    loading,
    error, 
    user,
    components
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
    },
    updateUser(user){
      dispatch(updateUser(user))
    },
    loadComponents(){
      dispatch(loadComponents())
    }
  };
}
