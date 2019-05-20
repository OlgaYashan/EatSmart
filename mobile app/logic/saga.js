import { all, fork } from "redux-saga/effects";


import user from "./user/saga"
import products from "./products/saga"
import component from "./component/saga"
import diet from "./diet/saga"

export default function* rootSaga() {
  yield all([fork(products),fork(user),fork(component),fork(diet)]);
  /// yield all([fork(recipes),fork(user),fork(products)]);
}
