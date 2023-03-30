import { CART_ACTION_TYPES } from "./cart.type";
import  createAction  from "../../utils/reducer/reducer.utils";




const addCartItem = (cartItems, productToAdd) => {
    //    if (!Array.isArray(cartItems)) {
    //        cartItems = []; // if cartItems is not an array, create an empty array
    //    }
    console.log(cartItems);
    //Find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


    //If yes, increment quantity
    if (existingCartItem) {
        return (
            cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
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
        (cartItem) => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    //If yes, decrement quantity
    return (
        cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {
                ...cartItem,
                quantity: cartItem.quantity - 1
            } :
            cartItem
        ));
}




const cancelCartItem = (cartItems, productToCancel) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToCancel.id)


}















 export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems);
 }

 export const removeItemFromCart = (cartItems, cartItemToRemove) => {
     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
 }
 export const cancelProduct = (cartItems, productToCancel) => {
     const newCartItems = cancelCartItem(cartItems, productToCancel);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
 }

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);