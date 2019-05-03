import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../services/api";

function* authorizeUser(action) {
  try {
    const response = yield call(api.sendRequest, "api/user?login="+action.payload.login+"&password="+action.payload.password, "get");
    yield put({
      type: actionTypes.LOAD_USER_SUCCESS,
      payload: {
        user: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.LOAD_USER_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* updateUserProducts(action) {
  try {
    console.log(action.payload.arr);
    const response = yield call(api.sendRequest, "api/user/products?login="+action.payload.arr.login+"&password="+action.payload.arr.password, "put", action.payload.arr);
    yield put({
      type: actionTypes.UPDATE_USER_PRODUCTS_SUCCESS,
      payload: {
        user: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.UPDATE_USER_PRODUCTS_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

export default function* userSaga() {
  yield all([takeLatest(actionTypes.LOAD_USER, authorizeUser),takeLatest(actionTypes.UPDATE_USER_PRODUCTS, updateUserProducts)]);
}
