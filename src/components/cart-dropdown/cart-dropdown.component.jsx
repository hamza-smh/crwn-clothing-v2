import Button from "../button/button.component";
<<<<<<< Updated upstream
import "./cart-dropdown.styles.scss";
=======
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem  key ={cartItems.id} cartItem={item} />)}
            </div>
            <Button onClick ={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
=======
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
>>>>>>> Stashed changes
    );
}

export default CartDropDown;