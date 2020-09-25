import React from "react";

import './custom-button.styles.scss'


const CustomButton = ({children, isSignIn, inverted, ...otherProps}) => {
  const getClass = () =>
    `${inverted ? 'inverted' : ''} ${isSignIn ? 'is-sign-in' : ''} custom-button`

  return (
    <button className={getClass()} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
