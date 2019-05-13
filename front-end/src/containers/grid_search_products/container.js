import { loadProducts, addProduct, deleteProduct, editProduct } from "../../logic/products/actions";
import {updateUser} from "../../logic/user/actions"
import { loadComponents } from "../../logic/component/actions";

export function mapStateToProps(state) {
  const { products, product, loading, error } = state.products;
  const { user } = state.user;
  
  const {components, component} = state.component;

  return {
    products,
    product,
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
    },
    addProduct(name,id_producer,components){
      dispatch(addProduct(name,id_producer,components))
    },
    deleteProduct(product){
      dispatch(deleteProduct(product))
    },
    editProduct(name,product){
      dispatch(editProduct(name,product))
    }
  };
}
