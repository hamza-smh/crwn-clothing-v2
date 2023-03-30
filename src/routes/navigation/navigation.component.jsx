import { Fragment } from 'react';
//import { useContext } from 'react';
import { Outlet} from 'react-router-dom';
//import { UserContext } from '../../context/user.context';
//import { CartContext } from '../../context/cart.context';


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
//import { FaShoppingCart } from "react-icons/fa";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import {NavigationContainer,LogoContainer,NavLinkBar,NavLink} from './navigation.styles';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {

  //const {currentUser} = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  //const {isCartOpen} = useContext(CartContext);
  const isCartOpen=useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
            <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinkBar>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          {
            currentUser ?
              (<NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>)
               :
              (<NavLink className='nav-link' to='/auth'>SIGN IN</NavLink>)
          }
              {/* < FaShoppingCart /> */}
              <CartIcon />
        </NavLinkBar>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
