import { loadProducts } from "../../logic/products/actions";

export function mapStateToProps(state) {
  const {products, loading, error } = state.products;

  return {
    products,
    loading,
    error
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts() {
      dispatch(loadProducts());
      
    }
  };
}
