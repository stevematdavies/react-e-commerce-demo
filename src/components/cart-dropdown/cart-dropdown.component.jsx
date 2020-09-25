import React from "react";
import CustomButton from "../custom-button/custom-button";

import './cart-dropdown.styles.scss'

const CartDropdown = ({visible}) => (
  <div className={`cart-dropdown ${visible ? '' : 'hidden'}`}>
    <div className="cart-items"/>
    <CustomButton>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

export default CartDropdown
