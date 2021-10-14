import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route ,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


function App() {
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
                <a href="sigin.html">Sign In</a>
                
            </div>
        </header>
        <aside className="sidebar">
            <h3>Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <div className="categorylist">
                <li>
                    <a href="index.html">Gaming Consoles</a>
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
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
                
            </div>
            
        </main>
        
    </div>
    </BrowserRouter> 
  );
}

export default App;
