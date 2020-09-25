import {actionTypes} from "../action.types";

export const toggleShoppingCart = () => ({
  type: actionTypes.cart.TOGGLE_SHOPPING_CART
})

export const addItem = item => ({
  type: actionTypes.cart.ADD_ITEM,
  payload: item
})
