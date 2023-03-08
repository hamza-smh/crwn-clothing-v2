import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {Footer, ProductCardContainer,Name,Price, MyButton} from "./product-card.styles.jsx";
import Button,{BUTTON_STYLE_CLASSES} from "../button/button.component.jsx";

const ProductCard = ({product}) =>{
    const {name ,imageUrl, price } =product;
    const { addItemToCart} =useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);


return(
        <ProductCardContainer>
            <img src = {imageUrl} alt = {`${name}`}/>
            <Footer>
                <Name><strong>{name}</strong></Name>
                <Price><b>${price}</b> </Price>
            </Footer>
            {/* <Button buttontype = {BUTTON_STYLE_CLASSES.inverted} onClick={()=>{addItemToCart(product)}}>Add to Cart</Button> */}
                <MyButton buttontype = {BUTTON_STYLE_CLASSES.inverted} onClick={()=>{addItemToCart(product)}}>Add to Cart</MyButton>

        </ProductCardContainer>
    );
}
export default ProductCard;