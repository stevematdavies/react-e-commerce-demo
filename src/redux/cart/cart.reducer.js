import {actionTypes} from "../action.types";

const INITIAL_STATE = {
  cartIsVisible: false,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.cart.TOGGLE_SHOPPING_CART:
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible
      };
    case actionTypes.cart.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
}

export default cartReducer
