import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg";

import './header.styles.scss'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, cartIsVisible}) => (
  <div className="header">
    <Link className='logo-container' to="/">
      <Logo className='logo '/>
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser
          ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className='option' to='/sign-in'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    <CartDropdown visible={cartIsVisible}/>
  </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {cartIsVisible}}) => ({
  currentUser,
  cartIsVisible
})

export default connect(mapStateToProps)(Header)
