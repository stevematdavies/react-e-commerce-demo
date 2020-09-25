import React from "react";
import {connect} from 'react-redux'
import CustomButton from "../custom-button/custom-button";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({visible, cartItems}) => (
  <div className={`cart-dropdown ${visible ? '' : 'hidden'}`}>
    <div className="cart-items">
      {
        cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
    <CustomButton>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)