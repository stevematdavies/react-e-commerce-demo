import {createSelector} from 'reselect'

const selectCart = ({cart}) => cart

export const selectCartItems = createSelector(
  [selectCart],
  ({cartItems}) => cartItems
)
export const selectCartIsVisible = createSelector(
  [selectCart],
  ({cartIsVisible}) => cartIsVisible
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
)
