import React from "react";
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toggleShoppingCart} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({toggleShoppingCart, itemCount}) => (
  <div className="cart-icon" onClick={toggleShoppingCart}>
    <ShoppingIcon className="shopping-icon"/>
    <span className={`${itemCount > 0 ? 'has-items': '' } item-count`}>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => dispatch(toggleShoppingCart())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
