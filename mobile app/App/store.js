import {createStore, applyMiddleware} from 'redux';
import reducer from './logic/reducer';
import saga from "./logic/saga";
import createSagaMidddelware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddelware.run(saga);

export default store;