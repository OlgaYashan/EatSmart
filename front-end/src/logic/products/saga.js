import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";


import * as actionTypes from "./actionTypes";

import api from "../../services/api";

function* loadProducts(action) {
  try {
    const response = yield call(api.sendRequest, "api/product/all", "get");
    //var arr = [{title:"jjj", description:"2"},{title:"ljjl", description:"1"},{title:"ll1l", description:"4"},{title:"lbll", description:"99"},{title:"ljjl", description:"6"},{title:"ll1l", description:"5"},{title:"lbll", description:"00"},{title:"ljjl", description:"13"},{title:"ll1l", description:"41"},{title:"lbll", description:"1"},{title:"ljjl", description:"71"},{title:"ll1l", description:"166"},{title:"lbll", description:"144"},{title:"ljjl", description:"18"},{title:"ll1l", description:"71"},{title:"lbll", description:"61"}];
    //const response = {
    //  data: arr
    //};
    // var arr= [];
    // arr[0] = response.data;
    // console.log(response);

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

export default function* productsSaga() {
  yield all([takeLatest(actionTypes.LOAD_PRODUCTS, loadProducts)]);
}
