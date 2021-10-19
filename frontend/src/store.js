import {createStore , combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';



// const cartItems = Cookie.get("cartItems") || [];
const cartItems = JSON.parse(Cookie.get("cartItems"))|| [];
const userInfo = JSON.parse(Cookie.get("userInfo"))|| null;

const initialState = { cart: {cartItems,shipping:{},payment:{}}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer

})

const composeEnhancer = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState ,composeEnhancer(applyMiddleware(thunk)));
export default store;