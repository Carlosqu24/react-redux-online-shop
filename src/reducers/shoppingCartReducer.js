import { TYPES } from "../types";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
      switch (action.type) {
            
            case TYPES.ADD_CART_ITEM:
                  const newProduct = { ...action.payload, quantity: 1 };

                  return [...state, newProduct];

            case TYPES.DELETE_CART_ITEM:
                  const newData = state.filter(task => task.id != action.payload);

                  return newData;

            case TYPES.INCREMENT_QUANTITY_CART_ITEM:
                  const mapped = state.map(item => {
                        if (item.id == action.payload) item.quantity = item.quantity + 1

                        return item;
                  });

                  return mapped;

            case TYPES.DECREMENT_QUANTITY_CART_ITEM:
                  const mappedCart = state.map(item => {
                        if (item.id == action.payload) {
                              item.quantity == 1
                                    ? item.quantity = 1
                                    : item.quantity -= 1;
                        }

                        return item;
                  });

                  return mappedCart;

            case TYPES.RESET_CART:
                  return initialState;

            default:
                  return state;
      };
};