import { 
      ADD_CART_ITEM,
      DELETE_CART_ITEM,
      RESET_CART
} from "../types";

const initialState = [];

export default function shoppingCartReducer(state = initialState, action) {
      switch (action.type) {
            case ADD_CART_ITEM:
                  return [ ...state, action.payload ];
            case DELETE_CART_ITEM:
                  const newData = state.filter(task => task.id != action.payload);

                  return newData;
            case RESET_CART:
                  return initialState;
            default:
                  return state;
      };
};