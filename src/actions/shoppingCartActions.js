import { TYPES } from "../types"

export const addCartItem = (item) => ({ type: TYPES.ADD_CART_ITEM, payload: item });

export const deleteCartItem = (id) => ({ type: TYPES.DELETE_CART_ITEM, payload: id });

export const incrementQuantityCartItem = (id) => ({ type: TYPES.INCREMENT_QUANTITY_CART_ITEM, payload: id });

export const decrementQuantityCartItem = (id) => ({ type: TYPES.DECREMENT_QUANTITY_CART_ITEM, payload: id });

export const resetCart = () => ({ type: TYPES.RESET_CART });