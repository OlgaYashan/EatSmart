import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";

import api from "../../services/api";

//const fetchF = () =>fetch("http://192.168.1.137:3000/api/product/product?name=Vlad");

function* loadProducts(action) {
  try {
//console.log('try');
const response = yield call(api.sendRequest, "api/product/product?name=Чай", "get");
    //const response = yield call(fetchF);
    //var arr = [{title:"jjj", description:"2"},{title:"ljjl", description:"1"},{title:"ll1l", description:"4"},{title:"lbll", description:"99"},{title:"ljjl", description:"6"},{title:"ll1l", description:"5"},{title:"lbll", description:"00"},{title:"ljjl", description:"13"},{title:"ll1l", description:"41"},{title:"lbll", description:"1"},{title:"ljjl", description:"71"},{title:"ll1l", description:"166"},{title:"lbll", description:"144"},{title:"ljjl", description:"18"},{title:"ll1l", description:"71"},{title:"lbll", description:"61"}];
    //const response = {
    //  data: arr
    //};
    var arr= [];
    //console.log(response);
    arr[0] = response.data;
    //console.log(response);

    yield put({
      type: actionTypes.LOAD_PRODUCTS_SUCCESS,
      payload: {
        products: arr
      }
    });
  } catch (err) {
      //console.log(err);
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
