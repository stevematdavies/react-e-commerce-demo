import {createSelector} from 'reselect'

const selectCart = ({cart}) => cart


export const selectCartItems = createSelector(
  [selectCart],
  ({cartItems}) => cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc += item.quantity, 0)
)
