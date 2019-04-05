import { all, fork } from "redux-saga/effects";

import recipes from "./recipes/saga";
import user from "./user/saga"
import products from "./products/saga"

export default function* rootSaga() {
  yield all([fork(recipes),fork(user),fork(products)]);
}
