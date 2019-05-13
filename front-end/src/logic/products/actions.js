import { LOAD_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT  } from "./actionTypes";

export function loadProducts() {
  return {
    type: LOAD_PRODUCTS
  };
}

export function addProduct(name,id_producer,components) {
  return {
    type: ADD_PRODUCT,
    payload: { name,id_producer,components }
  };
}

export function deleteProduct(product) {
  return {
    type: DELETE_PRODUCT,
    payload: { product }
  };
}

export function editProduct(name,product) {
  return {
    type: EDIT_PRODUCT,
    payload: { name,product }
  };
}