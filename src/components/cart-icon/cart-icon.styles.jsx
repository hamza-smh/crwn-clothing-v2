import styled from 'styled-components';

import { ReactComponent as ShoppingSVG } from "../../assets/shopping-bag.svg";
export const ShoppingIcon =styled(ShoppingSVG)`
    width: 224px;
    height: 224px;
`;

export const CartIconContainer = styled.div `
  width: 55px;
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;
export const ItemCount = styled.span `
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    bottom: 5px;

`
// .cart-icon-container {
//   width: 55px;
//   height: 55px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   .shopping-icon {
//     width: 224px;
//     height: 224px;
//   }

//   .item-count {
//     position: absolute;
//     font-size: 15px;
//     font-weight: bold;
//     bottom: 5px;
    
//   }
// }
