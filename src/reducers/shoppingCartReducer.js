import { 
      ADD_CART_ITEM,
      DELETE_CART_ITEM,
      INCREMENT_QUANTITY_CART_ITEM,
      DECREMENT_QUANTITY_CART_ITEM,
      RESET_CART
} from "../types";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
      switch (action.type) {
            case ADD_CART_ITEM:
                  const newProduct = { ...action.payload, quantity: 1 };

                  return [ ...state, newProduct ];
            case DELETE_CART_ITEM:
                  const newData = state.filter(task => task.id != action.payload);

                  return newData;
            case INCREMENT_QUANTITY_CART_ITEM:
                  const mapped = state.map(item => {
                        if (item.id == action.payload) item.quantity = item.quantity + 1
      
                        return item;
                  });

                  return mapped;
            case DECREMENT_QUANTITY_CART_ITEM:
                  const mappedCart = state.map(item => {
                        if (item.id == action.payload) {
                              item.quantity == 1 
                                    ? item.quantity = 1 
                                    : item.quantity -= 1;
                        }
      
                        return item;
                  });
      
                  return mappedCart;
            case RESET_CART:
                  return initialState;
            default:
                  return state;
      };
};