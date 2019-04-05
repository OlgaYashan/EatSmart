import { combineReducers } from "redux";

import recipes from "./recipes/reducer";
import user from "./user/reducer"
import products from "./products/reducer"

export default combineReducers({
  recipes,
  user,
  products
});
