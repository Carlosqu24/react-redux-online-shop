import { 
      ADD_CART_ITEM, 
      DELETE_CART_ITEM, 
      RESET_CART
} from "../types"

export const addCartItem = (item) => ({ type: ADD_CART_ITEM, payload: item });

export const deleteCartItem = (id) => ({ type: DELETE_CART_ITEM, payload: id });

export const resetCart = () => ({ type: RESET_CART, payload: 5 });