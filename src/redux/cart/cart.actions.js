import {actionTypes} from "../action.types";

export const toggleShoppingCart = () => ({
  type: actionTypes.cart.TOGGLE_SHOPPING_CART
})

export const addItem = item => ({
  type: actionTypes.cart.ADD_ITEM,
  payload: item
})

export const deleteItem = itemID => ({
  type: actionTypes.cart.DELETE_ITEM,
  payload: itemID
})

export const decreaseQuantityOrRemoveItem = item => ({
  type: actionTypes.cart.DEC_ITEM_QUANTITY,
  payload: item
})
