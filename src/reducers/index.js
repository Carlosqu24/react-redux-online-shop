import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer";
import productsReducer from "./productsReducer";

const reducer = combineReducers({
      shoppingCart: shoppingCartReducer,
      products: productsReducer
});

export default reducer;