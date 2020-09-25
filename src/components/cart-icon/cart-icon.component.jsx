import React from "react";
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toggleShoppingCart} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({toggleShoppingCart}) => (
  <div className="cart-icon" onClick={toggleShoppingCart}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => dispatch(toggleShoppingCart())
})

export default connect(null, mapDispatchToProps)(CartIcon)
