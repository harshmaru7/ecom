import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; //to fetch data from a web api 
import {useSelector,useDispatch } from 'react-redux';
// import data from '../data'; //static data -getting it locally 
import { listProducts } from '../actions/productActions';

function ConsoleScreen (props){

    // const [products, setProducts] = useState([]);
    const productList = useSelector(state=> state.productList);
    // productList.filter(function(el){
    //     return (el.category == "Gaming Consoles"); 
    //  });
    var { products ,loading  ,error} = productList;
    
    // const products= res.filter(function(item) {
    //     for (var key in filter) {
    //       if (item[key] !== "Gaming Consoles")
    //         return false;
    //     }
    //     return true;
    //   });

   
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(listProducts());
      return()=>{
        //
      };
    },[])


    return  loading ? <div>Loading...</div>:
      error ? <div>{error}</div>:
        <ul className="products">
        { 
        products.map(product => <li key={product._id}>
          <div className="product"><Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt={product.name}></img></Link>
            <div className="product-name"><Link to={'/product/' + product._id}>{product.name}</Link></div><div className="product-brand">{product.brand}</div><div className="product-price">{product.price}INR</div>
          </div>
      </li>)
        }
                    
      </ul>
}

export default ConsoleScreen;