import React from "react";
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import CustomButton from "../custom-button/custom-button";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from "../cart-item/cart-item.component";
import {toggleShoppingCart} from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss'

const CartDropdown = ({visible, cartItems, history, dispatch}) => (
  <div className={`cart-dropdown ${visible ? '' : 'hidden'}`}>
    <div className="cart-items">
      {
        cartItems.length > 0
          ? cartItems.map(item => (<CartItem key={item.id} item={item}/>))
          : <span className="empty-message">Your shopping cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleShoppingCart())
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
