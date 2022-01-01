import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer";

const reducer = combineReducers({
      shoppingCart: shoppingCartReducer
});

export default reducer;