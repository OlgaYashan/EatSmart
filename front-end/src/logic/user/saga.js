import { put, all, takeLatest } from "redux-saga/effects";
//import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";

//import api from "../../services/api";
//import avatarImg from 'http://trinitynews.ie/wp-content/uploads/2017/02/hijab.png';
function* loadUser(action) {
  try {
    //const response = yield call(axios.sendRequest, "/recipes", "get");

    const response = {
      data: { login: "login1", password: "pass1", name:"Olga",avatarLink:"http://trinitynews.ie/wp-content/uploads/2017/02/hijab.png" }
      //data: { login: "", password: "", name:"",avatarLink:"" }
    };

    yield put({
      type: actionTypes.LOAD_USER_SUCCESS,
      payload: {
        user: response.data
      }
      /*type: actionTypes.LOAD_USER_ERROR,
      payload: {
        error: true
      }*/
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

export default function* userSaga() {
  yield all([takeLatest(actionTypes.LOAD_USER, loadUser)]);
}
