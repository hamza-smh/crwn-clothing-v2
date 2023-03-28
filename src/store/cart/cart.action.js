import { CART_ACTION_TYPES } from "./cart.type";
import {createAction} from "../../utils/reducer/reducer.utils";







const addCartItem = (cartItems, productToAdd) => {

    //Find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id)


    //If yes, increment quantity
    if (existingCartItem) {
        return (
            cartItems.map((cartItem) => cartItem.id == productToAdd.id ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                } :
                cartItem
            ));
    }


    //return new array with modified Items(new Cart Item)
    return [...cartItems, {
        ...productToAdd,
        quantity: 1
    }];
}





const removeCartItem = (cartItems, cartItemToRemove) => {

    //Find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == cartItemToRemove.id)

    if (existingCartItem.quantity == 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    //If yes, decrement quantity
    return (
        cartItems.map((cartItem) => cartItem.id == cartItemToRemove.id ? {
                ...cartItem,
                quantity: cartItem.quantity - 1
            } :
            cartItem
        ));
}




const cancelCartItem = (cartItems, productToCancel) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToCancel.id)


}















 const addItemToCart = (productToAdd) => {
     const newCartItems = addCartItem(cartItems, productToAdd);
     updateCartItemsReducer(newCartItems)
 }

 const removeItemFromCart = (cartItemToRemove) => {
     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
     updateCartItemsReducer(newCartItems)
 }
 const cancelProduct = (productToCancel) => {
     const newCartItems = cancelCartItem(cartItems, productToCancel);
     updateCartItemsReducer(newCartItems)
 }



export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);