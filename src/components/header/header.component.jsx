import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartIsVisible} from '../../redux/cart/cart.selectors';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.scss'

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsVisible: selectCartIsVisible
})

export default connect(mapStateToProps)(Header)
