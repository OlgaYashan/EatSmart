import { combineReducers } from "redux";

import recipes from "./recipes(temp)/reducer";
import user from "./user/reducer"
import products from "./products/reducer"
import component from "./component/reducer"
import diet from "./diet/reducer"

export default combineReducers({
  recipes,
  user,
  products,
  component,
  diet
});
