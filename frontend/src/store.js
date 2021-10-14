import {createStore , combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';



// const cartItems = Cookie.get("cartItems") || [];


const cartItems = JSON.parse(Cookie.get("cartItems"))|| [];

const initialState = { cart: {cartItems}};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState ,composeEnhancer(applyMiddleware(thunk)));
export default store;