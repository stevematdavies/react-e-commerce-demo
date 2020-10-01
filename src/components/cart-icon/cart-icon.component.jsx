import React from "react";
import {connect} from 'react-redux'
import {toggleShoppingCart} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./cart-icon.styles";

const CartIcon = ({toggleShoppingCart, itemCount}) => (
  <CartIconContainer onClick={toggleShoppingCart}>
    <ShoppingIconContainer/>
    <ItemCountContainer itemCount={itemCount}>
      {itemCount}
    </ItemCountContainer>
  </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => dispatch(toggleShoppingCart())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
