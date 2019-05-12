import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../services/api";


function* loadComponents(action) {
    try {
      const response = yield call(api.sendRequest, "api/component/all", "get");
      //var arr = [{title:"jjj", description:"2"},{title:"ljjl", description:"1"},{title:"ll1l", description:"4"},{title:"lbll", description:"99"},{title:"ljjl", description:"6"},{title:"ll1l", description:"5"},{title:"lbll", description:"00"},{title:"ljjl", description:"13"},{title:"ll1l", description:"41"},{title:"lbll", description:"1"},{title:"ljjl", description:"71"},{title:"ll1l", description:"166"},{title:"lbll", description:"144"},{title:"ljjl", description:"18"},{title:"ll1l", description:"71"},{title:"lbll", description:"61"}];
      //const response = {
      //  data: arr
      //};
      // var arr= [];
      // arr[0] = response.data;
      // console.log(response);
  
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
    const response = yield call(api.sendRequest, "api/user/component?name="+action.payload.arr.name, "put", action.payload.arr);
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

export default function* componentSaga() {
  yield all([takeLatest(actionTypes.LOAD_COMPONENT, loadComponents),takeLatest(actionTypes.UPDATE_COMPONENT, updateComponent),takeLatest(actionTypes.ADD_COMPONENT, addComponent)]);
}
