import "../NavLinkBar/navLinkBar.styles.scss";
import NavItem from "../NavItem/navItem.component";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import NavDropDown from "../NavDropDown/navDropDown.component";


const NavLinkBar = () =>{
    return(
        <div className="navLinkBar">
        < ul className = "navlinkBar navbar-nav mr-auto" >
            <NavItem nav_item= "Home"/>
            <NavItem nav_item= "Services"/>
            <NavItem nav_item= "Portfolio"/>
            <NavItem nav_item= "Team"/>
            <NavDropDown />
            <NavItem nav_item = "Contact" />
            <li className="nav-item "><a className ="nav-link scrollto" id = "getstarted" href = '/getstarted'>  
                <GetStartedButton buttonType= "transparent" /></a> 
            </li> 

         </ul>
        </div>
    )
}

export default NavLinkBar;