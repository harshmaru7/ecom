import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route ,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import ConsoleScreen from './Screens/ConsolesScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';


function App() {

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div classNameName="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                 &#9776;
                </button>
                <Link to="/">Techtronux</Link>
            </div>
            <div className="header-links">
                <a href="games.html">Game Consoles</a>
                <a href="games.html">Phones</a>
                <a href="games.html">Laptops</a>
                <a href="cart.html">Cart</a>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>:

                  <Link to="/signin">Sign In</Link> 
                }
                
                {/* <a href="sigin.html">Sign In</a> */}
                
            </div>
        </header>
        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <div className="categorylist">
                  <li>
                    Shop by Categories
                  </li>
                <li>
                   Gaming
                   
                </li>
                <li>
                    <a href="index.html">Camera</a>
                </li>
                <li>
                    <a href="index.html">Phones</a>
                </li>
                </div>

            </ul>
        </aside>
        <main className="main">
            <div className="content">
            <Route path="/shipping" component={ShippingScreen}/>
            <Route path="/payment" component={PaymentScreen}/>
            <Route path="/placeorder" component={PlaceOrderScreen}/>

              <Route path="/signin" component={SigninScreen}/>
              <Route path="/register" component={RegisterScreen}/>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/gaming" component={ConsoleScreen} />
                
            </div>
            
        </main>
        
    </div>
    </BrowserRouter> 
  );
}

export default App;
