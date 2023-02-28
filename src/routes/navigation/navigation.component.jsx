import { Fragment ,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
//import { FaShoppingCart } from "react-icons/fa";
import {NavigationContainer} from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {

const {currentUser} = useContext(UserContext);
const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logocart' />
        </Link>

        <div className='navlinkBar'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/contact'>CONTACT</Link>
          {
            currentUser ?
              (<span className = 'nav-link' onClick={signOutUser}>SIGN OUT</span>)
               :
              (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
          }
              {/* < FaShoppingCart /> */}
              <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
