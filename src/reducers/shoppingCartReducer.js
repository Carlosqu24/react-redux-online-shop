import { TYPES } from "../types";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
      switch (action.type) {
            
            case TYPES.CART.ADD_CART_ITEM:
                  const newProduct = { 
                        ...action.payload, 
                        quantity: 1, 
                        afterTaxPrice: action.payload.price + (action.payload.price * 0.13) 
                  };

                  return [...state, newProduct];

            case TYPES.CART.DELETE_CART_ITEM:
                  const newData = state.filter(item => item._id != action.payload);

                  return newData;

            case TYPES.CART.INCREMENT_QUANTITY_CART_ITEM:
                  const mapped = state.map(item => {
                        if (item._id == action.payload) item.quantity = item.quantity + 1

                        return item;
                  });

                  return mapped;

            case TYPES.CART.DECREMENT_QUANTITY_CART_ITEM:
                  const mappedCart = state.map(item => {
                        if (item._id == action.payload) {
                              item.quantity == 1
                                    ? item.quantity = 1
                                    : item.quantity -= 1;
                        }

                        return item;
                  });

                  return mappedCart;

            case TYPES.CART.RESET_CART:
                  return initialState;

            default:
                  return state;
      };
};