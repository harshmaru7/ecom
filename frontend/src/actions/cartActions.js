import axios from 'axios';
import Cookie from "js-cookie";
import { ADD_TO_CART, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from '../constants/cartConstants';
const addToCart = (productId,qty) => async (dispatch, getState) =>{
    try {
        const {data} =  await axios.get("http://localhost:5000/api/products" + productId);
        dispatch({type:ADD_TO_CART, payload :{
            product: data._id,
            name : data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty
        }});

        const {cart :{cartItems}} =getState();
        Cookie.set("cartItems",JSON.stringify(cartItems));  //to save the cart items into the cookie

    } catch (error) {
        
    }
}

const removeFromCart = (productId) => (dispatch,getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload:productId});

    const {cart :{cartItems}} =getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));
}

const saveShipping = (data) =>(dispatch)=>{
    dispatch({type:CART_SAVE_SHIPPING, payload:data});
}

const savePayment = (data) =>(dispatch)=>{
    dispatch({type:CART_SAVE_PAYMENT, payload:data});
}


export {addToCart, removeFromCart ,saveShipping, savePayment}


//cookie used to keep the cart with items filled even after refresh