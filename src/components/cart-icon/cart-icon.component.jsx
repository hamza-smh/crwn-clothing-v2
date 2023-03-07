import { useContext } from "react";
<<<<<<< Updated upstream
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
=======
import {CartIconContainer,ShoppingIcon, ItemCount} from "./cart-icon.styles";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
>>>>>>> Stashed changes
import { CartContext } from "../../context/cart.context";

const CartIcon = () =>{

    const {isCartOpen , setIsCartOpen, cartCount} =useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 

    return(
<<<<<<< Updated upstream
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count"> {cartCount} </span>
        </div>
=======
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount> {cartCount} </ItemCount>
        </CartIconContainer>
>>>>>>> Stashed changes

    );
}
export default CartIcon;