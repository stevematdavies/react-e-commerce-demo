import {actionTypes} from "../action.types";

export const toggleShoppingCart = () => ({
  type: actionTypes.cart.TOGGLE_SHOPPING_CART
})

export const addItem = item => ({
  type: actionTypes.cart.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: actionTypes.cart.REMOVE_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: actionTypes.cart.CLEAR_ITEM_FROM_CART,
  payload: item
})
