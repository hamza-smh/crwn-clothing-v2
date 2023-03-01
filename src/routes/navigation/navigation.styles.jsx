import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationContainer = styled.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)
`
    height: 100%;
    width: 70px;
    padding: 15px 0px 10px 30px;

`
export const NavLinkBar =styled.div `
    width: 50 % ;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
`

export const NavLink =styled(Link)
`
    padding: 10 px 15 px 0 px 15 px;
    cursor: pointer;
    font-size: 23px;
    font-weight: 1000;
`

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 15px 0px 10px 30px;
//   }

//   .navlinkBar{
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     padding-right: 20px;

//     .nav-link {
//       padding: 10px 15px 0px 15px;
//       cursor: pointer;
//       font-size: 23px;
//       font-weight: 1000;

//     }


//     .logocart{
//     display: flex;
//     align-items: center;
//     justify-content:flex-end; 
//   }

//   }
// }