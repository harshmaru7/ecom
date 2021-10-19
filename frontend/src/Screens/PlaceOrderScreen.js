import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen(props){

    const cart = useSelector(state => state.cart);

    const {cartItems, shipping,payment} = cart;
    if(!shipping){
        props.history.push("/shipping");
    }
    if(!payment){
        props.history.push("/payment");
    }

    const itemsPrice = cartItems.reduce((a,c)=> a + c.price*c.qty,0);
    const shippingPrice = 10;
    const taxPrice = 0.20* itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;


    const dispatch = useDispatch();
   
    const placeOrderHandler = () =>{
        //create an order
    }
    useEffect(()=>{
        
    },[]);

    const checkoutHandler = () =>{
        props.history.push("/signin?redirect=shipping ");
    }

    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeorder">
        <div className="placeorder-info">
            <div>
                <h3>
                    Shipping
                </h3>
                 <div>
                    {cart.shipping.address},
                    {cart.shipping.postalCode},
                    {cart.shipping.city},
                    {cart.shipping.country}
                </div> 
            </div>
            <div>
                <h3>Payment</h3>
                <div>
                    Payment Method: {cart.payment.paymentMethod}
                </div>
            </div>
            <div>
            <ul className="cart-list-container">
                <li>
                    <h3>Shopping Cart</h3>
                
                {/* <div>
                    Price
                </div> */}
                </li>
                
                    {
                        cartItems.length==0?
                        <div>
                            Empty Cart!
                        </div>
                        :
                        cartItems.map( item=>
                            <li>
                            <div className="cart-image">
                                <img src={item.image} alt="product" /> 
                            </div>
                            <div className="cart-name">
                                <div > 
                                <Link to={"/product/" + item.product}>
                                {item.name}
                                </Link>
                                    
                                </div>
                                <div>   
                                    Qty: {item.qty}
                                    
                                    
                                </div>
                            </div>
                            <div className="cart-price">
                                Price: {item.price } INR
                            
                            </div>
                            </li>
                        )
                    
                    }
                
            </ul>
            </div>
            
        </div>
        <div className="placeorder-action">
                <ul>
                    <li>
                        <button onClick={placeOrderHandler}>Place Order</button>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items</div>
                        <div>INR {itemsPrice}</div>
                    </li>
                    <li>
                        <div>Shipping</div>
                        <div>INR {shippingPrice}</div>
                    </li>
                    <li>
                        <div>Tax</div>
                        <div>INR {taxPrice}</div>
                    </li>
                </ul>
                    <h3>Subtotal ( {cartItems.reduce((a,c)=> a + c.qty,0)} items)
                    
                    :
                    INR {cartItems.reduce((a,c) => a + c.qty*c.price,0)}
                    
                    </h3> 
                    <button onClick={checkoutHandler}className="button" disabled={cartItems.length=== 0}>
                        Checkout
                    </button>
        </div>

    </div> 
    </div>
   
}

export default PlaceOrderScreen;

// in subtotal default value is zero