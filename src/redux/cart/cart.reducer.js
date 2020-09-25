import {actionTypes} from "../action.types";
import { addItemToCart, removeItemsFromCart,decreaseQuantityOrRemoveItem} from "./cart.utils";

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
    case actionTypes.cart.DELETE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload)
      }
    case actionTypes.cart.DEC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityOrRemoveItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
