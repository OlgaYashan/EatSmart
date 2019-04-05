import createSagaMidddelware from "redux-saga";
import saga from "./logic/saga";
import reducer from "./logic/reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddelware.run(saga);

export default store;
