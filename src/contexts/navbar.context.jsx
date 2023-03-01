import { createContext, useState } from "react";

export const NavBarContext = createContext({
    isNavBarOpen: false,
    setIsNavBarOpen: () => {},
})

export const NavBarProvider = ({children}) =>{
    
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const value = {isNavBarOpen,setIsNavBarOpen};
    
    return(
        <NavBarContext.Provider value = {value}>{children}</NavBarContext.Provider>
    )
}