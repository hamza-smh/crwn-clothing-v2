import React from "react";
import GetStartedButton from "../get-started-button/getStartedbutton";
import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
import "./navigation.styles.scss";
import NavLinkBar from "./NavLinkBar/navLinkBar.component";

import NavToggleButton from "./NavToggle/navtoggle.component";




const Navigation = () =>{
    return(
        <>
      
            {/* Navigation Bar */}
          <nav className = "navbar navbar-expand-lg navbar-dark fixed-top" id="navbar" >
            <div className="container">
              <div className="row">
                <img className=" logo" src = {logo} />
                
                <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                
                </button>
              </div>
              <div role = "navigation" >
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLinkBar />
                    {/* <i className="bi bi-list mobile-nav-toggle"></i>  */}
                    <NavToggleButton />
                  </div>
              </div> 
            </div>  
          </nav>  
          
      </>
    );
}
export default Navigation;