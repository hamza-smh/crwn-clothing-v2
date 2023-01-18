import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss";
import { FaShoppingCart } from "react-icons/fa";
import SignIn from "../sign-in/sign-in.component";

const Navigation = () =>{
  return( 
   <Fragment>
        <div className="navigation">
            < Link className = "logo-container" to = "/" >
                <CrwnLogo className="logo"/>
            </Link >
            <div className="navlinkBar">
                <Link className="navlink" to = "shop" > SHOP </Link>
                <Link className="navlink" to = "/contact" > CONTACT </Link>
                <Link className="navlink" to = "sign-in" > SIGN IN </Link>
                <Link className = "cart" to = "/cart" >
                    < FaShoppingCart />
                </Link>
                
            </div>
        </div>
        <Outlet />
    </Fragment>
    );
}

export default Navigation;