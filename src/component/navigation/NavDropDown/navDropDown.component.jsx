
import "./navDropDown.styles.scss";
const DropDown =() =>{
    return(
        <>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                  role="button" data-toggle="dropdown" aria-haspopup="true" 
                  aria-expanded="true">Dropdown
              </a>      
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Another action </a>
                <a className="dropdown-item" href="#">Another action</a>                              
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
        </>
    )
}
export default DropDown;