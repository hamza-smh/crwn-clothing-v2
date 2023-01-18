import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () =>{
  return( 
   <Fragment>
        <div className="navigation">
            < Link className = "logo-container" to = "/" ><div> Logo </div></Link >
            <div className="navlinkBar">
                <Link className="navlink" to = "/shop" > SHOP </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
    );
}

export default Navigation;