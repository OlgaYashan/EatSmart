import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../services/api";


function* loadDiets(action) {
    try {
      const response = yield call(api.sendRequest, "api/diet/all", "get");
      yield put({
        type: actionTypes.LOAD_DIET_SUCCESS,
        payload: {
          diets: response.data
        }
      });
    } catch (err) {
      yield put({
        type: actionTypes.LOAD_DIET_ERROR,
        payload: {
          error: err.response.data
        }
      });
    }
  }

function* addDiet(action) {
  console.log(action.payload);
  try {
    const response = yield call(api.sendRequest, "api/diet/diet/", "post",action.payload);
    yield put({
      type: actionTypes.ADD_DIET_SUCCESS,
      payload: {
        diet: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.ADD_DIET_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}


function* updateDiet(action) {
  try {
    console.log(action.payload.arr);
    const response = yield call(api.sendRequest, "api/diet/diet?name="+action.payload.arr.name, "put", action.payload.arr);
    yield put({
      type: actionTypes.UPDATE_DIET_SUCCESS,
      payload: {
            diet: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.UPDATE_DIET_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

export default function* componentSaga() {
  yield all([takeLatest(actionTypes.LOAD_DIET, loadDiets),takeLatest(actionTypes.UPDATE_DIET, updateDiet),takeLatest(actionTypes.ADD_DIET, addDiet)]);
}
