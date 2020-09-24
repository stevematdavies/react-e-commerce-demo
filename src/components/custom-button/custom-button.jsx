import React from "react";

import './custom-button.styles.scss'


const CustomButton = ({children, isSignIn, ...otherProps}) => (
  <button className={`${isSignIn ? 'is-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
