import { TYPES } from "../types"

export const addCartItem = (item) => ({ type: TYPES.CART.ADD_CART_ITEM, payload: item });

export const deleteCartItem = (id) => ({ type: TYPES.CART.DELETE_CART_ITEM, payload: id });

export const incrementQuantityCartItem = (id) => ({ type: TYPES.CART.INCREMENT_QUANTITY_CART_ITEM, payload: id });

export const decrementQuantityCartItem = (id) => ({ type: TYPES.CART.DECREMENT_QUANTITY_CART_ITEM, payload: id });

export const setSizeCartItem = (payload) => ({ type: TYPES.CART.SET_SIZE_CART_ITEM, payload: payload });

export const resetCart = () => ({ type: TYPES.CART.RESET_CART });