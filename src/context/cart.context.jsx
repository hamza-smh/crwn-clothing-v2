import {createContext,useState,useEffect,useReducer} from "react";
import createAction from "../utils/reducer/reducer.utils.jsx";


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

// //return new array with modified Items(new Cart Item)
// return [...cartItems,{...cartItemToRemove,quantity : 0}];




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    cancelProduct: () => {},
    cartCount: 0,
    cartTotal: 0
})

const CART_ACTION_TYPES ={
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const CartReducer = (state, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
            default: 
                throw new Error(`Unhandled type of ${type} Error`);
    }
}


export const CartProvider = ({
    children
}) => {
    // const [isCartOpen,setIsCartOpen]= useState(false);
    // const [cartItems,setCartItems] = useState([]);
    // const [cartCount,setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0)

    // useEffect(()=>{
    //     const newCartCount = cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0);
    //     setCartCount(newCartCount)

    // }, [cartItems]);

    // useEffect(()=>{
    //     const newCartTotal = cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0);
    //     setCartTotal(newCartTotal)

    // }, [cartItems]);

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)
    const {
        isCartOpen,
        cartCount,
        cartItems,
        cartTotal
    } = state;

    const updateCartItemsReducer = (newCartItems) => {

        //generate newCartTotal  and newCartCount
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);


        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);


        /*
            we need updated payload values
                const payload = {
                newCartItem,
                newCartCount,
                newCartTotal
                }
        */
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
                {
                    cartItems: newCartItems,
                    cartTotal: newCartTotal,
                    cartCount: newCartCount
                })
                                    // {
                                    // type: CART_ACTION_TYPES.SET_CART_ITEMS,
                                    // payload: {
                                    //     cartItems: newCartItems,
                                    //     cartTotal: newCartTotal,
                                    //     cartCount: newCartCount
                                    // },
        );
    };

    // const addItemToCart = (productToAdd) =>{
    //     setCartItems(addCartItem(cartItems,productToAdd));
    // }

    // const removeItemFromCart = (cartItemToRemove) =>{
    //     setCartItems(removeCartItem(cartItems,cartItemToRemove));
    // }
    // const cancelProduct =(productToCancel) =>{
    //     setCartItems(cancelCartItem(cartItems,productToCancel));
    // }

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

    const setIsCartOpen = (bool) =>{
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
            // { type: CART_ACTION_TYPES.SET_IS_CART_OPEN , payload:bool }
             )
    }



    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        cancelProduct,
        cartItems,
        cartCount,
        cartTotal
    };
    return ( 
        <CartContext.Provider value = {value}> {children}</CartContext.Provider>
    )
}