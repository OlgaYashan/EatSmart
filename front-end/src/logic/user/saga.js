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

function* registrationUser(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/user/", "post",action.payload);
    yield put({
      type: actionTypes.ADD_USER_SUCCESS,
      payload: {
        user: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.ADD_USER_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}


function* updateUser(action) {
  try {
    console.log(action.payload.arr);
    const response = yield call(api.sendRequest, "api/user/products?login="+action.payload.arr.login+"&password="+action.payload.arr.password, "put", action.payload.arr);
    yield put({
      type: actionTypes.UPDATE_USER_SUCCESS,
      payload: {
        user: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.UPDATE_USER_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

export default function* userSaga() {
  yield all([takeLatest(actionTypes.LOAD_USER, authorizeUser),takeLatest(actionTypes.UPDATE_USER, updateUser),takeLatest(actionTypes.ADD_USER, registrationUser)]);
}
