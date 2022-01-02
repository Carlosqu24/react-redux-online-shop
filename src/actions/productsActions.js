import { TYPES } from "../types"

export const setProducts = (products) => ({ type: TYPES.PRODUCTS.SET_PRODUCTS, payload: products });

// export const resetCart = () => ({ type: TYPES.CART.RESET_CART });