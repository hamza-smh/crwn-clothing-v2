import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Quantity,
    Price,
    Value,
    Arrow,
    RemoveButton
} from "./checkout-items.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const CheckOutItems = ({cartItem}) =>{

    const { name, price , imageUrl , quantity} = cartItem;
    const {cancelProduct, addItemToCart,removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => cancelProduct(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);


    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src= {imageUrl} alt = {`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}><strong>&#10005;</strong></RemoveButton>
        </CheckoutItemContainer>
    )
}
export default CheckOutItems;