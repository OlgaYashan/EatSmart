import { all, fork } from "redux-saga/effects";


import products from "./products/saga"

export default function* rootSaga() {
  yield all([fork(products)]);
  /// yield all([fork(recipes),fork(user),fork(products)]);
}