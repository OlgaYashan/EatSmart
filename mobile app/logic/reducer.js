import { combineReducers } from "redux";


import user from "./user/reducer"
import products from "./products/reducer"
import component from "./component/reducer"
import diet from "./diet/reducer"

export default combineReducers({

  user,
  products,
  component,
  diet
});
