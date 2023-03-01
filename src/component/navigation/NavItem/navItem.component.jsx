import "./navItem.styles.scss";

const NavItem = ({nav_item}) => {
return(
    <>
        <li className="nav-item"><a className="nav-link scrollto active"  href = {`/${nav_item}`} >{nav_item}</a></li>
    </>
)
}
export default NavItem;