import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../services/api";


function* loadComponents(action) {
    try {
      const response = yield call(api.sendRequest, "api/component/all", "get");
      yield put({
        type: actionTypes.LOAD_COMPONENT_SUCCESS,
        payload: {
          components: response.data
        }
      });
    } catch (err) {
      yield put({
        type: actionTypes.LOAD_COMPONENT_ERROR,
        payload: {
          error: err.response.data
        }
      });
    }
  }

function* addComponent(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/component/", "post",action.payload);
    yield put({
      type: actionTypes.ADD_COMPONENT_SUCCESS,
      payload: {
        component: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.ADD_COMPONENT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}


function* updateComponent(action) {
  try {
    console.log(action.payload.arr);
    const response = yield call(api.sendRequest, "api/component/component?name="+action.payload.name, "put", action.payload.component);
    yield put({
      type: actionTypes.UPDATE_COMPONENT_SUCCESS,
      payload: {
        component: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.UPDATE_COMPONENT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

function* deleteComponent(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/component/component?name="+action.payload.component.name, "delete",action.payload);
    yield put({
      type: actionTypes.DELETE_COMPONENT_SUCCESS,
      payload: {
        component: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_COMPONENT_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}



export default function* componentSaga() {
  yield all([takeLatest(actionTypes.LOAD_COMPONENT, loadComponents),takeLatest(actionTypes.UPDATE_COMPONENT, updateComponent),takeLatest(actionTypes.ADD_COMPONENT, addComponent),takeLatest(actionTypes.DELETE_COMPONENT, deleteComponent)]);
}
