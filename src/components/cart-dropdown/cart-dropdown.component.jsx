import Button from "../button/button.component";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate(); 

    const gotoCheckoutHandler = () => {
        navigate("/checkout")
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                    (cartItems.map(item => <CartItem  key ={cartItems.id} cartItem={item} />))
                    : (<EmptyMessage>Your Cart Is Empty</EmptyMessage>)
                }
                
            </CartItems>
            <Button onClick ={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropDown;