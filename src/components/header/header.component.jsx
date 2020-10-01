import React from "react";
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartIsVisible} from '../../redux/cart/cart.selectors';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles";

const Header = ({currentUser, cartIsVisible}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo '/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {
        currentUser
          ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          : <OptionLink to='/sign-in'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    <CartDropdown visible={cartIsVisible}/>
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsVisible: selectCartIsVisible
})

export default connect(mapStateToProps)(Header)
