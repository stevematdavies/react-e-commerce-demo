import {actionTypes} from "../action.types";
import {addItemToCart, removeItemsFromCart} from "./cart.utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case actionTypes.cart.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload)
      }
    case actionTypes.cart.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default cartReducer
