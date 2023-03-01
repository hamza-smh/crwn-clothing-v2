import { useContext } from "react";
import { NavBarContext } from "../../../contexts/navbar.context";

const NavToggleButton = () => {

const {isNavBarOpen , setIsNavBarOpen} =useContext(NavBarContext);
const toggleNavBarOpen = () => setIsNavBarOpen(!isNavBarOpen); 

    return(
        <i className="bi bi-list mobile-nav-toggle" onClick={toggleNavBarOpen}></i> 
    )
}
export default NavToggleButton;