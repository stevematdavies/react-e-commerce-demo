import {actionTypes} from "../action.types";

const INITIAL_STATE = {
  cartIsVisible: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.app.TOGGLE_SHOPPING_CART:
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible
      }
    default:
      return state
  }
}

export default cartReducer
