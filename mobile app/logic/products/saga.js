import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";


import * as actionTypes from "./actionTypes";

import api from "../../services/api";

function* loadProducts(action) {
  try {
    const response = yield call(api.sendRequest, "api/product/all", "get");
    yield put({
      type: actionTypes.LOAD_PRODUCTS_SUCCESS,
      payload: {
        products: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.LOAD_PRODUCTS_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* addProduct(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/product/", "post",action.payload);
    yield put({
      type: actionTypes.ADD_PRODUCT_SUCCESS,
      payload: {
        product: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.ADD_PRODUCT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* deleteProduct(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/product/product?name="+action.payload.product.name, "delete",action.payload);
    yield put({
      type: actionTypes.DELETE_PRODUCT_SUCCESS,
      payload: {
        product: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_PRODUCT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* editProduct(action) {
  try {
    console.log(action.payload);
    const response = yield call(api.sendRequest, "api/product/product?name="+action.payload.name, "put", action.payload.product);
    yield put({
      type: actionTypes.EDIT_PRODUCT_SUCCESS,
      payload: {
        product: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.EDIT_PRODUCT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* loadProduct(action) {
  try {
    const response = yield call(api.sendRequest, "api/product/barCode?barCode="+action.payload.barCode, "get");
    yield put({
      type: actionTypes.LOAD_PRODUCT_BAR_CODE_SUCCESS,
      payload: {
        product: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.LOAD_PRODUCT_BAR_CODE_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

export default function* productsSaga() {
  yield all([takeLatest(actionTypes.LOAD_PRODUCTS, loadProducts),takeLatest(actionTypes.ADD_PRODUCT, addProduct),takeLatest(actionTypes.EDIT_PRODUCT, editProduct),takeLatest(actionTypes.DELETE_PRODUCT, deleteProduct),takeLatest(actionTypes.LOAD_PRODUCT_BAR_CODE, loadProduct)  ]);
}
