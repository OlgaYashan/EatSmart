import { put, all, takeLatest } from "redux-saga/effects";
//import { call} from "redux-saga/effects";
import * as actionTypes from "./actionTypes";

//import api from "../../services/api";

function* loadRecipes(action) {
  try {
    //const response = yield call(axios.sendRequest, "/recipes", "get");

    const response = {
      data: [
        { title: "Recipe 1", desription: "Recipe 1 description" },
        { title: "Recipe 2", description: "Description 2" }
      ]
    };

    yield put({
      type: actionTypes.LOAD_RECIPES_SUCCESS,
      payload: {
        recipes: response.data
      }
    });
  } catch (err) {
    yield put({
      type: actionTypes.LOAD_RECIPES_ERROR,
      payload: {
        error: err.response.data
      }
    });
  }
}

export default function* recipesSaga() {
  yield all([takeLatest(actionTypes.LOAD_RECIPES, loadRecipes)]);
}
